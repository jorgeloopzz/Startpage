// Set date
document.addEventListener('DOMContentLoaded', () => {
    const timeTxt = document.getElementById('time');
    const dateTxt = document.getElementById('date');

    // Function to set time
    setInterval( () => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        timeTxt.innerHTML = hours + ':' + minutes + ':' + seconds;
    },1)

    // Set date
    const date = new Date();
    
    // Make to arrays to set days and months in text
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    dateTxt.innerHTML = days[ date.getDay() ] + ' ' + date.getDate() + ' ' + months[ date.getMonth() ] + ' ' + date.getFullYear();

});