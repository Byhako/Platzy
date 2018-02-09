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

