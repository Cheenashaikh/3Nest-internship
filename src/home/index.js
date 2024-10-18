import React from "react";
import "./home.css";
import image from "../../src/assets/2nZQRqpUskfqZ4R7SMx7r9SOnFb.png";
import image1 from "../../src/assets/2nZTnsWbWUQEY8C0Je4Ly8Fl9gi.png";
import image2 from "../../src/assets/2nZUYvz692LFNv8AmlK7mSRxBEI.png";
import image3 from "../../src/assets/2nbTifGf4d7VipfxniFf2cwRdBe.png"

function Home() {
    const elements = ['Li', 'Ig', 'Tw', 'Dr', 'Be'];

    return (
        <div className="home">
            <div className="container">

                <div className="imageFlex">
                    <div className="image">
                        <img src={image} className="image1" />
                        <img src={image1} className="image2" />
                    </div>
                    <img src={image2} className="image3" />
                    <div>
                        <h1>Creative Design and Development for your product</h1>
                        <p>Helped more than 200+ startups to develop their website</p>
                        <div className="button">
                            <button className="button1">Get Started</button>
                            <button className="button2">Learn More</button>
                        </div>
                        <div className="image4">
                            <img src={image3} />

                        </div>

                    </div>

                </div>
                <div className="icon1">
                   
                        <ul>
                            {elements.map((element, index) => (
                                <li key={index}>
                                    <a href={`/${element.toLowerCase()}`}>
                                        {element}
                                    </a>
                                </li>
                            ))}
                        </ul>

                     
                            <h5 className="odading">Odading Street</h5>
                            <h5 >+62 8787 8787</h5>
                        </div>
                   
                
            </div>
        </div>

    );
} export default Home;