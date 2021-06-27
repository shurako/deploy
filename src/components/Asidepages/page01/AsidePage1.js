import React from 'react'
import '../section.css'
import ContentPage from './pageContent/ContentPage'

function AsidePage1(props) {
    return (
        <div className = {'section'}>
            <div className = {'card-wrapper'}>
                <ContentPage cardTitle = {'Profesjonalni trenerzy'} source = {'./1.jpg'} />
                
            </div>
        </div>
    )
}

export default AsidePage1
