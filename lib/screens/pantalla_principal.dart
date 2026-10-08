import 'package:flutter/material.dart';
import '../services/evaluador_service.dart';

class PantallaPrincipal extends StatefulWidget {
  const PantallaPrincipal({super.key});

  @override
  State<PantallaPrincipal> createState() => _PantallaPrincipalState();
}

class _PantallaPrincipalState extends State<PantallaPrincipal> {
  final TextEditingController _edadController = TextEditingController();
  final EvaluadorService _evaluadorService = EvaluadorService();

  List<String> _analisisMascotas = [];
  List<String> _expedientesMascotas = [];

  void _evaluarMascotas() {
    int edadBuscada = int.tryParse(_edadController.text) ?? 0;

    setState(() {
      _analisisMascotas = _evaluadorService.evaluarEdad(edadBuscada);
      _expedientesMascotas = _evaluadorService.obtenerExpedientes();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Bondilu - Bienestar Animal'),
        backgroundColor: Colors.deepOrange,
        foregroundColor: Colors.white,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              TextField(
                controller: _edadController,
                keyboardType: TextInputType.number,
                decoration: const InputDecoration(
                  labelText: 'Ingrese la edad mínima deseada',
                  border: OutlineInputBorder(),
                  prefixIcon: Icon(Icons.pets),
                ),
              ),
              const SizedBox(height: 12),
              ElevatedButton.icon(
                onPressed: _evaluarMascotas,
                icon: const Icon(Icons.search),
                label: const Text('Buscar en Bondilu'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.deepOrange,
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(vertical: 12),
                ),
              ),
              const SizedBox(height: 20),
              if (_analisisMascotas.isNotEmpty) ...[
                const Text(
                  'Resultado de evaluación (if / if-else / for):',
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                ),
                const SizedBox(height: 8),
                ..._analisisMascotas.map((item) => Card(
                      child: ListTile(
                        leading: const Icon(Icons.check_circle, color: Colors.deepOrange),
                        title: Text(item),
                      ),
                    )),
                const SizedBox(height: 20),
              ],
              if (_expedientesMascotas.isNotEmpty) ...[
                const Text(
                  'Registro de expedientes (while):',
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                ),
                const SizedBox(height: 8),
                ..._expedientesMascotas.map((exp) => Card(
                      color: Colors.orange.shade50,
                      child: ListTile(
                        leading: const Icon(Icons.folder, color: Colors.deepOrange),
                        title: Text(exp),
                      ),
                    )),
              ],
            ],
          ),
        ),
      ),
    );
  }
}