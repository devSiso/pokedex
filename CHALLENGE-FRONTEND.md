# Atividades de Desenvolvimento

## Tarefa: Desenvolvimento da Tela Home

### User story

Como usuário, quero acessar uma página que contenha dados referentes a aplicação, seja autoexplicativa e funcional.

#### O que é esperado?

```mermaid
graph LR
A[Desenvolvimento da Tela Home] --> B[Figma: Pokeatlas]
A --> C[API: PokeAPI]
A --> D[Seguir layout proposto]
A --> E[Utilizar conceito mobile-first]
A --> F[Layout: Mobile - Container centralizado]
A --> G[Layout: Mobile - Respiro de 20px]
A --> H[Layout: Mobile - Menu mobile]
A --> I[Layout: Web - Container centralizado]
A --> J[Layout: Web - Menu sinalizando rota]
A --> K[Layout: Web - Foto dos Pokemons]
```

#### Tecnologias utilizadas:

- Template engine Blades
- JavaScript
- SCSS - Nomenclatura BEM
- Vue (opcional)

#### Git Guidelines

- Seguir as diretrizes de Git da Atlas, conforme documentação [Git Guidelines](https://wiki.atlastechnol.com/Documentacoes/Tecnologia/Guidelines/Git).
- Documentações do Chapter Front-end: [Documentações Chapter Front-end](https://wiki.atlastechnol.com/Onboarding/front-end)

### Fluxo de trabalho

1. Desenvolver a tela Home seguindo as diretrizes acima.
2. Realizar, no mínimo, 2 commits por dia.
3. Após conclusão, colocar a tarefa em code review no board.
4. Comunicar o mentor para avaliação e obtenção de aprovações mínimas.
5. Após aprovação, encaminhar para o board de QA Review.
6. Atentar aos feedbacks dos QAs e corrigir, se necessário.
7. Após entrega para o QA, aguardar feedbacks e corrigir eventuais fixes levantados.
8. Após aprovação final do QA, a tarefa segue para deploy pelo QA.

## Tarefa: Desenvolvimento da Tela de Listagem

### User story

Como usuário, quero acessar uma página que contenha a listagem da primeira geração (primeiros 150) dos Pokemons, consiga filtrar por nome/número e tipos.

#### O que é esperado?

```mermaid
graph LR
A[Desenvolvimento da Tela de Listagem] --> B[Figma: Pokeatlas]
A --> C[API: PokeAPI]
A --> D[Seguir layout proposto]
A --> E[Utilizar conceito mobile-first]
A --> F[Layout: Mobile e Web - Container centralizado]
A --> G[Layout: Mobile e Web - Respiro de 20px]
A --> H[Layout: Mobile e Web - Input de filtro]
A --> I[Layout: Web - Listagem com 4 colunas]
A --> J[Layout: Web - Tipos existentes]
```

#### Tecnologias utilizadas:

- Template engine Blade
- TypeScript
- Vue / Vuex
- Axios
- SCSS - Nomenclatura BEM
- Jest

#### Git Guidelines

- Seguir as diretrizes de Git da Atlas, conforme documentação [Git Guidelines](https://wiki.atlastechnol.com/Documentacoes/Tecnologia/Guidelines/Git).

# Atividades de Desenvolvimento

## Tarefa: Desenvolvimento da Tela de Perfil

### User story

Como usuário, quero acessar uma página de perfil que exiba informações sobre o usuário logado e permita a edição dessas informações.

#### O que é esperado?

```mermaid
graph LR
A[Desenvolvimento da Tela de Perfil] --> B[Figma: Pokeatlas]
A --> C[API: PokeAPI]
A --> D[Seguir layout proposto]
A --> E[Utilizar conceito mobile-first]
A --> F[Layout: Mobile e Web - Container centralizado]
A --> G[Layout: Mobile e Web - Respiro de 20px]
A --> H[Layout: Mobile e Web - Exibição de informações]
A --> I[Layout: Web - Edição de informações]
```

#### Tecnologias utilizadas:

- Template engine Blade
- JavaScript
- SCSS - Nomenclatura BEM
- Vue / Vuex
- Axios

#### Git Guidelines

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
