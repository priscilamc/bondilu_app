import 'package:flutter/material.dart';
import 'screens/pantalla_principal.dart';

void main() {
  runApp(const BondiluApp());
}

class BondiluApp extends StatelessWidget {
  const BondiluApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Bondilu',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepOrange),
        useMaterial3: true,
      ),
      home: const PantallaPrincipal(),
    );
  }
}