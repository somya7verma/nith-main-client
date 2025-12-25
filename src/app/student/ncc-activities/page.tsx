import Link from 'next/link';

export const metadata = {
  title: 'NCC Activities | NIT Hamirpur',
  description:
    'National Cadet Corps (NCC) activities at National Institute of Technology, Hamirpur.',
};

export default function NCCActivitiesPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
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
          <Link href="/students" className="hover:text-[#7b1e1e]">
            Students
          </Link>
          <Link href="/activities" className="hover:text-[#7b1e1e]">
            Activities
          </Link>
          <Link href="/nss" className="hover:text-[#7b1e1e]">
            NSS
          </Link>
          <Link href="/contact" className="hover:text-[#7b1e1e]">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="h-[280px] bg-cover bg-center"
          style={{ backgroundImage: "url('/campus.jpg')" }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white">
            <h2 className="text-3xl font-bold mb-2">NCC Activities</h2>
            <p className="max-w-2xl text-sm opacity-90">
              Developing discipline, leadership, patriotism, and character among
              students through the National Cadet Corps at NIT Hamirpur.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        {/* About NCC */}
        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-xl font-semibold text-[#7b1e1e] mb-3">
            About NCC at NIT Hamirpur
          </h3>
          <p className="text-sm leading-relaxed">
            The National Cadet Corps (NCC) unit at NIT Hamirpur aims to instill
            values of discipline, unity, leadership, and national service among
            students. NCC provides opportunities for overall personality
            development through structured training and community service.
          </p>
        </div>

        {/* Activities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-md p-5 shadow-sm">
            <h4 className="font-semibold text-[#7b1e1e] mb-2">
              Drill & Training
            </h4>
            <p className="text-sm">
              Regular parade drills, physical training, and discipline-oriented
              activities conducted by certified NCC instructors.
            </p>
          </div>

          <div className="bg-white border rounded-md p-5 shadow-sm">
            <h4 className="font-semibold text-[#7b1e1e] mb-2">
              Camps & Parades
            </h4>
            <p className="text-sm">
              Participation in Annual Training Camps (ATC), Republic Day
              parades, and national-level NCC camps.
            </p>
          </div>

          <div className="bg-white border rounded-md p-5 shadow-sm">
            <h4 className="font-semibold text-[#7b1e1e] mb-2">
              Social Service
            </h4>
            <p className="text-sm">
              Community service activities including cleanliness drives,
              awareness programs, and disaster relief assistance.
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Objectives of NCC
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Develop leadership qualities and discipline.</li>
            <li>Promote a sense of national unity and patriotism.</li>
            <li>Encourage social responsibility and community service.</li>
            <li>
              Prepare students for challenges of civil and defense services.
            </li>
          </ul>
        </div>

        {/* Enrollment */}
        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Enrollment & Participation
          </h3>
          <p className="text-sm leading-relaxed">
            Enrollment in NCC is voluntary and open to eligible students of NIT
            Hamirpur. Cadets are selected based on institute guidelines and are
            required to actively participate in scheduled training and events.
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
            <h5 className="font-semibold mb-2">Student Activities</h5>
            <ul className="space-y-1 opacity-90">
              <li>NCC</li>
              <li>NSS</li>
              <li>Sports</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2">NCC Motto</h5>
            <p className="opacity-90">Unity and Discipline</p>
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
