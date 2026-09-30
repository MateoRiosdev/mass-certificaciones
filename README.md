# Mass · Certificate Vault

Página estática interactiva para presentar 12 certificaciones de capacitación de Mateo Gomero Rios en un solo enlace.

## Concepto

- Carrusel 3D circular con profundidad.
- Arrastre con mouse y touch.
- Navegación por botones y teclado.
- Click en una ficha para enfocarla; click en la ficha activa para abrir el certificado.
- Lightbox para revisar el PNG completo.
- Modo oscuro / claro con persistencia local.
- Responsive para móvil, tablet y escritorio.
- Sin backend, sin base de datos y sin dependencias de npm.

## Agregar tus certificados

Coloca tus 12 PNG en:

`assets/certificates/`

con estos nombres:

1. `01-procesos-de-cajas.png`
2. `02-accion-ante-emergencia.png`
3. `03-etas.png`
4. `04-etica-y-compliance.png`
5. `05-uso-seguro-de-equipos.png`
6. `06-iperc.png`
7. `07-orden-y-limpieza.png`
8. `08-manipulacion-de-carga-pesada.png`
9. `09-acoso-sexual-laboral.png`
10. `10-sostenibilidad.png`
11. `11-lavado-de-manos.png`
12. `12-buenas-practicas-de-manipulacion.png`

Si usas otros nombres, cambia únicamente la propiedad `image` correspondiente en `app.js`.

## Probar localmente

Como es una página estática, puedes abrir `index.html` directamente. Para una experiencia de desarrollo más fiel a producción, también puedes usar una extensión de servidor local como Live Server.

## Publicar con GitHub Pages

1. Crea un repositorio público, por ejemplo `mass-certificaciones`.
2. Sube todo el contenido del proyecto a la rama `main`.
3. En GitHub abre `Settings → Pages`.
4. En `Build and deployment`, selecciona `Deploy from a branch`.
5. Selecciona `main` y `/ (root)`.
6. Guarda y espera a que GitHub publique el sitio.

La URL quedará con el patrón:

`https://MateoRiosdev.github.io/mass-certificaciones/`

## Referencias

El concepto de interacción 3D está inspirado en componentes de carrusel circular 3D y en patrones de galerías de certificados de portafolios React, pero esta versión está implementada desde cero con HTML, CSS y JavaScript para reducir mantenimiento y simplificar el alojamiento.
