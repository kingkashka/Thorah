import '/src/css/calendar.css';
import React from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function CalendarSmallPage() {
    const [month, setMonth] = React.useState(0);

    function addMonth() {
        setMonth((prevState) => (prevState + 1) % 12);
    }

    function subMonth() {
        setMonth((prevState) => (prevState - 1 + 12) % 12);
    }

    const months = ["חודש א", "חודש ב", "חודש ג", "חודש ד", "חודש ה", "חודש ו", "חודש ז", "חודש ח", "חודש ט", "חודש י", "חודש יא", "חודש יב"];

    // Get the number of days in the selected month
    const year = 2024;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    return (
        <>
        <div className="calendar">
            <h2 className='year'>2024</h2>
            <h2 className='month'>{months[month]}</h2>
            <FaArrowRight className='buttonRight' onClick={addMonth} />
            <FaArrowLeft className='buttonLeft' onClick={subMonth} />
            <ul className='days'>
                <li>יום אחד</li>
                <li>יום שני</li>
                <li>יום שלישי</li>
                <li>יום רביעי</li>
                <li>יום חמישי</li>
                <li>יום שישי</li>
                <li>יום שבת</li>
            </ul>
            <div className='evenDay--container'>
                {[...Array(daysInMonth).keys()].map((day) => (
                    <div key={day}>{day + 1}</div>
                ))}
                {[...Array(42 - daysInMonth).keys()].map((emptyDay) => (
                    <div key={emptyDay}></div>
                ))}
            </div>
        </div>
        </>
    );
}

export default CalendarSmallPage;