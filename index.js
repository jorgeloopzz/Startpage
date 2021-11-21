// Set date
document.addEventListener('DOMContentLoaded', () => {
    // Function to set time
    const timeTxt = document.getElementById('time');

    setInterval( () => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        txt.innerHTML = hours + ':' + minutes + ':' + seconds;
    },1)
});