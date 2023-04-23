/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/alex-knight.jpg";

const imageAltText = "A cute robot";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Data Analysis 🎉",
    description: "My baby steps in Data Analysis. ):",
    url: "hhttps://github.com/Shunlexxi/Shunlexxi-baby-step-in-Data-Analysis",
  },
  {
    title: "Exploring Power BI",
    description: "Exploring Power BI at #30daysoflearning.",
    url: "https://github.com/Shunlexxi/30Days-of-Learning-Data-Analysis-Using-Power-BI-for-Students",
  },
  {
    title: "My Portfolio",
    description: "Created portfolio and deployed to GitHub pages.",
    url: "https://shunlexxi.github.io/portfolio/",
  },
  {
    title: "Typing Game",
    description: "Building a Typing Game with Microsoft Learn.",
    url: "https://github.com/Shunlexxi/Typing-Game",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
