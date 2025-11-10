// Seed script to populate the Homepage, Events, and News tables with demo data
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seed...');

  // Seed Homepage data
  console.log('Seeding homepage data...');
  const existingHomepage = await prisma.homepage.findUnique({
    where: { id: 1 },
  });

  if (existingHomepage) {
    console.log('Homepage record already exists with id: 1');
    console.log('Director:', existingHomepage.DirectorName);
  } else {
    const homepage = await prisma.homepage.create({
      data: {
        HeroMain: 'Welcome to NIT Hamirpur',
        HeroSub: 'Good Education to Build A Better Future',
        HeroDesc:
          'To achieve academic excellence in engineering, technology, architecture and science by imparting quality and value based education.',
        HeroBtnText: 'About Us',
        HeroBtnLink: '#about',
        Heroanchor: 'hero',

        AboutHead: 'About NIT Hamirpur',
        AboutDesc:
          'National Institute of Technology Hamirpur is a premier technical institution in India, established in 1986. We are committed to excellence in technical education and research.',
        AboutMission:
          'To provide quality technical education and foster innovation.',
        AboutVision:
          'To be a world-class institution of technical education and research.',

        AcademicYear: '2024-25',
        Academicplacement: '95%',
        AcademicHighpackage: '₹50 LPA',
        AcademicAverage: '₹12 LPA',
        AcademicToprecruiters: 'Google, Microsoft, Amazon, Adobe, Samsung',

        DirectorName: 'Dr. H.M. Suryavanshi',
        DirectorMessage:
          'NIT Hamirpur is a hub of innovation and learning, where we are committed to fostering a culture of excellence. Our focus is on nurturing the next generation of leaders and problem-solvers who can make a positive impact on society.',
        DirectorDesignation: 'Director, NIT Hamirpur',
        Directoremail: 'director@nith.ac.in',
        Directorphone: '01972-254001',
      },
    });
    console.log('✅ Homepage record created successfully!');
    console.log('ID:', homepage.id);
    console.log('Director:', homepage.DirectorName);
  }

  // Seed Events data
  console.log('Seeding events data...');
  const existingEventsCount = await prisma.events.count();

  if (existingEventsCount > 0) {
    console.log(`Events already exist: ${existingEventsCount} records found`);
  } else {
    const eventsData = [
      {
        Heading: 'Tech Summit 2025',
        Subheading: 'Annual Technology Conference',
        Description:
          'Join us for our annual Tech Summit featuring industry leaders and cutting-edge innovations. This event brings together the brightest minds in technology for networking and knowledge sharing.',
        image: '/group.jpg',
        startedAt: new Date('2025-03-15'),
        endedAt: new Date('2025-03-15'),
      },
      {
        Heading: 'Annual Conference',
        Subheading: 'Research and Development Showcase',
        Description:
          'Our flagship annual conference showcasing the latest research and developments. Connect with peers, participate in workshops, and stay updated with industry trends.',
        image: '/direct.jpg',
        startedAt: new Date('2025-04-20'),
        endedAt: new Date('2025-04-22'),
      },
      {
        Heading: 'Workshop Series',
        Subheading: 'Hands-on Learning Experience',
        Description:
          'Intensive hands-on workshops designed to enhance your skills. Expert instructors guide you through practical exercises and real-world applications.',
        image: '/admin.jpg',
        startedAt: new Date('2025-05-10'),
        endedAt: new Date('2025-05-12'),
      },
      {
        Heading: 'Networking Event',
        Subheading: 'Professional Connections',
        Description:
          'Build meaningful connections with professionals from various fields. Enjoy interactive sessions and collaborative opportunities.',
        image: '/robosocnith_cover.jpg',
        startedAt: new Date('2025-06-05'),
        endedAt: new Date('2025-06-05'),
      },
      {
        Heading: 'Innovation Expo',
        Subheading: 'Showcase of Future Technologies',
        Description:
          'Explore innovative projects and groundbreaking research. Showcase your work and discover new possibilities in your field.',
        image: '/admin.jpg',
        startedAt: new Date('2025-07-15'),
        endedAt: new Date('2025-07-17'),
      },
    ];

    for (const eventData of eventsData) {
      await prisma.events.create({ data: eventData });
    }

    console.log('✅ Events created successfully!');
    console.log('Total events created:', eventsData.length);
  }

  // Seed News data
  console.log('Seeding news data...');
  const existingNewsCount = await prisma.news.count();

  if (existingNewsCount > 0) {
    console.log(`News already exist: ${existingNewsCount} records found`);
  } else {
    const newsData = [
      {
        Heading: 'Campus Hosts International Tech Conference',
        Subheading: 'Bringing Global Innovation to NITH',
        Description:
          'Our campus recently hosted an international tech conference bringing together innovators and leaders from around the world. The event featured keynote speeches, panel discussions, and networking opportunities.',
        image: '/nith.jpg',
        startedAt: new Date('2024-10-30'),
        endedAt: new Date('2024-10-30'),
      },
      {
        Heading: 'New Research Center Inaugurated',
        Subheading: 'State-of-the-art Facility Opens',
        Description:
          'The university inaugurated a state-of-the-art research center dedicated to sustainable technology and innovation. This facility will support cutting-edge research projects.',
        image: '/direct.jpg',
        startedAt: new Date('2024-10-28'),
        endedAt: new Date('2024-10-28'),
      },
      {
        Heading: 'Student Achievement in National Olympiad',
        Subheading: 'NITH Students Excel in Competition',
        Description:
          'Our students secured top positions in the National Science Olympiad, showcasing their exceptional talent and dedication to excellence in academics.',
        image: '/robosocnith_cover.jpg',
        startedAt: new Date('2024-10-25'),
        endedAt: new Date('2024-10-25'),
      },
      {
        Heading: 'Faculty Member Receives National Award',
        Subheading: 'Dr. Sharma Honored for Research Excellence',
        Description:
          'Dr. Sharma received the prestigious National Research Award for her groundbreaking contributions to the field of biotechnology and innovation.',
        image: '/admin.jpg',
        startedAt: new Date('2024-10-20'),
        endedAt: new Date('2024-10-20'),
      },
      {
        Heading: 'New Scholarship Program Launched',
        Subheading: 'Supporting Deserving Students',
        Description:
          'The university launched a comprehensive scholarship program to support deserving students from underprivileged backgrounds to pursue higher education.',
        image: '/admin.jpg',
        startedAt: new Date('2024-10-18'),
        endedAt: new Date('2024-10-18'),
      },
    ];

    for (const newsItem of newsData) {
      await prisma.news.create({ data: newsItem });
    }

    console.log('✅ News created successfully!');
    console.log('Total news created:', newsData.length);
  }

  // Seed Achievements data
  console.log('Seeding achievements data...');
  const existingAchievementsCount = await prisma.achievements.count();

  if (existingAchievementsCount > 0) {
    console.log(
      `Achievements already exist: ${existingAchievementsCount} records found`
    );
  } else {
    const achievementsData = [
      {
        tagline: 'Research',
        Heading: 'Excellence in Research',
        description:
          'Recognized for groundbreaking research contributions and innovative solutions that advance our field.',
        image: '/admin.jpg',
      },
      {
        tagline: 'Academic',
        Heading: 'Academic Excellence',
        description:
          'Outstanding academic performance and commitment to educational excellence.',
        image: '/direct.jpg',
      },
      {
        tagline: 'Innovation',
        Heading: 'Innovation Award',
        description:
          'Pioneering innovative projects that showcase creativity and technical excellence.',
        image: '/window.svg',
      },
      {
        tagline: 'Service',
        Heading: 'Community Service',
        description:
          'Dedicated service and positive impact on the community and society.',
        image: '/glob.svg',
      },
      {
        tagline: 'Student',
        Heading: 'Student Achievement',
        description:
          'Exceptional performance and dedication to excellence in student endeavors.',
        image: '/robosocnith_cover.jpg',
      },
    ];

    for (const achievementData of achievementsData) {
      await prisma.achievements.create({ data: achievementData });
    }

    console.log('✅ Achievements created successfully!');
    console.log('Total achievements created:', achievementsData.length);
  }

  console.log('✅ Database seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('Database connection closed.');
  });
