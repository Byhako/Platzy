```
keytool -genk ey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

Donde:

  `my-release-key` es el nombre del archivo keystore
  `my-key-alias` es un identificador que se usará mas tarde, tener este alias apuntado en algun lugar

Durante el proceso de generación del `.keystorage` se pedirán otros datos como nombre apellido, organizacion, etc, apuntar los valores configurados por prevencion

El archivo `.keystorage` debe ponerse dentro de la carpeta: android/app del proyecto.

El siguiente paso es crear (si no existe) o editar el archivo gradle.properties que se encuentra en: ~/.gradle/gradle.properties (esto está en la raiz del usuario y es una carpeta oculta) el archivo debe quedar de la siguiente forma

```
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```

Donde:

  `my-release-key.keystore` es el nombre del archivo .keystore creado en el primer paso
  `my-key-alias` es el alias que se establecio en el primer paso
  `STORE_PASSWORD` este password fue configurado durante el proceso de generacion del .keystorage
  `KEY_PASSWORD` este password fue configurado durante el proceso de generacion del .keystorage

Hasta este punto se tiene el .keystore generado y las variables globales configuradas, ahora se procede a decirle al app que debe utilizar estas variables globales y eso se hace a traves del archivo build.gradle, para eso:

Ir a la carpeta android/app/build.gradle dentro del proyecto y agregar las propiedades: signingConfigs y modificar las propiedades: buildTypes el build.gradle debe quedar algo parecido a:


```
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```

Si se fijan los valores en mayuscula hacen match con las variables globales definidas anteriormente. Asegurarse de haber agregado el valor signingConfig signingConfigs.release dentro de buildType.

Ira a la carpeta *android/app/src/main/assets* y borrar el archivo `index.android.bundle`  si existe.

  ```rm android/app/src/main/assets/index.android.bundle```

En la raiz del proyecto correr:

```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```

Borrar los directorios `drawable-...` que estan en android/app/src/main/res

Ingresar en el irectorio `android/`  y correr:

```
./gradlew clean && ./gradlew assembleRelease
```

Regresar a la raiz del proyecto y correr:

```
react-native run-android --variant=release
```

El apk queda en android/app/build/outputs/apk