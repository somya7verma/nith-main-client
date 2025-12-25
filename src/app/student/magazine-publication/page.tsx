import Link from 'next/link';

export const metadata = {
  title: 'Annual Innovation Activity | NIT Hamirpur',
  description:
    'Annual Innovation Activity showcasing research, creativity, and technological advancement at NIT Hamirpur.',
};

export default function AnnualInnovationActivityPage() {
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
          <Link href="/about" className="hover:text-[#7b1e1e]">
            About NITH
          </Link>
          <Link href="/academics" className="hover:text-[#7b1e1e]">
            Academics
          </Link>
          <Link href="/research" className="hover:text-[#7b1e1e]">
            Research
          </Link>
          <Link href="/innovation" className="hover:text-[#7b1e1e]">
            Innovation
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <div className="bg-black/50 absolute inset-0"></div>
        <div
          className="h-[320px] bg-cover bg-center"
          style={{ backgroundImage: "url('/campus.jpg')" }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white">
            <h2 className="text-3xl font-bold mb-2">
              Annual Innovation Activity
            </h2>
            <p className="max-w-2xl text-sm opacity-90">
              Celebrating creativity, research excellence, and technological
              innovation among students and faculty at NIT Hamirpur.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-xl font-semibold text-[#7b1e1e] mb-3">
            About the Activity
          </h3>
          <p className="text-sm leading-relaxed">
            The Annual Innovation Activity at NIT Hamirpur is a flagship
            academic initiative aimed at fostering innovation, entrepreneurship,
            and problem-solving skills. Students present projects, prototypes,
            and research outcomes addressing real-world challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-md p-5 shadow-sm">
            <h4 className="font-semibold text-[#7b1e1e] mb-2">
              Student Projects
            </h4>
            <p className="text-sm">
              Innovative ideas from undergraduate, postgraduate, and doctoral
              scholars across departments.
            </p>
          </div>

          <div className="bg-white border rounded-md p-5 shadow-sm">
            <h4 className="font-semibold text-[#7b1e1e] mb-2">
              Research Showcase
            </h4>
            <p className="text-sm">
              Faculty-guided research highlighting advancements in science,
              engineering, and technology.
            </p>
          </div>

          <div className="bg-white border rounded-md p-5 shadow-sm">
            <h4 className="font-semibold text-[#7b1e1e] mb-2">
              Industry Interaction
            </h4>
            <p className="text-sm">
              Engagement with industry experts, startups, and innovation
              mentors.
            </p>
          </div>
        </div>

        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Objectives
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Promote a culture of innovation and creativity.</li>
            <li>Encourage interdisciplinary collaboration.</li>
            <li>Bridge the gap between academia and industry.</li>
            <li>Support entrepreneurial thinking among students.</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5a1414] text-white mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm grid md:grid-cols-3 gap-6">
          <div>
            <h5 className="font-semibold mb-2">NIT Hamirpur</h5>
            <p className="opacity-90">Hamirpur, Himachal Pradesh – 177005</p>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Quick Links</h5>
            <ul className="space-y-1 opacity-90">
              <li>Rules & Reports</li>
              <li>Recruitment</li>
              <li>RTI</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Innovation</h5>
            <p className="opacity-90">
              Driving excellence through ideas, research, and technology.
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
