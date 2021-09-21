import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import roles from '../helpers/roles';

const schema = yup.object().shape({
    name: yup
        .string("El nombre debe ser un texto")
        .required("Debes ingresar un nombre"),
    email: yup
        .string("El email debe ser un texto")
        .email("Debe ingresar un email valido")
        .required("Debes ingresar un correo electronico valido"),
    role: yup
        .string("El rol debe ser un texto")
        .oneOf(Object.keys(roles)),
        // .required("Debes ingresar un rol valido"),
});

export default yupResolver(schema);