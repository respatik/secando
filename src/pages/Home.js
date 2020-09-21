import React, {useState} from 'react'
import { Carousel } from 'antd';

export default function Home() {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

    return (
        <div>
           <h1>Welcome to Secando</h1>
           <p>Read our review and buy secondhand game!</p>
           <p>Also, you can sell your game with us!😉</p>
           <br/><br/>

           <h2>OUR PICK!</h2>
           <Carousel autoplay>
            <div>
                <h3 style={contentStyle}>Kingdom Hearts 3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Ni no Kuni: The Wrath of the White Witch</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Octopath Traveler</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Bravely Default</h3>
            </div>
            </Carousel>

            <h2>Read our review</h2>
            
            <h2>Buy our secondhand game</h2>
        </div>
    )
}
