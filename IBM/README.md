### IBM (International Business Machines).

Tiene utilizades para los siguientes perfiles:

+ Students
+ Profesores
+ Desarrolladores
+ Arquitectos
+ Startups.

IBM antes manejaba el hardware de la tecnología como discos duros lo comercializaba (aunque todavia fabrica hardware porque algunas empresas aun funcionan con los productos hardware de ibm), ahora esta empresa quiere abarcar los diferentes ambientes en que un ser humano interactua, por decir algunas:

+ Aeroespacial(NASA).
+ Automotriz(BMW).
+ Banca y Finanzas.
+ Quimicos
+ Energía y servicios publicos.
+ Salud.
+ Seguros.
+ Manufactura.
+ Metales y Minería.
+ Petroleo y Gas.
+ Retail.
+ Telecomunicaciones.
+ Medios y entretenimiento.
+ Viajes y transporte.
+ Videojuegos.

IBM es la primera startup de TI con 106 años en servicio y fue el primero en crear el primer equipo de Ti.

### Recursos de IBM para diferentes perfiles

+ IBM Academic Initiative.
 Programa de relacionamiento académico de IBM
  http://onthehub.com/ibm/

 Este es un recurso para hacer convenio con el software de IBM en tu universidad.

+ Desarrolladores (comunidad mundial de IBM):
  https://www.ibm.com/developerworks/

**Arquitecturas(contenido para arquitectos de SW): **
  https://www.ibm.com/cloud/garage/
  https://www.ibm.com/cloud/garage/architectures

+ Garage Method:
  http://ibm.biz/ibmcloudgarage

+ Global Entrepenuer Program(Para emprendedores):
  https://developer.ibm.com/startups

### IBM Cloud, la nube empresarial

TheNorthface (https://www.thenorthface.com/xps): Sitio web con inteligencia artificial.

**Componentes que hacen realidad este sitio web:**

1. Runtimes (donde corre el codigo).
  + IBM containers.
  + SDK for Node.js
2. Watson.
  + Conversation(traduce el lenguaje natural a maquina para tener resultados).
3. DevOps(Estabilidad en tu aplicación).
  + Auto-Scaling.
  + Monitoring and Analytics.
4. Base de datos.
  + Compose for PostgreSQL.
5. Weather(Clima).
  + Weather Company Data.
6. Integration (Comunicacion entre el usuario y los recursos del negocio).
  + API Connect.
  + Secure Gateway.

Your New Personal Access Token:
h9X_yqpjzmr_oQL3qWyq

## Intalar Docker debian 9
Install Prerequisites
  apt-get install apt-transport-https dirmngr
Add Docker Repository
Add Docker package depository to your /etc/apt/sources.list sources list:
  echo 'deb https://apt.dockerproject.org/repo debian-stretch main' >> /etc/apt/sources.list
Obtain docker's repository signature and updated package index:
  apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
  apt-get update
Install Docker
  apt-get install docker-engine

## Instalación de IBM Cloud Developer Tools CLI

https://console.bluemix.net/docs/cli/idt/setting_up_idt.html#add-cli

bx login -u eldragondera1@gmail.com 

*Para obtener los comandos de administracion de plugins*
bx plugin

bx plugin install IBM-Containers
bx plugin install container-registry
bx plugin install container-service


### Documentacion completa de IBM Cloud Container Service.

https://console.bluemix.net/docs/containers/cs_cli_install.html#cs_cli_install

### configurar kubernetes

https://kubernetes.io/docs/setup/independent/install-kubeadm/ 

bx login -a https://api.ng.bluemix.net   
bx cs region-set us-south

bx cs cluster-config imbcloudplatzi  


kubectl run mongo --image=mongo --port=27017
kubectl expose deployment mongo  --type=NodePort
kubectl run mytmp --image=kavisureh/employee --port=80
kubectl expose deployment mytmp --type=NodePort --port=80 --target-port=8888
kubectl get pod
kubectl proxy
