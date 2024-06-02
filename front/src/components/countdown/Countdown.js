import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const calculateTimeLeft = () => {
        const raceDate = new Date('2025-04-01T00:00:00');
        const now = new Date();
        const difference = raceDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
                days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={interval} className="mx-2">
                {timeLeft[interval]} {interval}{' '}
            </span>
        );
    });

    return (
        <div className="flex overflow-x-auto whitespace-nowrap bg-gray-800 font-extrabold text-yellow-400 p-2 rounded-md">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );
};

export default Countdown;
