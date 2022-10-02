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

  // Choose search engine
  const engines = document.querySelectorAll(".dropdown-item");
  const icons = document.getElementById("search-icon");
  const input = document.getElementsByTagName("input");
  let url;

  const google = {
    name: "Google",
    url: "https://www.google.com/search?q=",
    icon: "https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-512.png",
  };

  const duckduckgo = {
    name: "Duckduckgo",
    url: "https://duckduckgo.com/?va=j&t=hc&q=",
    icon: "https://cdn3.iconfinder.com/data/icons/social-media-special/256/duckduckgo-512.png",
  };

  const brave = {
    name: "Brave",
    url: "https://search.brave.com/search?q=",
    icon: "https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/brave-icon.png",
  };

  engines[0].addEventListener("click", () => {
    url = google.url;
    icons.setAttribute("src", google.icon);
  })

  engines[1].addEventListener("click", () => {
    url = duckduckgo.url;
    icons.setAttribute("src", duckduckgo.icon);
  })

  engines[2].addEventListener("click", () => {
    url = brave.url;
    icons.setAttribute("src", brave.icon);
  })

  // Search engine function
  const searchBox = document.querySelector("input");
  searchBox.addEventListener("keydown", (e) => {
    if (e.code == "Enter" && searchBox.value != "") {
      window.open(`${url}${searchBox.value}`);
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
