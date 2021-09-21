import React, { useEffect } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import changePasswordResolver from '../../../validations/ChangePasswordResolver';

const ChangePasswordModal = ({ isOpen, close }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: changePasswordResolver});

    const onSubmit = (formData) => {
        console.log(formData);
        alert('Enviando datos')
    };

    useEffect(() => {
        if(!isOpen){
            reset()
        }
    }, [isOpen, reset]);

    return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header>
                <Modal.Title>Cambiar Contraseña</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Nueva Contraseña</Form.Label>
                        <Form.Control 
                            type="password"
                            placeholder="Escribe una nueva contraseña"
                            {...register("password")}
                        />
                        {
                            errors?.password && (
                                <Form.Text>
                                    <Alert variant="danger">
                                        {
                                            errors.password.message
                                        }
                                    </Alert>
                                </Form.Text>
                            )
                        }
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>Cancelar</Button>
                <Button variant="primary" onClick={handleSubmit(onSubmit)}>
                    Actualizar Contraseña
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ChangePasswordModal;