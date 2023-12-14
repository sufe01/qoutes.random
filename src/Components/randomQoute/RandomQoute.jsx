import React, { useState } from 'react'
import './RandomQoute.css';
import twitter_icon from '../Assets/x.png';
import reload_icon from '../Assets/load.png';

const RandomQoute = () => {

    let qoutes = [];

    async function loadQoutes() {
        const response = await fetch("https://type.fit/api/quotes");
        qoutes = await response.json();
    };

    const [qoute, setQoute] = useState({
        text: "Difficulties increase the nearer we get to the goal.",
        author: "Johann Wolfgang von Goethe",
    });
    const random = () => {
        const select = qoutes[Math.floor(Math.random() * qoutes.length)];
        setQoute(select);
    };
    const twitter = () => {
        window.open(`https://twitter.com/intent/tweet?text=${qoute.text} - ${qoute.author.split(',')[0]}`);
    }
    loadQoutes();

    return (
        <div className='container'>
            <div className="qoute">{qoute.text}</div>
            <div className='w-100'>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author"> - {qoute.author.split(',')[0]}</div>
                    <div className="icons">
                        <img src={reload_icon} onClick={() => { random() }} alt="" />
                        <img src={twitter_icon} onClick={() => { twitter() }} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RandomQoute
