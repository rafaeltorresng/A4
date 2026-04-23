# Marcas (logos na landing)

- `uber.svg` e `ifood.svg`: formas derivadas do projeto [Simple Icons](https://simpleicons.org/) (licença MIT). Confirme se atendem ao manual de marca de cada empresa antes de uso em campanha; substitua pelos **ativos oficiais** do portal de imprensa/marca quando necessário.
- `99.svg`: só fundo amarelo (reserva). Na landing, a marca **99** é renderizada por **`Brand99Mark`** em `components/sections.jsx` (evita `<text>` em SVG em `<img>`, que quebra). Troque pelo asset oficial da 99 quando tiver o kit.

Arquivos nesta pasta são referenciados em `components/sections.jsx` (faixa do card “Indenização via App”), exceto o wordmark da 99, que é inline no React.
