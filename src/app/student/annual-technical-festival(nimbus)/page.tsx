import Link from 'next/link';

export const metadata = {
  title: 'Annual Technical Festival (NIMBUS) | NIT Hamirpur',
  description:
    'NIMBUS – The Annual Technical Festival of National Institute of Technology, Hamirpur.',
};

export default function AnnualTechnicalFestivalNimbus() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      {/* Top Header */}
      <header className="bg-[#7b1e1e] text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">
            National Institute of Technology, Hamirpur
          </h1>
          <span className="text-xs opacity-90">
            An Institute of National Importance
          </span>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b text-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-6 font-medium">
          <Link href="/" className="hover:text-[#7b1e1e]">
            Home
          </Link>
          <Link href="/academics" className="hover:text-[#7b1e1e]">
            Academics
          </Link>
          <Link href="/research" className="hover:text-[#7b1e1e]">
            Research
          </Link>
          <Link href="/students" className="hover:text-[#7b1e1e]">
            Students
          </Link>
          <Link href="/events" className="hover:text-[#7b1e1e]">
            Events
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="h-[340px] bg-cover bg-center"
          style={{ backgroundImage: "url('/nimbus.jpg')" }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white">
            <h2 className="text-3xl font-bold mb-2">NIMBUS</h2>
            <p className="text-lg font-medium mb-2">
              Annual Technical Festival
            </p>
            <p className="max-w-2xl text-sm opacity-90">
              NIMBUS is the flagship technical festival of NIT Hamirpur,
              bringing together innovation, technology, and creativity through
              competitions, workshops, and expert talks.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        {/* About */}
        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-xl font-semibold text-[#7b1e1e] mb-3">
            About NIMBUS
          </h3>
          <p className="text-sm leading-relaxed">
            NIMBUS is the annual technical festival organized by the students of
            National Institute of Technology, Hamirpur. The festival provides a
            platform for students across the country to showcase their technical
            skills, innovative ideas, and problem-solving abilities.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-md p-5 shadow-sm">
            <h4 className="font-semibold text-[#7b1e1e] mb-2">
              Technical Competitions
            </h4>
            <p className="text-sm">
              Coding contests, robotics challenges, design competitions, and
              core engineering events.
            </p>
          </div>

          <div className="bg-white border rounded-md p-5 shadow-sm">
            <h4 className="font-semibold text-[#7b1e1e] mb-2">
              Workshops & Talks
            </h4>
            <p className="text-sm">
              Hands-on workshops and expert lectures by professionals from
              industry and academia.
            </p>
          </div>

          <div className="bg-white border rounded-md p-5 shadow-sm">
            <h4 className="font-semibold text-[#7b1e1e] mb-2">
              Innovation Expo
            </h4>
            <p className="text-sm">
              Exhibition of student projects, startups, and research-based
              innovations.
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Objectives
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Encourage technical excellence and innovation.</li>
            <li>Promote interdisciplinary learning.</li>
            <li>Bridge the gap between theory and practical application.</li>
            <li>Provide exposure to emerging technologies.</li>
            <li>Foster teamwork and leadership among students.</li>
          </ul>
        </div>

        {/* Participation */}
        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Participation
          </h3>
          <p className="text-sm leading-relaxed">
            NIMBUS is open to students from engineering institutes,
            universities, and colleges across India. Participants can register
            for various events through the official festival portal during the
            announcement period.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5a1414] text-white mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h5 className="font-semibold mb-2">NIT Hamirpur</h5>
            <p className="opacity-90">Hamirpur, Himachal Pradesh – 177005</p>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Quick Links</h5>
            <ul className="space-y-1 opacity-90">
              <li>Rules & Reports</li>
              <li>Student Activities</li>
              <li>Innovation Cell</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2">NIMBUS</h5>
            <p className="opacity-90">
              Igniting innovation through technology and creativity.
            </p>
          </div>
        </div>

        <div className="text-center text-xs py-4 border-t border-white/20">
          © {new Date().getFullYear()} National Institute of Technology,
          Hamirpur
        </div>
      </footer>
    </main>
  );
}
