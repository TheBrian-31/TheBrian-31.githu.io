# Proyecto de Mejora del Sistema de Control de Acceso
Este proyecto tiene como objetivo mejorar el sistema de control de acceso en la colonia HLVS, proporcionando una solución automatizada y robusta que incremente la seguridad y privacidad de los residentes. La implementación incluye tecnologías modernas tanto para el desarrollo de software como para la interacción con hardware.

## Tecnologías Utilizadas

Frontend:

React: Utilizado para desarrollar la interfaz de usuario interactiva y dinámica.

pnpm: Empleado como gestor de paquetes para asegurar una gestión eficiente de las dependencias del proyecto.

Hardware:

Arduino y Adafruit: Utilizados para controlar la apertura y cierre de las puertas de la maqueta, permitiendo la interacción física con el sistema.

Google Auth: Implementado para gestionar el inicio de sesión y la creación de cuentas de manera segura y sencilla.
Backend:

Spring Boot: Utilizado para desarrollar el servidor backend, proporcionando una estructura robusta y escalable para manejar las operaciones del sistema.

## Descripción del Sistema

Control de Acceso Automatizado:

- Residentes pueden generar llaves de acceso en forma de códigos QR para validar su entrada.

- Visitantes Autorizados pueden recibir permisos de entrada que les permiten generar llaves temporales en códigos QR.
Autoridades/Servicios: Pueden ser registrados por el vigilante para entradas específicas mediante la tablet de control.

Gestión de Permisos:

- Los residentes encargados pueden crear permisos para visitas únicas o múltiples, especificando fechas y horas de validez.
- Los permisos pueden ser modificados o invalidados según las necesidades.

Integración de Hardware:

Las puertas automáticas son controladas mediante dispositivos Arduino y Adafruit, integrados con el sistema para abrirse al validar un código QR válido.
Se utilizan tablets con cámaras para escanear los códigos QR en los puntos de control.
Autenticación Segura:

Se utiliza Google Auth para la autenticación de usuarios, simplificando el proceso de inicio de sesión y aumentando la seguridad del sistema.
