import '/src/css/calendar.css';
import React from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function CalendarSmallPage() {
    const [currentDate, setCurrentDate] = React.useState(new Date());
    const [month, setMonth] = React.useState(new Date().getMonth());
    const [year, setYear] = React.useState(new Date().getFullYear());

    function addMonth() {
        setMonth((prevState) => (prevState + 1) % 12);
        if (month === 11) {
            setYear((prevState) => prevState + 1);
        }
    } 

    function subMonth() {
        setMonth((prevState) => (prevState - 1 + 12) % 12);
        if (month === 0) {
            setYear((prevState) => prevState - 1);
        }
    }

    const months = [
        "חדש יא - חדש י", "חדש יב - חדש יא", "חדש א - חדש יב", "חדש ב - חדש א", "חדש ג - חדש ב", "חדש ד - חדש ג", "חדש ה - חדש ד", "חדש ו - חדש ה", "חדש ז - חדש ו", "חדש ח - חדש ז", "חדש ט - חדש ח", "חדש י - חדש ט",  
    ];
    const gregMonths = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const daysOfWeek = ["יום א", "יום ב", "יום ג", "יום ד", "יום ה", "יום ו", "שבת"];

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const markedDays = [
        { month: 2, day: 20, type: 'holyday', description: 'New Year' },
        { month: 3, day: 2, type: 'festival', description: 'Pesach - פסח' },
        { month: 3, startDay: 3, endDay: 9, type: 'holyday', description: `Chag Ha'Matzoth - חג המצות` },
        { month: 8, startDay: 26, endDay: 27, type: 'holyday', description: 'Yom Kipurim - יום כפרים' },
        { month: 8, day: 18, type: 'holyday', description: 'Yom Tharuah - יום תרועה' },
        { month: 8, day: 27, type: 'holyday', description: 'Day of Atonement - יום כיפרים' },
        { month: 9, startDay: 2, endDay: 9, type: 'holyday', description: 'Succoth - חג הסוכות' }
        // Add more marked days as needed
    ];

    const secondaryDays = {
        0: [ null, ' / 13',' / 14',' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 1', ' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14',' / 15'],
        1: [ null,' / 14',' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 1', ' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14', ' / 15', ' / 16', ' / 17'],
        2: [' / 12',' / 13', ' / 14', ' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 31', ' / 1',' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14',],
        3: [' / 12', ' / 13', ' / 14', ' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 1',' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14', ' / 15',],
        4: [' / 12', ' / 13', ' / 14', ' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 1', ' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14', ' / 15',],
        5: [ ' / 13', ' / 14', ' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 31', ' / 1', ' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14', ' / 15',],
        6: [' / 12', ' / 13', ' / 14', ' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 1', ' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14', ' / 15',],
        7: [' / 13', ' / 14', ' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 1', ' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14', ' / 15',],
        8: [null, ' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 31', ' / 1', ' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14', ' / 15',],
        9: [null, ' / 14', ' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 1', ' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14',],
        10: [ null,' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 1', ' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14',],
        11: [null, ' / 15', ' / 16', ' / 17', ' / 18', ' / 19', ' / 20', ' / 21', ' / 22', ' / 23', ' / 24', ' / 25', ' / 26', ' / 27', ' / 28', ' / 29', ' / 30', ' / 31',' / 1', ' / 2', ' / 3', ' / 4', ' / 5', ' / 6', ' / 7', ' / 8', ' / 9', ' / 10',' / 11', ' / 12', ' / 13', ' / 14',],
        
        // Add more mappings for other months as needed
    };

    return (
        <div className="calendar">
            <div className="calendar-header">
                <FaArrowLeft className='buttonLeft' onClick={subMonth} />
                <div className="header-text">
                    <h2 className='year'>{year}</h2>
                    <h2 className='month'>{months[month]}</h2>
                    <h2 className='greg--month'>{gregMonths[month]}</h2>
                </div>
                <FaArrowRight className='buttonRight' onClick={addMonth} />
            </div>
            <ul className='days'>
                {daysOfWeek.map((day, index) => (
                    <li key={index}>{day}</li>
                ))}
            </ul>
            <div className='evenDay--container'>
                {[...Array(firstDayOfMonth).keys()].map((emptyDay) => (
                    <div key={`empty-${emptyDay}`} className="empty-day"></div>
                ))}
                {[...Array(daysInMonth).keys()].map((day) => {
                    const currentDay = day + 1;
                    const markedDay = markedDays.find(d => d.month === month && d.day === currentDay);
                    const markedWeek = markedDays.find(d => d.month === month && d.startDay <= currentDay && d.endDay >= currentDay);
                    const secondaryDay = secondaryDays[month] ? secondaryDays[month][currentDay] : null;
    
                    const isToday = currentDate.getDate() === currentDay && currentDate.getMonth() === month && currentDate.getFullYear() === year;
    
                    return (
                        <div key={currentDay} className={`day ${markedDay ? markedDay.type : ''} ${markedWeek ? markedWeek.type : ''} ${isToday ? 'today' : ''}`}>
                            <div className="day-number">
                                <span className="gregorian-day">{currentDay}</span>
                                {secondaryDay && <span className="secondary-day">{secondaryDay}</span>}
                            </div>
                            {markedDay && <span className="tooltip">{markedDay.description}</span>}
                            {markedWeek && <span className="tooltip">{markedWeek.description}</span>}
                        </div>
                    );
                })}
                {[...Array(42 - firstDayOfMonth - daysInMonth).keys()].map((emptyDay) => (
                    <div key={`fill-${emptyDay}`} className="empty-day"></div>
                ))}
            </div>
        </div>
    );    
}

export default CalendarSmallPage;
