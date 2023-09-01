# New-HeavyFitness

### Que es HeavyFitness?
HeavyFitness es un proyecto para el curso de ReactJS de CoderHouse donde utilice este framework para darle mas dinamismo a mi pagina. Este proyecto tiene el objetivo de vender los mejores productos a precios razonables para deportistas que se quieren desempeñar al maximo en sus actividades fisicas.

### GIT 
![HeavyFitness](https://github.com/Baltazar-Morillas/New-HeavyFitness/assets/111323075/679d9d5e-22bb-4c95-a3bb-80c3706bed14)

# Librerias
* `chakra.ui`: Esta libreria se utilizo principalmente para darle estilos y diseño a las cards. Tambien sirvieron para hacer botones y el acordeon.
* `react-router-dom`: Esta libreria sirvio para agregar las rutas a `App`, las cuales dieron mejoraron la navegacion de la pagina.
* `fortawesome`: Esta libreria se utilizo para el icono de `CartWidget`.

# Componentes
* `main`: Este componente es el padre de `App` y se encarga de la configuracion de Firebase. Tambien se llama al componente `<ChakraProvider/>` que envuelve a App.
* `App`: Este componente es el padre de la mayoria de componentes. Aqui se le asigna una ruta a los componentes con la libreria de `react-router-dom`.
* `ItemListContainer`: Este componente se encarga de la logica comunicandose con la base de datos de Firebase para asi traer los productos y pasarselos por props a ItemList. Tambien es responsable de filtrar las categorias de los productos, en el caso de no haber una categoria se muestran todos los productos.
* `ItemList`: Este componente se encarga de mapear las props que le llegan y le pasa los productos correspondientes a Item.
* `Item`: Este componente de presentacion se encarga de mostrar el producto que le llega por props. Cuenta con un boton para ir al detalle del producto, este boton esta envuelto en el componente `Link` el cual te redirige a ItemDetailContainer y a su vez le envia el id del producto que se desea ver en detalle.
* `ItemDetailContainer`: Este componente se encarga de la logica comunicandose con Firebase y emplea el metodo find comparando el id del producto. Luego le envia el producto por props a ItemDetail.
* `ItemDetail`: Este componente se encarga de mostrar el detalle del producto. Cuenta con una funcion `onAdd()` la cual agrega el producto al carrito cuando es llamada por ItemCount (se le pasa la funcion por props). Tambien se utiliza en este componente un renderizado condicional, si se agrego el producto al carrito entonces se da la opcion de ir al carrito de compras. En caso contrario, se sigue mostrando ItemCount.
* `ItemCount`: Este componente tiene un contador para agregar una cantidad de un mismo producto al carrito. Para esto usa dos funciones para incrementar y disminuir la cantidad de productos a comprar. Por ultimo se utiliza un boton para agregar al carrito, el cual llama a la funcion `onAdd()`.
* `CartWidget`: Este componente se encarga de mostrar el icono ddel carrito de la libreria de fortawesome y la cantidad de productos que tiene el carrito. Se utiliza un renderizado condicional, si el carrito esta vacio no se muestra ningun numero.
* `Cart`: Este componente se encarga traer los productos del carrito y emplear un renderizado condiconal, si no hay productos la pagina te da la opcion de volver a `Home` con un boton. Si el carrito tiene productos entonces se mapean y se le pasan a ItemCart por props. Ademas el componente Cart muestra el total de la compra y un boton para finalizar la misma.
* `ItemCart`: Este componente se centra unicamente en mostrar el item que se encuentra en el carrito. Muestra la imagen, nombre, cantidad, precio y un boton para eliminar el producto.
* `SendOrder`: Este componente se muestra al momento de hacer el checkout. Se muestra al usuario un formulario donde puede llenar su informacion para finalizar la compra. Al enviar esta informacion se crea un documento en la coleccion `orden` donde se puede ver todos los datos ingresados por el usuario y los productos que compro junto con el monto final. Luego se retorna al usuario el id de la orden de compra.

* `ShoppingCartContext`: Este componente se centra en proporcionarle a los componentes varias funciones relacionadas al carrito.
  * `addToCart`: Esta funcion se utiliza para agregar un nuevo producto al carrito y la cantidad del mismo. Se crea un arreglo con el item y un campo extra llamdo quantity. Tambien verifica si el producto ya existe en el carrito, en tal caso se suma unicamente la cantidad al producto existente para evitar duplicados.
  * `totalCart`: Esta funcion retorna la cantidad total de productos en el carrito.
  * `totalPrecio`: Esta funcion retorna el total de la compra.
  * `clearCart`: Esta funcion actualiza el estado del carrito con un array vacio.
  * `isInCart`: Esta funcion usa el metodo find para verificar si un producto esta en el carrito.
  * `deleteItem`: Esta funcion borra un item del carrito filtrando por el id.

* `Home`: Este componente es el Inicio de la pagina y da la bienvenida al usuario. Debajo de la bienvenida se muestran todos los productos.
* `NavBar`: Este componente se encarga de mostrar la barra de navegacion para que el usuario pueda acceder a las diferentes secciones de la pagina. Muestra el logo de la pagina que te redirige a `Home`, el nombre de la pagina, las diferentes categorias y el `CartWidget`.
* `Footer`: Este componente muestra el footer de la pagina y permite acceder a las redes sociales de HeavyFitness.
* `Contact`: Este componente brinda informacion al usuario sobre las Frequently Asked Questions (FAQ). Ademas permite ingresar el nombre, fecha de nacimiento y un comentario para contactarse con nosotros.
* `Loader`: Este componente simula un retraso con la comunicacion de la base de datos. Aqui se uso la libreria de `chakra.ui`.
