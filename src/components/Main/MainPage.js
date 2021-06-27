import React from 'react'
import Asidebar from '../sidebar/Asidebar'
import sidebar from '../sidebar/Asidebar'
import './MainPage.css'
import MainText from './MainText'

function MainPage() {
    return (
        <div className = {'MainPage'}>
            <div>
                <MainText/>
                <Asidebar/>
            </div>
        </div>
    )
}

export default MainPage
