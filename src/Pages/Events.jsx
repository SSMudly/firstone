import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Event images (replace with actual event image paths)
import comedyNightImage from "../assets/comedyNight.jpg";
import talentXImage from "../assets/Talent X.jpg";
import dancePerformanceImage from "../assets/danceperformance.jpg";
import movieMysticImage from "../assets/MovieMystic.jpg";

const Events = () => {
  const events = [
    { 
      title: "Comedy Night", 
      description: "Show your moves and groove to the beat.", 
      image: comedyNightImage 
    },
    { 
      title: "Talent X", 
      description: "Solve challenging problems and win prizes.", 
      image: talentXImage 
    },
    { 
      title: "Dance Performance", 
      description: "Discover stunning artworks by talented artists.", 
      image: dancePerformanceImage 
    },
    { 
      title: "Movie Mystic", 
      description: "Enjoy live performances by amazing bands.", 
      image: movieMysticImage 
    },
  ];

  return (
    <div className="p-0 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Events</h1>
      <Carousel autoPlay infiniteLoop showThumbs={false} className="h-full w-full flex flex-row justify-center items-center">
        {events.map((event, index) => (
          <div key={index} className="relative h-full w-full">
            {/* Event Image */}
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover" 
            />
            {/* Overlay for text content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-4 bg-black bg-opacity-50 rounded-lg">
              <h2 className="text-3xl font-bold">{event.title}</h2>
              <p className="mt-4 text-xl">{event.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Events;
