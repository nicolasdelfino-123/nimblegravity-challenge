# Nimble Gravity Challenge

Mini aplicación en React que consume la API provista para listar posiciones abiertas y permitir enviar una postulación.

## Funcionalidades

- Obtiene las posiciones disponibles desde la API
- Permite ingresar la URL del repositorio
- Envía la postulación a la posición seleccionada
- Maneja estados de carga y errores de conexión

## Tecnologías

- React
- Fetch API
- JavaScript (ES6)

## Instalación
```bash
npm install
npm run dev
```

## API utilizada

**Base URL:**
```
https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net
```

**Endpoints:**

- `GET /api/jobs/get-list`
- `POST /api/candidate/apply-to-job`

## Uso

1. Al cargar la aplicación se listan automáticamente las posiciones disponibles.
2. Ingresar la URL del repositorio de GitHub.
3. Presionar **Submit** para enviar la postulación.

## Notas

La aplicación realiza la carga de posiciones al montarse y muestra feedback visual durante el envío.