// ignore_for_file: prefer_const_constructors, camel_case_types, library_private_types_in_public_api

import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  _loginState createState() => _loginState();
}

class _loginState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(child: Text("login")),
    );
  }
}
