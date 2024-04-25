import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import '../Styles/css/progress.css';

function ProgressBar() {
    useEffect(() => {
        animateProgressBar();
    }, []);

    function animateProgressBar() {
        const speed = 3; // Adjust animation speed as needed
        const items = document.querySelectorAll('.progress_bar_item');

        items.forEach((item) => {
            const progressBar = item.querySelector('.progress');
            const itemValue = parseInt(progressBar.getAttribute('data-progress'));
            gsap.fromTo(progressBar, { width: '0%' }, { width: `${itemValue}%`, duration: speed });
            gsap.to(item.querySelector('.item_value'), { innerText: `${Math.floor(itemValue)}%`, duration: speed });
        });
    }

    return (
        <div className="ce_ixelgen_progress_bar block">
            <div className="progress_bar">
                <div className="progress_bar_item grid-x">
                    <div className="item_label cell auto">HTML</div>
                    <div className="item_value cell shrink">0%</div>
                    <div className="item_bar cell">
                        <div className="progress" data-progress="92"></div>
                    </div>
                </div>
                <div className="progress_bar_item grid-x">
                    <div className="item_label cell auto">CSS</div>
                    <div className="item_value cell shrink">0%</div>
                    <div className="item_bar cell">
                        <div className="progress" data-progress="97"></div>
                    </div>
                </div>
            </div>
            <div className="progress_bar">
                <div className="progress_bar_item grid-x">
                    <div className="item_label cell auto">JavaScript</div>
                    <div className="item_value cell shrink">0%</div>
                    <div className="item_bar cell">
                        <div className="progress" data-progress="89"></div>
                    </div>
                </div>
                <div className="progress_bar_item grid-x">
                    <div className="item_label cell auto">React</div>
                    <div className="item_value cell shrink">0%</div>
                    <div className="item_bar cell">
                        <div className="progress" data-progress="83"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;
