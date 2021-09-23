# Componente Alelo Button

O Componente AleloButtonComponent tem como finalidade facilitar a implementação de novos `templates`, podendo ser reutilizado nos demais `layouts`.

## Funcionalidades

| Property  | Name         | Type           | Value default |
| :-------- | :----------- | :------------- | :------------ |
| `@input`  | label        | `string`       | `undefined`   |
| `@input`  | icon         | `string`       | `undefined`   |
| `@input`  | type         | `string`       | `solid`       |
| `@Output` | actionButton | `EventEmitter` | `undefined`   |

- A `property` **label** tem como finalidade inserir um texto para o botão;
- A `property` **icon** tem como finalidade inserir um icone para o botão, é necessário passar um `path` ou `url`;
- A `property` **type** tem como finalidade modificar o `style` do botão, sendo eles `solid`, `link` e `disabled`. O valor **default** dessa property é `solid`.
- A `property` **actionButton** tem como finalidade enviar um evento de `click` para o seu `dad component`;

## Comandos auxiliares

Para criar um componente diretamente dentro do módulo SharedModule:
Execute `ng g c shared/components/<nome-do-componente> --module=shared`

## Teste unitários

O componente AleloButtonComponent esta com 100% de cobertura.

Rode `npm run test -- --include src/app/shared/components/alelo-button/alelo-button.component.spec.ts` para executar os testes unitários deste componente.

Para consultar a cobertura de código, abra o arquivo index.html localizado no diretório `coverage/alelo/src/app/shared/components/alelo-button/index.html`.
