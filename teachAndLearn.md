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
https://teachandlearn-api.herokuapp.com
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
https://teachandlearn-api.herokuapp.com/user
```

#### Headers:
```
{
        "Content-Type": "application/json"
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM3OGIxNWVlODE2OTdiOWI1OWUxOTciLCJpYXQiOjE2NTcyNDQ0MzcsImV4cCI6MTY1NzQxNzIzN30.9yeXczi-X4_FGSrJi6DXAIeHlNo1HODNF02e81cENto"
}
```

#### Body:

Para teacher:

```
{
	"name": "MyUser1",
	"email": "myUser1@gmail.com",
	"password": "contra12345"
}
```

Para admins:

```
{
	"name": "nuevoUserAdmin1",
	"email": "nuevoAdmin1@gmail.com",
	"password": "contraAdmin12345",
	"typeUser": "Admin"
}
```

#### Response
- 201
```
{
	"name": "nuevoUserAdmin1",
	"email": "nuevoAdmin1@gmail.com",
	"password": "$2b$10$mnqbU1uQuGx.8T04JAr4JOJ4XbRJxqI3NcoEsfxyJPLUtPeFcCog2",
	"typeUser": "Admin",
	"lesson": [],
	"_id": "62c78b80ee81697b9b59e19d",
	"__v": 0
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

Obtiene la información de un usuario con el id.

#### URL:

```
https://teachandlearn-api.herokuapp.com/user/62c78b80ee81697b9b59e19d
```

#### Headers:
```
{
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM3OGIxNWVlODE2OTdiOWI1OWUxOTciLCJpYXQiOjE2NTcyNDQ0MzcsImV4cCI6MTY1NzQxNzIzN30.9yeXczi-X4_FGSrJi6DXAIeHlNo1HODNF02e81cENto"
}
```

#### Response
- 200
```
{
	"_id": "62c78b80ee81697b9b59e19d",
	"name": "nuevoUserAdmin1",
	"email": "nuevoAdmin1@gmail.com",
	"password": "$2b$10$mnqbU1uQuGx.8T04JAr4JOJ4XbRJxqI3NcoEsfxyJPLUtPeFcCog2",
	"typeUser": "Admin",
	"lesson": [],
	"__v": 0
}
```
- 400
```
{
	"message": "The id does not exist or is not correct."
}
```

### Obtener todos los usuarios

#### Method:

"Get"

#### Description

Obtiene la información del todos los usuarios.

#### URL:

```
https://teachandlearn-api.herokuapp.com/user?page=1&limit=
```

#### Headers:
```
{
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM3OGIxNWVlODE2OTdiOWI1OWUxOTciLCJpYXQiOjE2NTcyNDQ0MzcsImV4cCI6MTY1NzQxNzIzN30.9yeXczi-X4_FGSrJi6DXAIeHlNo1HODNF02e81cENto"
}
```
#### Response:
- 200
```
{
	"count": 4,
	"nextPag": "/user?page=2&limit=2",
	"prevPag": null,
	"data": [
		{
			"_id": "62be86a424ecea11fa2857b5",
			"name": "Josue",
			"email": "josue2@gmail.com",
			"password": "$2b$10$eskTmls88GH9BisJ.owyz.J1FrfCvKRf70eCBOh0gOaOQ/rnrvIfi",
			"typeUser": "Admin",
			"lesson": [],
			"__v": 0
		},
		{
			"_id": "62c78a5eee81697b9b59e18f",
			"name": "MyUser1",
			"email": "myUser1@gmail.com",
			"password": "$2b$10$AOqN8hk8LY/graKoYUgpFObmYNvjpN8wGI8MQYNxtqA/yrNhY23Ua",
			"typeUser": "Teacher",
			"lesson": [],
			"__v": 0
		}
	]
}
```
- 401
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
https://teachandlearn-api.herokuapp.com/user
```

#### Body:
```
{
		"_id": "62c78b80ee81697b9b59e19d"
}
```

#### Headers:
```
{
        "Content-Type": "application/json"
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM3OGIxNWVlODE2OTdiOWI1OWUxOTciLCJpYXQiOjE2NTcyNDQ0MzcsImV4cCI6MTY1NzQxNzIzN30.9yeXczi-X4_FGSrJi6DXAIeHlNo1HODNF02e81cENto"
}
```

#### Response:
- 200
```
{
	"message": "User delete."
}
```
- 400
```
{
	"message": "Invalid request."
}
```

### Actualizar un usuario

##### Method:

"Ptch"

#### Description

Actualiza la información de un usuario.


#### URL:
```
https://teachandlearn-api.herokuapp.com/user
```

#### Body:
```
{
		"_id": "62be86a424ecea11fa2857b5",
		"name": "Josue",
		"email": "josue2@gmail.com",
		"password": "Hola12345"
}
```

#### Headers:
```
{
        "Content-Type": "application/json"
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM3OGIxNWVlODE2OTdiOWI1OWUxOTciLCJpYXQiOjE2NTcyNDQ0MzcsImV4cCI6MTY1NzQxNzIzN30.9yeXczi-X4_FGSrJi6DXAIeHlNo1HODNF02e81cENto"
}
```

#### Response:
- 200
```
{
	"_id": "62be86a424ecea11fa2857b5",
	"name": "Josue",
	"email": "josue2@gmail.com",
	"password": "$2b$10$5dRDRwcMit19RENqjcdwjunzCkjGD.VfZhCxZTEZqFsjNR1vokne.",
	"typeUser": "Admin",
	"lesson": [],
	"__v": 0
}
```
- 401
```
{
	"message": "There is no user with this token."
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
https://teachandlearn-api.herokuapp.com/lesson
```

#### Headers:
```
{
        "Content-Type": "application/json"
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM3OGIxNWVlODE2OTdiOWI1OWUxOTciLCJpYXQiOjE2NTcyNDQ0MzcsImV4cCI6MTY1NzQxNzIzN30.9yeXczi-X4_FGSrJi6DXAIeHlNo1HODNF02e81cENto"
}
```

#### Body:

```
{
	"lessonName": "My lesson 1:",
	"language": "Frances",
	"description": "Apprends le français.",
	"privacy": "Private",
	"password": "Holaa"
}
```

#### Response:

- 200
```
{
	"lessonName": "My lesson 1:",
	"language": "Frances",
	"description": "Apprends le français.",
	"privacy": "Private",
	"password": "$2b$10$H1LJ/d1gVMfpgR4O75pWcuJ1IWOsWUWqXEWPEAT1allTJycKcNQIy",
	"couple": [],
	"file": [],
	"questionnaire": [],
	"_id": "62c7928aee81697b9b59e1f5",
	"__v": 0
}
```
- 400
```
{
        "message": "Invalid request"
}
```

### Obtener información de lección.

#### Method:

"Get"

#### Description

Obtiene la información de la lección.

#### URL:
```
https://teachandlearn-api.herokuapp.com/lesson/62c7928aee81697b9b59e1f5
```

#### Headers:
```
{
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM3OGIxNWVlODE2OTdiOWI1OWUxOTciLCJpYXQiOjE2NTcyNDQ0MzcsImV4cCI6MTY1NzQxNzIzN30.9yeXczi-X4_FGSrJi6DXAIeHlNo1HODNF02e81cENto"
}
```


#### Response

- 200

```
{
	"_id": "62c7928aee81697b9b59e1f5",
	"lessonName": "My lesson 1:",
	"language": "Frances",
	"description": "Apprends le français.",
	"privacy": "Private",
	"password": "$2b$10$H1LJ/d1gVMfpgR4O75pWcuJ1IWOsWUWqXEWPEAT1allTJycKcNQIy",
	"couple": [],
	"file": [],
	"questionnaire": [],
	"__v": 0
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
https://teachandlearn-api.herokuapp.com/lesson?page=1&limit=14
```

#### Headers:
```
{
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM3OGIxNWVlODE2OTdiOWI1OWUxOTciLCJpYXQiOjE2NTcyNDQ0MzcsImV4cCI6MTY1NzQxNzIzN30.9yeXczi-X4_FGSrJi6DXAIeHlNo1HODNF02e81cENto"
}
```
#### Response:
- 200
```
{
	"count": 2,
	"nextPag": null,
	"prevPag": null,
	"data": [
		{
			"_id": "62c791b9ee81697b9b59e1d7",
			"lessonName": "My lesson 1:",
			"language": "Frances",
			"description": "Apprends le français.",
			"privacy": "Private",
			"password": "$2b$10$G1bklGE3SHQqTeaHgxwjlOmqfpmHtE1.urxBSFZns8jEQ0gZ/B8gC",
			"couple": [],
			"file": [],
			"questionnaire": [],
			"__v": 0
		},
		{
			"_id": "62c7928aee81697b9b59e1f5",
			"lessonName": "My lesson 1:",
			"language": "Frances",
			"description": "Apprends le français.",
			"privacy": "Private",
			"password": "$2b$10$H1LJ/d1gVMfpgR4O75pWcuJ1IWOsWUWqXEWPEAT1allTJycKcNQIy",
			"couple": [],
			"file": [],
			"questionnaire": [],
			"__v": 0
		}
	]
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
https://teachandlearn-api.herokuapp.com/lesson/"id_lesson"
```

#### Body:
```
{
        "_id": "62c7928aee81697b9b59e1f5"
}
```

#### Headers:
```
{
        "Content-Type": "application/json"
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM3OGIxNWVlODE2OTdiOWI1OWUxOTciLCJpYXQiOjE2NTcyNDQ0MzcsImV4cCI6MTY1NzQxNzIzN30.9yeXczi-X4_FGSrJi6DXAIeHlNo1HODNF02e81cENto"
}
```
#### Response:
- 200
```
{
	"message": "Lesson delete."
}
```
- 400
```
{
        "message": "Invalid request."
}
```

### Actualizar una lección

##### Method:

"Ptch"

#### Description

Actualiza la información de una lección.

#### URL:

```
https://teachandlearn-api.herokuapp.com/lesson/62c791b9ee81697b9b59e1d7
```

#### Body
```
{
	"_id": "62c791b9ee81697b9b59e1d7",
	"lessonName": "Aprende verb to be.",
	"language": "Ingles",
	"description": "Verbo to be ",
	"privacy": "Public"
}
```

#### Headers:
```
{
        "Content-Type": "application/json"
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM3OGIxNWVlODE2OTdiOWI1OWUxOTciLCJpYXQiOjE2NTcyNDQ0MzcsImV4cCI6MTY1NzQxNzIzN30.9yeXczi-X4_FGSrJi6DXAIeHlNo1HODNF02e81cENto"
}
```

#### Response:
- 200
```
{
	"_id": "62c791b9ee81697b9b59e1d7",
	"lessonName": "Aprende verb to be.",
	"language": "Ingles",
	"description": "Verbo to be ",
	"privacy": "Public",
	"password": "$2b$10$G1bklGE3SHQqTeaHgxwjlOmqfpmHtE1.urxBSFZns8jEQ0gZ/B8gC",
	"couple": [],
	"file": [],
	"questionnaire": [],
	"__v": 0
}
```
- 400
```
{
        "message": "Invalid request"
}
```

## Entidad file

### Crear file

#### Method:

"Post"

#### Description

Crea una nueva actvidad de documento.

#### URL:

```
https://teachandlearn-api.herokuapp.com/lesson/62be6c332dce739119e49dd4/file
```

#### Headers:
```
{
        "Content-Type": "application/json"
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM3OGIxNWVlODE2OTdiOWI1OWUxOTciLCJpYXQiOjE2NTcyNDQ0MzcsImV4cCI6MTY1NzQxNzIzN30.9yeXczi-X4_FGSrJi6DXAIeHlNo1HODNF02e81cENto"
}
```

#### Body:

```
{
    "activityName": "Dos activity par",
    "description": "Video de verbos",
		"urlFile": "https://www.youtube.com/"
}
```

#### Response:

- 200
```
{
	"activityName": "Dos activity par",
	"description": "Video de verbos",
	"urlFile": "https://www.youtube.com/",
	"_id": "62c795ecee81697b9b59e216",
	"__v": 0
}
```
- 400
```
{
	"message": "Error in id lesson."
}
```
### Obtener información de documento

#### Method:

"Get"

#### Description

Obtiene la información de la actividad de documento.

#### URL:
```
https://teachandlearn-api.herokuapp.com/lesson/62c791b9ee81697b9b59e1d7/file/62c795ecee81697b9b59e216
```

#### Headers:
```
{
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM3OGIxNWVlODE2OTdiOWI1OWUxOTciLCJpYXQiOjE2NTcyNDQ0MzcsImV4cCI6MTY1NzQxNzIzN30.9yeXczi-X4_FGSrJi6DXAIeHlNo1HODNF02e81cENto"
}
```

#### Response

- 200

```
{
	"_id": "62c795ecee81697b9b59e216",
	"activityName": "Dos activity par",
	"description": "Video de verbos",
	"urlFile": "https://www.youtube.com/",
	"__v": 0
}
```
- 400

```
{
	"message": "The activity does not exist or is not correct."
}
```
### Obtener información de todos los documento

#### Method:

"Get"

#### Description

Obtiene la información de la actividad de documento.

#### URL:
```
https://teachandlearn-api.herokuapp.com/lesson/"id_lesson"/file/all
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
/lesson/62ba9e36a9a20eb2c1e0e534/file/62ba9e85a9a20eb2c1e0e540
```
#### Headers:
```
{
        "Content-Type": "application/json"
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM3OGIxNWVlODE2OTdiOWI1OWUxOTciLCJpYXQiOjE2NTcyNDQ0MzcsImV4cCI6MTY1NzQxNzIzN30.9yeXczi-X4_FGSrJi6DXAIeHlNo1HODNF02e81cENto"
}
```
#### Response:
- 200
```
{
	"message": "Activivity File delete."
}
```
- 401
```
{
	"message": "Wrong or invalid token."
}
```

### Actualizar un documento

##### Method:

"Ptch"

#### Description

Actualiza la información de un documento

#### URL:

```
https://teachandlearn-api.herokuapp.com/lesson/"id_lesson"/file/"id_file"
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
https://teachandlearn-api.herokuapp.com/lesson/62c791b9ee81697b9b59e1d7/questionnaire
```

#### Headers:
```
{
        "Content-Type": "application/json"
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM3OGIxNWVlODE2OTdiOWI1OWUxOTciLCJpYXQiOjE2NTcyNDQ0MzcsImV4cCI6MTY1NzQxNzIzN30.9yeXczi-X4_FGSrJi6DXAIeHlNo1HODNF02e81cENto"
}
```

#### Body:

```
{
    "activityName": "Quiz",
	   "query_1": "What do you want to ask?",
    "answer_1": "Response 1",
		   "query_2": "What do you want to ask?",
    "answer_2": "Response 2",
		   "query_3": "What do you want to ask?",
    "answer_3": "Response 3"
}
```

#### Response:

- 200
```
{
	"activityName": "Quiz",
	"query_1": "What do you want to ask?",
	"answer_1": "Response 1",
	"query_2": "What do you want to ask?",
	"answer_2": "Response 2",
	"query_3": "What do you want to ask?",
	"answer_3": "Response 3",
	"_id": "62c79882ee81697b9b59e230",
	"__v": 0
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
https://teachandlearn-api.herokuapp.com/lesson/62ba9e36a9a20eb2c1e0e534/questionnaire/62ba9e85a9a20eb2c1e0e540
```

#### Headers:
```
{
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM3OGIxNWVlODE2OTdiOWI1OWUxOTciLCJpYXQiOjE2NTcyNDQ0MzcsImV4cCI6MTY1NzQxNzIzN30.9yeXczi-X4_FGSrJi6DXAIeHlNo1HODNF02e81cENto"
}
```

#### Response

- 200

```
{
	"activityName": "Quiz",
	"query_1": "What do you want to ask?",
	"answer_1": "Response 1",
	"query_2": "What do you want to ask?",
	"answer_2": "Response 2",
	"query_3": "What do you want to ask?",
	"answer_3": "Response 3",
	"_id": "62c79882ee81697b9b59e230",
	"__v": 0
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
https://teachandlearn-api.herokuapp.com/lesson/"id_lesson"/questionnaire/all
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
https://teachandlearn-api.herokuapp.com/lesson/62ba9e36a9a20eb2c1e0e534/questionnaire/62ba9e85a9a20eb2c1e0e540
```
#### Headers:
```
{
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM3OGIxNWVlODE2OTdiOWI1OWUxOTciLCJpYXQiOjE2NTcyNDQ0MzcsImV4cCI6MTY1NzQxNzIzN30.9yeXczi-X4_FGSrJi6DXAIeHlNo1HODNF02e81cENto"
}
```

#### Response:
- 200
```
{
	"message": "Activivity questionnaire delete."
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

"Ptch"

#### Description

Actualiza la información de un cuestionario.

#### URL:

```
https://teachandlearn-api.herokuapp.com/lesson/"id_lesson"/questionnaire/"id_questionnaire"
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


## Entidad parejas

### Crear una actividad de parejas

#### Method:

"Post"

#### Description

Crea una nueva actividad de parejas.

#### URL:
```
https://teachandlearn-api.herokuapp.com/lesson/62c791b9ee81697b9b59e1d7/couple
```

#### Headers:
```
{
        "Content-Type": "application/json"
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM3OGIxNWVlODE2OTdiOWI1OWUxOTciLCJpYXQiOjE2NTcyNDQ0MzcsImV4cCI6MTY1NzQxNzIzN30.9yeXczi-X4_FGSrJi6DXAIeHlNo1HODNF02e81cENto"
}
```

#### Body:

```
{
    "activityName": "Dos activity par",
    "Phrase_1": "Black",
    "Translation_1": "Negro",
    "Phrase_2": "Blue",
    "Translation_2": "Azul",
    "Phrase_3": "Red",
    "Translation_3": "Rojo",
    "Phrase_4": "White",
    "Translation_4": "Blanco"
}
```

#### Response:

- 200

```
{
	"activityName": "Dos activity par",
	"Phrase_1": "Black",
	"Translation_1": "Negro",
	"Phrase_2": "Blue",
	"Translation_2": "Azul",
	"Phrase_3": "Red",
	"Translation_3": "Rojo",
	"Phrase_4": "White",
	"Translation_4": "Blanco",
	"_id": "62c79b34ee81697b9b59e23c",
	"__v": 0
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
https://teachandlearn-api.herokuapp.com/lesson/62c791b9ee81697b9b59e1d7/couple/62c79b34ee81697b9b59e23c
```

#### Headers:
```
{
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM3OGIxNWVlODE2OTdiOWI1OWUxOTciLCJpYXQiOjE2NTcyNDQ0MzcsImV4cCI6MTY1NzQxNzIzN30.9yeXczi-X4_FGSrJi6DXAIeHlNo1HODNF02e81cENto"
}
```

#### Response

- 200

```
{
	"activityName": "Dos activity par",
	"Phrase_1": "Black",
	"Translation_1": "Negro",
	"Phrase_2": "Blue",
	"Translation_2": "Azul",
	"Phrase_3": "Red",
	"Translation_3": "Rojo",
	"Phrase_4": "White",
	"Translation_4": "Blanco",
	"_id": "62c79b34ee81697b9b59e23c",
	"__v": 0
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
https://teachandlearn-api.herokuapp.com/lesson/"id_lesson"/couple/"id_couple"/all
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
https://teachandlearn-api.herokuapp.com/lesson/62c791b9ee81697b9b59e1d7/couple/62c79b34ee81697b9b59e23c
```
#### Headers:
```
{
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM3OGIxNWVlODE2OTdiOWI1OWUxOTciLCJpYXQiOjE2NTcyNDQ0MzcsImV4cCI6MTY1NzQxNzIzN30.9yeXczi-X4_FGSrJi6DXAIeHlNo1HODNF02e81cENto"
}
```
#### Response:
- 200
```
{
	"message": "Activivity couple delete."
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

"Ptch"

#### Description

Actualiza la información de una actividad de parejas.

#### URL:

```
https://teachandlearn-api.herokuapp.com/lesson/"id_lesson"/couple/"id_couple"
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
