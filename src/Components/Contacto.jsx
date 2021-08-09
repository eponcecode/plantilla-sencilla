import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class Contacto extends React.Component {
    render() {
        return (
            <Container>
                <br />
                <br />
                <h1>Contacto</h1>
                <Container>
                    <Form name="contactform" className="contactform">
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Text className="text-muted">Personaliza tu sección de contacto con los datos que quieras<br /><br />
                            </Form.Text>
                            <Form.Label>Nombre:* </Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tu nombre" autoComplete="off" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formContactNumber">
                            <Form.Label>Número de contacto:*</Form.Label>
                            <Form.Control type="tel" placeholder="(+52) 0000000000" autoComplete="off" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDate">
                            <Form.Label>Correo:*</Form.Label>
                            <Form.Control type="email" required autoComplete="off"  placeholder="correo@ejemplo.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formNumberOf">
                            <Form.Label>Mensaje:*</Form.Label>
                            <Form.Control as="textarea" rows={5} autoComplete="off" required />
                        </Form.Group>
                        <br />
                        <Button variant="dark" type="submit" className="btn btn-lg pro" id="submit" value="Submit">
                            Enviar
                        </Button>
                    </Form>
                </Container>
            </Container >

        );
    }
}

export default Contacto
