# Componente Alelo Card Info

O Componente AleloCardInfoComponent tem como finalidade facilitar a implementação de novos `templates`, podendo ser reutilizado nos demais `layouts`.

## Funcionalidades

| Property | Name        | Type     | Value default |
| :------- | :---------- | :------- | :------------ |
| `@input` | type        | `string` | `default`     |
| `@input` | theme       | `string` | `primary`     |
| `@input` | title       | `string` | `undefined`   |
| `@input` | description | `string` | `undefined`   |
| `@input` | icon        | `string` | `undefined`   |

- A `property` **type** tem como finalidade modificar o `style` do card, sendo eles `default` e `dynamic`. O valor **default** dessa property é `default`.
- A `property` **theme** tem como finalidade modificar o `style` do card, sendo eles `primary` e `secondary`. O valor **default** dessa property é `primary`.
- A `property` **title** tem como finalidade inserir um título para o card.
- A `property` **description** tem como finalidade inserir uma descrição para o card, localizado abaixo do título.
- A `property` **icon** tem como finalidade inserir um icone para o card.

## Comandos auxiliares

Para criar um componente diretamente dentro do módulo SharedModule:
Execute `ng g c shared/components/<nome-do-componente> --module=shared`

## Teste unitários

O componente AleloCardInfoComponent esta com 100% de cobertura.

Rode `npm run test -- --include src/app/shared/components/alelo-card-info/alelo-card-info.component.spec.ts` para executar os testes unitários deste componente.

Para consultar a cobertura de código, abra o arquivo index.html localizado no diretório `coverage/alelo/src/app/shared/components/alelo-card-info/index.html`.
