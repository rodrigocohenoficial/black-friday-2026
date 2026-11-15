// Página de boas-vindas só abre para quem vem do checkout da Eduzz (link com ?k=) ou já entrou antes (cookie).
export const config = { matcher: ['/boas-vindas', '/boas-vindas.html'] };
const KEY = 'S2gxky4NjjWiF3mXRAJvk-ei';
export default function middleware(request) {
  const url = new URL(request.url);
  const cookie = request.headers.get('cookie') || '';
  const okCookie = cookie.split(';').some((c) => c.trim() === 'bfc_bv=' + KEY);
  if (url.searchParams.get('k') === KEY) {
    return new Response(null, { headers: { 'x-middleware-next': '1', 'set-cookie': 'bfc_bv=' + KEY + '; Path=/boas-vindas; Max-Age=7776000; Secure; HttpOnly; SameSite=Lax', 'x-robots-tag': 'noindex' } });
  }
  if (okCookie) return new Response(null, { headers: { 'x-middleware-next': '1', 'x-robots-tag': 'noindex' } });
  return new Response(null, { status: 302, headers: { Location: '/' } });
}
