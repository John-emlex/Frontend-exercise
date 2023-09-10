const element = document.getElementById("date");
const currentDate = new Date();

const formattedDate = currentDate.toLocaleDateString();

// Set the formatted date as the content of the element
element.innerHTML = "Today is " + formattedDate;

const element2 = document.getElementById("time");
const currentDate1 = new Date();

// Extract hours, minutes, and seconds
const hours = currentDate1.getHours();
const minutes = currentDate1.getMinutes();
const seconds = currentDate1.getSeconds();

// Format the time as a string (e.g., "12:34:56")
const formattedTime = `${hours}:${minutes}:${seconds}`;

// Set the formatted time as the content of the element
element2.innerHTML = "Current time is " + formattedTime;
