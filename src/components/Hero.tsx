import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen bg-gradient font-sans">
        <div className="hero-content text-left">
          <div className="max-w-2xl">
            <h1 className="text-7xl font-bold text-outline mb-4">
              Hi, I'm <span className="text-white">Ben.</span>
              <br />
              Software Engineer.
            </h1>
            <div className="flex justify-start gap-3">
              <a href="/assets/resume.pdf">
                <button className="btn btn-accent">View Resume</button>
              </a>
              <a href="https://github.com/benjaminchin">
                <img
                  src="/assets/icons8-github(1).svg"
                  alt="github"
                  className="w-10"
                />
              </a>
              <a href="https://www.linkedin.com/in/benjamin-d-chin/">
                <img
                  src="/assets/linkedin.svg"
                  alt="linkedin-circled"
                  className="w-10"
                />
              </a>
            </div>
            <div className="w-10 h-10 mx-auto my-6">
              <a href="#about">
                <ChevronDownIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
