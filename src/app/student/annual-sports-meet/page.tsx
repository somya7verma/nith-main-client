import Link from 'next/link';

export const metadata = {
  title: 'Annual Sports Meet | NIT Hamirpur',
  description:
    'Annual Sports Meet of National Institute of Technology, Hamirpur promoting sportsmanship, fitness, and team spirit.',
};

export default function AnnualSportsMeetPage() {
  return (
    <main className="min-h-screen bg-[#f5f6f7] text-gray-800">
      {/* Header */}
      <header className="bg-[#7b1e1e] text-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-lg font-semibold tracking-wide">
            National Institute of Technology, Hamirpur
          </h1>
          <span className="text-xs opacity-90">
            An Institute of National Importance
          </span>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-[#7b1e1e]">
            Home
          </Link>
          <Link href="/students" className="hover:text-[#7b1e1e]">
            Students
          </Link>
          <Link href="/sports" className="hover:text-[#7b1e1e]">
            Sports
          </Link>
          <Link href="/events" className="hover:text-[#7b1e1e]">
            Events
          </Link>
          <Link href="/gallery" className="hover:text-[#7b1e1e]">
            Gallery
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-bold text-[#7b1e1e] mb-3">
            Annual Sports Meet
          </h2>
          <p className="max-w-3xl text-sm text-gray-600 leading-relaxed">
            The Annual Sports Meet of NIT Hamirpur is a flagship sporting event
            that celebrates athletic excellence, teamwork, discipline, and
            sportsmanship among students.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* About */}
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="text-xl font-semibold text-[#7b1e1e] mb-3">
            About the Annual Sports Meet
          </h3>
          <p className="text-sm leading-relaxed">
            The Annual Sports Meet is organized every year to promote physical
            fitness, competitive spirit, and holistic development of students.
            The event witnesses enthusiastic participation from students across
            all departments and academic years.
          </p>
        </div>

        {/* Sports Categories */}
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="text-xl font-semibold text-[#7b1e1e] mb-4">
            Sports & Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="border rounded-md p-5">
              <h4 className="font-semibold mb-2">Athletics</h4>
              <p className="text-gray-600">
                Track and field events including sprint races, relay, long jump,
                high jump, and shot put.
              </p>
            </div>

            <div className="border rounded-md p-5">
              <h4 className="font-semibold mb-2">Team Sports</h4>
              <p className="text-gray-600">
                Competitions in football, cricket, volleyball, basketball,
                kabaddi, and kho-kho.
              </p>
            </div>

            <div className="border rounded-md p-5">
              <h4 className="font-semibold mb-2">Indoor Sports</h4>
              <p className="text-gray-600">
                Chess, table tennis, badminton, carrom, and other indoor games.
              </p>
            </div>
          </div>
        </div>

        {/* Objectives */}
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Objectives
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Encourage physical fitness and healthy lifestyle.</li>
            <li>Promote teamwork, leadership, and discipline.</li>
            <li>Identify and nurture sporting talent.</li>
            <li>Instill sportsmanship and competitive ethics.</li>
          </ul>
        </div>

        {/* Participation */}
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Participation & Organization
          </h3>
          <p className="text-sm leading-relaxed">
            The Annual Sports Meet is open to all registered students of the
            institute. Events are conducted under the supervision of the Sports
            Committee and faculty coordinators, ensuring fairness and safety.
          </p>
        </div>

        {/* Awards */}
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Awards & Recognition
          </h3>
          <p className="text-sm leading-relaxed">
            Winners and outstanding performers are awarded medals, trophies, and
            certificates. Special awards are given for best athlete and best
            team performances.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5a1414] text-white mt-14">
        <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h5 className="font-semibold mb-2">NIT Hamirpur</h5>
            <p className="opacity-90">Hamirpur, Himachal Pradesh – 177005</p>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Sports & Activities</h5>
            <ul className="space-y-1 opacity-90">
              <li>Annual Sports Meet</li>
              <li>Inter-NIT Sports</li>
              <li>Student Activities</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Sports Cell</h5>
            <p className="opacity-90">
              Building strength, discipline, and teamwork.
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
