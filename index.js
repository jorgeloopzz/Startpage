document.addEventListener("DOMContentLoaded", () => {
  // Show a greeting
  const greeting = document.querySelector("h1");
  const time = new Date().getHours();
  function inRange(number, min, max) {
    return number >= min && number <= max;
  }
  if (inRange(time, 0, 6))
    greeting.innerHTML = "It's too late, take some sleep";
  if (inRange(time, 6, 9)) greeting.innerHTML = "Good morning :)";
  if (inRange(time, 9, 12)) greeting.innerHTML = "Have a good day";
  if (inRange(time, 12, 15)) greeting.innerHTML = "Hi there!";
  if (inRange(time, 15, 18)) greeting.innerHTML = "Good afternoon";
  if (inRange(time, 18, 20)) greeting.innerHTML = "Good evening";
  if (inRange(time, 20, 23))
    greeting.innerHTML = "I hope you've had a fantastic day";

  // Function to set time
  const timeTxt = document.getElementById("time");
  setInterval(() => {
    let date = new Date();
    timeTxt.innerHTML = date.toLocaleTimeString();
  }, 1000);

  // Set date
  const dateTxt = document.getElementById("date");
  const date = new Date();

  // Make arrays to set days and months in text
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
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
  ];

  dateTxt.innerHTML = `
    ${days[date.getDay()]} ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()}
    `;

  // Search engine function
  const searchBox = document.querySelector("input");
  searchBox.addEventListener("keydown", (e) => {
    if (e.code == "Enter" && searchBox.value != "") {
      window.open(`https://search.brave.com/search?q=${searchBox.value}`);
    } else {
      return 0;
    }
  });

  // Remove search
  const removeSearch = document.getElementById("removeBtn");
  removeSearch.onclick = () => {
    searchBox.value = "";
    searchBox.focus();
  };

  // Extensions stores depending on the browsers
  const link = document.getElementById("extensions-link");
  const browser = navigator.userAgent; // Detect the user's browser
  if (browser.indexOf("Chrome") != -1) {
    link.setAttribute(
      "href",
      "https://chrome.google.com/webstore/category/extensions"
    );
  } else if (browser.indexOf("Opera") != -1 || browser.indexOf("OPR") != -1) {
    link.setAttribute("href", "https://addons.opera.com/en/extensions/");
  } else if (browser.indexOf("Firefox") != -1) {
    link.setAttribute("href", "https://addons.mozilla.org/en-US/firefox/");
  }
});
