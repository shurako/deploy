import React, { useState, useEffect } from 'react'
import './sidebar.css'


function Asidebar() {
    const array = []
    const [size, setsize] = useState( Math.floor(window.innerWidth / 20))
    const countCircles = () => {
       const number = size;
       
        for (let i = 0; i < number + 1; i++) {
            array.push(i);
            
        }
        
        return(array.map((number) => {
            return(<span className = {'circle'} ></span>)
        }))

       
       
    }
        
        
        useEffect(() => {
            function handleResize() {
              setsize(window.innerWidth / 20)
        }
            window.addEventListener('resize', handleResize)
          })
        

    return (
        <div  on className={'sidebar'}>
           <div className = {'circle-wrapper'}>{countCircles()}</div>
            <div className = {'quote-wrapper'}>
                <p><span className = {'MainText-logo'}>Keep<span color = {'lightcoral'}>Fit</span> </span> </p>
                <p>#Do something today that your future self will thank you for</p>
            </div>
        </div>
    )
}



export default Asidebar
