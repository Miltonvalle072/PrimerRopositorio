Formulario simple: nombre, edad y teléfono

Archivos creados:
- index.html: Página principal con el formulario (input nombre y edad).
 - index.html: Página principal con el formulario (inputs: nombre, edad y teléfono).
 - index.html: Página principal con el formulario (inputs: nombre, edad, teléfono y dirección).
- styles.css: Estilos básicos y responsivos.
- script.js: Validación en el cliente y manejo de resultados.

Cómo usar:
1. Abrir `index.html` en un navegador.
2. Rellenar Nombre y Edad y pulsar "Enviar".
3. Verás la sección "Datos recibidos" con lo enviado.

Notas sobre teléfono:
- El campo `Teléfono` acepta dígitos, espacios, paréntesis, signos `+` y `-`.
- Ejemplo de formato: `+593987654321` o `0987 654 321`.

Notas sobre dirección:
- El campo `Dirección` es un `textarea` y acepta texto libre. Se requiere mínimo 5 caracteres.
- Ejemplo: `Av. Los Pinos 123, Ambato`.

Notas:
- Validación mínima en cliente (no sustituye validación en servidor).
- Si quieres que guarde los datos en un servidor o en localStorage, indícamelo y lo añado.
