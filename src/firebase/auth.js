import {fire} from "./firebase";

export const loginUser = (email, password) => {
  // Acceso a la información del usuario en el servicio de autenticación
  const user = fire.auth();
  // Usuarios existentes puedan acceder con su dirección de correo electrónico y una contraseña
  return user.signInWithEmailAndPassword(email, password);
};
