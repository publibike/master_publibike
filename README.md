# Publibike Bienestar App
Repositorio de producción de publibike
Es necesario tener nodeJS en el servidor y ejecutar:

npm install 

Si se realizan cambios y se desean probar en web ejecutar:

ionic serve

Para construir las aplicaciones de android y de iOS ejecutar:

npm run build
npx cap copy android
npx cap copy ios

Para ejecutar Android studio desde el proyecto ejecutar:

npx cap open android

Para ejecutar xCode desde el proyecto ejecutar:

npx cap open ios

Para iOS si presenta error al construir la app ir a la ruta ios/app y desde consola ejecutar

pod install

Enseguida volver a abrir xCode


Para crear el icono y el splash :

1. En la carpeta "resources" pegar un archivo llamado "icon.png" de 1024x1024 px y otro llamado "splash.png" de 2732x2732 px
2. En consola ejecutar los siguientes comandos:
    cordova-res ios --skip-config --copy
    cordova-res android --skip-config --copy
3. Si llegan a faltar imagenes para Android toca crearlas manualmente
