import React, { useState, useEffect } from "react";
import "./Home.css";
import YunaHomes from "../images/YunaHomes.png";
import CountryClub from "../images/CountryClub.png";
import Maisonette from "../images/Maisonete.png";
import PetrolStation from "../images/PetrolStation.png";
import Restaurant from "../images/Restaurant.png";

export default function Home() {
  const carouselImages = [
    { url: YunaHomes, alt: "Yuna Homes" },
    { url: CountryClub, alt: "Country Club" },
    { url: Maisonette, alt: "Maisonette" },
    { url: PetrolStation, alt: "Petrol Station" },
    { url: Restaurant, alt: "Restaurant" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === carouselImages.length - 1 ? 0 : prevImage + 1
    );
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? carouselImages.length - 1 : prevImage - 1
    );
  };

  useEffect(() => {
    // Set an interval to change the image every 5 seconds (5000 milliseconds)
    const interval = setInterval(nextImage, 5000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to Ark Link Properties</h1>
      <p className="intro-text">SUSTAINABILITY INNOVATION INTEGRITY</p>

      <div className="carousel">
        <img
          src={carouselImages[currentImage].url}
          alt={carouselImages[currentImage].alt}
          className="carousel-image"
        />

        <div className="carousel-navigation">
          <button onClick={prevImage} className="carousel-button">
            {"< Prev"}
          </button>
          <button onClick={nextImage} className="carousel-button">
            {"Next >"}
          </button>
        </div>
      </div>

      <div>
        <p className="italic-justified">An already published magazine is available..</p>
      </div>
      <div className="cta">
        <h2>Experience Yuna City</h2>
        <p>
          Ark Link Properties is a dynamic and innovative private company founded by Ian Ruhiu, a graduate architect, in 2021. We are proud to be a youth-led organization that believes in empowering young professionals to excel in the construction and engineering industry. Our company, incorporated on February 7th, 2023, under the laws of Kenya, specializes in providing a wide range of services in civil works, building works, construction services, and engineering and architectural works and supplies.
        </p>
      </div>
    </div>
  );
}

// import React from "react";
// import { Carousel } from "react-responsive-carousel";

// import './Home.css';
// import Bungalows from '../images/Bungalow.png'
// import CountryClub from '../images/CountryClub.png'
// import Maisonette from '../images/Maisonete.png'
// import PetrolStation from '../images/PetrolStation.png'
// import Restaurant from '../images/Restaurant.png'
// import YunaCityMall from '../images/YunaCityMall.png'
// import yunafarmresort from '../images/yunafarmresort.png'
// import YunaHomes from '../images/YunaHomes.png'


// const carouselImages = [
//     { url: YunaCityMall, alt: "other 1" },
//     { url: Restaurant, alt: "other 2" },
//     { url: Maisonette, alt: "other 3" },
//     { url: YunaHomes, alt: "other 4" },
//     { url: Bungalows, alt: "other 5" },
//   ];
// export default function Home() {
//     return (
//         <div className="home-container">
//             <h1>Welcome to Ark Link Properties</h1>
//             <p className="intro-text">Introducing the revolutionary Yuna City Development project. Immerse yourself in luxury, innovation, and sustainability.</p>

//             <div className="yuna-section">
//                 <img src={yunafarmresort} alt="Yuna Farm Resort" className="yuna-image" />
//                 <div className="yuna-details">
//                 <h2 style={{color: 'gold'}}>Yuna Farm Resort</h2>
//                     <p>The farm resort is a unique blend of modern living and traditional farming practices, offering visitors the best of both worlds. Experience immersive farm life in a vast land of opportunities.</p>
//                 </div>
//             </div>
//             <div className="yuna-section">
//                 <img src={YunaHomes} alt="Yuna Farm Resort" className="yuna-image" />
//                 <div className="yuna-details">
//                     <h2 style={{color: 'gold'}}>Yuna Homes</h2>
//                     <p>With a focus on providing comfortable
//                         and sustainable living spaces, the residential area of
//                         the development has been carefully planned and
//                         designed to meet the diverse needs of the residents.</p>
//                 </div>
//             </div>
//             <div className="yuna-section">
//                 <img src={Maisonette} alt="Yuna Farm Resort" className="yuna-image" />
//                 <div className="yuna-details">
//                 <h2 style={{color: 'gold'}}>Maisonette</h2>
//                     <p>These luxurious units offer spacious living areas with all rooms ensuite, 
//                       allowing for maximum comfort and privacy. The double-volume lounge area adds
//                       a touch of elegance and sophistication to the design, making it a
//                       perfect space for entertaining guests or spending quality time with family.</p>
//                 </div>
//             </div>
//             <div className="yuna-section">
//                 <img src={Bungalows} alt="Yuna Farm Resort" className="yuna-image" />
//                 <div className="yuna-details">
//                 <h2 style={{color: 'gold'}}>Bungalows</h2>
//                     <p>Yuna Homes also features 9 spacious and luxurious bungalows, each designed
//                       with modern aesthetics and functionality in mind. These flat-roof bungalows come
//                       with a total area of 330 square meters and are equipped with all the necessary
//                       amenities for a comfortable and luxurious lifestyle.</p>
//                 </div>
//             </div>
//             <div className="yuna-section">
//                 <img src={YunaCityMall} alt="Yuna Farm Resort" className="yuna-image" />
//                 <div className="yuna-details">
//                 <h2 style={{color: 'gold'}}>Yuna City Mall</h2>
//                     <p>Yuna City Development's Commercial Center is a one-stop shop for all your
//                         commercial needs.</p>
//                 </div>
//             </div>
//             <div className="yuna-section">
//                 <img src={PetrolStation} alt="Yuna Farm Resort" className="yuna-image" />
//                 <div className="yuna-details">
//                 <h2 style={{color: 'gold'}}>Petrol Station and Convenience Store</h2>
//                     <p>A drive-thru petrol station is located within the premises, allowing for easy 
//                       access to fuel up your car while running errands or on the way to work.</p>
//                 </div>
//             </div>
//             <div className="yuna-section">
//                 <img src={Restaurant} alt="Yuna Farm Resort" className="yuna-image" />
//                 <div className="yuna-details">
//                     <h2 style={{color: 'gold'}}>Restaurant and Club</h2>
//                     <p>The restaurant is a modern masterpiece, with a sleek bamboo exterior that exudes
//                       elegance and sophistication..</p>
//                 </div>
//             </div>
//             <div className="yuna-section">
//                 <img src={CountryClub} alt="Yuna Farm Resort" className="yuna-image" />
//                 <div className="yuna-details">
//                     <h2 style={{color: 'gold'}}>Country Club and Cottages</h2>
//                     <p>The Country Club and Cottages at Yuna City Development are the perfect escape from the
//                       hustle and bustle of the city. Surrounded by the beauty of nature, these facilities provide a serene
//                       environment where visitors can relax and unwind.</p>
//                 </div>
//             </div>

//             <div>
//             <p className="italic-justified">
//                 An already published magazine is available..
//             </p>
//              </div>
//                 <div className="cta">
//                 <h2>Experience Yuna City</h2>
//                 <p>Discover unparalleled luxury, innovation, and sustainability with Ark Link Properties. 
//                   Join us in shaping the future of real estate and construction in Kenya.</p>
//             </div>
//         </div>
//     );
// }
