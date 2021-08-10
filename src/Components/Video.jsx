import React from 'react'
import Container from 'react-bootstrap/Container'
function Video() {
    return (
        <Container dangerouslySetInnerHTML={{__html: "<iframe width='100%' height='315' src='https://www.youtube-nocookie.com/embed/JKAHXrWNTj4?rel=0' allowfullscreen/>"}}/>

    )
}

export default Video
