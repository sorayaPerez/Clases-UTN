//? Configuras la politica de CORS

export const handler = async (event) => {
    // Configuración de las políticas de CORS
    const responseHeaders = {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,GET"
    };
    

    if (event.httpMethod === "OPTIONS") {
        // Respuesta pre-vuelo para las solicitudes OPTIONS
        return {
            statusCode: 204,
            headers: responseHeaders,
            body: JSON.stringify({}),
        };
    }

    try {
        // Generar una imagen de gato
        const imageData = catImageGenerator();

        // Preparar la respuesta final con la imagen
        const response = {
            statusCode: 200,
            headers: {
                ...responseHeaders,
                "Content-Type": "image/jpeg" // Tipo de contenido de la imagen
            },
            body: imageData,
            isBase64Encoded: true // Indicar que el cuerpo está en formato Base64
        };
        
        return response;
    } catch (error) {
        // Manejo de errores
        console.error('Error:', error);

        const errorResponse = {
            statusCode: 500,
            headers: responseHeaders,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };

        return errorResponse;
    }
};


// <!-- CORS RESTRICCIONES ---
// Para verificar si estás experimentando restricciones de CORS (Cross-Origin Resource Sharing) al hacer solicitudes a una API desde tu navegador, puedes seguir estos pasos:

// 1. **Consola de Desarrollo**: Abre la página web en tu navegador y abre la consola de desarrollo. Puedes hacerlo generalmente presionando `F12` y seleccionando la pestaña "Consola" en la ventana de desarrollo.

// 2. **Realiza la Solicitud**: Observa las solicitudes de red que realiza la página web. Por ejemplo, si estás utilizando la API de The Cat API, deberías ver una solicitud a una URL como `https://api.thecatapi.com/v1/breeds/abys`.

// 3. **Mensajes de Error**: Si hay restricciones de CORS, verás mensajes de error en la consola de desarrollo. Estos mensajes de error pueden variar según el navegador, pero suelen incluir información sobre el bloqueo de la solicitud debido a las restricciones de CORS.

// 4. **Orígenes Bloqueados**: Los mensajes de error pueden indicar que la solicitud ha sido bloqueada debido a la política de mismo origen (Same-Origin Policy). Puede haber errores relacionados con el encabezado `Access-Control-Allow-Origin`, que determina qué dominios están permitidos para acceder a los recursos de la API.

// 5. **Soluciones**: Si encuentras mensajes de error de CORS, existen varias formas de abordar el problema:
//    - Utilizar un servidor proxy en el lado del servidor para realizar la solicitud a la API y luego entregar los datos a tu página web.
//    - Verificar si la API proporciona una opción para habilitar CORS o si ofrece una API con endpoints específicos para uso en el navegador.
//    - Desarrollar tu aplicación en un entorno de servidor local para evitar las restricciones de CORS durante el desarrollo.

// Es importante mencionar que CORS es una medida de seguridad implementada por los navegadores web para prevenir que scripts maliciosos en un sitio web accedan a recursos en otro dominio sin permiso. Si estás desarrollando una aplicación que realiza solicitudes a una API en otro dominio, es fundamental entender y abordar correctamente las restricciones de CORS. -->