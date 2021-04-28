import React from "react";

export default function ForeignTimezone({ timezone }) {
  function formatCalendarDate(date) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let months = [
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
    let day = days[date.getDay()];

    let month = months[date.getMonth()];

    let calendarDate = date.getDate();
    if (calendarDate < 10) {
      calendarDate = `0${calendarDate}`;
    }
    return `${day}, ${calendarDate} ${month} ${date.getFullYear()}`;
  }

  function formatHours(timestamp) {
    let hours = timestamp.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }

    let minutes = timestamp.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }

  let now = new Date();
  let localTime = now.getTime();
  let localOffset = now.getTimezoneOffset() * 60000;
  let utc = localTime + localOffset;
  let foreignTime = new Date(utc + timezone);

  return (
    <div className="ForeignTimezone">
      Local Time: <strong>{formatHours(foreignTime)}</strong>
      <br />
      Local Date: <strong>{formatCalendarDate(foreignTime)}</strong>
    </div>
  );
}
