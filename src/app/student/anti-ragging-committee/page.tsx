import Link from 'next/link';

export const metadata = {
  title: 'Anti Ragging Community | NIT Hamirpur',
  description:
    'Anti Ragging Community of NIT Hamirpur ensuring a safe, respectful, and inclusive campus environment.',
};

export default function AntiRaggingCommunityPage() {
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
          <Link href="/academics" className="hover:text-[#7b1e1e]">
            Academics
          </Link>
          <Link href="/committees" className="hover:text-[#7b1e1e]">
            Committees
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
          className="h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/campus.jpg')" }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white">
            <h2 className="text-3xl font-bold mb-2">Anti Ragging Community</h2>
            <p className="max-w-2xl text-sm opacity-90">
              Ensuring a safe, respectful, and ragging-free environment for all
              students at NIT Hamirpur.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        {/* About */}
        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-xl font-semibold text-[#7b1e1e] mb-3">
            About Anti Ragging Community
          </h3>
          <p className="text-sm leading-relaxed">
            The Anti Ragging Community of NIT Hamirpur is constituted to
            prevent, prohibit, and eliminate the menace of ragging on campus.
            The institute follows a zero-tolerance policy towards ragging in any
            form, ensuring student safety and dignity.
          </p>
        </div>

        {/* Objectives */}
        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Objectives
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Prevent ragging through awareness and strict enforcement.</li>
            <li>Create a safe and inclusive campus environment.</li>
            <li>Encourage respectful interaction among students.</li>
            <li>Provide support to victims of ragging.</li>
            <li>Ensure compliance with UGC anti-ragging regulations.</li>
          </ul>
        </div>

        {/* Measures */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-md p-5 shadow-sm">
            <h4 className="font-semibold text-[#7b1e1e] mb-2">
              Preventive Measures
            </h4>
            <p className="text-sm">
              Awareness programs, orientation sessions, and regular monitoring
              of hostels and campus areas.
            </p>
          </div>

          <div className="bg-white border rounded-md p-5 shadow-sm">
            <h4 className="font-semibold text-[#7b1e1e] mb-2">
              Monitoring & Reporting
            </h4>
            <p className="text-sm">
              Dedicated anti-ragging committees and confidential reporting
              mechanisms.
            </p>
          </div>

          <div className="bg-white border rounded-md p-5 shadow-sm">
            <h4 className="font-semibold text-[#7b1e1e] mb-2">
              Disciplinary Action
            </h4>
            <p className="text-sm">
              Strict disciplinary action against offenders as per UGC and
              institute norms.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Contact & Support
          </h3>
          <p className="text-sm leading-relaxed">
            Students can report incidents of ragging directly to the Anti
            Ragging Committee or approach faculty advisors, wardens, or the
            institute administration without fear of retaliation.
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
            <h5 className="font-semibold mb-2">Anti Ragging</h5>
            <p className="opacity-90">
              Zero tolerance towards ragging. Safety first.
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
