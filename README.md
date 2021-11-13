Week 7 - Challenge WeekEnd

Red social

Crea una red social con React. La aplicación sólo se puede usar estando logueado (en abierto únicamente se puede ver login y registro), y una vez iniciada la sesión, el usuario puede ver un listado de otros usuarios de la red.

El usuario podrá editar su perfil.

De cada usuario podrá ver su perfil, y podrá añadirlo como amigo o como enemigo (o cambiar entre ambos).

En el listado de usuarios debe poder haber un filtro para enseñarlos todos, o sólo los amigos, o sólo los enemigos. El listado debe mostrar el total de usuarios (o amigos/enemigos si se ha usado el filtro).

La red social consumirá los datos de una API desarrollada con Express, conectada a una base de datos en MongoDB. La validación de usuario se implementará mediante JWT.

La API almacenará las imágenes en el propio servidor, enviando una copia al storage de Firebase.

La API mantendrá un log de todas las relaciones, almacenado en un archivo de texto en el servidor. Cada vez que se cree o destruya una relación (de cualquiera de los dos tipos), se debe añadir una línea al log, con uno de estos tres formatos:

New relationship: Luis & Marta (friends)

New relationship: Luis & Marta (enemies)

Removed relationship: Luis & Marta

- components

  - header
    - if user logged in, shows buttons 'log out', 'my perfil'
  - footer
  - login form
  - editUserDataForm will be used as a register form and edit profile form

- pages

  - login/register page
  - All users page with filters(friend/enemy/all)
  - Details of the user perfil

- redux

  - actions
    - actionCreator
    - actionTypes
  - reducers
    - index.js (rootReducer)
    - usersReducer
  - store
    - index.js (configureStore)
  - thunks
    - usersThunks.js

- hooks
  -useUsers.js
