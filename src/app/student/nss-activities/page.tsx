import Link from 'next/link';

export const metadata = {
  title: 'NSS Activities | NIT Hamirpur',
  description:
    'National Service Scheme (NSS) activities at National Institute of Technology, Hamirpur.',
};

export default function NSSActivitiesPage() {
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
          <Link href="/ncc-activities" className="hover:text-[#7b1e1e]">
            NCC
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
            <h2 className="text-3xl font-bold mb-2">NSS Activities</h2>
            <p className="max-w-2xl text-sm opacity-90">
              Promoting social responsibility, community service, and national
              development through the National Service Scheme at NIT Hamirpur.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        {/* About NSS */}
        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-xl font-semibold text-[#7b1e1e] mb-3">
            About NSS at NIT Hamirpur
          </h3>
          <p className="text-sm leading-relaxed">
            The National Service Scheme (NSS) unit of NIT Hamirpur works with
            the objective of developing the personality and character of
            students through voluntary community service. NSS encourages
            students to actively participate in nation-building activities.
          </p>
        </div>

        {/* Activities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-md p-5 shadow-sm">
            <h4 className="font-semibold text-[#7b1e1e] mb-2">
              Community Outreach
            </h4>
            <p className="text-sm">
              Activities such as village visits, cleanliness drives, and
              interaction with local communities.
            </p>
          </div>

          <div className="bg-white border rounded-md p-5 shadow-sm">
            <h4 className="font-semibold text-[#7b1e1e] mb-2">
              Awareness Programs
            </h4>
            <p className="text-sm">
              Awareness campaigns on health, hygiene, environment, education,
              and social issues.
            </p>
          </div>

          <div className="bg-white border rounded-md p-5 shadow-sm">
            <h4 className="font-semibold text-[#7b1e1e] mb-2">Special Camps</h4>
            <p className="text-sm">
              Seven-day and ten-day special NSS camps focusing on rural
              development and social welfare.
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Objectives of NSS
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Understand the community and its problems.</li>
            <li>Develop a sense of social and civic responsibility.</li>
            <li>Apply classroom knowledge to real-life situations.</li>
            <li>Promote leadership and teamwork among students.</li>
          </ul>
        </div>

        {/* Enrollment */}
        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Enrollment & Participation
          </h3>
          <p className="text-sm leading-relaxed">
            NSS enrollment is voluntary and open to students of NIT Hamirpur.
            Volunteers are expected to actively participate in regular
            activities, special camps, and institute-led community initiatives.
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
              <li>NSS</li>
              <li>NCC</li>
              <li>Clubs & Societies</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2">NSS Motto</h5>
            <p className="opacity-90">Not Me, But You</p>
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
