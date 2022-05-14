import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
function Projects() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#f46912" fill-opacity="1" d="M0,192L24,176C48,160,96,128,144,128C192,128,240,160,288,186.7C336,213,384,235,432,208C480,181,528,107,576,101.3C624,96,672,160,720,170.7C768,181,816,139,864,106.7C912,75,960,53,1008,74.7C1056,96,1104,160,1152,176C1200,192,1248,160,1296,138.7C1344,117,1392,107,1416,101.3L1440,96L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
</svg>
      <div className="ProjectWrapper" id="projects">
        <div className="Container">
          <div className="SectionTitle">Proyectos</div>
          <ProjectCard />
        </div>
      </div>
    </>
  );
}

export default Projects;
