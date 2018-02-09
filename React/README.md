Validando propTypes
https://reactjs.org/docs/typechecking-with-proptypes.html

Eventos

https://reactjs.org/docs/handling-events.html

#VIDA DE UN COMPONENTE.

### Constructor (mount)

+ Metodo llamado antes de que el componente sea montado, para inicializar el estado enlazar eventos, y es el primer metodo que se llama al instanciar un componente.

### componentWillMount

+ Metodo llamado inmediatamente antes de que el componente se vaya a montar. Se puede hacer un setState(), pero no hacer llamados a un API o suscripción de eventos.

### render

+ contiene todos los elementos a renderizar. Contiene jsx en el return, y se puede calcular propiedades.

### componentDidMount

+ Metodo llamado luego de que el componente este montado. Solo se lanza una vex, se enlazan eventos.

## Actualizacion.

### componentWillRecieveProps

+ Metodo llamado al recibir nuevas propiedades. Sirve para actualizar el estado con base a las nuevas propiedades.

### shoudComponentUpdate

+ Metodo que condiciona si el componente se debe volver a renderizar, utilizado para optimizar el rendimiento.

### componentWillUpdate

+ Metodo llamado antes de re-renderizar un componente, utilizado para optimizar el rendimiento.

### render

+ re-render

### componentWillUpdate

+ Metodo llamado luego de re-renderizar.

## Demontado

### componentWillUnmount

+ Metodo llamado antes de que el componente sea retirado de la aplicacion.

## Manejo de errores.

### componentDidCatch

+ Si ocurre alun error al renderizar el componente este metodo es invocado. El manejo de errores solo ocurre en componentes hijos.

-----------------------------------------------------------

**PureComponent:** tiene el método shouldComponentUpdate ya asignado (por defecto), si a este componente no se le actualizan las propiedades, no tenemos que validar a mano con shouldComponentUpdate, PureComponent lo hace por nosotros, es decir; si recibe nuevas propiedades pero son las que ya teniamos, no se re-renderiza.

dump component -> (tonto) como se ve el componente.
smart component -> (listo) Que hace mi componente.

**Como se ve. Dumb Component. Presentational Component**

+ Puede contener smart componentes u otros componentes presentacionales.
+ Permite composición {props.children}
+ Son independientes del resto de la aplicación.
+ No especifica como se cargan los datos. Eg. this.props.title
+ Recibe datos y callbacks mediante propiedades.
+ Generalmente no tienen su propio estado, es raro que tenga un ciclo de vida.
+ Se escriben como componentes funcionales al menos que necesiten mejoras de performance (PureComponents)

**Que hace. Smart. Container Component**

+ Se centra en como funciona la app. Tienen ciclo de vida y states. Controlan como funciona la aplicación.
+ Contiene componentes de UI y otros smart.
+ No tienen estilos.
+ Proveen datos y callbacks a otros componentes (UI o smart)
+ Normalmente tienen estado.
+ Llaman a acciones
+ Se pueden generar por higher order components

**¿Por qué dividir los componentes en smart y dumbs?**

+ Separación de responsabilidades (Se parece a MVC, V para dumbs y C para smarts)
+ Mejorar la capacidad de reutilizar componentes

