# Componente Alelo Card Action

O Componente AleloCardActionComponent tem como finalidade facilitar a implementação de novos `templates`, podendo ser reutilizado nos demais `layouts`.

## Funcionalidades

| Property  | Name        | Type           | Value default |
| :-------- | :---------- | :------------- | :------------ |
| `@input`  | theme       | `string`       | `primary`     |
| `@input`  | title       | `string`       | `undefined`   |
| `@input`  | description | `string`       | `undefined`   |
| `@input`  | labelButton | `string`       | `undefined`   |
| `@input`  | iconButton  | `string`       | `undefined`   |
| `@Output` | actionCard  | `EventEmitter` | `undefined`   |

- A `property` **theme** tem como finalidade modificar o `style` do card, sendo eles `primary` e `secondary`. O valor **default** dessa property é `primary`.
- A `property` **title** tem como finalidade inserir um título para o card.
- A `property` **description** tem como finalidade inserir uma descrição para o card, localizado abaixo do título.
- A `property` **labelButton** tem como finalidade inserir um texto para o botão do card, localizado abaixo da descrição.
- A `property` **iconButton** tem como finalidade inserir um icone para o botão do card.
- A `property` **actionCard** tem como finalidade enviar um evento de `click` para o seu `dad component`;

## Comandos auxiliares

Para criar um componente diretamente dentro do módulo SharedModule:
Execute `ng g c shared/components/<nome-do-componente> --module=shared`

## Teste unitários

O componente AleloCardActionComponent esta com 100% de cobertura.

Rode `npm run test -- --include src/app/shared/components/alelo-card-action/alelo-card-action.component.spec.ts` para executar os testes unitários deste componente.

Para consultar a cobertura de código, abra o arquivo index.html localizado no diretório `coverage/alelo/src/app/shared/components/alelo-card-action/index.html`.
