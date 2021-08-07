import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Tab from 'react-bootstrap/Tab';
import Video from './Video';
import Table from 'react-bootstrap/Table';

const Servicios = () => {
    return (
        <Container>
            <h1>Our services...</h1>
            <br />
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#first">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item action href="#first">Image</ListGroup.Item>
                            <ListGroup.Item action href="#second" variant="primary">Text</ListGroup.Item>
                            <ListGroup.Item action href="#third" variant="secondary">Image and text</ListGroup.Item>
                            <ListGroup.Item action href="#fourth" variant="success">Text and image</ListGroup.Item>
                            <ListGroup.Item action href="#fifth" variant="danger">Text with lists</ListGroup.Item>
                            <ListGroup.Item action href="#sixth" variant="warning">Video</ListGroup.Item>
                            <ListGroup.Item action href="#seventh" variant="info">Tables</ListGroup.Item>
                            <ListGroup.Item variant="light">and</ListGroup.Item>
                            <ListGroup.Item variant="dark">more...</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="#first">
                            <Container align="center">
                                <h1>Image</h1>
                                <br />
                                <Image src="img/services.png" width="90%" />
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#second">
                                <Container align="center">
                                    <h1>Text</h1>
                                </Container>
                                <Container align="justify">
                                    <br />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt explicabo temporibus facere nemo itaque voluptates commodi iure esse accusantium. Autem hic suscipit, laudantium labore debitis iure sequi illum! Esse architecto excepturi voluptatum assumenda, error odio, itaque non repellendus rerum pariatur temporibus. Cumque, incidunt assumenda blanditiis perferendis minus a adipisci expedita.</p>
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#third">
                                <Container align="center">
                                    <h1>Image and text</h1>
                                    <br />
                                    <Image src="img/service_04.png" width="90%" thumbnail />
                                    <br /> <br />
                                </Container>
                                <Container align="justify">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quibusdam mollitia praesentium illum dolores culpa illo quisquam possimus pariatur. Dolorem perspiciatis nihil fugiat sint earum numquam, quibusdam quidem harum placeat assumenda reprehenderit labore odit asperiores consectetur ab amet sed repudiandae enim ratione porro error. Modi sit, facere eius adipisci, maiores non voluptatem similique aspernatur laudantium placeat odit nulla, repellat assumenda saepe reiciendis magni aliquid illo animi. Architecto neque labore provident aspernatur ratione saepe exercitationem expedita ducimus, velit perferendis natus quidem sit omnis voluptatem ea adipisci? Quaerat temporibus amet mollitia provident, est deserunt dolores ratione adipisci, quod alias, dolorum ducimus inventore! Iusto autem molestias odit dolore similique ab totam quaerat vero fugit consequuntur, ullam officiis asperiores cum possimus? Commodi, asperiores. Voluptatem hic quod aspernatur, porro tempora rerum dolores, dolorum magnam ad iste recusandae? Tempora expedita quidem quod quasi dolorum saepe soluta quia, earum ea architecto voluptatibus fugit voluptates est nostrum? Tempore?</p>
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#fourth">
                                <Container align="center">
                                <h1>Text and image</h1>
                                <br />
                                </Container>
                                <Container align="justify">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt explicabo temporibus facere nemo itaque voluptates commodi iure esse accusantium. Autem hic suscipit, laudantium labore debitis iure sequi illum! Esse architecto excepturi voluptatum assumenda, error odio, itaque non repellendus rerum pariatur temporibus. Cumque, incidunt assumenda blanditiis perferendis minus a adipisci expedita.</p>
                                </Container>
                                <Container align="center">
                                    <Image src="img/service_03.png" width="80%" roundedCircle />
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#fifth">
                                <Container align="center">
                                    <h1>Text and list</h1>
                                    <br />
                                </Container>
                                <Container align="justify">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nesciunt fugiat dolore debitis ipsam. Velit aperiam suscipit laudantium similique, saepe deserunt laborum non nesciunt nihil labore voluptas voluptatem beatae. Magni quis explicabo, quidem voluptatem eos totam, soluta odio facilis ut nesciunt consectetur? Illo fugit voluptates officiis excepturi, consectetur molestias cupiditate incidunt asperiores sint quam eveniet iste odit deleniti? Minima iste possimus repudiandae quos! Nemo fugiat natus eligendi delectus? Fugiat soluta distinctio illum nostrum nobis, consectetur asperiores cumque beatae sint repellat explicabo obcaecati vero? Similique dolores voluptatem hic tenetur odit, inventore aspernatur eaque pariatur magnam repudiandae molestiae, unde praesentium cupiditate quae!</p>
                                    <ul>
                                        <li>Coffee</li>
                                        <li>Tea</li>
                                        <li>Milk</li>
                                        <li>Cookies</li>
                                    </ul>
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#sixth">
                                <Container align="center">
                                    <h1>Video</h1>
                                    <br />
                                    <Video />
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#seventh">
                                <Container align="center">
                                    <h1>Video</h1>
                                    <br />
                                </Container>
                                <Container>
                                    <Table striped bordered hover responsive ="sm">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td colSpan="2">Larry the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Container>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
}

export default Servicios
