## Proyecto Nestor y María

Este proyecto consta de una página principal **index.html** desde la cual podemos acceder a una página html **nosotros.html** que contiene información sobre nosotros y 
a otra página **formulario.html** para rellenar un formulario con nombre, email y mensaje que se procesará mediante javascript **controlador.js** esta información se guardará en las cookies del navegador y también en el localStorage.

```markdown
Para llevar a cabo este proyecto hemos utilizado diferentes ramas:
-Doc: rama en la que se encuentra la documentación del proyecto
-Release: rama en la que se encuentran versiones finales y 
 estables para el cliente
-Master: rama en la que se encuentran versiones estables del código, 
 marcando con tags aquellas importantes.
-Dev: rama para llevar a cabo el desarrollo del proyecto
    -Index: rama para el desarrollo del archivo index.html
    -Estilos: rama para el desarrollo del estilo de las páginas
     html
    -Nosotros: rama para el desarrollo del archivo nosotros.html
    -Contacto: rama para llevar a cabo el desarrollo del formulario 
     con javascript
        -Formulario: rama para el desarrollo del archivo formulario.html
        -Controlador: rama para el desarrollo del archivo controlador.js
```
La rama **dev** es aquella donde hemos llevado a cabo el desarrollo  del proyecto por lo que a partir de esta hemos creado las ramas necesarias (index, css, nosotros, contacto) y hemos ido fusionandolas (con un merge) con la rama dev cuando todo estaba correcto. De esta manera la creación de ramas nos permite que los diferentes miembros del proyecto puedan trabajar a la vez y fusionar el trabajo de ambos cuando cada uno haya finalizado su parte. 
Inicialmente hemos realizado las páginas html y css repartiendonos el trabajo a iguales, cuando ambos hicimos estas partes las fusionamos con la rama dev para comprobar que funcionaba todo correctamente tanto el css como los enlaces a las páginas.


Para crear las ramas:
**git branch nombre_rama (index|estilos|nosotros)**

Para movernos a ella: 
**git checkout nombre_rama (index|estilos|nosotros)**

Ya situados en la rama, añadimos los archivos desde el visual o desde el terminal.
Una vez realizado el trabajo lo añadimos al staging area y cuando estamos seguros de que todo está correcto realizamos un commit:

**git add nombre_archivo.html/css  o git add .**

**git commit -m "Nombre significativo commit"**

Una vez el trabajo en la rama está finalizado toca fusionarlo con la rama dev, para ello tenemos que movernos a ella con:

**git checkout dev**

Y realizar un merge para traernos el trabajo realizado en las diferentes ramas a la rama desarrollo.

**git merge nombre_rama (index/estilos/nosotros)**


--------------------------------------


Después seguimos con la realización de la parte del formulario, para ello creamos una rama contacto y dentro de la rama contacto una rama para el formulario y otra para el controlador, la rama contacto es para asegurarnos que la fusión de ambas partes sea correcta antes de fusionarla con la dev.

Creamos la rama contacto:
**git branch contacto**

Nos movemos a ella:
**git checkout contacto**

Y creamos las ramas formulario y controlador

**git branch nombre_rama (formulario/controlador)**


Nos movemos a las ramas:
**git checkout nombre_rama (formulario|controlador)**

En estas ramas creamos los archivos correspondientes formulario.html en la rama formulario y controlador.js en la rama controlador
Realizamos el código y una vez finalizado lo añadimos y realizamos un commit

**git add nombre_archivo.html/js o git add .**

**git commit -m "Nombre significativo del commit"**

Una vez realizado el trabajo en estas dos ramas, nos movemos a la rama contacto para fusionar ambas

**git checkout contacto**

**git merge formulario**

**git merge controlador**

Asegurados de que funciona correctamente fusionamos esta rama con la rama dev, para ello nos movemos a la rama dev y hacemos un merge

**git checkout dev**

**git merge contacto**

------------------------------------


Una vez nuestra rama desarrollo está completa nos llevamos el trabajo a la rama master fusionandolas:

**git checkout master**

**git merge dev**


------------------------------------

Después asegurandonos que es una de las versiones finales para que vea el cliente la pasamos a la rama release:

**git checkout release**

**git merge master**

------------------------------------

Por último la rama de documentación que recoge la ubicación de este archivo y con ello toda la documentación del proyecto.
Hemos utilizado github pages para no tener que dar estilos a nuestra documentación.


-----------------------------------
### El trabajo ha sido repartido de manera equitativa por una parte la realización de los html y el formulario y por otra la realización del css y la parte de javascript del formulario almacenando los datos en cookies y localstorage.



