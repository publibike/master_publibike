# Publibike Bienestar Web
Repositorio de producción de publibike
Es necesario tener nodeJS en el servidor y ejecutar los siguientes pasos:

1. Para instalar los paquetes de la aplicación:
    npm install 
2. Para ejecutar la aplicación instalar pm2 (Manejador de procesos de Node):
    npm install -g pm2
3. En seguida se ejecuta la aplicación lanzando el archivo index.js que esta en la raiz del proyecto:
    pm2 start index.js --watch
4. Para verificar el estado del proceso:
    pm2 list
Si se desea ver datos mas precisos del proceso el siguiente comando permite verlos
    pm2 monit

Para mayor información frente al manejador de procesos ir a https://pm2.keymetrics.io

NOTA: 
Si se desea correr la aplicación en entorno de desarrollo despues del paso 1 ejecutar: 
    npm run dev
