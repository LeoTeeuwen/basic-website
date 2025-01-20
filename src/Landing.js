import './App.css';
import { Link } from 'react-router-dom';

const bodyContent = [
  {
    title: "Reinvent your understanding of transportation", 
    body: "We move millions of dollars of equipment and resources from the most trusted sectors of our company, making jobs and giving the people a service they can believe in.",
    image: "/Nostromo.png",
  },
  {
    title: "Realize your dreams of exploration", 
    body: "Thousands of our hand made colonies stand tall in so many different unique planets and environments. They range from mineral harvesting to correctional facilities with the most modern technology available.",
    image: "/Hadleys_Hope.png",
  },
  {
    title: "Stand strong with our defense choices", 
    body: "Many rely on our researched and manufactured defense choices from the everyday citizen to PMCs all over. They make their choice because of our reliability, quality, and ease of operation.",
    image: "/Weyland_Rifle.png",
  },
];

function Landing() {
  return (
    <>
    {/* Imports for the fonts used. */}
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
    <link href="https://fonts.googleapis.com/css2?family=Michroma&display=swap" rel="stylesheet"></link>
    <div>
      <div className='navigation-bar'>
        {/* Each div is a link that can be clicked, the route relative to the current page using "to" */}
        <div className="navigation-button">
          <Link className="navbar-link" to="/Home">Home</Link>
        </div>
        <div className="navigation-button">
          <Link className="navbar-link" to="/Support">Support</Link>
        </div>
        
        <img className="navigation-image" src="/Weyland_Logo.png" alt='image1'/>
        
        <div className="navigation-button">
          <Link className="navbar-link" to="/Partners">Partners</Link>
        </div>
        <div className="navigation-button">
          <Link className="navbar-link" to="/Foundry">Foundry</Link>
        </div>
      </div>

    
      <div className='content'>
        {/* We use the json made to "map" it. This iterates through all of the data and allows us to reuse the same UI. */}
        {bodyContent.map((item, _) => (
          <div key={item.title} className='content-card'>
            <img src={item.image} alt='image2'/>
            <div>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Landing;
