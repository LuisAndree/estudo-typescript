1 - iniciar um projeto node - npm init
2 - instalar o typescript no projeto - npm install typescript -D
3 - Inicializa a configuração do TypeScript e gera o arquivo tsconfig.json - npm tsc --init 
4 - npx tsc 
5 - npx tsc --watch
s
#configs do typescript

1 - Iniciar um projeto node - npm init - -y 
2 - Instalar o typescript - -g -d
3 - transpila o code - npx tsc arquivo.ts - --watch pra funcionar q nem o liveserver
4 - configurar o typescript - npx tsc --init 
    4.1 - configs importantes no tsconfig.json
        - target - escolhe a versão do js q vai ser compilado
        - script - true mostra os erros de typescript, false esconde 
    4.2 - "noEmitOnError": true, - nao gera o .js se tiver erro no .ts  
    4.3 - outDir - troca a pasta pra onde os arquivo .js vão 