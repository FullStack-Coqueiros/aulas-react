FROM node:18
# definição de diretório de trabalho
WORKDIR /app
# Copiar arquivos locais para dentro da maquina container 
COPY . .
# Baxar os modulos do node 
RUN npm i 
RUN npm instal -g json-server
# Abrir a porta 3001 do container para que seja posssivel acessar por ela 
EXPOSE 3000
EXPOSE 3001
# Rodar a App
CMD [ "npm", "run", "dev-full" ] 
