### Niveles de Inteligencia Artificial.

+ Inteligencia Artifical Débil: Son cosas como nuestros asistentes virtuales. Alexa, Cortana, Google Assistant. Solo puede hacer un objetivo

+ Inteligencia Artifical Fuerte: Puede hacer varios objetivos, saber como me siento por mis expresiones, saber donde estoy, etc.

+ Super Inteligencia Artificial: Es la que nos va a reemplazar sin darnos cuenta, puede pensar en millones de cosas a la vez


### Anatomia de la inteligencia artificial.

1. Percepción:
Los humanos persivimos la información a travez de nuestros sentidos. Las computadoras necesitan hacer exactamente lo mismo. La forma en que lo hacen es a travez de censores.

2. Procesamiento natural de lenguaje:

+ Detectar el sonido
+ Separar voz de sonido ambiente
+  Convertir voz en texto
+  Separar significado de cada palabra
+  Entender el significado de todas las palabras en contexto
+  Realizar la tarea/acción

3.Representacion del conocimiento: Manera de mostrar algo referente a su importancia o esencia de la idea a expresar.

4. Razonamiento: Tomar una decision acorde la informacion de los puntos anteriores.

5. Planeacion y navegacion: Convivir con esa inteligencia artificial en el contexto humano evaluando si es eficaz, si es etico, si es presiso.

<br/>

El machine learning es una rama de la inteligencia artificial enfocada en que los sistemas aprendan autónomamente.

En el contexto de los sistema inteligentes APRENDER significa que una máquina tenga la capacidad de identificar patrones complejos en millones de datos.

Los tipos de aprendizaje principales son:

+ *Aprendizaje supervisado*: Algoritmos que permiten clasificar o hacer predicciones a futuro basados en el comportamiento o carácteristicas de los datos ya almacenados. A los datos ya almacenados se les conoce como datos de entrenamiento, los cuales nosotros mismos le proporcionamos al sistema con el fin de que aprenda a identificar los patrones específicos (con esto guíamos el algoritmo). En algoritmos supervisados la caracterítica principal de los datos de entrenamiento es que ya vienen etiquetados (clasificados), es decir, que para cada entrada se conoce previamente su salida al entrar al sistema.

+ *Aprendizaje no supervisado*: Algoritmos con un caracter altamente exploratorio, cuyo fin es encontrar patrones, estructuras o formas dentro de datos de entrenamiento no etiquetados (no clasificados), es decir que el algoritmo va a ciegas y debe aprender a identificar por si solo conjuntos y grupos de datos con base a sus similitudes y carácteristicas.

En los *supervisados* se conoce la entrada y la salida de la caja negra y debe aprender a identificar los datos nuevos que lleguen al sistema con base a estos; mientras que en los *no supervisados* el sistema solo conoce la entrada de la caja negra, y debe tratar de inferir cual sería la salida.


La *Regresión Logística* es un algoritmo que nos sirve para predecir la probabilidad de que un evento pase o no. También es conocida como Regresión Binaria ya que solamente puede predecir entre 0 o 1.

La Regresión Logística la utilizamos para clasificar, donde:

+ 0 = Clase negativa
+ 1 = Clase positiva

Todos los elementos que cumplen con los patrones que sigue el algoritmo que estamos programando pertenecen a la “clase positiva”.

#### Algoritmos supervisados:
+ Regresion lineal.
+ Regresion logistica.
+ Regresion logistica multinomial.

#### Algoritmos *no* supervisados.
+ k-Means. Sirve para agrupar los datos en función de ciertos patrones.
 Dado un conjunto inicial de k centros (donde k es cualquier número o cualquier variable) el algoritmo continúa iterando entre dos pasos.

 - Paso de asignación. Asigna cada dato al grupo con la media más cercana, es decir, la partición de las observaciones generadas por los centros.
 - Paso de actualización. Calcula nuevos centros como el centro de las  observaciones en el grupo o partición.

 El algoritmo se considera que converge cuando los centros ya no cambian.

### Problemas frecuentes (Underfitting Vs. Overfitting)

+ Underfitting (Subajustar) No puede capturar la tendencia de los datos. Es generalmente el resultado de un modelo extremadamente simple.

+ Overfitting (Sobreajustar) Se presenta cuando un algoritmo está perfectamente adaptado a los datos con los que lo entrenamos., pero si tratamos de predecir nuevos datos , lo más probable es que nos de error.


