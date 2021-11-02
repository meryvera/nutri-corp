import { fb } from "./firebase.js";

export const loginUser = (email, password) => {
  // Acceso a la información del usuario en el servicio de autenticación
  const user = fb.auth();
  // Usuarios existentes puedan acceder con su dirección de correo electrónico y una contraseña
  return user.signInWithEmailAndPassword(email, password);
};

// Salir de sesión de un usuario
export const logOut = () => fb.auth().signOut();