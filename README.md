# ALURAPIC ANGULAR

## PROJETO
- Projeto de uma série de quatro crusos ministrados pelo professor Flávio Almeida na plataforma da Alura. Objetivo da aplicação é criar réplica de uma rede social de imagens, onde o usuário poderá adicionar, remover, comentar e curtir o post.

## TECNOLOGIAS
- Angular;
- TypeScript;
- HTML;
- Bootstrap;

## COMO EXECUTAR O PROJETO
- Instalar node version 8;
- No terminal do VS Code:
    - npm install
    - ng serve --open
- url: http://localhost:4200/user/flavio
- Acessar o diretório api pelo prompt:
    - npm install sqlite3;
    - npm install; 
    - npm start;

### Anotações Curso 1
- ng new nomeDoProjeto (iniciar projeto com Angular Cli);
- ng serve --open (no terminal, no diretório do projeto, subir um servidor local e abrir no navegador página padrão do angular);
- {{}} data binding - Angular Expression;
- [] One way data binding;
- Convenções;
- npm install bootstrap (Adicionar bootstrap a um projeto com Angular);
- carregar bootstrap na aplicação (Arquivo: angular.json)
    > "styles": [
           "src/styles.css",
            "./node_modules/bootstrap/dist/css/bootstrap.min.css"
     ],
    - Ou diretamente no style.css na raiz do projeto:
        > @import '~bootstrap/dist/css/bootstrap.min.css';

- Inbound properties. url & description exemples:
    ~~~ html
        <ap-photo url= "https://img.r7.com/images/moya-leao-branco-albino-atracao-glen-garriff-conservation-lion-sanctuary-23032021161516582?dimensions=771x420&no_crop=true'" description="Leão"></ap-photo>

- Diretiva *ngFor:
    ~~~ html  
        <ap-photo *ngFor="let photo of photos" [url]= "photo.url" [description]="photo.description"></ap-photo>
- Consumir uma Web API através do serviço HttpClient;
    - WebApi (npm start).
- Services. @Injectable;
- interface;    
- Implements OnInit;
    - ngOnInit().
- CommonModule;
- Routes: app.routing.module.ts;
    - :userName == generic.
- Interface OnChanges e interação com SimpleChanges;
- EventBind: Template to component;
    ~~~html
    (keyup)="filter = $event.target.value";
- Pipe;
- Resolvers;
- debounceTime: adicionar freeze time para aplicar o filtro;
- ngOnDestroy: boa pratica para livrar memória e liberar o subject que está emitindo valores enquanto o componente for exibido;
- LoadButton;
- @HostListener;

### Anotações Curso 2
- Criação de um componente de login;
- Validação de formulário;
- Componentizar mensagens de validação;
- Enviar crendenciais para a API;
- Redirecionar e obter referências do template (ViewChild);
- Acessar o header de resposta;
- Armazenamento de token;
- Segurança do token;
- Papel do BehaviorSubject;
- Utilização do Async pipe;
- Implementação do logout;
- Diretiva routerLink;
- Criação de um componente de registro;
- Validação de formulário de registro;
- Como criar validador;
- Validar de maneira assíncrona;
- Submissão de dados.

