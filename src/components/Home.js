import React from "react";
import './Home.css';
import logo from '../images/logo.jpeg'
import Bungalows from '../images/Bungalow.png'
import CountryClub from '../images/CountryClub.png'
import Maisonette from '../images/Maisonete.png'
import PetrolStation from '../images/PetrolStation.png'
import Restaurant from '../images/Restaurant.png'
import YunaCityMall from '../images/YunaCityMall.png'
import yunafarmresort from '../images/yunafarmresort.png'
import YunaHomes from '../images/YunaHomes.png'

export default function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to Ark Link Properties</h1>
            <p className="intro-text">Introducing the revolutionary Yuna City Development project. Immerse yourself in luxury, innovation, and sustainability.</p>

            <div className="yuna-section">
                <img src={yunafarmresort} alt="Yuna Farm Resort" className="yuna-image" />
                <div className="yuna-details">
                    <h2>Yuna Farm Resort</h2>
                    <p>The farm resort is a unique blend of modern living and traditional farming practices, offering visitors the best of both worlds. Experience immersive farm life in a vast land of opportunities.</p>
                </div>
            </div>
            <div className="yuna-section">
                <img src={YunaHomes} alt="Yuna Farm Resort" className="yuna-image" />
                <div className="yuna-details">
                    <h2 style={{color: 'gold'}}>Yuna Homes</h2>
                    <p>With a focus on providing comfortable
                        and sustainable living spaces, the residential area of
                        the development has been carefully planned and
                        designed to meet the diverse needs of the residents.</p>
                </div>
            </div>
            <div className="yuna-section">
                <img src={Maisonette} alt="Yuna Farm Resort" className="yuna-image" />
                <div className="yuna-details">
                    <h2>Maisonette</h2>
                    <p>These luxurious units offer spacious living areas with all rooms ensuite, 
                      allowing for maximum comfort and privacy. The double-volume lounge area adds
                      a touch of elegance and sophistication to the design, making it a
                      perfect space for entertaining guests or spending quality time with family.</p>
                </div>
            </div>
            <div className="yuna-section">
                <img src={Bungalows} alt="Yuna Farm Resort" className="yuna-image" />
                <div className="yuna-details">
                    <h2>Bungalows</h2>
                    <p>Yuna Homes also features 9 spacious and luxurious bungalows, each designed
                      with modern aesthetics and functionality in mind. These flat-roof bungalows come
                      with a total area of 330 square meters and are equipped with all the necessary
                      amenities for a comfortable and luxurious lifestyle.</p>
                </div>
            </div>
            <div className="yuna-section">
                <img src={YunaCityMall} alt="Yuna Farm Resort" className="yuna-image" />
                <div className="yuna-details">
                    <h2>Yuna City Mall</h2>
                    <p>Yuna City Development's Commercial Center is a one-stop shop for all your
                        commercial needs.</p>
                </div>
            </div>
            <div className="yuna-section">
                <img src={PetrolStation} alt="Yuna Farm Resort" className="yuna-image" />
                <div className="yuna-details">
                    <h2>Petrol Station and Convenience Store</h2>
                    <p>A drive-thru petrol station is located within the premises, allowing for easy 
                      access to fuel up your car while running errands or on the way to work.</p>
                </div>
            </div>
            <div className="yuna-section">
                <img src={Restaurant} alt="Yuna Farm Resort" className="yuna-image" />
                <div className="yuna-details">
                    <h2>Restaurant and Club</h2>
                    <p>The restaurant is a modern masterpiece, with a sleek bamboo exterior that exudes
                      elegance and sophistication..</p>
                </div>
            </div>
            <div className="yuna-section">
                <img src={CountryClub} alt="Yuna Farm Resort" className="yuna-image" />
                <div className="yuna-details">
                    <h2>Country Club and Cottages</h2>
                    <p>The Country Club and Cottages at Yuna City Development are the perfect escape from the
                      hustle and bustle of the city. Surrounded by the beauty of nature, these facilities provide a serene
                      environment where visitors can relax and unwind.</p>
                </div>
            </div>

            <div>
            <p className="italic-justified">
                An already published magazine is available..
            </p>
             </div>
                <div className="cta">
                <h2>Experience Yuna City</h2>
                <p>Discover unparalleled luxury, innovation, and sustainability with Ark Link Properties. 
                  Join us in shaping the future of real estate and construction in Kenya.</p>
            </div>
        </div>
    );
}
