import React, { useEffect } from 'react';
import '../Styles/css/progress.css'; // Assuming you have your CSS in a file named 'progress.css'

function ProgressBar() {
    useEffect(() => {
        progress_bar();
    }, []);

    function progress_bar() {
        const speed = 30;
        const items = document.querySelectorAll('.progress_bar_item');

        items.forEach((item) => {
            const progressBar = item.querySelector('.progress');
            const itemValue = parseInt(progressBar.getAttribute('data-progress'));
            let i = 0;

            const count = setInterval(() => {
                if (i <= itemValue) {
                    progressBar.style.width = i + '%';
                    item.querySelector('.item_value').innerText = i + '%';
                } else {
                    clearInterval(count);
                }
                i++;
            }, speed);
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
