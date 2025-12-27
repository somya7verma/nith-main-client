'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Nav from '@/app/components/header';
import Footer from '@/app/components/footer';

export default function InternationalAdmissionsPage() {
  const [activeSection, setActiveSection] = useState('intro');

  const handleOpen = (url?: string) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = (url: string, title: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.slice(0, 50).replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sections = [
    {
      id: 'intro',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Welcome to National Institute of Technology (NIT) Hamirpur
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to National Institute of Technology (NIT) Hamirpur in
              Himachal Pradesh, India! We&apos;re thrilled to have international
              students join our prestigious institute for their educational
              journey. NIT Hamirpur is renowned for its outstanding academic
              programs, dedication to research, and commitment to nurturing
              innovation and talent. Our institute offers a rich learning
              environment that encourages academic excellence while fostering a
              dynamic multicultural community. With a strong legacy of
              achievement and a forward-looking approach, NIT Hamirpur is the
              perfect place for you to pursue your academic and personal goals.
              Explore our diverse academic disciplines, engage with our
              experienced faculty, and become a part of the vibrant campus life
              that makes NIT Hamirpur a unique place to learn and grow.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg p-4 border border-gray-100 bg-white shadow-sm">
                <h4 className="text-sm font-semibold text-gray-900">
                  Academic Strength
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  Strong engineering and science programmes with research-led
                  teaching.
                </p>
              </div>

              <div className="rounded-lg p-4 border border-gray-100 bg-white shadow-sm">
                <h4 className="text-sm font-semibold text-gray-900">
                  International Community
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  A growing community of students from neighbouring countries
                  and beyond.
                </p>
              </div>
            </div>
          </div>

          <aside className="md:col-span-1">
            <div className="rounded-lg border border-gray-100 bg-gray-50 p-4 h-full">
              <h5 className="text-sm font-semibold text-gray-900 mb-2">
                Quick Facts
              </h5>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <strong>Location:</strong> Hamirpur, Himachal Pradesh
                </li>
                <li>
                  <strong>Programs:</strong> UG, PG, Ph.D.
                </li>
                <li>
                  <strong>International Office:</strong> International Admission
                  Office, Office of Dean Academic
                </li>
                <li>
                  <strong>Contact:</strong>{' '}
                  <a
                    className="text-[#631012] underline"
                    href="mailto:iao_nith@nith.ac.in"
                  >
                    iao_nith@nith.ac.in
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      ),
    },

    {
      id: 'images',
      content: (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {['NITH Image 1', 'NITH Image 2', 'NITH Image 3'].map((label) => (
              <figure
                key={label}
                className="relative overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm h-48"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                  {label}
                </div>
                <figcaption className="absolute left-4 bottom-4 text-xs text-gray-700 bg-white/80 px-3 py-1 rounded">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      ),
    },

    {
      id: 'join',
      content: (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Ready to Join Us?
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Following three options are available for international students to
            join NIT Hamirpur:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: 'Indian Council for Cultural Relations (ICCR)',
                href: 'https://iccr.gov.in',
                desc: 'Scholarships and cultural exchange',
              },
              {
                title: 'Study in India',
                href: 'https://studyinindia.gov.in',
                desc: 'Central portal for international students',
              },
              {
                title: 'Direct Admissions of Students Abroad (DASA)',
                href: '#',
                desc: 'Direct admissions for international applicants',
              },
            ].map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-gray-100 bg-white p-5 hover:shadow-lg transition-shadow"
              >
                <div className="h-16 w-16 rounded-full bg-[#631012]/10 text-[#631012] flex items-center justify-center text-lg font-semibold mb-3 mx-auto">
                  {p.title
                    .split(' ')
                    .slice(0, 2)
                    .map((s) => s[0])
                    .join('')}
                </div>
                <h4 className="text-sm font-semibold text-gray-900 text-center">
                  {p.title}
                </h4>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  {p.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      ),
    },

    {
      id: 'messages',
      content: (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Messages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-white rounded-lg border border-gray-100 p-5">
              <h4 className="text-sm font-semibold text-gray-900">
                From the Desk of Director
              </h4>
              <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                Dear Prospective Students, It gives me immense pleasure to
                welcome you to the official website for foreign student
                admissions at the National Institute of Technology (NIT)
                Hamirpur. This platform is a significant step towards
                strengthening our global outreach and creating opportunities for
                talented students from around the world to become a part of our
                academic community. At NIT Hamirpur, we are committed to
                academic excellence, cutting-edge research, and holistic
                development. Our institute offers a vibrant and inclusive
                environment where students from diverse cultures and backgrounds
                can thrive, collaborate, and contribute to solving global
                challenges. This website is designed to provide you with all the
                necessary information about our programs, admission guidelines,
                eligibility criteria, and the vibrant campus life at NIT
                Hamirpur. It aims to simplify the application process and serve
                as a bridge connecting you to our institution. We believe that
                diversity enhances learning, fosters innovation, and builds
                strong global networks. By welcoming students from across the
                globe, we aspire to nurture a multicultural academic ecosystem
                that benefits all. I invite you to explore this website and
                learn more about the opportunities that await you at NIT
                Hamirpur. We look forward to welcoming you to our family and
                supporting you in your journey toward academic and professional
                success. With warm regards, Prof. Hiralal Murlidhar Suryawanshi
                Director, National Institute of Technology, Hamirpur
              </p>
            </article>

            <article className="bg-white rounded-lg border border-gray-100 p-5">
              <h4 className="text-sm font-semibold text-gray-900">
                From the Desk of Registrar
              </h4>
              <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                Welcome to NIT Hamirpur! As the Registrar of the National
                Institute of Technology Hamirpur, I am delighted to extend a
                warm welcome to all prospective international students at lush
                green campus of NIT Hamirpur. We are committed to fostering a
                diverse, inclusive, and vibrant academic community. We value the
                unique perspectives and contributions that students from across
                the globe bring to our campus. Our institute offers a broad
                range of undergraduate, postgraduate, and doctoral programs that
                are designed to provide students with a well-rounded education,
                equipping them with the skills and knowledge necessary to
                succeed in a globalized world. Along with academic excellence,
                we are deeply committed to instilling human values in our
                students, ensuring that they emerge not only as competent
                professionals but also as responsible and ethical global
                citizens. We pride ourselves on our state-of-the-art facilities,
                dedicated faculty, and a supportive environment that encourages
                both personal and professional growth. We understand that
                navigating the admission process can be challenging, especially
                for international students. Our dedicated International
                Admission Office is here to assist and support you throughout
                the application process, from initial inquiries to final
                enrollment. We are committed to making your transition to life
                and study at NIT Hamirpur as smooth as possible. Please do not
                hesitate to reach out to us with any questions or concerns. Warm
                regards, Dr. (Mrs.) Archana Santosh Nanoty Registrar, National
                Institute of Technology Hamirpur
              </p>
            </article>

            <article className="bg-white rounded-lg border border-gray-100 p-5">
              <h4 className="text-sm font-semibold text-gray-900">
                From the Desk of Dean (Academics)
              </h4>
              <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                Dear Prospective Students, Greetings from the National Institute
                of Technology (NIT) Hamirpur! It is with great enthusiasm that I
                welcome you to the official website for foreign student
                admissions. At NIT Hamirpur, we take immense pride in offering a
                world-class academic environment that fosters innovation,
                collaboration, and holistic learning. Our institute is home to a
                diverse range of undergraduate, postgraduate, and doctoral
                programs, meticulously designed to meet global standards and
                cater to the evolving needs of society. With state-of-the-art
                infrastructure, cutting-edge research facilities, and a highly
                qualified faculty, NIT Hamirpur provides an excellent platform
                for academic and professional growth. As a foreign student, you
                will have the opportunity to engage in multidisciplinary
                learning, participate in innovative research projects, and
                contribute to a dynamic and inclusive campus culture. This
                website serves as your gateway to discover the academic
                opportunities, admission processes, and vibrant campus life at
                NIT Hamirpur. We look forward to welcoming talented students
                from around the world to our institute and building a
                multicultural academic community that drives excellence and
                innovation. Sincerely, Dr. Siddhartha Sharma Dean (Academics)
              </p>
            </article>

            <article className="bg-white rounded-lg border border-gray-100 p-5">
              <h4 className="text-sm font-semibold text-gray-900">
                From Coordinator – Foreign Admissions
              </h4>
              <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                Dear Prospective International Students, We are excited to
                welcome you to our institution, a place where innovation,
                diversity, and academic excellence thrive. As the Foreign
                Admissions Coordinator, I am here to support you throughout your
                journey of applying to our esteemed programs. Our university is
                home to students from many countries, creating a vibrant and
                inclusive community where cultural exchange and collaboration
                flourish. On this portal, you will find detailed information
                about our programs, admission requirements, application
                deadlines, and the support services we offer for international
                students. Please explore these resources carefully and feel free
                to reach out to our team with any questions. We look forward to
                welcoming you to our global community. Warm regards, Dr. Nitin
                Gupta Coordinator Foreign Admissions Email: nitin@nith.ac.in
              </p>
            </article>
          </div>
        </div>
      ),
    },

    {
      id: 'why',
      content: (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Why Study at NIT Hamirpur
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Research-led Teaching',
                desc: 'Hands-on projects and lab-based learning.',
              },
              {
                title: 'Global Faculty',
                desc: 'Faculty with international exposure and collaborations.',
              },
              {
                title: 'Strong Industry Links',
                desc: 'Top recruiters and internship programs.',
              },
              {
                title: 'Vibrant Campus Life',
                desc: 'Cultural clubs, events and student societies.',
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-lg border border-gray-100 p-4 bg-white shadow-sm flex items-start gap-3"
              >
                <div className="mt-1 text-[#631012]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-gray-900">
                    {f.title}
                  </h5>
                  <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    {
      id: 'life',
      content: (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Life & Connectivity
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-gray-100 p-4 bg-white shadow-sm">
              <h5 className="text-sm font-semibold text-gray-800">
                Life in Bharat
              </h5>
              <p className="text-sm text-gray-700 mt-2">
                Experience rich cultural diversity, festivals, and culinary
                traditions that enrich student life beyond academics.
              </p>
            </div>

            <div className="rounded-lg border border-gray-100 p-4 bg-white shadow-sm">
              <h5 className="text-sm font-semibold text-gray-800">
                About Hamirpur & Connectivity
              </h5>
              <p className="text-sm text-gray-700 mt-2">
                Hamirpur is an educational hub with good road connectivity.
                Nearest airports and railheads are accessible for
                domestic/international travel.
              </p>
              <ul className="text-gray-700 text-sm list-disc list-inside mt-3">
                <li>Road: Bus & taxi services; nearest bus stand 4 km away</li>
                <li>Rail: Una station ~80 km; Chandigarh ~160 km</li>
                <li>Air: Dharamshala ~75 km; Chandigarh Intl ~160 km</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: 'students',
      content: (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Hear from our International Students
          </h3>
          <div className="space-y-4">
            {[
              {
                name: 'Hubed Singh Kaushal',
                program: 'Computer Science & Engineering – Nepal',
                quote:
                  'NIT Hamirpur has been a welcoming and transformative experience.',
              },
              {
                name: 'Tasman Walid Lyon',
                program: 'Mechanical Engineering – Bangladesh',
                quote:
                  'My time at NIT Hamirpur has helped me grow academically and personally.',
              },
              {
                name: 'Aschalew Tirulo Abiko',
                program: 'CSE – Ethiopia',
                quote:
                  'Research opportunities and supportive faculty made a difference.',
              },
            ].map((s) => (
              <div
                key={s.name}
                className="rounded-lg border border-gray-100 p-4 bg-white shadow-sm"
              >
                <blockquote className="text-sm text-gray-700 italic">
                  “{s.quote}”
                </blockquote>
                <p className="text-xs text-gray-600 mt-2 font-semibold">
                  {s.name} — <span className="font-normal">{s.program}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    {
      id: 'support',
      content: (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Student Support
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-gray-100 p-4 bg-white shadow-sm">
              <h5 className="text-sm font-semibold text-gray-900">
                Mentorship Programs
              </h5>
              <p className="text-sm text-gray-700 mt-2">
                Peer mentors and faculty advisors help you settle and succeed.
              </p>
            </div>

            <div className="rounded-lg border border-gray-100 p-4 bg-white shadow-sm">
              <h5 className="text-sm font-semibold text-gray-900">
                Counselling & Wellness
              </h5>
              <p className="text-sm text-gray-700 mt-2">
                Confidential counselling services and mental health support are
                available to all students.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: 'contact',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-gray-100 p-4 bg-white shadow-sm">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              International Admission Office
            </h4>
            <address className="not-italic text-sm text-gray-700 space-y-2">
              <div>Office of Dean Academic</div>
              <div>National Institute of Technology Hamirpur</div>
              <div>Hamirpur, Himachal Pradesh, India</div>
              <div>
                📧{' '}
                <a
                  href="mailto:iao_nith@nith.ac.in"
                  className="text-[#631012] underline"
                >
                  iao_nith@nith.ac.in
                </a>
              </div>
              <div>📞 +91-01972-254416</div>
            </address>
          </div>

          <div className="rounded-lg border border-gray-100 p-4 bg-white shadow-sm">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              Office Hours & Support
            </h4>
            <p className="text-sm text-gray-700">
              Mon–Fri • 09:00 AM – 05:00 PM
            </p>
            <p className="text-sm text-gray-700 mt-3">
              For queries related to applications, visas, and accommodation,
              write to{' '}
              <a
                className="text-[#631012] underline"
                href="mailto:iao_nith@nith.ac.in"
              >
                iao_nith@nith.ac.in
              </a>
              .
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Nav />

      <div className="bg-gray-50 py-4 px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-[#631012] transition-colors duration-200"
            >
              Home
            </Link>
            <span>›</span>
            <span className="text-gray-400">Academics</span>
            <span>›</span>
            <span className="text-[#631012] font-medium">
              International Admissions
            </span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#631012] via-[#7a1a1d] to-[#4a0c0e] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              International Admissions
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Opportunities for international students to study at National
              Institute of Technology Hamirpur, India
            </p>
          </motion.div>
        </div>
      </section>

      <main className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Section Switcher (exactly like NAD page) */}
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left nav */}
              <aside className="md:col-span-3">
                <nav className="space-y-3">
                  {[
                    { id: 'intro', title: 'Introduction' },
                    { id: 'images', title: 'Gallery' },
                    { id: 'join', title: 'Ready to Join' },
                    { id: 'messages', title: 'Messages' },
                    { id: 'why', title: 'Why Study' },
                    { id: 'life', title: 'Life & Connectivity' },
                    { id: 'students', title: 'Testimonials' },
                    { id: 'support', title: 'Student Support' },
                    { id: 'contact', title: 'Contact' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveSection(s.id)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm font-medium ${activeSection === s.id ? 'bg-[#631012]/10 text-[#631012] shadow-sm' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      {s.title}
                    </button>
                  ))}
                </nav>
              </aside>

              {/* Content */}
              <div className="md:col-span-9">
                {sections.find((sec) => sec.id === activeSection)?.content}
              </div>
            </div>
          </div>

          {/* International Admissions Notices (table like NAD Notices) */}
          <section
            aria-labelledby="int-admissions-notices"
            className="bg-white p-6 rounded-2xl shadow-sm"
          >
            <h3
              id="int-admissions-notices"
              className="text-xl font-semibold text-gray-900 mb-3"
            >
              International Admissions Notices
            </h3>

            <div>
              <div className="hidden lg:block bg-white rounded-2xl shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-20">
                        Sl. No.
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Notice Title
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-40">
                        Category
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-40">
                        Date
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-52">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-700">
                    <tr className="hover:bg-gray-50/80 transition-colors duration-200">
                      <td className="px-6 py-5 text-sm text-gray-500 font-medium">
                        1
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center justify-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#631012]/10 flex items-center justify-center">
                            <svg
                              className="w-5 h-5 text-[#631012]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-900">
                              International Admissions – Application Open
                            </span>
                            <div className="text-xs text-gray-500 mt-1">
                              Application start date and instructions for
                              international applicants.
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-700">
                        Application
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-700">
                        01-12-2025
                      </td>
                      <td className="px-6 py-5 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() =>
                              handleOpen(
                                '/documents/international/application-2025.pdf'
                              )
                            }
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#631012] bg-[#631012]/10 rounded-lg hover:bg-[#631012]/20 transition-colors duration-200"
                          >
                            View
                          </button>
                          <button
                            onClick={() =>
                              handleDownload(
                                '/documents/international/application-2025.pdf',
                                'International Application 2025'
                              )
                            }
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-[#631012] rounded-lg hover:bg-[#7a1a1d] transition-colors duration-200"
                          >
                            Download
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="lg:hidden space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">
                        International Admissions – Application Open
                      </h4>
                      <div className="text-xs text-gray-500 mt-1">
                        Application • 01-12-2025
                      </div>
                      <div className="text-xs text-gray-600 mt-3">
                        Application start date and instructions for
                        international applicants.
                      </div>
                    </div>

                    <div className="flex-shrink-0 flex flex-col items-end gap-2">
                      <button
                        onClick={() =>
                          handleOpen(
                            '/documents/international/application-2025.pdf'
                          )
                        }
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#631012] bg-[#631012]/10 rounded-lg hover:bg-[#631012]/20 transition-colors duration-200"
                      >
                        View
                      </button>
                      <button
                        onClick={() =>
                          handleDownload(
                            '/documents/international/application-2025.pdf',
                            'International Application 2025'
                          )
                        }
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#631012] rounded-lg hover:bg-[#7a1a1d] transition-colors duration-200"
                      >
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
