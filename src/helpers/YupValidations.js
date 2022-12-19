/** Libraries */
import * as Yup from 'yup';

export const YupRegisterValidations = Yup.object({
  name: Yup.string()
    .max(15, 'Debe tener 15 caracteres o menos')
    .required('El campo es requerido'),
  email: Yup.string()
    .email('Email inválido asegurate de colocar "@"')
    .required('El campo es requerido'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('El campo es requerido'),
});

export const YupLoginValidations = Yup.object({
  email: Yup.string()
    .email('Email inválido asegurate de colocar "@"')
    .required('El campo es requerido'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('El campo es requerido'),
});

export const YupUserDataValidations = Yup.object({
  state: Yup.string()
    .min(3, 'Este campo debe tener al menos 6 caracteres')
    .max(30, 'Este campo no debe tener más de 30 caracteres')
    .required('El campo es requerido'),
  city: Yup.string()
    .min(3, 'Este campo debe tener al menos 6 caracteres')
    .max(30, 'Este campo no debe tener más de 30 caracteres')
    .required('El campo es requerido'),
  postalCode: Yup.string()
    .min(3, 'Este campo debe tener al menos 6 caracteres')
    .max(10, 'Este campo no debe tener más de 30 caracteres')
    .required('El campo es requerido'),
  address: Yup.string()
    .min(3, 'Este campo debe tener al menos 6 caracteres')
    .max(30, 'Este campo no debe tener más de 30 caracteres')
    .required('El campo es requerido'),
  numberPhone: Yup.string()
    .min(3, 'Este campo debe tener al menos 6 caracteres')
    .max(30, 'Este campo no debe tener más de 30 caracteres')
    .required('El campo es requerido'),
});
