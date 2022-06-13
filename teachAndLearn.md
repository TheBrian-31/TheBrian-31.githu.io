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
    typeUser: student
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
https://api.com/teach-and-learn-v1/user/"id_user"
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
    typeUser: student
}
```

Para profesores:

```
{
    username: MiNombreDeEjemplo
    password: ContraseniaEjemplo
    typeUser: teacher
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
https://api.com/teach-and-learn-v1/user
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

### Eliminar un usuario

##### Method:

"Delete"

#### Description

Elimina la información de un usuario.

#### URL:

```
https://api.com/teach-and-learn-v1/user/"id_user"
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

### Actualizar un usuario

##### Method:

"Put"

#### Description

Actualiza la información de un usuario.

#### URL:

```
https://api.com/teach-and-learn-v1/user/"id_user"
```

#### Body
```
{
    username: MiNombreDeEjemplo
    email: EmailEjemplo
    password: ContraseniaEjemplo
    typeUser: student
}
```

#### Headers:
```
{
    'Content-Type': 'application/json'
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
https://api.com/teach-and-learn-v1/lesson
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

### Eliminar una lección

##### Method:

"Delete"

#### Description

Elimina la información de una lección

#### URL:

```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"
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

### Actualizar una lección

##### Method:

"Put"

#### Description

Actualiza la información de una lección.

#### URL:

```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"
```

#### Body
```
{
    lessonname: MiNombreDeEjemplo
    language: English
    description: The learning of colors will be developed.
    password: ContraseniaEjemplo
}
```

#### Headers:
```
{
    'Content-Type': 'application/json'
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


### Eliminar un documento

##### Method:

"Delete"

#### Description

Elimina la información de un documento

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

### Actualizar un documento

##### Method:

"Put"

#### Description

Actualiza la información de un documento

#### URL:

```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"/file/"id_file"
```

#### Body
```
{
    activityname: MiNameActivity
    linkfile: URL
    description: Support material
}
```

#### Headers:
```
{
    'Content-Type': 'application/json'
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
    question[]: arrayQuestion[]
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

### Eliminar un cuestionario

##### Method:

"Delete"

#### Description

Elimina la información de un cuestionario

#### URL:

```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"/questionnaire/"id_questionnaire"
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

### Actualizar un cuestionario

##### Method:

"Put"

#### Description

Actualiza la información de un cuestionario.

#### URL:

```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"/questionnaire/"id_questionnaire"
```

#### Body
```
{
    activityname: MiNameActivity
    question[]: arrayQuestion[]
}
```

#### Headers:
```
{
    'Content-Type': 'application/json'
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

## Entidad question

### Crear una pregunta.

#### Method:

"Post"

#### Description

Crea una nueva pregunta para la actividad cuestionario.

#### URL:
```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"/questionnaire/question
```

#### Headers:
```
{
    'Content-Type': 'application/json'
    'Authorization': 'Bearer codigoDeAutentificación'
}
```

#### Body:
- multipleChoise
```
{
        question: ¿Como se escribe amarrillo?
        type: multipleChoise 
        options: [Yellow, Black, Red, Blue]
        correctOption: 1
}
```
- openAnswer
```
{
        question: ¿Como se escribe amarrillo?
        type: openAnswer
        options: [Yellow]
        correctOption: 1
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

### Obtener información de una pregunta
#### Method:

"Get"

#### Description

Obtiene la información de la actividad de tipo cuestionario de opción multiple.

#### URL:
```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"/questionnaire/question/"id_question"
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

### Obtener información de todas las preguntas.

#### Method:

"Get"

#### Description

Obtiene la información de todas las preguntas.

#### URL:
```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"/questionnaire/question
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

### Eliminar una pregunta.

##### Method:

"Delete"

#### Description

Elimina la información de una pregunta.

#### URL:

```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"/questionnaire/question
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

### Actualizar una pregunta.

##### Method:

"Put"

#### Description

Actualiza la información de una pregunta.

#### URL:

```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"/questionnaire/question
```

#### Body:
- multipleChoise
```
{
        question: ¿Como se escribe amarrillo?
        type: multipleChoise 
        options: [Yellow, Black, Red, Blue]
        correctOption: 1
}
```
- openAnswer
{
        question: ¿Como se escribe amarrillo?
        type: openAnswer
        options: [Yellow]
        correctOption: 1
}

#### Headers:
```
{
    'Content-Type': 'application/json'
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

#### Method:

"Get"

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

### Eliminar una actividad de parejas

##### Method:

"Delete"

#### Description

Elimina la información de una actividad de parejas

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

### Actualizar una actividad de parejas

##### Method:

"Put"

#### Description

Actualiza la información de una actividad de parejas.

#### URL:

```
https://api.com/teach-and-learn-v1/lesson/"id_lesson"/couple/"id_couple"
```

#### Body
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

#### Headers:
```
{
    'Content-Type': 'application/json'
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
