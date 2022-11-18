## E-commerce App | (Demo en proceso)

### _Aplicación de tienda virtual_

Este proyecto fue migrado de CRA a VITE, y refactorizado varias veces mientras iba aprendiendo nuevas cosas, los commits de este repositorio empiezan cuando el poyecto fue migrado a VITE.

Funcionalmente está en un 90% terminado pero visualmente deja mucho que desear, es por eso que aún no está presente la demo, falta acomodar varias y resolver varios bugs.

Este proyecto es parte del que al principio fue uno mucho más grande pero decidí dividir su frontend en dos partes para que todo quede mucho más ordenado, facil de mantener y de realizar cambios, el proyecto en si es un e-commerce el cuál consta de las siguientes partes:

- Frontend del usuario, e-commerce en si.
    * React js.
    * Redux toolkit (acciones mediante custom hooks).
- Frontend del administrador/moderador.
    * React js.
    * Redux toolkit (acciones mediante custom hooks).
- Backend.
    * Node js - Express.
    * MongoDb - Mongoose.


## Installation



Primero instalamos las dependencias y luego iniciamos el servidor local.

```sh
$ git clone https://github.com/lucasgojeda/eccomerce-app-frontend-vite.git
$ cd eccomerce-app-frontend-vite
$ npm i
$ npm run dev
```

Cabe destacar que debemos contar con la siguiente variable de entorno configurada.

```sh
VITE_REACT_APP_API_URL= 'Backend URL'
```




