# Parte 1: Investigación, Configuración del Framework y Estructuras de Control

# Investigación: Framework Flutter para el Desarrollo de Aplicaciones Móviles Híbridas

## 1. ¿Qué es Flutter?

Flutter es un framework de código abierto desarrollado y mantenido por Google que permite crear aplicaciones multiplataforma a partir de una misma base de código.

Utiliza principalmente el lenguaje de programación Dart y permite desarrollar aplicaciones para diferentes sistemas operativos.

Una característica importante de Flutter es que utiliza su propio motor gráfico para representar las interfaces mediante widgets, lo que facilita crear diseños personalizados y consistentes.

**Idea principal:**

Una base de código → múltiples plataformas.

Flutter se utiliza en el desarrollo de aplicaciones móviles, web, de escritorio y, dependiendo de la configuración, dispositivos embebidos.

---

## 2. ¿Para qué sirve Flutter?

Flutter sirve para desarrollar aplicaciones que pueden ejecutarse en diferentes plataformas utilizando gran parte del mismo código fuente.

Entre sus principales usos se encuentran:

- Desarrollar aplicaciones para Android.
- Desarrollar aplicaciones para iOS.
- Crear aplicaciones web.
- Crear aplicaciones de escritorio para Windows, macOS y Linux.
- Diseñar interfaces gráficas modernas.
- Conectar aplicaciones con servicios externos y APIs.
- Crear prototipos de manera rápida.
- Facilitar el mantenimiento del código.
- Utilizar plugins para acceder a funciones del dispositivo.

Una de sus principales ventajas es que permite reducir la necesidad de mantener proyectos completamente independientes para cada plataforma.

---

## 3. Lenguaje de programación Dart

Dart es el lenguaje de programación utilizado principalmente por Flutter. Fue desarrollado por Google y permite crear aplicaciones con una estructura organizada.

Entre sus principales características se encuentran:

- Programación orientada a objetos.
- Clases y objetos.
- Herencia.
- Funciones.
- Tipado estático.
- Programación asíncrona.
- Manejo de excepciones.
- Uso de estructuras de control.

### 3.1 Ejemplo básico de Dart

El siguiente programa muestra un mensaje en la consola:

```dart
void main() {
  print("Hola, Flutter");
}
```

En este ejemplo:

- `void` indica que la función no devuelve un valor.
- `main()` es el punto de entrada del programa.
- `print()` muestra un mensaje en la consola.
- `"Hola, Flutter"` es el texto que se imprime.

El lenguaje Dart permite implementar la lógica de una aplicación y controlar su comportamiento.

---

## 4. Componentes principales de Flutter

Flutter utiliza diferentes componentes para facilitar el desarrollo de aplicaciones.

### 4.1 Flutter SDK

El Flutter SDK es el conjunto de herramientas necesarias para crear, ejecutar, depurar y compilar aplicaciones.

Incluye comandos que permiten administrar proyectos y comprobar la configuración del entorno.

### 4.2 Widgets

Los widgets son los elementos fundamentales de las interfaces de Flutter.

Permiten construir pantallas mediante la combinación de componentes visuales.

Algunos ejemplos son:

- `Text`: muestra texto.
- `Column`: organiza elementos verticalmente.
- `Row`: organiza elementos horizontalmente.
- `Container`: permite organizar y decorar contenido.
- `Image`: muestra imágenes.
- `ElevatedButton`: crea botones.
- `Scaffold`: proporciona una estructura básica para una pantalla.
- `MaterialApp`: configura una aplicación con componentes de diseño Material.

### 4.3 Motor gráfico

Flutter utiliza un motor de renderizado que permite dibujar las interfaces de manera consistente en diferentes plataformas.

Esto facilita la creación de diseños personalizados.

### 4.4 Plugins

Los plugins permiten integrar funcionalidades específicas de los dispositivos y sistemas operativos.

Por ejemplo:

- Cámara.
- GPS.
- Bluetooth.
- Almacenamiento.
- Notificaciones.
- Sensores.

### 4.5 Hot Reload

Hot Reload permite observar rápidamente los cambios realizados en el código durante el desarrollo, sin tener que reiniciar completamente la aplicación en cada modificación.

Esta característica facilita probar diseños y corregir errores.

---

## 5. Plataformas compatibles con Flutter

Flutter permite desarrollar aplicaciones para distintas plataformas.

| Plataforma | Descripción |
|---|---|
| Android | Aplicaciones para dispositivos Android. |
| iOS | Aplicaciones para dispositivos Apple. |
| Web | Aplicaciones que se ejecutan en navegadores compatibles. |
| Windows | Aplicaciones de escritorio para Windows. |
| macOS | Aplicaciones de escritorio para macOS. |
| Linux | Aplicaciones de escritorio para Linux. |
| Dispositivos embebidos | Soporte según el dispositivo y la configuración. |

Para el desarrollo de aplicaciones móviles híbridas, las plataformas principales son Android e iOS.

Flutter permite compartir gran parte del código entre ambas plataformas, aunque algunas funcionalidades pueden requerir configuraciones específicas.

---

## 6. Características principales de Flutter

### 6.1 Desarrollo multiplataforma

Permite utilizar una misma base de código para desarrollar aplicaciones destinadas a diferentes sistemas operativos.

### 6.2 Arquitectura basada en widgets

La interfaz se construye mediante componentes que pueden combinarse y reutilizarse.

### 6.3 Interfaces personalizables

Permite modificar colores, tamaños, posiciones, botones, formularios y otros elementos visuales.

### 6.4 Buen rendimiento

Flutter permite compilar aplicaciones para las plataformas de destino y utilizar su motor gráfico para representar las interfaces.

El rendimiento final depende también de la implementación y de las características de la aplicación.

### 6.5 Programación asíncrona

Dart utiliza mecanismos como `Future`, `async` y `await`, que permiten realizar operaciones asíncronas, como consultar información de un servidor.

### 6.6 Ecosistema de paquetes

Flutter dispone de paquetes y plugins que permiten incorporar funcionalidades sin desarrollar todo desde cero.

### 6.7 Arquitectura reactiva

La interfaz puede reconstruirse cuando cambia el estado de la aplicación.

El proceso general es:

```text
Cambio de estado
       |
       v
Flutter detecta el cambio
       |
       v
Se reconstruye la interfaz necesaria
       |
       v
El usuario observa el nuevo resultado
```

---

## 7. Ventajas y desventajas de Flutter

### 7.1 Ventajas

Entre sus principales ventajas se encuentran:

- **Reutilización de código:** permite compartir gran parte del código entre plataformas.
- **Desarrollo rápido:** Hot Reload facilita probar cambios.
- **Interfaces modernas:** dispone de numerosos widgets personalizables.
- **Mantenimiento:** las modificaciones compartidas pueden realizarse en una misma base de código.
- **Documentación:** cuenta con documentación oficial y una comunidad de desarrolladores.
- **Ecosistema:** dispone de paquetes que amplían sus funcionalidades.

### 7.2 Desventajas

Flutter también presenta algunas limitaciones:

- **Tamaño de la aplicación:** puede incluir componentes adicionales del framework.
- **Curva de aprendizaje:** es necesario aprender Dart y el funcionamiento de los widgets.
- **Dependencia de plugins:** algunas funciones específicas requieren complementos o código nativo.
- **Diferencias entre plataformas:** algunas características necesitan adaptaciones para Android o iOS.
- **Consumo de recursos:** depende de la implementación y de los requisitos de la aplicación.

---

## 8. Requisitos para configurar el entorno de Flutter

Para comenzar a desarrollar aplicaciones con Flutter se necesita una computadora compatible y las herramientas necesarias para la plataforma de destino.

Los principales requisitos son:

- Flutter SDK.
- Dart SDK, incluido en el entorno de Flutter.
- Un editor de código o entorno de desarrollo integrado.
- Herramientas de compilación.
- Un dispositivo físico o emulador para realizar pruebas.

### 8.1 Visual Studio Code

Visual Studio Code es un editor que permite escribir, editar y ejecutar código Dart y Flutter.

Para trabajar con Flutter se recomienda instalar las extensiones correspondientes:

- Flutter.
- Dart.

### 8.2 Android Studio

Android Studio proporciona herramientas para desarrollar y probar aplicaciones Android.

Entre sus funciones se encuentran:

- Administración del Android SDK.
- Creación y configuración de emuladores.
- Herramientas de compilación.
- Pruebas de aplicaciones Android.

### 8.3 Configuración para iOS

El desarrollo y la compilación de aplicaciones iOS requieren las herramientas de Apple, principalmente Xcode, por lo que la compilación para esta plataforma está ligada a macOS.

---

## 9. Comandos básicos de Flutter

Flutter incluye comandos que permiten crear proyectos, comprobar la configuración y ejecutar aplicaciones.

### 9.1 Comprobar la instalación

```bash
flutter doctor
```

Este comando revisa el entorno de desarrollo e informa sobre las herramientas que están instaladas y las que necesitan configuración.

### 9.2 Crear un proyecto

```bash
flutter create mi_aplicacion
```

Este comando crea un nuevo proyecto Flutter con una estructura inicial.

### 9.3 Entrar a la carpeta del proyecto

```bash
cd mi_aplicacion
```

Permite acceder al directorio del proyecto desde la terminal.

### 9.4 Instalar dependencias

```bash
flutter pub get
```

Este comando obtiene las dependencias especificadas en el archivo `pubspec.yaml`.

### 9.5 Ejecutar la aplicación

```bash
flutter run
```

Ejecuta la aplicación en un dispositivo o emulador compatible que esté disponible.

---

## 10. Estructura básica de un proyecto Flutter

Un proyecto Flutter contiene archivos y directorios que organizan el código, las pruebas y la configuración.

Ejemplo de estructura:

```text
mi_aplicacion/
|
|-- android/
|
|-- ios/
|
|-- lib/
|   |
|   |-- main.dart
|
|-- test/
|
|-- pubspec.yaml
|
|-- README.md
```

Los elementos principales son:

- `android/`: contiene archivos de configuración para Android.
- `ios/`: contiene archivos de configuración para iOS.
- `lib/`: almacena principalmente el código fuente de Dart.
- `main.dart`: suele contener el punto de entrada de la aplicación.
- `test/`: permite organizar pruebas automatizadas.
- `pubspec.yaml`: define información del proyecto, dependencias y otros recursos.
- `README.md`: contiene información y documentación del proyecto.

### 10.1 Ejemplo de una aplicación básica

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MiAplicacion());
}

class MiAplicacion extends StatelessWidget {
  const MiAplicacion({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Mi aplicación'),
        ),
        body: const Center(
          child: Text('Hola Flutter'),
        ),
      ),
    );
  }
}
```

En este ejemplo:

- `main()` inicia el programa.
- `runApp()` coloca el widget principal en ejecución.
- `MiAplicacion` define la aplicación.
- `MaterialApp` proporciona la estructura general.
- `Scaffold` organiza los elementos de la pantalla.
- `AppBar` representa la barra superior.
- `Center` centra el contenido.
- `Text` muestra el mensaje.

---

## 11. Estructuras de control en Dart

Las estructuras de control permiten modificar el orden en que se ejecutan las instrucciones de un programa.

En Dart se utilizan para tomar decisiones, repetir instrucciones y controlar el flujo de ejecución.

Las principales categorías son:

- Estructuras secuenciales.
- Estructuras selectivas.
- Estructuras iterativas.

### 11.1 Estructura secuencial

En una estructura secuencial, las instrucciones se ejecutan una después de otra, siguiendo el orden en que aparecen en el programa.

Ejemplo:

```dart
void main() {
  int a = 10;
  int b = 5;
  int resultado = a + b;

  print(resultado);
}
```

En este ejemplo, primero se declaran las variables, después se realiza la suma y finalmente se muestra el resultado.

**Resultado:**

```text
15
```

### 11.2 Estructuras selectivas

Las estructuras selectivas permiten ejecutar diferentes instrucciones dependiendo de si se cumple una condición.

#### A) if

La instrucción `if` ejecuta un bloque cuando una condición es verdadera.

```dart
void main() {
  int edad = 20;

  if (edad >= 18) {
    print("Es mayor de edad");
  }
}
```

En este caso, como la edad es mayor o igual a 18, se muestra el mensaje.

#### B) if-else

La estructura `if-else` permite elegir entre dos alternativas.

```dart
void main() {
  int numero = 7;

  if (numero % 2 == 0) {
    print("El número es par");
  } else {
    print("El número es impar");
  }
}
```

**Resultado:**

```text
El número es impar
```

El operador `%` obtiene el residuo de una división. Si el residuo entre 2 es cero, el número es par.

#### C) else if

Se utiliza para evaluar varias condiciones.

```dart
void main() {
  int calificacion = 85;

  if (calificacion >= 90) {
    print("Excelente");
  } else if (calificacion >= 70) {
    print("Aprobado");
  } else {
    print("Reprobado");
  }
}
```

**Resultado:**

```text
Aprobado
```

#### D) switch

La estructura `switch` permite seleccionar una opción entre diferentes casos.

```dart
void main() {
  int opcion = 2;

  switch (opcion) {
    case 1:
      print("Registrar");
      break;
    case 2:
      print("Consultar");
      break;
    case 3:
      print("Eliminar");
      break;
    default:
      print("Opción no válida");
  }
}
```

**Resultado:**

```text
Consultar
```

### 11.3 Estructuras iterativas

Las estructuras iterativas permiten repetir instrucciones mientras se cumplan determinadas condiciones o durante una cantidad específica de repeticiones.

#### A) Ciclo for

El ciclo `for` se utiliza comúnmente cuando se conoce el número de repeticiones.

```dart
void main() {
  for (int i = 1; i <= 5; i++) {
    print(i);
  }
}
```

**Resultado:**

```text
1
2
3
4
5
```

La variable `i` comienza en 1 y aumenta en cada repetición hasta que la condición deja de cumplirse.

#### B) Ciclo while

El ciclo `while` repite las instrucciones mientras la condición sea verdadera.

```dart
void main() {
  int contador = 1;

  while (contador <= 3) {
    print(contador);
    contador++;
  }
}
```

**Resultado:**

```text
1
2
3
```

Es importante actualizar la variable de control para evitar que el ciclo se ejecute indefinidamente.

#### C) Ciclo do-while

El ciclo `do-while` ejecuta primero las instrucciones y después comprueba la condición. Por eso, el bloque se ejecuta al menos una vez.

```dart
void main() {
  int numero = 1;

  do {
    print(numero);
    numero++;
  } while (numero <= 3);
}
```

**Resultado:**

```text
1
2
3
```

### 11.4 Instrucciones break y continue

Estas instrucciones permiten modificar el comportamiento de los ciclos.

**break:** termina el ciclo inmediatamente.

```dart
void main() {
  for (int i = 1; i <= 5; i++) {
    if (i == 3) {
      break;
    }

    print(i);
  }
}
```

Resultado:

```text
1
2
```

**continue:** omite la iteración actual y continúa con la siguiente.

```dart
void main() {
  for (int i = 1; i <= 5; i++) {
    if (i == 3) {
      continue;
    }

    print(i);
  }
}
```

Resultado:

```text
1
2
4
5
```

---

## 12. Diferencia entre estructuras selectivas e iterativas

Las estructuras selectivas permiten elegir qué instrucciones ejecutar según una condición, mientras que las iterativas permiten repetir un bloque de instrucciones.

| Característica | Selectivas | Iterativas |
|---|---|---|
| Función | Tomar decisiones | Repetir instrucciones |
| Ejemplos | `if`, `if-else`, `switch` | `for`, `while`, `do-while` |
| Uso | Elegir entre alternativas | Repetir procesos |
| Condición | Determina qué bloque se ejecuta | Determina si continúa la repetición |

Ambas son importantes para desarrollar la lógica de una aplicación y controlar su comportamiento.

---

## 13. Ejemplo de aplicación en Flutter

Una aplicación de lista de tareas, conocida como *To-Do*, es un ejemplo de proyecto que puede desarrollarse con Flutter.

Sus funcionalidades podrían incluir:

- Registrar tareas.
- Modificar tareas.
- Eliminar tareas.
- Marcar tareas como completadas.
- Mostrar tareas pendientes.
- Guardar información localmente.

Para construir esta aplicación se pueden utilizar diferentes tecnologías:

```text
             Flutter
                |
                v
               Dart
                |
                v
              Widgets
                |
                v
      Lógica de la aplicación
                |
                v
     Almacenamiento de datos
                |
                v
        Aplicación móvil
```

Las estructuras de control permiten implementar decisiones y repeticiones. Por ejemplo, una estructura `if` puede comprobar si una tarea está completada, mientras que un ciclo permite recorrer una lista de tareas para mostrarlas en pantalla.

La aplicación puede prepararse para Android e iOS, reutilizando gran parte del código.

---

## 14. ¿Por qué Flutter es adecuado para el desarrollo multiplataforma?

Flutter es una alternativa para el desarrollo multiplataforma porque permite mantener una base de código compartida para distintos sistemas operativos.

En un desarrollo tradicional pueden existir proyectos independientes para Android y iOS.

Con Flutter se busca compartir gran parte de la implementación:

```text
            Código Flutter
                  |
                  v
              Lenguaje Dart
                  |
           +------+------+
           |             |
           v             v
        Android         iOS
```

Este enfoque puede reducir el tiempo de desarrollo y facilitar el mantenimiento.

Sin embargo, algunas funciones pueden requerir ajustes específicos para cada sistema operativo.

---

## 15. Conclusión

Flutter es un framework multiplataforma de código abierto que utiliza Dart para desarrollar aplicaciones a partir de una base de código compartida.

Su arquitectura basada en widgets, las herramientas de desarrollo, Hot Reload y su capacidad para crear aplicaciones para Android, iOS, web y escritorio lo convierten en una alternativa importante para el desarrollo multiplataforma.

La configuración del entorno permite preparar las herramientas necesarias para crear, ejecutar y probar aplicaciones. Además, conocer la estructura de un proyecto facilita organizar el código y sus dependencias.

Por otra parte, las estructuras de control son fundamentales para implementar la lógica de una aplicación. Las estructuras selectivas permiten tomar decisiones, mientras que las iterativas permiten repetir instrucciones de manera controlada.

En conjunto, Flutter y Dart permiten desarrollar aplicaciones organizadas, reutilizables y adaptables a diferentes plataformas.

---

## 16. Fuentes bibliográficas

1. Flutter. *Flutter documentation*. Documentación oficial.  
   https://docs.flutter.dev/

2. Flutter. *Build for and integrate with multiple platforms*.  
   https://docs.flutter.dev/platform-integration

3. Flutter. *Widget catalog*.  
   https://docs.flutter.dev/ui/widgets

4. Flutter. *Flutter: Build beautiful, multi-platform apps*. Repositorio oficial en GitHub.  
   https://github.com/flutter/flutter

5. Flutter. *Flutter packages*. Repositorio oficial de paquetes.  
   https://github.com/flutter/packages

6. Dart. *Dart documentation*. Documentación oficial del lenguaje.  
   https://dart.dev/

---

## Revisión de la investigación

- [x] Investigación del framework Flutter.
- [x] Descripción del lenguaje Dart.
- [x] Identificación de los componentes principales.
- [x] Plataformas compatibles.
- [x] Ventajas y desventajas.
- [x] Requisitos de instalación y configuración.
- [x] Comandos básicos de Flutter.
- [x] Estructura de un proyecto.
- [x] Ejemplos de estructuras de control.
- [x] Aplicación práctica de los conceptos.
- [x] Conclusión.
- [x] Fuentes bibliográficas.
