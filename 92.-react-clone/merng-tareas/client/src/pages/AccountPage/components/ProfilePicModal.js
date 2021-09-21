import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useAuth from '../../../auth/useAuth';

const ProfilePicModal = ({ isOpen, close }) => {
    const { updateUser } = useAuth();
    const [fileName, setFileName] = useState("Subir una imagen");
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const [file] = e.target.files;

        // Validando el tamaño del archivo
        const isValidSize = file.size < 10 * 200 * 1024;
        if(!isValidSize) return toast.error("Imagen muy pesada, máximo 10MB")

        // Validando el extension del archivo
        const isNameOfOneImageRegEx = /.(jpe?g|gif|png)$/i;
        const isValidType = isNameOfOneImageRegEx.test(file.name);
        if(!isValidType) return toast.error("Sólo puedes subir imagenes");

        setFileName(file.name)

        // Convertiendo a base 64
        const reader = new FileReader();
        reader.onloadend = () => {
            //console.log(reader.result);
            setSelectedFile(reader.result);
        }
        reader.readAsDataURL(file);
        
    }

    const handleUpdateProfilePic = () => {
        if(!selectedFile) return toast.warning("Debes seleccionar una imagen")
        updateUser({ profilePic: selectedFile })
        close();
        //console.log(selectedFile);
    }

    return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header>
                <Modal.Title>Cambiar mi foto de Perfil</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.File 
                        custom
                        label={fileName}
                        onChange={handleFileChange}
                        // data-browse="Subir"
                        // accept="image/*"
                        accept=".jpg, .jpeg, .gif, .png"
                    />
                </Form>
                <img 
                    className="img-fluid mt-2"
                    src={selectedFile} 
                    alt="profile-prevew" 
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>Cancelar</Button>
                <Button variant="success" onClick={handleUpdateProfilePic}>Actualizar imagen</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ProfilePicModal;