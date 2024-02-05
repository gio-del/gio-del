import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";

// Interface for the props
interface ProjectCarouselProps {
  projects: {
    title: string;
    date: string;
    description: string;
    link: string;
    tech: string[];
  }[];
}

export default function ProjectCarousel(props: ProjectCarouselProps) {
  // projects is an array of objects with the following structure: {title: string, date: string, description: string, link: string}
  const { projects } = props;

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider-container w-full">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div>
              <ProjectCard key={index} project={project} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
