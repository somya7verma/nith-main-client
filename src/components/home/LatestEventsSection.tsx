'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image from 'next/image';
import Slider from 'react-slick';

const events = [
  {
    title: 'Nimbus 2025',
    date: 'Oct 20, 2025',
    description:
      'A showcase of cutting-edge projects from NITH students and faculty.',
    image: '/images/events/nimbus.jpg',
  },
  {
    title: 'RoboSoc',
    date: 'Nov 10, 2025',
    description: 'Explore the latest in AI and machine learning innovations.',
    image: '/images/events/Robots.webp',
  },
  {
    title: 'Cultural Fest – Hill’Fair',
    date: 'Dec 5, 2025',
    description:
      'Experience the cultural vibrance of NITH with performances, art, and food.',
    image: '/images/events/hillfair.jpg',
  },
  {
    title: 'Nimbus 2025',
    date: 'Oct 20, 2025',
    description:
      'A showcase of cutting-edge projects from NITH students and faculty.',
    image: '/images/events/nimbus.jpg',
  },
  {
    title: 'RoboSoc',
    date: 'Nov 10, 2025',
    description: 'Explore the latest in AI and machine learning innovations.',
    image: '/images/events/Robots.webp',
  },
  {
    title: 'Cultural Fest – Hill’Fair',
    date: 'Dec 5, 2025',
    description:
      'Experience the cultural vibrance of NITH with performances, art, and food.',
    image: '/images/events/hillfair.jpg',
  },
];

export default function LatestEventsSection() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-left">
            Latest Events
          </h2>
        </div>

        <Slider {...settings} className="mx-1 md:mx-2">
          {events.map((event, index) => (
            <div key={index} className="px-4">
              <div className="relative overflow-hidden shadow-soft transition-transform transition-shadow duration-300 ease-in-out hover:shadow-xl hover:scale-105 cursor-pointer group">
                <div className="relative w-full h-84 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-fit md:h-32 bg-black opacity-90 backdrop-blur-sm p-5">
                    <h3 className="text-xl font-semibold text-text-primary mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-text-secondary mb-1">
                      {event.date}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
