import React from 'react'

function MainText() {
    return (
        <div className = {'MainText'}>
            <div>
                <h2>Buduj formę, z najlepszumi</h2>
                <p>Trenuj z  <span className = {'MainText-logo'}>Keep<span color = {'lightcoral'}>Fit</span> </span> </p>
            </div>

            <div className = {'btn1-wrapper'}>
                <button className = {'btn1'}>Kontakt</button>
                <button className = {'btn1'}>Promocje</button>
            </div>
        </div>
    )
}

export default MainText
