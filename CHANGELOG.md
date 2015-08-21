# Releases

## [v1.6.0] 21-ago-2015
### Cambios
-Rediseño del componente mobile, se creo un Floating Action Button que se transforma en un card que muestra el código QR.
-Rediño del componente footer, únicamente se cambio el tamaño de la tipografia y se reparo el efecto hover de los links.
-Pequeño ajuste a la función del componente acordeon que lleva al top del artículo.

## [v1.5.0] 19-ago-2015
### Cambios
- Rediseño del header y sus componentes basado en los guidelines de material design.
- Rediseño del los post antes llamados contents basado en los guidelines de material.
- Archivo de variables actualizado, en este se incluyeron mixins para los tipos diferentes tipos de texto basados en los guidelines de material design, colores nuevos y un mixin que remplaza las variables de sombra.
- Rediseño del layout todo el sitio.

### Agregado
- Funcionalidad que lleva lo más cercano del top del artículo en que se da clic, útil en dispositivos moviles.
- Efecto ripple en los títulos de cada post.
- Capacidad de colocar imágenes en el inicio de del post como si fuera un car de material design.

## [v1.3.0] 4-ago-2015
### Agregado
- Footer agregado al proyecto.
- Links animados al nombre del autor y a los links de agradecimiento del footer.

## [v1.2.3] 3-ago-2015
### Cambios
-Optimización del tiempo de la animación de los contenidos para que se viera más natural.

## [v1.2.2] 28-jul-2015
### Cambios
- Mejora de las animaciones del bloque mobile.

## [v1.2.0] 28-jul-2015
### Agregado
- Archivo CHANGELOG.md para crear el registro de cada release.

###Cambios
- Colores del archivo de variables.

- Rediseño del componente header llamado antes info. Se rediseño todo el componente header usando los colores agregados al archivo de variables, se optó por un diseño un poco más sencillo pero más funcional y que respeta un poco más los principios de material design.
Se eliminaron los icon fonts y únicamente se dejó el nombre de cada una de las redes sociales, se eliminó el icon de correo ya que no me parece que sea muy útil.

- Rediseño del componente acordeon. Se cambiaron los colores de la fuente de los contenidos y se agregó un color más oscuro a los labels del componente, también se agregó un pequeño borde azul al elemento que está marcado.

- Se modificó el color del componente mobile de acuerdo con la nueva selección de colores.

### Fixed
- Responsive del componente .U-wrapper ya que en el release anterior quedo mal asignado.

- SRC de la imagen del código QR del componente mobile.

## [v1.0.0] 27-jul-2015
### Agregado
- Componente header que contiene el título del proyecto y mis redes sociales.

- Componente acordeon que muestra los diferentes contenidos.

- Componente mobile que muestra el código QR para visualizar en dispositivos móviles.

### Cambios
- Se cambió la estructura del proyecto dividiendo todas las partes en componentes individuales haciendo más escalable el proyecto y más sencillo de trabajar usando preprocesadores.
