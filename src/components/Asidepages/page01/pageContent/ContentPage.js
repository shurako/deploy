import React from 'react'



function ContentPage(props) {
    return (
        <div>
            <div><h3>{props.cardTitle}</h3></div>
            <div><img src = {props.source}/></div>
        </div>
    )
}

export default ContentPage
