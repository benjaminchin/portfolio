import React from "react";
import {
  AcademicCapIcon,
  LightBulbIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

const About = () => {
  return (
    <div>
      {/* <div className="separator"></div> */}
      <div className="hero min-h-screen bg-base-100 bg-opacity-50">
        <div className="hero-content text-left">
          <div className="w-2/3 p-6">
            <h1 className="font-inter text-4xl font-bold text-gradient">
              ABOUT
            </h1>
            <p className="py-6 text-accent font-inter text-lg sm:text-2xl">
              Hello! My name is Ben and I'm a second year Computer Science
              student at Virginia Tech. I've always loved to make things. When I
              was a kid, I was always into crafts like origami, legos, building
              computers, and even wood-working. When I took my first programming
              class in high school, I fell in love with building projects I'm
              passionate about. These days, I'm a student, but I also love
              creating outside of classes. This website is a great example! I'm
              currently self-learning front-end technologies, and trying to
              expand my skillset as a Full-stack developer.
            </p>
            <div className="mx-auto flex flex-wrap gap-4 bg-base-300 p-4 w-fit rounded-xl">
              <img src="/assets/icons8-java.svg" alt="java" />
              <img src="/assets/icons8-python.svg" alt="python" />
              <img src="/assets/icons8-c-programming.svg" alt="c" />
              <img src="/assets/icons8-javascript.svg" alt="js" />
              <img src="/assets/icons8-typescript.svg" alt="ts" />
              <img src="/assets/icons8-react-native.svg" alt="react" />
              <img src="/assets/icons8-flask.svg" alt="flask" />
              <img src="/assets/icons8-html-5.svg" alt="html" />
              <img src="/assets/icons8-css3.svg" alt="css" />
              <img src="/assets/icons8-tailwindcss.svg" alt="tailwind" />    
            </div>      
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
