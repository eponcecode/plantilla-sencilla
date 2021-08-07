import React from 'react'

function Video() {
    return (
        <div>
         <div dangerouslySetInnerHTML={{__html: "<iframe width='560' height='315' src='https://www.youtube-nocookie.com/embed/JKAHXrWNTj4?rel=0' allowfullscreen/>"}}/>;
         </div>
 
    )
}

export default Video
