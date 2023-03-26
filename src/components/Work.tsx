import React from "react";
import Card from "./Card";

const Work = () => {
  return (
    <div className="hero min-h-screen bg-base-100 bg-opacity-50">
      <div
        className="hero-content flex flex-wrap justify-evenly gap-44"
        id="work"
      >
        <Card
          video="https://www.youtube.com/embed/O14Dolz9slc"
          img="seveneightsix.png"
          hasVideo={false}
          hasLiveDemo={false}
          featured={true}
          title="SevenEightSix"
          description="A web application that displays the carbon footprint of a website.
            Allows developers to build eco-conscious websites."
          tags={["Python", "Flask", "HTML", "CSS"]}
          link="https://devpost.com/software/tbd-quapmb"
        />

        <Card
          img="weather-app.png"
          hasVideo={false}
          featured={true}
          liveDemo="https://benjaminchin-weather-app.netlify.app/"
          hasLiveDemo={true}
          title="Weather App"
          description="Allows the user to search for a city or postal code, and retrives and displays weather information for corresponding input."
          tags={[
            "Typescript",
            "React",
            "CSS",
            "HTML",
            "MaterialUI",
            "WeatherAPI",
          ]}
          link="https://github.com/benjaminchin/weather-app"
        />

        <Card
          img="venmo.png"
          hasVideo={false}
          hasLiveDemo={false}
          featured={false}
          title="Venmo Sheets"
          description="Automation script that retrives and parses new Venmo transasctions, and adds data to a running list in Google Sheets."
          tags={["Python", "venmo-api", "gspread", "Google Cloud"]}
          link="https://github.com/benjaminchin/python-automated-venmo-transaction-sheet"
        />

        <Card
          img="work-scheduler.png"
          hasVideo={false}
          hasLiveDemo={false}
          featured={false}
          title="Work Scheduler"
          description="Webscraping script that automatically creates Google Calendar events from a bi-weekly released work schedule to increase organization."
          tags={["Python", "Selenium", "Google Calendar API"]}
          link="https://github.com/benjaminchin/auto_work"
        />
      </div>
    </div>
  );
};

export default Work;
