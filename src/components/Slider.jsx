import React, { useState } from 'react';
import '../Styles/css/slide.css'; // Import your CSS file

const Slider = () => {
    const [itemActive, setItemActive] = useState(0);
    const items = [
        { 
            src: 'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png', 
            title: 'Rigged Election', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
            repoUrl: 'https://github.com/mcarri355/riggedElection.git',
            websiteUrl: 'https://mcarri355.github.io/riggedElection/'
        },
        { 
            src: 'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png', 
            title: 'Theme Switch', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
            repoUrl: 'https://github.com/mcarri355/theme_switch.git',
            websiteUrl: '#'
        },
        { 
            src: 'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png', 
            title: 'Summer Booklet', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
            repoUrl: 'https://github.com/mcarri355/SummerProject.git',
            websiteUrl: 'https://mcarri355.github.io/SummerProject/'
        },
        { 
            src: 'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png', 
            title: 'Old Portfolio', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
            repoUrl: 'https://github.com/mcarri355/Portfolio-2.0.git',
            websiteUrl: 'https://mcarri355.github.io/Portfolio-2.0/'
        },
        { 
            src: 'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png', 
            title: '2D Platformer', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
            repoUrl: 'https://github.com/MatthewAndresWestMec/UNITYPLATFORMER.git',
            websiteUrl: '#'
        }
    ];

    const showSlider = (index) => {
        setItemActive(index);
    };

    const nextClick = () => {
        setItemActive((prevActive) => (prevActive + 1) % items.length);
    };

    const prevClick = () => {
        setItemActive((prevActive) => (prevActive - 1 + items.length) % items.length);
    };

    return (
        <div className="slider">
            <div className="list">
                {items.map((item, index) => (
                    <div key={index} className={`item ${index === itemActive ? 'active' : ''}`}>
                        <img src={item.src} alt={`Slider ${index + 1}`} />
                        <div className="content">
                            <p>Project</p>
                            <h2>{item.title}</h2>
                            <div className="buttons">
                                <button onClick={() => window.open(item.repoUrl, "_blank")}>Repo</button>
                                <button onClick={() => window.open(item.websiteUrl, "_blank")}>Website</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="arrows">
                <button id="prev" onClick={prevClick}>{"<"}</button>
                <button id="next" onClick={nextClick}>{">"}</button>
            </div>
            <div className="thumbnail">
                {items.map((item, index) => (
                    <div key={index} className={`item ${index === itemActive ? 'active' : ''}`} onClick={() => showSlider(index)}>
                        <img src={item.src} alt={`Slider ${index + 1}`} />
                        <div className="content">
                            Name Slider
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
