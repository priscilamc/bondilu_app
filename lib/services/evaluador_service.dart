import '../models/mascota.dart';

class EvaluadorService {
  final List<Mascota> mascotas = [
    Mascota(nombre: 'Luna', especie: 'Perro', edad: 3, vacunado: true),
    Mascota(nombre: 'Albóndiga', especie: 'Gato', edad: 1, vacunado: true),
    Mascota(nombre: 'Max', especie: 'Perro', edad: 5, vacunado: false),
    Mascota(nombre: 'Toby', especie: 'Perro', edad: 2, vacunado: true),
  ];

  // Estructuras FOR + IF / IF-ELSE
  List<String> evaluarEdad(int edadBuscada) {
    List<String> resultados = [];

    for (int i = 0; i < mascotas.length; i++) {
      var mascota = mascotas[i];
      if (mascota.edad >= edadBuscada) {
        if (mascota.vacunado) {
          resultados.add('${mascota.nombre} (${mascota.especie}) - ${mascota.edad} años: Listo para adopción.');
        } else {
          resultados.add('${mascota.nombre} (${mascota.especie}) - ${mascota.edad} años: Pendiente de vacuna.');
        }
      } else {
        resultados.add('${mascota.nombre} - No cumple con la edad mínima.');
      }
    }
    return resultados;
  }

  // Estructura WHILE
  List<String> obtenerExpedientes() {
    List<String> expedientes = [];
    int contador = 0;

    while (contador < mascotas.length) {
      expedientes.add('Expediente #${contador + 1}: ${mascotas[contador].nombre} registrado en Bondilu.');
      contador++;
    }
    return expedientes;
  }
}