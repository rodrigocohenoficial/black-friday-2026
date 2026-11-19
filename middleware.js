// 1) Página de boas-vindas só abre para quem vem do checkout da Eduzz (link com ?k=) ou já entrou antes (cookie).
// 2) Abertura do carrinho: a partir de 19/11/2026 às 20h30 (Brasília), o endereço principal leva para a página de vendas,
//    mantendo as UTMs. Antes desse horário, o endereço principal continua mostrando a página da Lista VIP.
export const config = { matcher: ['/', '/index', '/index.html', '/boas-vindas', '/boas-vindas.html', '/robo-historico', '/robo-historico.html'] };
const KEY = 'S2gxky4NjjWiF3mXRAJvk-ei';
const ABERTURA = Date.UTC(2026, 10, 19, 23, 30, 0); // 19/11/2026 20:30 em Brasília (UTC-3)
export default function middleware(request) {
  const url = new URL(request.url);
  if (url.pathname === '/' || url.pathname === '/index' || url.pathname === '/index.html') {
    if (Date.now() >= ABERTURA) {
      return new Response(null, { status: 302, headers: { Location: '/previa-vendas' + url.search, 'cache-control': 'no-store' } });
    }
    return new Response(null, { headers: { 'x-middleware-next': '1' } });
  }
  const cookie = request.headers.get('cookie') || '';
  const okCookie = cookie.split(';').some((c) => c.trim() === 'bfc_bv=' + KEY);
  if (url.searchParams.get('k') === KEY || url.search.indexOf(KEY) !== -1) {
    return new Response(null, { headers: { 'x-middleware-next': '1', 'set-cookie': 'bfc_bv=' + KEY + '; Path=/; Max-Age=7776000; Secure; HttpOnly; SameSite=Lax', 'x-robots-tag': 'noindex' } });
  }
  if (okCookie) return new Response(null, { headers: { 'x-middleware-next': '1', 'x-robots-tag': 'noindex' } });
  return new Response(null, { status: 302, headers: { Location: '/' } });
}
