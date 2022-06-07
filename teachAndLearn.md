author: thebrian31
id: teach-and-learn
status: Published

# API - TeachAndLearn

## Información

### Nombre de la API:
TeachAndLearn

### Versión de la API:

Version 1.0.0

### Host de la API:

```
https://api.com/teach-and-learn-v1
```
### Formato de respuesta:

Siempre que realices una petición correcta a la API obtendrás un JSON.

## Entidad usuario

### Crear usuario

#### Method:

"Post"

#### Description

Permite crear un nuevo usuario.

#### URL:
```
https://api.com/teach-and-learn-v1/user
```

#### Headers:
```
{'Content-Type': 'application/json'}
```

#### Body:

Para estudiantes:

```
{
    username: MiNombreDeEjemplo
    email: EmailEjemplo
    password: ContraseniaEjemplo
    typeuser: student
}
```

Para profesores:

```
{
    username: MiNombreDeEjemplo
    email: EmailEjemplo
    password: ContraseniaEjemplo
    typeuser: teacher
}
```

#### Response
- 201
```
{
        "message": "User created"
}
```
- 400
```
{
        "message": "Invalid request"
}
```

### Obtener un usuario

#### Method:

"Get"

#### Description

Obtiene la información del usuario con el username.

#### URL:

```
https://api.com/teach-and-learn-v1/user/signin
```

#### Headers:
```
{   
    'Content-Type': 'application/json'
}
```

#### Body:

Para estudiantes:

```
{
    username: MiNombreDeEjemplo
    password: ContraseniaEjemplo
    typeuser: student
}
```

Para profesores:

```
{
    username: MiNombreDeEjemplo
    password: ContraseniaEjemplo
    typeuser: teacher
}
```

#### Response
- 200
```
{
        "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThlYzg0NzcyYzViNzMxZjNhOGEzYmUiLCJpYXQiOjE2MzcyNzE5NTgsImV4cCI6MTYzODQ4MTU1OH0.-HEh4bmz3BlBYB0nXrh-pL0KRxx2ckvakHxSl_fG3BM"
}
```
- 201
```
{
        "message": "Invalid request"
}
```

### Obtener todos los usuarios

#### Method:

"Get"

#### Description

Obtiene la información del todos los usuarios.

#### URL:

```
https://api.com/teach-and-learn-v1/user/signin
```

#### Parameters:

```
{
    limit: 10
    pages: 0
}
```

#### Headers:
```
{
    'Authorization': 'Bearer codigoDeAutentificación'
}
```
#### Response:
- 200
```
{
        "message": "Complete"
}
```
- 400
```
{
        "message": "Invalid request"
}
```
## Entidad lección

### Crear lección

#### Method:

"Post"

#### Description

Crea una nueva lección.

#### URL:
```
https://api.com/teach-and-learn-v1/lesson
```

#### Headers:
```
{
    'Content-Type': 'application/json'
    'Authorization': 'Bearer codigoDeAutentificación'
}
```

#### Body:

```
{
    lessonname: MiNombreDeEjemplo
    language: English
    description: The learning of colors will be developed.
    password: ContraseniaEjemplo
}
```

#### Response:

- 200
```
{
        "message": "Lesson created"
}
```
- 400
```
{
        "message": "Invalid request"
}
```

<aside class="positive">
<b>Nota:</b> Solo los profesores podrán agregar una lección.
</aside>

### Obtener información de lección.

#### Method:

"Get"

#### Description

Obtiene la información de la lección.

#### URL:
```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"
```
<aside class="positive">
<b>Nota:</b> En "id_lesson" debe ir el identificador de la lección que desea ver.
</aside>

#### Headers:
```
{
    'Authorization': 'Bearer codigoDeAutentificación'
}
```

#### Response

- 200

```
{
        "message": "Complete"
}
```
- 400

```
{
        "message": "Invalid request"
}
```

### Obtener información de todas las lecciones

#### Method:

"Get"

#### Description
Obtiene la información de todas las lecciones.

#### URL:
```
https://api.com/teach-and-learn-v1/lesson"
```

#### Parameters:

```
{
    limit: 10
    pages: 0
}
```

#### Headers:
```
{
    'Authorization': 'Bearer codigoDeAutentificación'
}
```
#### Response:
- 200
```
{
        "message": "Complete"
}
```
- 400
```
{
        "message": "Invalid request"
}
```

## Entidad documento

### Crear documento

#### Method:

"Post"

#### Description

Crea una nueva actvidad de documento.

#### URL:

```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"/file
```

#### Headers:
```
{
    'Content-Type': 'application/json'
    'Authorization': 'Bearer codigoDeAutentificación'
}
```

#### Body:

```
{
    activityname: MiNameActivity
    linkfile: URL
    description: Support material
}
```

#### Response:

- 200
```
{
        "message": "Activity add"
}
```
- 400
```
{
        "message": "Invalid request"
}
```
### Obtener información de documento

#### Method:

"Get"

#### Description

Obtiene la información de la actividad de documento.

#### URL:
```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"/file/"id_file"
```

#### Headers:
```
{
    'Authorization': 'Bearer codigoDeAutentificación'
}
```

#### Response

- 200

```
{
        "message": "Complete"
}
```
- 400

```
{
        "message": "Invalid request"
}
```
### Obtener información de todos los documento

#### Method:

"Get"

#### Description

Obtiene la información de la actividad de documento.

#### URL:
```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"/file/all
```

#### Parameters:

```
{
    limit: 1
    pages: 0
}
```

#### Headers:
```
{
    'Authorization': 'Bearer codigoDeAutentificación'
}
```
#### Response:
- 200
```
{
        "message": "Complete"
}
```
- 400
```
{
        "message": "Invalid request"
}
```

## Entidad cuestionario

### Crear cuestionario

#### Method:

"Post"

#### Description
Crea una nueva nueva actividad de tipo cuestionario.

#### URL:
```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"/questionnaire
```

#### Headers:
```
{
    'Content-Type': 'application/json'
    'Authorization': 'Bearer codigoDeAutentificación'
}
```

#### Body:

```
{
    activityname: MiNameActivity
    question1: ¿Como se escribe verde en ingles?
    response1: Green
    question2: ¿Como se escribe amarillo en ingles?
    response2: Yellow
    question3: ¿Como se escribe rojo en ingles?
    response3: Red
    question4: ¿Como se escribe negro en ingles?
    response4: Black
    question5: ¿Como se escribe blanco en ingles?
    response5: White
    question6: ¿Como se escribe gris en ingles?
    response6: Gray
    question7: ¿Como se escribe anaranjado en ingles?
    response7: Orange
    question8: ¿Como se escribe azul en ingles?
    response8: Blue
    question9: ¿Como se escribe rosa en ingles?
    response9: Pink
    question10: ¿Como se escribe morado en ingles?
    response10: Purple
}
```

#### Response:

- 200
```
{
        "message": "Activity add"
}
```
- 400
```
{
        "message": "Invalid request"
}
```

### Obtener información de cuestionario

#### Method:

"Get"

#### Description

Obtiene la información de la actividad cuestionario.

#### URL:
```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"/questionnaire/"id_questionnarie"
```

#### Headers:
```
{
    'Authorization': 'Bearer codigoDeAutentificación'
}
```

#### Response

- 200

```
{
        "message": "Complete"
}
```
- 400

```
{
        "message": "Invalid request"
}
```

### Obtener la información de los cuestionarios

#### Method:

"Get"

#### Description

Obtiene la información de la actividad cuestionario.

#### URL:
```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"/questionnaire/all
```

#### Parameters:

```
{
    limit: 1
    pages: 0
}
```

#### Headers:
```
{
    'Authorization': 'Bearer codigoDeAutentificación'
}
```
#### Response:
- 200

```
{
        "message": "Complete"
}
```

- 400

```
{
        "message": "Invalid request"
}
```

## Entidad cuestionario de opción multiple.

### Crear cuestionario de opción multiple.

#### Method:

"Post"

#### Description

Crea una nueva nueva actividad de tipo cuestionario de opción multiple.

#### URL:
```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"/multiple_questions
```

#### Headers:
```
{
    'Content-Type': 'application/json'
    'Authorization': 'Bearer codigoDeAutentificación'
}
```

#### Body:

```
{
    activityname: MiNameActivity
    question1: ¿Como se escribe anaranjado en ingles?
    optionresponse1a: Orange
    optionresponse1b: Red
    optionresponse1c: Blue
    optionresponse1d: White
    question2: ¿Como se escribe azul en ingles?
    optionresponse2a: Blue
    optionresponse2b: Black
    optionresponse2c: yellow
    optionresponse2d: Green
    question3: ¿Como se escribe verde en ingles?
    optionresponse3a: Blue
    optionresponse3b: Green
    optionresponse3c: Yellow
    optionresponse3d: Blue
    question4: ¿Como se escribe rojo en ingles?
    optionresponse4a: Black
    optionresponse4b: Purple
    optionresponse4c: Orange
    optionresponse4d: Red
    question5: ¿Como se escribe negro en ingles?
    optionresponse5a: Black
    optionresponse5b: Red
    optionresponse5c: Blue
    optionresponse5d: Yellow
}
```

#### Response:

- 200
```
{
        "message": "Activity add"
}
```

- 400
```
{
        "message": "Invalid request"
}
```

### Obtener información de cuestionario opción multiple.

#### Method:

"Get"

#### Description

Obtiene la información de la actividad de tipo cuestionario de opción multiple.

#### URL:
```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"/multiple_questions/"id_multiple_questions"
```

#### Headers:
```
{
    'Authorization': 'Bearer codigoDeAutentificación'
}
```

#### Response

- 200

```
{
        "message": "Complete"
}
```
- 400

```
{
        "message": "Invalid request"
}
```

### Obtener información de todos los cuestionario opción multiple.

#### Method:

"Get"

#### Description

Obtiene la información de la actividad de tipo cuestionario de opción multiple.

#### URL:
```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"/multiple_questions/all
```

#### Parameters:

```
{
    limit: 1
    pages: 0
}
```

#### Headers:
```
{
    'Authorization': 'Bearer codigoDeAutentificación'
}
```
#### Response:
- 200

```
{
        "message": "Complete"
}
```
- 400

```
{
        "message": "Invalid request"
}
```

## Entidad parejas

### Crear una actividad de parejas

#### Method:

"Post"

#### Description

Crea una nueva actividad de parejas.

#### URL:

```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"/couple
```

#### Headers:
```
{
    'Content-Type': 'application/json'
    'Authorization': 'Bearer codigoDeAutentificación'
}
```

#### Body:

```
{
    activityname: MiNameActivity
    couple_lenguage1a: Amarillo
    couple_lenguage1b: Yellow
    couple_lenguage2a: Rojo
    couple_lenguage2b: Red
    couple_lenguage3a: Azul
    couple_lenguage3b: Blue
    couple_lenguage4a: Verde
    couple_lenguage4b: Green
    couple_lenguage5a: Negro
    couple_lenguage5b: Black
    couple_lenguage6a: Anaranjado
    couple_lenguage6b: Orange
    couple_lenguage7a: Blanco
    couple_lenguage7b: White
    couple_lenguage8a: Celeste
    couple_lenguage8b: Light blue
}
```

#### Response:

- 200

```
{
        "message": "Activity add"
}
```
- 400

```
{
        "message": "Invalid request"
}
```
### Obtener información de actividad parejas

#### Description

Obtiene la información de la actividad de parejas.

#### URL:
```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"/couple/"id_couple"
```
#### Headers:
```
{
    'Authorization': 'Bearer codigoDeAutentificación'
}
```

#### Response

- 200

```
{
        "message": "Complete"
}
```
- 400

```
{
        "message": "Invalid request"
}
```
### Obtener información de todas las actividad parejas

#### Description

Obtiene la información de la actividad de parejas.

#### URL:
```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"/couple/"id_couple"/all
```

### Method:

"Get"

### Parameters:

```
{
    limit: 1
    pages: 0
}
```

### Headers:
```
{
    'Authorization': 'Bearer codigoDeAutentificación'
}
```

### Response:

- 200

```
{
        "message": "Complete"
}
```

- 400

```
{
        "message": "Invalid request"
}
```