# Pokedex

## Instalação

Para instalar o projeto use:

`npm i`

## Servindo localmente

Para servir o projeto é necessário subir a API:

`json-server --watch db.json`

... e o frontend:

`npm run serve`

O app pode ser acesso pelo navegador em:

`http://localhost:4200`

## Executando testes unitários

Fiz apenas alguns testes de exemplo usando o Jest. Para executar:

`npm run test`

## Executando testes end-to-end

Devido a falta de tempo também fiz apenas um teste de exemplo no puppeteer. Para executar:

`npm run e2e`

## Algumas considerações

- Procurei utilizar schematics para instalar os recursos que utilizei (Material, Jest, Puppeteer, Prettier...) assim evitando fazer as configurações manualmente.
- Usei arquivos scss invés de sass simplesmente pela retrocompatibilidade com css (todo css é scss válido, o mesmo não é verdadeiro para sass).
- Usei gerenciamento de estados usando BehaviorSubjects pela simplicidade e facilidade de trabalho com RxJS.
- Tive alguns imprevistos que me impediram de colocar todos os recursos que desejava mas estou a disposição para tirar qualquer dúvida.
- Fiz o Design responsivo apenas na tela de pokemons, as telas dos CRUDS de Habilidade e Categoria deixei simples.
