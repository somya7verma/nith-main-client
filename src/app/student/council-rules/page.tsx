import Link from 'next/link';

export const metadata = {
  title: 'Council Rules | NIT Hamirpur',
  description:
    'Official Council Rules of National Institute of Technology, Hamirpur governing student councils and representative bodies.',
};

export default function CouncilRulesPage() {
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
          <Link href="/committees" className="hover:text-[#7b1e1e]">
            Committees
          </Link>
          <Link
            href="/student-counselling-board"
            className="hover:text-[#7b1e1e]"
          >
            Student Counselling Board
          </Link>
          <Link href="/contact" className="hover:text-[#7b1e1e]">
            Contact
          </Link>
        </div>
      </nav>

      {/* Page Heading */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-bold text-[#7b1e1e] mb-3">
            Council Rules
          </h2>
          <p className="max-w-3xl text-sm text-gray-600 leading-relaxed">
            The Council Rules define the structure, responsibilities, and
            functioning of student councils at NIT Hamirpur, ensuring
            transparency, discipline, and effective student representation.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* Purpose */}
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="text-xl font-semibold text-[#7b1e1e] mb-3">
            Purpose of the Council
          </h3>
          <p className="text-sm leading-relaxed">
            The Student Council acts as a bridge between students and the
            institute administration. It represents student interests, promotes
            leadership, and assists in organizing academic, cultural, technical,
            and sports activities.
          </p>
        </div>

        {/* Composition */}
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Composition of the Council
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>President and Vice President</li>
            <li>General Secretary and Joint Secretary</li>
            <li>Representatives from various clubs and societies</li>
            <li>Departmental or hostel representatives</li>
            <li>Faculty advisors nominated by the institute</li>
          </ul>
        </div>

        {/* Responsibilities */}
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Responsibilities
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Represent student concerns to the administration.</li>
            <li>Maintain discipline and decorum during events.</li>
            <li>Organize and coordinate student activities.</li>
            <li>Ensure inclusiveness and equal participation.</li>
            <li>Uphold institute rules and values.</li>
          </ul>
        </div>

        {/* Code of Conduct */}
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Code of Conduct
          </h3>
          <p className="text-sm leading-relaxed">
            Council members are expected to act responsibly, maintain ethical
            conduct, and serve as role models for fellow students. Any misuse of
            authority or violation of institute rules may invite disciplinary
            action.
          </p>
        </div>

        {/* Tenure */}
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Tenure & Dissolution
          </h3>
          <p className="text-sm leading-relaxed">
            The tenure of the Student Council is generally one academic year.
            The institute reserves the right to dissolve the council in case of
            serious misconduct or non-compliance with rules.
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
            <h5 className="font-semibold mb-2">Student Governance</h5>
            <ul className="space-y-1 opacity-90">
              <li>Council Rules</li>
              <li>Student Discipline Board</li>
              <li>Student Counselling Board</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Student Council</h5>
            <p className="opacity-90">
              Leadership, responsibility, and representation.
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
