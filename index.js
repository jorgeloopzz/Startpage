// Set date
document.addEventListener("DOMContentLoaded", () => {
  const timeTxt = document.getElementById("time");
  const dateTxt = document.getElementById("date");

  // Function to set time
  setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    timeTxt.innerHTML = hours + ":" + minutes + ":" + seconds;
  }, 1);

  // Set date
  const date = new Date();

  // Make arrays to set days and months in text
  const daysMonths = [
    // Days
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    // Months
    [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  ];

  dateTxt.innerHTML =
    daysMonths[date.getDay()] +
    " " +
    date.getDate() +
    " " +
    daysMonths[7][date.getMonth()] +
    " " +
    date.getFullYear();
});
