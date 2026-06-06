import { PrismaClient } from '@prisma/client';

// Global is used here to maintain a cached connection during development
declare global {
  var __globalPrisma: PrismaClient | undefined;
}

let prisma: PrismaClient | null = null;

// Define the Homepage type based on your Prisma schema
export type Homepage = {
  id?: number;
  HeroMain?: string;
  HeroSub?: string;
  HeroDesc?: string;
  HeroBtnText?: string;
  HeroBtnLink?: string;
  Heroanchor?: string;
  AboutHead?: string;
  AboutDesc?: string;
  AboutMission?: string;
  AboutVision?: string;
  AcademicYear?: string;
  Academicplacement?: string;
  AcademicHighpackage?: string;
  AcademicAverage?: string;
  AcademicToprecruiters?: string;
  DirectorName?: string;
  DirectorMessage?: string;
  DirectorDesignation?: string;
  Directoremail?: string;
  Directorphone?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

// Demo homepage data to use as fallback when DB is not available
export const DEMO_HOMEPAGE_DATA: Homepage = {
  id: 1,
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
  AboutMission: 'To provide quality technical education and foster innovation.',
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

  createdAt: new Date(),
  updatedAt: new Date(),
};

export async function getPrismaClient(): Promise<PrismaClient | null> {
  if (prisma) return prisma;

  try {
    // Try to import and create Prisma client
    const { PrismaClient: PC } = await import('@prisma/client');

    if (process.env.NODE_ENV === 'development') {
      // In development, use a global variable to maintain the connection
      if (!global.__globalPrisma) {
        global.__globalPrisma = new PC();
      }
      prisma = global.__globalPrisma;
    } else {
      prisma = new PC();
    }

    // Test the connection
    await prisma.$connect();
    return prisma;
  } catch (error) {
    console.warn(
      'Prisma client not available:',
      error instanceof Error ? error.message : error
    );
    return null;
  }
}

export async function getHomepageData(): Promise<Homepage> {
  const client = await getPrismaClient();

  if (!client) {
    console.warn('Prisma client not available - returning empty data');
    return {};
  }

  try {
    const homepage = await client.homepage.findUnique({ where: { id: 1 } });
    if (homepage) {
      return homepage;
    } else {
      console.warn('No homepage record found in DB - returning empty data');
      return {};
    }
  } catch (error) {
    console.error('Failed to fetch homepage from DB:', error);
    return {};
  }
}

export async function disconnectPrisma() {
  if (prisma) {
    try {
      await prisma.$disconnect();
    } catch (error) {
      console.warn('Error disconnecting Prisma:', error);
    }
    prisma = null;
  }
}
