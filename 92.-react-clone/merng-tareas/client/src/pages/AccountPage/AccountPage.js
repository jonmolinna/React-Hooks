import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import useAuth from '../../auth/useAuth';
import useModal from '../../hooks/useModal';
import ChangePasswordModal from './components/ChangePasswordModal';
import DeleteModal from './components/DeleteModal';
import EditModal from './components/EditModal';
import ProfilePicModal from './components/ProfilePicModal';

const AccountPage = () => {
    const { user } = useAuth();

    const [isOpenDeleteModal, openDeleteModal, closeDeleteModal] = useModal();
    const [isOpenChangePasswordModal, openChangePasswordModal, closeChangePasswordModal] = useModal();
    const [isOpenEditModal, openEditModal, closeEditModal] = useModal();
    const [isOpenProfilePicModal, openProfilePicModal, closeProfilePicModal] = useModal();

    return (
        <>
            <Container>
                <Row className="mt-4">
                    <Col xs={12} md={{ span:6, offset: 3}} className="text-center">
                        <img 
                            src={user?.profilePic || "/img/male_avatar.svg"} 
                            alt="profile"
                            onClick={openProfilePicModal}
                            style={{
                                width: '200px',
                                height: '200px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                cursor: 'pointer'                    
                            }}
                        />
                    </Col>
                    <Col xs={12} md={{ span:6, offset: 3}}  className="mt-4">
                        <Card className="p-4">
                            <p className="text-center"><b>Nombre: </b>{ user.name}</p>
                            <p className="text-center"><b>Correo: </b>{ user.email}</p>
                            <p className="text-center"><b>Rol: </b>{ user.role}</p>

                            <Button 
                                variant="success"
                                onClick={openEditModal}
                            >
                                Editar cuenta
                            </Button>
                            <Button 
                                variant="link" 
                                className="mt-1"
                                onClick={openChangePasswordModal}
                            >
                                Cambiar contraseña
                            </Button>
                            <Button 
                                variant="link" 
                                className="mt-3 text-danger"
                                onClick={openDeleteModal}
                            >
                                Eliminar cuenta
                            </Button>
                        </Card>    
                    </Col>
                </Row>
            </Container>

            <DeleteModal 
                isOpen={isOpenDeleteModal}
                close={closeDeleteModal}
            />

            <ChangePasswordModal
                isOpen={isOpenChangePasswordModal}
                close={closeChangePasswordModal}
            />

            <EditModal 
                isOpen={isOpenEditModal}
                close={closeEditModal}
                user={user}
            />

            <ProfilePicModal 
                isOpen={isOpenProfilePicModal}
                close={closeProfilePicModal}
                user={user}
            />
        </>
    )
}

export default AccountPage
