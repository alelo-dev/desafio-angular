# Componente Alelo Table

O Componente AleloTableComponent tem como finalidade facilitar a implementação de novos `templates`, podendo ser reutilizado nos demais `layouts`.

## Funcionalidades

| Property | Name    | Type      | Value default |
| :------- | :------ | :-------- | :------------ |
| `@input` | data    | `Product` | `Array`       |
| `@input` | columns | `string`  | `Array`       |

- A `property` **data** tem como finalidade passar para o `template` os dados á serem exibidos na tabela.
- A `property` **columns** tem como finalidade passar para o `template` as colunas á serem exibidos no cabeçalho da tabela.

## Comandos auxiliares

Para criar um componente diretamente dentro do módulo SharedModule:
Execute `ng g c shared/components/<nome-do-componente> --module=shared`

## Teste unitários

O componente AleloTableComponent esta com 100% de cobertura.

Rode `npm run test -- --include src/app/shared/components/alelo-table/alelo-table.component.spec.ts ` para executar os testes unitários deste componente.

Para consultar a cobertura de código, abra o arquivo index.html localizado no diretório `coverage/alelo/src/app/shared/components/alelo-table/index.html`.
