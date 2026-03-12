import React, { useState, useEffect } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        document.title = `Elapsed time: ${formatTime(time)}`;
    }, [time]); // This effect depends on 'time' and runs whenever it updates


    function formatTime(date) {
        let hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const meridiem = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${hours}:${minutes}:${seconds} ${meridiem}`;
    }

    function padZero(num) {
        return String(num).padStart(2, '0');
    }

    return (<div className="clock-container">
        <div className="clock">
            <span>{formatTime(time)}</span>
        </div>
    </div>)
}

export default DigitalClock;