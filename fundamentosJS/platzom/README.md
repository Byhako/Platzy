# Platzom

Idioma inventado para el curso de [Fundamentos de JavaScript](https://platzy.com/js) de [Platzy](https://platzy.com).
 
## Descripción del idioma.

+ Si la palabra termina en "ar" se le quitan.
+ Si la palabra inicia con z, se añade "pe" al final.
+ Si la palabra tiene 10 o mas letras se parte a la mitad, y se une con un guion.
+ Si es un palindromo, se retorna la misma palabra intercalando mayusculas y minusculas.

## Instalación.

```
npm install platzom
```

## Uso

```
import platzom from 'platzom';

platzom('Programar'); // Program
```

## Creditos.

- [Sacha Lifszyc](http://twiter.com/@slifszyc)

## Licencia

[MIT](https://opensource.org/licenses/MIT)