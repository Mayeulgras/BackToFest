import { Form, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';


const Devis = () => {
const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [hover, setHover] = useState(false);

    const toggleHover = () => {
        setHover(!hover);
    };

    const formStyle = {
        width: '80%',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        fontSize: '18px',
        backgroundColor: hover ? '#1F58AA' : '#2E74DA',
    };


    return (
        <div style={formStyle}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Adresse mail</Form.Label>
                    <Form.Control type="email" placeholder="Entrez votre adresse mail" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Entreprise</Form.Label>
                    <Form.Control type="text" placeholder="Nom de l'entreprise" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Sujet</Form.Label>
                    <Form.Control type="text" placeholder="Sujet de la demande" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description de la demande</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Décrivez votre demande" />
                </Form.Group>

                <Button style={buttonStyle} onMouseEnter={toggleHover} onMouseLeave={toggleHover} type="submit">
                    Envoyer
                </Button>
            </Form>
        </div>
    );
};

export default Devis;