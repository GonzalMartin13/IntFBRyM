export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.trim()) {
      return 'El email no puede estar vacío';
    } else if (!emailRegex.test(email)) {
      return 'El email no es válido';
    } else if (email.length > 35) {
      return 'El email no puede tener más de 35 caracteres';
    }
    return null; // No hay error
  };
  
  export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d).{6,10}$/;
    if (!password.trim()) {
      return 'La contraseña no puede estar vacía';
    } else if (!passwordRegex.test(password)) {
      return 'La contraseña debe tener entre 6 y 10 caracteres y al menos un número';
    }
    return null; // No hay error
  };