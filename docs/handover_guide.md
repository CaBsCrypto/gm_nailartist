# Guía de Entrega y Administración
## GM NailArtist — Belleza Integral & Nail Art

¡Bienvenida a la guía de administración de tu nuevo sitio web! Este documento está diseñado especialmente para que la dueña del estudio y su equipo puedan gestionar el sitio de manera sencilla, sin necesidad de conocimientos técnicos avanzados.

---

## 📌 1. ¿Cómo funciona el Sistema de Reservas?

El sitio utiliza un **flujo híbrido inteligente** para garantizar que no haya reservas falsas y que el control de la agenda y la caja quede 100% en tus manos:

1. **El Cliente navega en la web**: Selecciona un servicio, una modalidad (Sede o Domicilio) y una fecha.
2. **Consulta en tiempo real**: La web se conecta con tu **Google Calendar** y solo le muestra al cliente las horas que tienes realmente libres (desactivando las horas ocupadas).
3. **Selección del pago**: El cliente elige si quiere abonar el **50% (para asegurar)** o el **100% de la sesión**.
4. **Redirección a WhatsApp**: Al hacer clic en "Agendar", se abre un chat de WhatsApp con un mensaje pre-redactado con todos los detalles (Nombre, Servicio, Fecha, Hora, Local/Comuna, y preferencia de pago).
5. **Validación y Cierre**:
   - Le envías tus datos de transferencia o link de cobro por WhatsApp.
   - Una vez recibas el comprobante, **creas el evento en tu Google Calendar**.
   - **¡Listo!** Al guardar el evento en tu calendario, esa hora se bloquea automáticamente en la web para futuras clientas.

---

## 🗓️ 2. Configuración de Google Calendar

Para que el sitio web pueda leer tus horas ocupadas, debemos realizar una pequeña configuración única:

### Paso 1: Obtener el ID de tu Calendario
1. Abre tu [Google Calendar](https://calendar.google.com).
2. En la barra lateral izquierda, pasa el cursor sobre el calendario que usas para trabajar, haz clic en los tres puntos `...` y selecciona **Configurar y compartir**.
3. Baja hasta la sección **Integrar el calendario**.
4. Copia el **ID de calendario** (suele ser tu correo electrónico, ej: `tu-estudio@gmail.com`).

### Paso 2: Compartir el acceso de lectura con la Web
Para que la web pueda consultar si estás libre u ocupada sin comprometer tu privacidad, debemos darle permiso de lectura:
1. En la misma pantalla de **Configurar y compartir**, busca la sección **Compartir con personas o grupos específicos**.
2. Haz clic en **Agregar personas y grupos**.
3. Pega el correo de la cuenta de servicio del proyecto:  
   `gmnailartist-service@gm-nailartist.iam.gserviceaccount.com` *(Nota: este correo te lo confirmaremos tras el despliegue final)*.
4. En permisos, selecciona: **Ver solo libre/ocupado (ocultar detalles)**. Esto garantiza que la web solo sepa si estás libre u ocupada, sin poder ver los nombres ni notas privadas de tus clientas.
5. Haz clic en **Enviar**.

### ¿Cómo bloquear horas personales o descansos?
Cualquier evento que crees en tu Google Calendar (ej. "Dentista", "Almuerzo", o simplemente "Bloqueado") hará que esa hora **desaparezca automáticamente** de las opciones elegibles en la web. Asegúrate de marcar los eventos como "Ocupado" en Google Calendar.

---

## 💅 3. Cómo Actualizar Precios y Servicios

Todos los servicios, sub-servicios y precios están centralizados en un único archivo de configuración del código: [constants.ts](file:///d:/00%20PROGRAMANDO/gm_nailartist/lib/constants.ts).

Si necesitas cambiar una tarifa o agregar un servicio, solo debes editar ese archivo de la siguiente manera:

```typescript
export const SERVICES: Service[] = [
    {
        id: 'category-manicure',
        name: 'Manicure',
        description: 'Esmaltado permanente, nail art, fortalecimiento y más.',
        price: 'desde 10.000', // <-- Texto visible en las tarjetas de la web
        numericPrice: 10000,   // <-- Número real para calcular el abono del 50%
        icon: '💅',
        color: 'pink',
        subServices: [
            { 
                name: 'Solo limpieza', 
                price: '10.000', // <-- Precio visible del subservicio
                numericPrice: 10000, // <-- Precio real para el abono
                duration: '30 minutos' 
            },
            // ...
        ]
    }
]
```

### Reglas importantes al editar precios:
- **`price`**: Es el texto descriptivo (puede incluir letras como "desde 10.000" o "Cotizar").
- **`numericPrice`**: Debe ser **solo números**, sin puntos ni signos de peso. Se utiliza para hacer el cálculo matemático del abono del 50% en el checkout de la reserva. Si el servicio es "Cotizar" o de valor variable, pon `0`.

---

## 🖼️ 4. Cómo Actualizar las Fotos de la Galería

El sitio cuenta con una hermosa galería interactiva que carga las fotos automáticamente desde las siguientes carpetas del proyecto:
- **Manicure**: `public/images/gallery/manicure/` (Nombradas como `manicure_1.jpg`, `manicure_2.jpg`, etc.)
- **Peluquería**: `public/images/gallery/peluqueria/` (Nombradas como `peluqueria_1.jpg`, etc.)
- **Eventos**: `public/images/gallery/eventos/` (Nombradas como `eventos_1.jpg`, etc.)

Para subir nuevas fotos:
1. Guarda la imagen en formato `.jpg` con el nombre correlativo correspondiente.
2. Si agregas o quitas fotos, actualiza el número total de imágenes en el generador automático en el archivo `lib/constants.ts`:
   ```typescript
   const arrManicure = generateGalleryItems('Manicure', 'manicure', 16, manicureColors); // Cambia el 16 si subes más fotos
   ```

---

## 🚀 5. Publicación en Vercel (Paso a Producción)

El sitio está actualmente enlazado a la cuenta de Vercel del proyecto. Cada vez que realices un cambio en el repositorio de GitHub (rama `main`), **Vercel compilará y actualizará la web automáticamente en menos de 1 minuto** sin que tengas que hacer nada.

### Hosting y Dominios
- **Dominio provisional**: `https://gm-nailartist.vercel.app`
- **Dominio propio**: Puedes conectar tu dominio oficial (ej. `gmnailartist.cl` o `.com`) directamente desde el panel de control de Vercel en la sección *Settings > Domains*.
