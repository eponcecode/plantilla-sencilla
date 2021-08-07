import Container from 'react-bootstrap/Container';
import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Footer() {
    return (
        <Card bg="dark" text="light">
            <Container align="center" >
                <br />
                <br />
               <h4>Social media: </h4>
                <Card.Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <Image src="img/facebook.png" rounded></Image>
                </Card.Link>
                <Card.Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" >
                    <Image src="img/instagram.png" rounded></Image>
                </Card.Link>
                <Card.Link href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" >
                    <Image src="img/twitter.png" rounded></Image>
                </Card.Link>
                <Card.Link href="https://wa.me/" target="_blank" rel="noopener noreferrer" >
                    <Image src="img/whatsapp.png" rounded></Image>
                </Card.Link>
            </Container>
            <br />
            <br />
            <Container>
                <Row>
                    <Col><h5>TITLE</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius tempore voluptatibus
                            officiis quas ea ducimus recusandae consequatur dolores necessitatibus, neque nisi
                            dolore deleniti, blanditiis nesciunt. Minima, vel minus. Quidem facilis esse expedita
                            impedit libero ut, suscipit dolorem nostrum earum quo voluptas delectus.
                            Repellendus libero consectetur, molestiae eum hic repudiandae accusamus.</p></Col>
                    <Col>
                        <h5>TITLE</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius tempore voluptatibus
                            officiis quas ea ducimus recusandae consequatur dolores necessitatibus, neque nisi
                            dolore deleniti, blanditiis nesciunt. Minima, vel minus. Quidem facilis esse expedita
                            impedit libero ut, suscipit dolorem nostrum earum quo voluptas delectus.
                            Repellendus libero consectetur, molestiae eum hic repudiandae accusamus.</p></Col>
                </Row>
            </Container>
            <br />
            <Card.Footer style={{background:'#444444'}}>
                <Container align="center">
                    © 2021 Copyright: eponce
                </Container>
            </Card.Footer>
        </Card>
    );
}

export default Footer;