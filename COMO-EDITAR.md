# Como editar as páginas da Black

Tudo o que for salvo aqui vai para o ar sozinho em cerca de 1 minuto, em **black.rodrigocohen.com.br**.

## Trocar um texto, preço ou link

1. Clique no arquivo da página (ex.: `index.html`).
2. Clique no lápis ✏️ no canto direito.
3. Use **Ctrl+F** (no Mac, **Cmd+F**) para achar o texto que quer trocar.
4. Troque o texto. Mexa só no que está **entre** as tags, nunca nos `<` e `>`.
   - Certo: `<h1>Black Friday</h1>` → `<h1>Black Friday 2026</h1>`
   - Errado: apagar o `<h1>` ou o `</h1>`.
5. Clique no botão verde **Commit changes** e depois em **Commit changes** de novo.
6. Espere 1 minuto e atualize a página no navegador.

## Trocar uma imagem

1. Abra a pasta `img` (se ainda não existir, crie ao subir o primeiro arquivo).
2. Clique em **Add file → Upload files** e arraste a imagem.
3. **Use o mesmo nome do arquivo antigo** para a página trocar sozinha. Se usar outro nome, troque também o nome no `index.html`.
4. Clique em **Commit changes**.

## Criar uma página nova

Crie o arquivo com o nome do endereço que você quer. Exemplos:

| Arquivo | Endereço |
|---|---|
| `index.html` | black.rodrigocohen.com.br |
| `obrigado.html` | black.rodrigocohen.com.br/obrigado.html |
| `vip/index.html` | black.rodrigocohen.com.br/vip |

## Deu errado?

Nada se perde. Todas as versões ficam guardadas.

- **No GitHub:** abra o arquivo, clique em **History** e veja o que mudou.
- **Na Vercel:** em **Deployments**, escolha a versão anterior que estava boa e clique em **Promote to Production** (ou **Instant Rollback**). A página volta na hora.

## Prefere não mexer em código?

Abra o Claude com este repositório conectado e peça em português, por exemplo:

> "Troca o preço para R$ 1.497 em 12x e muda o botão para 'Quero minha vaga'."

## Antes do lançamento

- A página provisória tem a linha `<meta name="robots" content="noindex, nofollow">`, que esconde a página do Google. **Apague essa linha quando a página oficial for ao ar.**
- Preço e oferta só sobem no dia da live, para não vazar antes.
