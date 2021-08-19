# alurapic-angular

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

- Diretiva *ngFor
    ~~~ html  
        <ap-photo *ngFor="let photo of photos" [url]= "photo.url" [description]="photo.description"></ap-photo>
    