import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";


// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD0Im_ROxNZcWaBhj9w4Ncrh7MOELnWZGE",
  authDomain: "naviway-database.firebaseapp.com",
  projectId: "naviway-database",
  storageBucket: "naviway-database.appspot.com",
  messagingSenderId: "35224588554",
  appId: "1:35224588554:web:8a44a81de4c5820a2c2af3",
  measurementId: "G-MTB3GZZZ9N"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


// Función para registrar usuarios
export async function registrar() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email) {
    alert('Por favor, ingresa un correo electrónico.');
    return;
  }

  if (!password) {
    alert('Por favor, ingresa una contraseña.');
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('Usuario registrado:', userCredential.user);
    alert('Usuario registrado exitosamente');
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    alert('Error al registrar el usuario: ' + error.message);
  }
}

// Función para iniciar sesión de usuarios
export async function inicio() {
  const email2 = document.getElementById('email2').value;
  const password2 = document.getElementById('password2').value;

  if (!email2) {
    alert('Por favor, ingresa un correo electrónico.');
    return;
  }

  if (!password2) {
    alert('Por favor, ingresa una contraseña.');
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email2, password2);
    console.log('Usuario iniciado:', userCredential.user);
    alert('Inicio de sesión exitoso');
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    alert('Error al iniciar sesión: ' + error.message);
  }
}

// Asegúrate de que las funciones estén disponibles globalmente
window.registrar = registrar;
window.inicio = inicio;
