### Desafio 🚀

O desafio consiste em desenvolver uma Application Programming Interface (API), que permita que usuários contratem serviço do anunciante.

Fique à vontade para montar a estrutura do banco conforme você desejar, somente a tabela schedules será obrigatória.

Para facilitar o desenvolvimento, Seeders e Factories podem ser criadas para verificação das regras de negócio.

A tabela schedules deve conter os atributos: id do contratante, id do anunciante, preço, data do agendamento, duração (somente valores entre 1 e 3), horário de início, horário de término, cep do contratante e status.

A API deverá ter os seguintes endpoints:

- Gerenciamento de Anunciantes
    - Listagem de único anunciante
    - Listagem de todos os anunciantes
- Listar horários da agenda do anunciante
- Consulta de um horário específico da agenda do anunciante
- Realizar um agendamento
- Cancelar um agendamento
- Início do serviço
- Término do serviço

O endpoint de listagem de anunciantes, irá retornar os anunciantes cadastrados no banco de dados da aplicação. A consulta destes anunciantes deve ser adicionada em cache no intervalo de 5 minutos.

A consulta de anunciante deve ser cacheada com o intervalo de 10 minutos. Toda alteração de anunciante deve esquecer o cacheamento antigo para receber um novo posteriormente.

O endpoint de listagem de horários do anunciante, deve realizar um filtro através de uma query parameter para retornar:

Todos os serviços agendados ou do dia atual e deve retornar somente os horários de um anunciante específico. 

Somente o anunciante poderá acessar este endpoint.

O endpoint de consulta de horário, deve retornar a duração real do serviço, ou seja, a diferença entre o início e o término. O valor do serviço deverá ser calculado dinamicamente e, o valor por hora custará **R$150**💵.

- Um serviço de 1 hora, não tem desconto
- Um serviço de 2 horas, tem desconto de **R$20**💵
- Um serviço de 3 horas, tem desconto de **R$40**💵

O serviço não poderá ser finalizado antes do tempo de duração estipulado

Caso ultrapasse o tempo de duração do serviço, deverá ser acrescentado um valor de R$100 por hora.

O status do serviço é: pendente, em andamento e finalizado. Ex. ao acessar o endpoint de início do serviço, o status mudará para: em andamento, e assim por diante.

O endpoint para a realização do agendamento, deverá receber todos os atributos com exceção do status. Na realização do agendamento, o CEP deve ser validado através de uma comunicação externa com a API do [BrasilAPI](https://brasilapi.com.br/).

Na comunicação externa, o pacote Circuit Breaker deverá ser implementado.

Ao cancelar um agendamento, deverá enviar uma notificação para o anunciante através de uma JoB e salvar em uma tabela de notificações. 

Deverá ter um endpoint para a consulta das notificações. O cancelamento não poderá ser feito por um anunciante.

Ao final de um dia, deverá ser executada uma command para pegar as estatísticas do dia, como o total recebido, tempo de serviço diário, e quantidade de serviços realizados no período.

---

### É obrigatório ⚠

- Os retornos da API deve ser JSON.
- Implementação do pacote Circuit Breaker.
- Testes unitários
    - Para validação comportamental das classes.
- Testes de integração
    - Para validação de fluxo de requisição.
- Priorizar ao máximo utilização de recursos nativos do framework Laravel, Form requests, helpers e etc
- Implementação das camadas de Services e Repositories, através das documentações disponíveis
- PSR-12
- Autenticação JWT
- Documentação da API
- Configuração do Redis para utilização de cache

### É importante saber 🧠

- Classes: utilizar o padrão camelCase, porém com a primeira letra Maiúscula, também conhecido como UpperCamelCase ex: NomeDaClasse
- Métodos e variáveis: utilizar o padrão camelCase
- Migrations: (nome de campos), utilizar o padrão snake_case
- Nome de arquivos de migrations e tabelas: utilizar snake_case, no plural
- Rotas: utilizar o padrão kebab-case (exceto o parâmetro), ex: users/example-kebabs/{userId}
- Atentar as PSR’s: https://www.php-fig.org/
- Seguir as padronizações de Gitflow (baseado no nosso contexto) e padrão de mensagens utilizando conventional commits. https://www.conventionalcommits.org/en/v1.0.0/
- Documentações para consulta disponíveis na wiki
    - [Services e repositories](https://wiki.atlastechnol.com/Onboarding/guides-back-end/services-e-repositories)
    - [Comunicações externas](https://wiki.atlastechnol.com/Onboarding/guides-back-end/comunicacoes-externas)
    - [Testes com mocks](https://wiki.atlastechnol.com/Onboarding/guides-back-end/testes-com-mock)
    - [Circuit Breaker](https://wiki.atlastechnol.com/Onboarding/guides-back-end/circuit-breaker)

### Git Guidelines

- Seguir as diretrizes de Git da Atlas, conforme documentação [Git Guidelines](https://wiki.atlastechnol.com/Documentacoes/Tecnologia/Guidelines/Git).

```mermaid
%%{init: { 'gitGraph': {'showBranches': true, 'showCommitLabel':true,'mainBranchName': 'develop'}} }%%
gitGraph
        commit
        branch develop-fulano
        checkout develop-fulano
        commit
        commit
        branch feature/CATE-1
        checkout feature/CATE-1
        commit tag:"feat"
        commit tag:"fix"
        checkout develop-fulano
        merge feature/CATE-1
        branch feature/CATE-2
        checkout feature/CATE-2
        commit tag:"feat"
        commit tag:"fix"
        checkout develop-fulano
        merge feature/CATE-2
        branch feature/CATE-3
        checkout feature/CATE-3
        commit tag:"feat"
        commit tag:"fix"
```
---

### Durante o processo de ambientação é importante que: 📌

- Solicitação de revisão de PRs também deve ser solicitado no canal Back-End da turma, **turma-cate-XX-back-end** através do padrão proposto
- Aproveite o máximo o processo, não se preocupe em fazer códigos complexos, faça o simples. Evite se basear em códigos de Pull Requests anteriores, o ato dificulta a remoção de impedimentos e prejudica a identificação de pontos de melhorias.
- Não se esqueça, o objetivo da ambientação técnica é absorver o máximo possível de técnicas, padrões e conceitos que utilizamos hoje em nossos projetos.
- Lembre-se que o CATe é o primeiro time que você estará atuando na Atlas, o comportamento de equipe é esperado, se possível interaja com os colegas, auxilie e aprenda com eles.
- Faça bom uso da comunicação assíncrona, sendo ela sempre objetiva.
- Utilize o máximo dos recursos nativos do Framework que possui conhecimento.

---
