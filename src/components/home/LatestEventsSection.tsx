'use client';

import Image from 'next/image';

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
];

export default function LatestEventsSection() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
          Latest Events
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-foreground shadow-soft overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-text-secondary mb-3">{event.date}</p>
                <p className="text-sm text-text-secondary">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
