# Componente Alelo Icon

O Componente AleloIconComponent tem como finalidade facilitar a implementação de novos `templates`, podendo ser reutilizado nos demais `layouts`.

## Funcionalidades

| Property | Name   | Type     | Value default |
| :------- | :----- | :------- | :------------ |
| `@input` | width  | `number` | `default`     |
| `@input` | height | `number` | `primary`     |
| `@input` | icon   | `string` | `undefined`   |

- A `property` **width** tem como finalidade inserir uma largura para o ícone.
- A `property` **height** tem como finalidade inserir uma altura para o ícone.
- A `property` **icon** tem como finalidade inserir um icone.

## Comandos auxiliares

Para criar um componente diretamente dentro do módulo SharedModule:
Execute `ng g c shared/components/<nome-do-componente> --module=shared`

## Teste unitários

O componente AleloIconComponent esta com 100% de cobertura.

Rode `npm run test -- --include src/app/shared/components/alelo-icon/alelo-icon.component.spec.ts ` para executar os testes unitários deste componente.

Para consultar a cobertura de código, abra o arquivo index.html localizado no diretório `coverage/alelo/src/app/shared/components/alelo-icon/index.html`.
