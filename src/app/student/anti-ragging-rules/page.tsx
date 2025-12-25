import Link from 'next/link';

export const metadata = {
  title: 'Anti Ragging Rules | NIT Hamirpur',
  description:
    'Official Anti Ragging Rules of National Institute of Technology, Hamirpur as per UGC regulations.',
};

export default function AntiRaggingRulesPage() {
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
          <Link href="/committees" className="hover:text-[#7b1e1e]">
            Committees
          </Link>
          <Link href="/anti-ragging-community" className="hover:text-[#7b1e1e]">
            Anti Ragging Community
          </Link>
          <Link href="/contact" className="hover:text-[#7b1e1e]">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="h-[280px] bg-cover bg-center"
          style={{ backgroundImage: "url('/campus.jpg')" }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white">
            <h2 className="text-3xl font-bold mb-2">Anti Ragging Rules</h2>
            <p className="max-w-2xl text-sm opacity-90">
              Zero tolerance towards ragging in any form, in accordance with UGC
              regulations and institute policy.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        {/* Introduction */}
        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-xl font-semibold text-[#7b1e1e] mb-3">
            Introduction
          </h3>
          <p className="text-sm leading-relaxed">
            National Institute of Technology, Hamirpur strictly prohibits
            ragging in any form. The institute follows a zero-tolerance policy
            towards ragging and is committed to maintaining a safe, secure, and
            respectful environment for all students, in line with UGC
            regulations.
          </p>
        </div>

        {/* Definition */}
        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Definition of Ragging
          </h3>
          <p className="text-sm leading-relaxed">
            Ragging includes any conduct, whether by words spoken or written, or
            by an act, which has the effect of teasing, treating, or handling a
            student with rudeness; causing psychological harm; or creating fear,
            shame, or embarrassment to a student.
          </p>
        </div>

        {/* Rules */}
        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Anti Ragging Rules
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Ragging in any form is strictly prohibited within the campus.
            </li>
            <li>
              All students must submit an anti-ragging affidavit at admission.
            </li>
            <li>
              Any complaint of ragging will be taken seriously and investigated.
            </li>
            <li>Students must cooperate with anti-ragging authorities.</li>
            <li>Anonymous complaints will also be examined.</li>
            <li>No victim or complainant shall face retaliation.</li>
          </ul>
        </div>

        {/* Punishments */}
        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Punishments for Ragging
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Suspension from classes or academic activities.</li>
            <li>Withholding or withdrawal of scholarships or fellowships.</li>
            <li>Debarring from examinations or placements.</li>
            <li>Cancellation of admission.</li>
            <li>Rustication or expulsion from the institute.</li>
          </ul>
        </div>

        {/* Reporting */}
        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Reporting Ragging
          </h3>
          <p className="text-sm leading-relaxed">
            Students can report incidents of ragging to the Anti Ragging
            Committee, wardens, faculty advisors, or through the designated
            reporting mechanisms. Complaints can also be registered through UGC
            anti-ragging portals.
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
            <h5 className="font-semibold mb-2">Important Links</h5>
            <ul className="space-y-1 opacity-90">
              <li>UGC Anti Ragging Regulations</li>
              <li>Student Welfare</li>
              <li>Institute Committees</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Anti Ragging Policy</h5>
            <p className="opacity-90">
              Zero tolerance towards ragging. Safety and dignity of students
              first.
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
