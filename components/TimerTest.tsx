'use client'

import React, { useState, useEffect } from 'react';

const SubTask = ({ text }) => (
    <div className="sub-task">
        <div className="sub-task-circle"></div>
        <div className="sub-task-text">{text}</div>
    </div>
);

const Timer = ({ time }) => {
    const [degrees, setDegrees] = useState(0);

    useEffect(() => {
        const totalSeconds = 60 * 60; // Assuming 1 hour timer
        const secondsPassed = parseInt(time.split(':')[0]) * 60 + parseInt(time.split(':')[1]);
        const progress = (secondsPassed / totalSeconds) * 360;
        setDegrees(progress);
    }, [time]);

    return (
        <div className="timer">
            <div className="timer-bg"></div>
            <div className="timer-progress" style={{ transform: `rotate(${degrees}deg)` }}></div>
            <div className="timer-text">{time}</div>
        </div>
    );
};

const Button = ({ text, onClick }) => (
    <button className="finish-button" onClick={onClick}>
        {text}
    </button>
);

const TimerDark = () => {
    const [time, setTime] = useState('32:10');

    const handleFinish = () => {
        console.log('Finish clicked');
    };

    const handleQuit = () => {
        console.log('Quit clicked');
    };

    return (
        <div className="timer-container">
            <SubTask text="UI Design" />
            <Timer time={time} />
            <Button text="Finish" onClick={handleFinish} />
            <div className="quit-text" onClick={handleQuit}>Quit</div>
        </div>
    );
};

// CSS styles
const styles = `
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');

body {
  font-family: 'Rubik', sans-serif;
  background-color: #07040F;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}
.timer-container {
  width: 343px;
  height: 572px;
  background-color: #07040F;
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sub-task {
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-bottom: 60px;
}
.sub-task-circle {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #7012CE;
  margin-right: 12px;
}
.sub-task-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 24px;
}
.timer {
  width: 220px;
  height: 220px;
  position: relative;
  margin: 0 auto 60px;
}
.timer-bg {
  width: 100%;
  height: 100%;
  border: 10px solid #1A1440;
  border-radius: 50%;
  box-sizing: border-box;
}
.timer-progress {
  width: 100%;
  height: 100%;
  position: absolute;
  top: -10px;
  left: -10px;
  border: 10px solid transparent;
  border-top: 10px solid #7012CE;
  border-right: 10px solid #7012CE;
  border-radius: 50%;
  transform: rotate(45deg);
  transition: transform 0.3s ease;
}
.timer-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 40px;
  font-weight: 500;
}
.finish-button {
  width: 295px;
  height: 60px;
  background-color: #1B1440;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
}
.quit-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  margin-top: 24px;
  cursor: pointer;
}
`;

export default function TimerTest() {
    return (
        <>
            <style>{styles}</style>
            <TimerDark />
        </>
    );
}