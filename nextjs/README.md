En el componente <Link/>  el parametro prefetch solo se ejecuta en modo de
produccion, no en desarrollo. Sirve para precargar el playload, html, css y js, 
para cuando se haga click en el enlace, se renderice mas rapido la nueva pagina.
Si varios links apuntan a la misma direccion, se carga una sola vez ese contenido.

