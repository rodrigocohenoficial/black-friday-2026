// Ponte do webhook da Eduzz para a planilha do painel da Black (Google Apps Script).
// A Eduzz não segue o redirecionamento que o Google devolve e acusa "Status HTTP 0".
// Aqui recebemos o POST, repassamos ao Apps Script do lado do servidor e devolvemos 200 à Eduzz.
export const config = { runtime: 'edge' };

const KEY = 'X0GktpM3Ub5F5pQz';
const DESTINO = 'https://script.google.com/macros/s/AKfycbxz8_7dvLdA7MbgeuaI7aEkps0VMuPOKyAtoxtYvmA3d6KLCPF38jfSUhY4L8gqeNRx/exec?eduzz=hkqnWClKEwcxPGWI';

export default async function handler(request) {
  const url = new URL(request.url);
  if (url.searchParams.get('k') !== KEY) return new Response('not found', { status: 404 });
  if (request.method !== 'POST') return new Response('ok', { status: 200 });

  const corpo = await request.text();
  try {
    const r = await fetch(DESTINO, {
      method: 'POST',
      headers: { 'content-type': request.headers.get('content-type') || 'application/json' },
      body: corpo,
      redirect: 'follow',
      signal: AbortSignal.timeout(20000),
    });
    // O Apps Script já gravou a venda antes do redirecionamento; qualquer resposta abaixo de 500 conta como entregue.
    if (r.status >= 500) return new Response('destino falhou', { status: 502 });
    return new Response('ok', { status: 200 });
  } catch (e) {
    return new Response('destino indisponivel', { status: 502 });
  }
}
