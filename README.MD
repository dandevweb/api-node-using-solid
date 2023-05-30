# App

GymPass style app.

## Rfs (Requisitos funcionais)

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter o histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome da academia;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;


## RNs (Regras de negócio)

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer dois check-ins no mesmo dia;
- [ ] O usuário não poder fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validade até 20 minutos após criado;
- [ ] O check-in só pode ser validade por administradores;
- [ ] A academia só pode ser cadastrado por administradores;


## RNFs (Requisitos não funcionais)

- [ ] A senha do usuário preciiisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistido em um banco de dados PostgreSQL;
- [ ] Todas as listas de dados precisam estar paginadas com até 20 registros por páginas;
- [ ] O usuário deve ser identificado por um JWT;