import React, { useState, useEffect } from 'react';

const Countdown = () => {
    // Calculates the time left until a specific date (raceDate) and returns an object containing the remaining time in months, days, hours, minutes, and seconds
    const calculateTimeLeft = () => {
        const raceDate = new Date('2025-04-01T00:00:00'); // Changed because date listed on project is in the past
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

    // Initialises the timeLeft state variable using the useState hook with the initial value obtained from the calculateTimeLeft function
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    // Runs side effects after the component renders. In this case, it updates the timeLeft state variable every second using a setTimeout function
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    // Iterates through the timeLeft object keys (months, days, hours, minutes, seconds)
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
        <div className="overflow-x-auto whitespace-nowrap text-2xl font-extrabold text-gray-800">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );
};

export default Countdown;
