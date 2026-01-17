'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function DirectorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header31 />

      <div className="bg-gray-50 py-4 px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-[#800000] transition-colors duration-200"
            >
              Home
            </Link>
            <span>›</span>
            <span className="text-gray-400">Administration</span>
            <span>›</span>
            <span className="text-[#800000] font-medium">Director</span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center py-24 md:py-32 px-6 md:px-12"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            Director
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Leadership and Director&apos;s message from National Institute of
            Technology, Hamirpur.
          </p>
        </motion.div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-100 rounded-2xl overflow-hidden mx-auto">
                  <Image
                    src="/images/director.jpg"
                    alt="Prof. Hiralal Murlidhar Suryawanshi"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="md:flex-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  Prof. Hiralal Murlidhar Suryawanshi
                </h2>
                <p className="text-gray-600 mb-4">(Director)</p>

                <p className="text-gray-700 font-medium mb-4">
                  My prime priority will be to build National Institute of
                  Technology Hamirpur a world class Institute imparting quality
                  education and promoting excellent research activities, having
                  impact on society and industry globally.
                </p>

                <div className="mt-4">
                  <Link
                    href="#message"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#800000] text-white rounded-2xl font-medium"
                  >
                    Read Director&apos;s Message
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Profile & Message */}
      <section id="message" className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Director&apos;s Profile
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Message from the Director
            </p>

            <div className="prose max-w-none text-gray-700">
              <p>
                Greetings and a Warm Welcome to one and all for joining us at
                National Institute of Technology, Hamirpur, India. National
                Institute of Technology, Hamirpur, is one of the premier
                autonomous Institution of National Importance in Northern India
                under the act of Parliament-2007. It is a state of art
                Institution and a dream destination for those who wish to be
                leaders in Science and Technology. Besides being recognized
                nationally and internationally for excellent education at
                undergraduate level, we are also making wide strides in
                innovative research and other development activities.
              </p>

              <p>
                Being a National Level Institute we have a unique group of
                outstanding young minds from almost all the states and UT&apos;s
                of the country. Students from diverse backgrounds get to network
                with each other and get to identify and comprehend the wide
                spectrum of varied cultural and regional practices in our
                country. Students are not only given exposure to the latest
                technological advances in their chosen field but also trained to
                be responsible citizens of our country. The rich and unique
                learning environment at NIT develops the student physically,
                intellectually and emotionally. A series of activities such as a
                cultural festival, a technical festival, industry-focused
                seminars and extracurricular activities, open them to challenges
                of leadership. We not only enable our students to fulfill their
                dreams but also mentor them to think BIG. During their tenure at
                the institute, the students are given enriching and
                life-defining experience that enables them to reach new heights
                in their professional and personal lives.
              </p>

              <p>
                Our alumni are forerunners in several Multi-National
                Organizations and amongst successful entrepreneurs and renowned
                academicians with a significant contribution towards society.
                The Institute is known for producing some of the best engineers
                and technocrats for the country. The industry has always been
                appreciative of the talent pool offered by the institute and
                this has resulted into exemplary placements across all domains.
                Numerous reputed Industrial and Consultancy Corporates visit the
                institute campus for recruitment. The students bag stellar
                profiles and packages per annum.
              </p>

              <p>
                The Institution has a team of highly qualified, learned and
                dedicated faculty with expertise in all major disciplines of
                engineering and technology, science and management, and is a
                constant source of inspiration for the students. They are
                actively involved in raising the standards of not only our
                institute but also other institutions by collaborating with them
                and by sharing knowledge through faculty/student interaction
                programmes from time to time.
              </p>

              <p>
                The Institute has ongoing academic and research collaborations
                with many national and international universities in order to
                keep pace with increasing frontiers of knowledge. In order to
                align with country’s major policy initiatives of Make in India;
                Digital India; Start-up India; the Institute in process of
                setting up an Incubation Centre, so as to support technology and
                knowledge based entrepreneurship and to provide a platform for
                speedy commercialization of technologies.
              </p>

              <p>
                Once again, I wish all the students an outstanding, momentous
                and valuable stay at NIT, Hamirpur and hope that you achieve
                your destinations/goals and emerge as top-notch engineers,
                technocrats, educationists or scientists.
              </p>

              <p>
                Good Luck &apos;n Good Wishes!!
                <br />
                Jai Hind Jai Bharat!!
              </p>

              <p>
                With warm wishes,
                <br />
                Director
                <br />
                National Institute of Technology
                <br />
                Hamirpur (HP)
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
