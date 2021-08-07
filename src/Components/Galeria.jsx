import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Galeria = () => (
<Row style={{background:'url(https://cdn.pixabay.com/photo/2015/11/06/13/21/texture-1027808_960_720.jpg), no-repeat, fixed' ,border: '3px solid #444444' }}>
    <br/>
  <Gallery>
      <Row >
 <Col xs={12} sm={6} md={4} lg={2} >
    <Item
      original="https://source.unsplash.com/2ShvY8Lf6l0?image=1"
      thumbnail="https://source.unsplash.com/2ShvY8Lf6l0?image=1"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img width= "200px" max-height="200px" ref={ref} style={{cursor:'pointer'}} onClick={open} src="https://source.unsplash.com/2ShvY8Lf6l0/1000x1000?image=1" alt="Imagen 1"/>
      )}
    </Item>
</Col>
    <Col xs={12} sm={6} md={4} lg={2}>
    <Item
      original="https://source.unsplash.com/Dm-qxdynoEc?image=2"
      thumbnail="https://source.unsplash.com/Dm-qxdynoE?image=2"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img width="200px"  max-height="200px" ref={ref} style={{cursor:'pointer'}} onClick={open} src="https://source.unsplash.com/Dm-qxdynoEc/1000x1000?image=2" alt="Imagen 2" />
      )}
    </Item>
</Col>
    <Col xs={12} sm={6} md={4} lg={2}>
    <Item
      original="https://source.unsplash.com/qDkso9nvCg0?image=3"
      thumbnail="https://source.unsplash.com/qDkso9nvCg0?image=3"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img width="200px"  max-height="200px" ref={ref} style={{cursor:'pointer'}}  onClick={open} src="https://source.unsplash.com/qDkso9nvCg0/1000x1000?image=3" alt="Imagen 3"/>
      )}
    </Item>
</Col>
    <Col xs={12} sm={6} md={4} lg={2}>
    <Item
      original="https://source.unsplash.com/iecJiKe_RNg?image=4"
      thumbnail="https://source.unsplash.com/iecJiKe_RNg?image=4"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img width="200px"  max-height="200px" ref={ref} style={{cursor:'pointer'}}  onClick={open} src="https://source.unsplash.com/iecJiKe_RNg/1000x1000?image=4" alt="Imagen 4" />
      )}
    </Item>
</Col>
    <Col xs={12} sm={6} md={4} lg={2}>
    <Item
      original="https://source.unsplash.com/epcsn8Ed8kY?image=5"
      thumbnail="https://source.unsplash.com/epcsn8Ed8kY?image=5"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img width="200px"  max-height="200px"ref={ref} style={{cursor:'pointer'}}  onClick={open} src="https://source.unsplash.com/epcsn8Ed8kY/1000x1000?image=5" alt="Imagen 5" />
      )}
    </Item>
</Col>
    <Col xs={12} sm={6} md={4} lg={2}>
    <Item
      original="https://source.unsplash.com/NQSWvyVRIJk?image=6"
      thumbnail="https://source.unsplash.com/NQSWvyVRIJk?image=6"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img width="200px"  max-height="200px" ref={ref} style={{cursor:'pointer'}}  onClick={open} src="https://source.unsplash.com/NQSWvyVRIJk/1000x1000?image=6"alt="Imagen 6" />
      )}
    </Item>
</Col>
    <Col xs={12} sm={6} md={4} lg={2}>
    <Item
      original="https://source.unsplash.com/zh7GEuORbUw?image=7"
      thumbnail="https://source.unsplash.com/zh7GEuORbUw?image=7"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img width="200px"  max-height="200px"ref={ref} style={{cursor:'pointer'}}  onClick={open} src="https://source.unsplash.com/zh7GEuORbUw/1000x1000?image=7" alt="Imagen 7" />
      )}
    </Item>
</Col>
    <Col xs={12} sm={6} md={4} lg={2}><Item
      original="https://source.unsplash.com/PpOHJezOalU?image=8"
      thumbnail="https://source.unsplash.com/PpOHJezOalU?image=8"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img width="200px"  max-height="200px" ref={ref} style={{cursor:'pointer'}}  onClick={open} src="https://source.unsplash.com/PpOHJezOalU/1000x1000?image=8" alt="Imagen 8"/>
      )}
    </Item>
</Col>
    <Col xs={12} sm={6} md={4} lg={2}>
    <Item
      original="https://source.unsplash.com/I1ASdgphUH4?image=9"
      thumbnail="https://source.unsplash.com/I1ASdgphUH4?image=9"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img width="200px"  max-height="200px" ref={ref} style={{cursor:'pointer'}}  onClick={open} src="https://source.unsplash.com/I1ASdgphUH4/1000x1000?image=9" alt="Imagen 9"/>
      )}
    </Item>
</Col>
    <Col xs={12} sm={6} md={4} lg={2}>
    <Item
      original="https://source.unsplash.com/XiDA78wAZVw?image=10"
      thumbnail="https://source.unsplash.com/XiDA78wAZVw?image=10"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img width="200px"  max-height="200px" ref={ref} style={{cursor:'pointer'}}  onClick={open} src="https://source.unsplash.com/XiDA78wAZVw/1000x1000?image=10" alt="Imagen 10"/>
      )}
    </Item>
</Col>
    <Col xs={12} sm={6} md={4} lg={2}>
    <Item
      original="https://source.unsplash.com/x8xJpClTvR0?image=11"
      thumbnail="https://source.unsplash.com/x8xJpClTvR0?image=11"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img width="200px"  max-height="200px"ref={ref} style={{cursor:'pointer'}}  onClick={open} src="https://source.unsplash.com/x8xJpClTvR0/1000x1000?image=11" alt="Imagen 11"/>
      )}
    </Item>
</Col>
    <Col xs={12} sm={6} md={4} lg={2}>
    <Item
      original="https://source.unsplash.com/qGQNmBE7mYw?image=12"
      thumbnail="https://source.unsplash.com/qGQNmBE7mYw?image=12"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img width="200px"  max-height="200px"ref={ref} style={{cursor:'pointer'}}  onClick={open} src="https://source.unsplash.com/qGQNmBE7mYw/1000x1000?image=12" alt="Imagen 12"/>
      )}
    </Item>
</Col>
    <Col xs={12} sm={6} md={4} lg={2}>
    <Item
      original="https://source.unsplash.com/NuO6iTBkHxE?image=13"
      thumbnail="https://source.unsplash.com/NuO6iTBkHxE?image=13"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img width="200px"  max-height="200px" ref={ref} style={{cursor:'pointer'}}  onClick={open} src="https://source.unsplash.com/NuO6iTBkHxE/1000x1000?image=13" alt="Imagen 13"/>
      )}
    </Item>
</Col>
    <Col xs={12} sm={6} md={4} lg={2}>
    <Item
      original="https://source.unsplash.com/pF1ug8ysTtY?image=14"
      thumbnail="https://source.unsplash.com/pF1ug8ysTtY?image=14"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img width="200px"  max-height="200px"ref={ref} style={{cursor:'pointer'}}  onClick={open} src="https://source.unsplash.com/pF1ug8ysTtY/1000x1000?image=14" alt="Imagen 14" />
      )}
    </Item>
</Col>
    <Col xs={12} sm={6} md={4} lg={2}><Item
      original="https://source.unsplash.com/A-fubu9QJxE?image=15"
      thumbnail="https://source.unsplash.com/A-fubu9QJxE?image=15"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img width="200px"  max-height="200px" ref={ref} style={{cursor:'pointer'}}  onClick={open} src="https://source.unsplash.com/A-fubu9QJxE/1000x1000?image=15" alt="Imagen 15"/>
      )}
    </Item>
</Col>
    <Col xs={12} sm={6} md={4} lg={2}><Item
      original="https://source.unsplash.com/5P91SF0zNsI?image=16"
      thumbnail="https://source.unsplash.com/5P91SF0zNsI?image=16"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img width="200px"  max-height="200px" ref={ref} style={{cursor:'pointer'}}  onClick={open} src="https://source.unsplash.com/5P91SF0zNsI/1000x1000?image=16" alt="Imagen 16"/>
      )}
    </Item>
</Col>
</Row>
  </Gallery>
  <br/>
  </Row>
)
export default Galeria;