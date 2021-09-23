# Componente Payments

O Componente PaymentsComponent tem como finalidade servir como um container para a página de pagamentos.

## Funcionalidades

| Property     | Name       | Type      | Value default |
| :----------- | :--------- | :-------- | :------------ |
| `Observable` | isMobile\$ | `boolean` | `undefined`   |

- A `property` **isMobile\$** tem como finalidade ouvir o evento de size da screen atual do componente e assim realizar modificações responsivas no template;
- O `método` **getProducts** tem como finalidade realizar uma requisição `HTTP` do tipo `GET` e trazer as informações de sua responsabilidade.

## Comandos auxiliares

Para criar um componente diretamente dentro do módulo PaymentsModule:
Execute `ng g c core/pages/payments/<nome-do-componente> --module=payments`

## Teste unitários

O componente PaymentsComponent esta com 100% de cobertura.

Rode `npm run test -- --include src/app/core/pages/payments/payments.component.spec.ts` para executar os testes unitários deste componente.

Para consultar a cobertura de código, abra o arquivo index.html localizado no diretório `coverage/alelo/src/app/core/pages/payments/index.html`.
