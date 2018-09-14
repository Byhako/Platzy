+ React Native
npm install -g react-native-cli
react-native start --reset-cache

+ Watchman
http://www.bravo-kernel.com/2016/11/how-to-install-watchman-on-debian/
https://facebook.github.io/watchman/docs/install.html
https://gist.github.com/pycarlos/a263f92e6bb66f74b74b828f9f2c7c6c


+ JDK java
http://www.webupd8.org/2014/03/how-to-install-oracle-java-8-in-debian.html

+ Android Studio
Descargar el .zip
https://developer.android.com/studio/
Descomprimir en la ruta de instalación
https://linuxconfig.org/how-to-install-android-studio-on-debian-9-stretch-linux

lo mueves a /opt/  y lo ejecutas "NO COMO ROOT"


sudo apt-get install adb

export.ANDROID_HOME=/home/ruben/Android/Sdk
export PATH="/home/ruben/Android/Sdk/platform-tools":$PATH


Luego abre el proyecto creado con react-native, la carpeta de android, y desde allí te dara las opciones para aceptar todas las condanadas lisencias y demas cosas.

instalar KVM:
https://proyectosbeta.net/2017/10/instalar-kvm-en-debian-stretch/

+ Geanymotion
recuerda ir a settings/ADB y elegir *use custom Android SDK tools* y elige el sdk que deberia estar en algo como /home/user/Android/SDK

## Nuevo proyecto 

+ react-native -v

Inicialización de proyecto con React Native:
+ react-native init NombreDelProyecto

Correr el emulador en Android:
+ react-native run-android

Correr el emulador en iOS:
+ react-native run-ios

react-native start --port=8081

## Plugins

Cuando traemos componente externos, deben ser enlazados a nuestro proyecto despues de instalarlos.  Esto lo podemos hacer con

  `react-native link react-native-video`

como ejemplo de ese componente.


https://facebook.github.io/react-native/docs/getting-started.html