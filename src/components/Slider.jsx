import React, { useState } from 'react';
import '../Styles/css/slide.css'; // Import your CSS file

const Slider = () => {
    const [itemActive, setItemActive] = useState(0);
    const items = [
        { 
            src: 'https://cdn.britannica.com/35/172735-138-D2A8C54A/overview-Richard-M-Nixon.jpg', 
            title: 'Rigged Election', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
            repoUrl: 'https://github.com/mcarri355/riggedElection.git',
            websiteUrl: 'https://mcarri355.github.io/riggedElection/'
        },
        { 
            src: 'https://i.ytimg.com/vi/xRDb0QMebYc/maxresdefault.jpg', 
            title: 'Theme Switch', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
            repoUrl: 'https://github.com/mcarri355/theme_switch.git',
            websiteUrl: '#'
        },
        { 
            src: 'https://t4.ftcdn.net/jpg/02/53/02/53/360_F_253025372_7fugdeEXuR9ELWylYbJP3HtayEWe3lt1.jpg', 
            title: 'Summer Booklet',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
            repoUrl: 'https://github.com/mcarri355/SummerProject.git',
            websiteUrl: 'https://mcarri355.github.io/SummerProject/'
        },
        { 
            src: 'https://www.theexplode.com/wp-content/uploads/2017/09/beautiful-portfolio-website-4.jpg', 
            title: 'Old Portfolio', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
            repoUrl: 'https://github.com/mcarri355/Portfolio-2.0.git',
            websiteUrl: 'https://mcarri355.github.io/Portfolio-2.0/'
        },
        { 
            src: 'https://i.ytimg.com/vi/jDOdHmfMe0A/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgUChdMA8=&rs=AOn4CLCUNNmFgNW4EpjeyCLiwqLPLxBWfg', 
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
                        <div className="content subContent">
                            Project
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
