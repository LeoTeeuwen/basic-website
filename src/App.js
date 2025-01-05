import './App.css';

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

function App() {
  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
    <link href="https://fonts.googleapis.com/css2?family=Michroma&display=swap" rel="stylesheet"></link>
    <div>
      <div className='navigation-bar'>
        <div className="navigation-button">
          Home
        </div>
        <div className="navigation-button">
          Support
        </div>
        {/* <div className="navigation-button">
          Image
        </div> */}
        <img className="navigation-image" src="/Weyland_Logo.png" alt='image1'/>
        <div className="navigation-button">
          Partners
        </div>
        <div className="navigation-button">
          Foundry
        </div>
      </div>

    
      <div className='content'>
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

export default App;
