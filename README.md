# Promesas y Programación Asíncrona

## ¿Qué sucedió al usar async y await?

Al utilizar `async` y `await`, podemos escribir código asíncrono de manera más legible y estructurada. El uso de la palabra clave `async` antes de una función permite que la función se comporte de manera asíncrona y que pueda utilizar la palabra clave `await` para esperar la resolución de una promesa dentro de la función. Al utilizar `await`, la ejecución de la función se pausa hasta que la promesa se resuelve o rechaza, y luego se continúa con la ejecución.

## ¿Qué sucedió al usar el método then()?

El método `then()` se utiliza para manejar el resultado de una promesa resuelta. Al encadenar el método `then()` a una promesa, se proporciona una función de devolución de llamada que se ejecuta cuando la promesa se resuelve correctamente. Dentro de esta función de devolución de llamada, se puede acceder al resultado de la promesa y realizar acciones adicionales.

## ¿Qué diferencias encontraste entre async, await y el método then()?

`async` y `await` proporcionan una sintaxis más clara y legible para escribir código asíncrono. Con `async` y `await`, el flujo de control del programa se ve más similar al código síncrono, lo que facilita su comprensión. En cambio, el método `then()` es una forma más tradicional de manejar las promesas. Requiere encadenar funciones de devolución de llamada para manejar el resultado de la promesa y puede resultar en un código más anidado y menos legible en comparación con el uso de `async` y `await`.
