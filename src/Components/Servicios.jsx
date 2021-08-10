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
            <h6>>>Have your custom colors</h6>
            <br />
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#first">
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xxl={6}>
                        <ListGroup>
                            <ListGroup.Item action href="#image">Image</ListGroup.Item>
                            <ListGroup.Item action href="#text" variant="primary">Text</ListGroup.Item>
                            <ListGroup.Item action href="#imageandtext" variant="secondary">Image and text</ListGroup.Item>
                            <ListGroup.Item action href="#textandimage" variant="success">Text and image</ListGroup.Item>
                            <ListGroup.Item action href="#textwithlists" variant="danger">Text with lists</ListGroup.Item>
                            <ListGroup.Item action href="#video" variant="warning">Video</ListGroup.Item>
                            <ListGroup.Item action href="#tables" variant="info">Tables</ListGroup.Item>
                            <ListGroup.Item variant="light">and</ListGroup.Item>
                            <ListGroup.Item variant="dark">more...</ListGroup.Item>
                        </ListGroup>
                        <br />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xxl={6}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#image">
                                <Container align="center">
                                    <h1>Image</h1>
                                    <br />
                                    <Image src="img/services.png" fluid />
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#text">
                                <Container>
                                    <h1 align="center">Text</h1>
                                    <br />
                                    <p align="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt explicabo temporibus facere nemo itaque voluptates commodi iure esse accusantium. Autem hic suscipit, laudantium labore debitis iure sequi illum! Esse architecto excepturi voluptatum assumenda, error odio, itaque non repellendus rerum pariatur temporibus. Cumque, incidunt assumenda blanditiis perferendis minus a adipisci expedita.</p>
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#imageandtext">
                                <Container align="center">
                                    <h1>Image and text</h1>
                                    <br />
                                    <Image src="img/service_04.png" thumbnail fluid/>
                                    <br /> <br />
                                </Container>
                                <Container>
                                    <p align="justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quibusdam mollitia praesentium illum dolores culpa illo quisquam possimus pariatur. Dolorem perspiciatis nihil fugiat sint earum numquam, quibusdam quidem harum placeat assumenda reprehenderit labore odit asperiores consectetur ab amet sed repudiandae enim ratione porro error. Modi sit, facere eius adipisci, maiores non voluptatem similique aspernatur laudantium placeat odit nulla, repellat assumenda saepe reiciendis magni aliquid illo animi. Architecto neque labore provident aspernatur ratione saepe exercitationem expedita ducimus, velit perferendis natus quidem sit omnis voluptatem ea adipisci? Quaerat temporibus amet mollitia provident, est deserunt dolores ratione adipisci, quod alias, dolorum ducimus inventore! Iusto autem molestias odit dolore similique ab totam quaerat vero fugit consequuntur, ullam officiis asperiores cum possimus? Commodi, asperiores. Voluptatem hic quod aspernatur, porro tempora rerum dolores, dolorum magnam ad iste recusandae? Tempora expedita quidem quod quasi dolorum saepe soluta quia, earum ea architecto voluptatibus fugit voluptates est nostrum? Tempore?</p>
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#textandimage">
                                <Container align="center">
                                    <h1>Text and image</h1>
                                    <br />
                                    <p align="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt explicabo temporibus facere nemo itaque voluptates commodi iure esse accusantium. Autem hic suscipit, laudantium labore debitis iure sequi illum! Esse architecto excepturi voluptatum assumenda, error odio, itaque non repellendus rerum pariatur temporibus. Cumque, incidunt assumenda blanditiis perferendis minus a adipisci expedita.</p>
                                    <Image src="img/service_03.png" width="80%" roundedCircle />
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#textwithlists">
                                <Container align="center">
                                    <h1>Text and list</h1>
                                    <br />
                                    <p align="justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nesciunt fugiat dolore debitis ipsam. Velit aperiam suscipit laudantium similique, saepe deserunt laborum non nesciunt nihil labore voluptas voluptatem beatae. Magni quis explicabo, quidem voluptatem eos totam, soluta odio facilis ut nesciunt consectetur? Illo fugit voluptates officiis excepturi, consectetur molestias cupiditate incidunt asperiores sint quam eveniet iste odit deleniti? Minima iste possimus repudiandae quos! Nemo fugiat natus eligendi delectus? Fugiat soluta distinctio illum nostrum nobis, consectetur asperiores cumque beatae sint repellat explicabo obcaecati vero? Similique dolores voluptatem hic tenetur odit, inventore aspernatur eaque pariatur magnam repudiandae molestiae, unde praesentium cupiditate quae!</p>
                                    <ul align="justify">
                                        <li>Coffee</li>
                                        <li>Tea</li>
                                        <li>Milk</li>
                                        <li>Cookies</li>
                                    </ul>
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#video">
                            <Container>
        <h1 align="center">Video</h1>
        <br />
        </Container>
                                    <Video />
                            
                            </Tab.Pane>
                            <Tab.Pane eventKey="#tables">
                                <Container align="center">
                                    <h1>Tables</h1>
                                    <br />
                                </Container>
                                <Container>
                                    <Table striped bordered hover responsive="sm">
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
