import React from 'react'
import './App.css'
import AsidePage1 from './components/Asidepages/page01/AsidePage1'
import MainPage from './components/Main/MainPage.js'
import Nav from './components/Nav/Nav'

function App() {
    return (
        <div className = {'App'}>
            <Nav/>
            <MainPage/>
            <AsidePage1/>
            <div>
                
            </div>
        </div>
    )
}

export default App
