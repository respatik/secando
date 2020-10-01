import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {

    return (
        <div>
           <h1>Welcome to Secando</h1>
           <p>Read our review and buy secondhand game!</p>
           <p>Also, you can sell your game with us!😉</p>
           <br/><br/>

           <h2>OUR PICK!</h2>

    <Carousel pause="hover">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.heypoorplayer.com/wp-content/uploads/2019/02/Kingdom-Hearts-3-Banner-1.jpg"
          alt="KH3"
        />
        <Carousel.Caption>
          <h3>Kingdom Hearts 3</h3>
          <p>Sora, Donald, and Goofy is back for a new exciting adventures!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.play-verse.com/wp-content/uploads/2019/09/Ni-no-Kuni-Remastered-Banner.jpg"
          alt="NinoKuni"
        />

        <Carousel.Caption>
          <h3>Ni no Kuni</h3>
          <p>Have an exciting adventure with elusive Ghibli-styled design</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://steamcdn-a.akamaihd.net/steam/apps/921570/capsule_616x353.jpg?t=1584516987"
          alt="Octopath Traveler"
        />

        <Carousel.Caption>
          <h3>Octopath Traveler</h3>
          <p>Travel with 8 protagonists and their different story</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://jagatplay.com/wp-content/uploads/2019/12/bravely-default-2-600x338.jpg"
          alt="Bravely Default 2"
        />

        <Carousel.Caption>
          <h3>New Release! Bravely Default 2</h3>
          <p>A new sequel from Bravely Default series</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
        <h2>Read our review</h2>
            
        <h2>Buy our secondhand game</h2>
    </div>
  );
}
