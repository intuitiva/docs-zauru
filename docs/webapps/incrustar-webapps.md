---
title: "Incrustar Webapps dentro de Zauru"
sidebar_label: "Incrustar Webapps dentro de Zauru"
sidebar_position: 1
---

Al tener desarrollada una aplicación web (independientemente de la tecnología utilizada), necesitamos un URL público por donde se pueda accesar esa aplicación y ya estamos listos para poder incrustar esta aplicación dentro de Zauru como una webapp.

Primero debemos navegar al módulo de webapp

![webapp index](/img/webapps/incrustar_webapps-1.png)

Luego presionamos "Nueva Webapp" y registramos la información.

Asumiendo que nuestro webapp esté alojado en el dominio https://primerwebapp.zauru.com este es el código de incrustación que deberíamos agregar al webapp:

```html
<iframe src="https://primerwebapp.zauru.com" width="100%" height="500" frameborder="0" allowfullscreen>
  <p>
    <a href="https://primerwebapp.zauru.com">
      Redirigir en caso de que el navegador no soporte iframes
    </a>
  </p>
</iframe>
```

![webapp new](/img/webapps/incrustar_webapps-2.png)

Al guardar tenemos que hacer un último paso y es darnos permisos para que nos aparezca en el listado de webapps

![webapps permissions](/img/webapps/incrustar_webapps-3.png)

Ahora ya podemos accesar desde Zauru a nuestros webapps

![webapp details](/img/webapps/incrustar_webapps-4.png)

Ahora ya no hay que tener 2 pestañas o ventanas del navegador para utilizar nuestras webapps personalizadas.
