### ¿Qué es Data Binding?

**Comunicación entre tú código TypeScript y el HTML.**

Tipos de Data Binding en Angular 4.

**String Interpolation {{}}** TypeScript => HTML: Tener información (Variable, Array, por ejemplo) y presentarla a los usuarios en modo de HTML.

**Property Binding []** TypeScript <= HTML: Información del lado de HTML que puede ser por ejemplo, información que el usuario ingrese o que nosotros pongamos un valor por defecto. Viajando la información de HTML a TypeScript.

**Event Binding []** TypeScript <= HTML: Escuchar eventos desde HTML y pasarlo a TypeScript.

**Two Way Data Binding [()]** TypeScript <=> HTML: Comunicación de dos Vías. De lo que el cliente ve a TypeScript como de TypeScript hacia lo que el cliente ve.

En String Interpolation es importante respetar la sintaxis para que HTML pueda entender TypeScript. La sintaxis es {{nombre}}. Las dos llaves son importantes.

**Las directivas** son una forma elegante y rápida de manipular la información, contamos con 3 tipos de directivas:

+ COMPONENTES: Son directivas que siempre tienen asignados templates de HTML.
+ ESTRUCTURALES: Nos permiten modificar el DOM, es decir manipular elementos de HTML.
+ ATRIBUTOS: A estas directivas les indicamos a través de HTML cómo se deben comportar de acuerdo con ciertas condiciones que definimos.