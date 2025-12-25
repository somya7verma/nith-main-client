import Link from 'next/link';

export const metadata = {
  title: 'Counselling Rules | NIT Hamirpur',
  description:
    'Official counselling rules and guidelines for students at National Institute of Technology, Hamirpur.',
};

export default function CounsellingRulesPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-[#7b1e1e] text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-xl font-semibold">
            National Institute of Technology, Hamirpur
          </h1>
          <span className="text-sm opacity-90">
            An Institute of National Importance
          </span>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-6 text-sm font-medium">
          <Link href="/about" className="hover:text-[#7b1e1e]">
            About NITH
          </Link>
          <Link href="/events" className="hover:text-[#7b1e1e]">
            Events
          </Link>
          <Link href="/achievements" className="hover:text-[#7b1e1e]">
            Achievements
          </Link>
          <Link href="/gallery" className="hover:text-[#7b1e1e]">
            Gallery
          </Link>
          <Link href="/news" className="hover:text-[#7b1e1e]">
            News
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <div className="bg-white rounded-md shadow-sm border p-5 sticky top-6">
            <h2 className="text-sm font-semibold text-[#7b1e1e] mb-4 uppercase">
              Student Discipline
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/discipline-rules" className="hover:text-[#7b1e1e]">
                  Discipline Rules
                </Link>
              </li>
              <li>
                <Link
                  href="/student-discipline-board"
                  className="hover:text-[#7b1e1e]"
                >
                  Student Discipline Board
                </Link>
              </li>
              <li>
                <Link
                  href="/counselling-rules"
                  className="block bg-[#7b1e1e] text-white px-3 py-2 rounded"
                >
                  Counselling Rules
                </Link>
              </li>
              <li>
                <Link
                  href="/student-counselling-board"
                  className="hover:text-[#7b1e1e]"
                >
                  Student Counselling Board
                </Link>
              </li>
              <li>
                <Link href="/council-rules" className="hover:text-[#7b1e1e]">
                  Council Rules
                </Link>
              </li>
              <li>
                <Link
                  href="/anti-ragging-rules"
                  className="hover:text-[#7b1e1e]"
                >
                  Anti Ragging Rules
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* Content */}
        <section className="lg:col-span-9 space-y-6">
          <div className="bg-white rounded-md shadow-sm border p-6">
            <h2 className="text-xl font-semibold text-[#7b1e1e] mb-4">
              Counselling Rules
            </h2>
            <p className="text-sm mb-4 leading-relaxed">
              The counselling mechanism at NIT Hamirpur aims to support students
              academically, emotionally, and socially while maintaining
              confidentiality and discipline.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Students must register with the Counselling Board.</li>
              <li>All counselling sessions are strictly confidential.</li>
              <li>Appointments should be taken in advance.</li>
              <li>Misconduct during sessions will be reported.</li>
              <li>Records are maintained solely for student welfare.</li>
              <li>Participation in counselling workshops is encouraged.</li>
            </ul>
          </div>

          <div className="bg-white rounded-md shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-[#7b1e1e] mb-2">
              Reporting & Support
            </h3>
            <p className="text-sm leading-relaxed">
              Students may approach the Counselling Board for academic stress,
              mental health support, or personal concerns through scheduled
              sessions and faculty advisors.
            </p>
          </div>

          <div className="bg-white rounded-md shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-[#7b1e1e] mb-2">
              Contact Information
            </h3>
            <p className="text-sm">
              Student Counselling Board
              <br />
              NIT Hamirpur, Himachal Pradesh – 177005
              <br />
              Phone: +91-12345-67890
              <br />
              Email: counselling@nith.ac.in
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#5a1414] text-white mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-center">
          © {new Date().getFullYear()} National Institute of Technology,
          Hamirpur
        </div>
      </footer>
    </main>
  );
}
