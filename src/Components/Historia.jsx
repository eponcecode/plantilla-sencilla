import React from 'react'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Historia = () => {
    return (
        <Container>
            <h1>Since beginning...</h1>
            <br/>
            <Row>
                <Col>
            <Container xs={12} sm={12} md={21} lg={6}>
                <p align='justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis enim tenetur expedita ipsum
                unde quae dolorem odio nostrum maiores natus sequi ipsa illum sint nobis, iste blanditiis animi a et, numquam
                dignissimos esse? Pariatur quaerat, sit, vel culpa ratione assumenda voluptatem alias at tenetur, ad voluptate!
                Quae quas nulla nam enim tenetur dolorem quam
                inventore officia dolore delectus? Laudantium consequuntur voluptatem laborum sed ad? Consequuntur quia
                voluptates voluptas expedita magni vitae, exercitationem adipisci sequi ad quam dignissimos! Excepturi veniam
                consequatur aliquam dolores doloremque tempora asperiores, reprehenderit dignissimos culpa voluptas eius
                placeat deleniti autem, aut rerum delectus? Quidem praesentium nostrum fugit inventore nesciunt corporis
                repellat possimus voluptas, tenetur soluta alias expedita distinctio dolorem! Laboriosam voluptate quam laborum
                nam fugit. Modi a ipsa architecto natus, itaque eaque eius ipsum, nam quis assumenda id ea odit amet laborum,
                laudantium cum ratione iusto. Rem accusantium aut pariatur enim consectetur aliquam, ipsam quae placeat vero.</p>
                </Container></Col>
                <Col xs={12} sm={12} md={21} lg={6}>
                <Container className="d-block w-100" align="center">
                    <Image src="img/history.png" rounded  fluid/>
                    </Container>
                    </Col>
                    </Row>
        </Container>
        
    )
}

export default Historia
