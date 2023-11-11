import './CurrentDate.css'
const CurrentDate = () => {

    const currentDate = new Date()

    const monthName = currentDate.toLocaleString('en-US', { month: 'long' });
    const day = currentDate.getDate();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];

    return <div className='current-date'>
        <div className='day'>{day}</div>

        <div className='month'>{monthName},</div>
        <div className='day-of-week'>{dayOfWeek}</div>
    </div>


}

export default CurrentDate