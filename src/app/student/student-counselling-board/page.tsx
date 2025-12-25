import Link from 'next/link';

export const metadata = {
  title: 'Student Counselling Board | NIT Hamirpur',
  description:
    'Student Counselling Board of National Institute of Technology, Hamirpur providing academic, personal, and psychological support to students.',
};

export default function StudentCounsellingBoardPage() {
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
          <Link href="/anti-ragging-rules" className="hover:text-[#7b1e1e]">
            Anti Ragging Rules
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
            <h2 className="text-3xl font-bold mb-2">
              Student Counselling Board
            </h2>
            <p className="max-w-2xl text-sm opacity-90">
              Supporting students’ academic progress, mental well-being, and
              personal development at NIT Hamirpur.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        {/* About */}
        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-xl font-semibold text-[#7b1e1e] mb-3">
            About the Student Counselling Board
          </h3>
          <p className="text-sm leading-relaxed">
            The Student Counselling Board (SCB) of NIT Hamirpur is constituted
            to provide guidance and support to students in matters related to
            academics, emotional well-being, stress management, and personal
            development. The board works towards ensuring a healthy and
            supportive campus environment.
          </p>
        </div>

        {/* Objectives */}
        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Objectives
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Provide academic and personal counselling to students.</li>
            <li>Promote mental health awareness and well-being.</li>
            <li>
              Assist students in coping with stress and academic pressure.
            </li>
            <li>Encourage a positive and inclusive campus culture.</li>
            <li>Offer guidance during personal or emotional challenges.</li>
          </ul>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-md p-5 shadow-sm">
            <h4 className="font-semibold text-[#7b1e1e] mb-2">
              Academic Counselling
            </h4>
            <p className="text-sm">
              Guidance on academic performance, study strategies, and time
              management.
            </p>
          </div>

          <div className="bg-white border rounded-md p-5 shadow-sm">
            <h4 className="font-semibold text-[#7b1e1e] mb-2">
              Personal Counselling
            </h4>
            <p className="text-sm">
              Support for personal, emotional, and psychological concerns in a
              confidential setting.
            </p>
          </div>

          <div className="bg-white border rounded-md p-5 shadow-sm">
            <h4 className="font-semibold text-[#7b1e1e] mb-2">
              Awareness Programs
            </h4>
            <p className="text-sm">
              Workshops and sessions on mental health, stress management, and
              life skills.
            </p>
          </div>
        </div>

        {/* Confidentiality */}
        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Confidentiality & Ethics
          </h3>
          <p className="text-sm leading-relaxed">
            All counselling sessions are conducted with strict confidentiality.
            Information shared by students is treated with sensitivity and is
            used solely for their welfare, in accordance with institute
            policies.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-white border rounded-md shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Contact & Support
          </h3>
          <p className="text-sm leading-relaxed">
            Students seeking counselling support may approach the Student
            Counselling Board through faculty advisors, wardens, or designated
            counsellors. Appointments may be scheduled as per institute
            guidelines.
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
            <h5 className="font-semibold mb-2">Student Welfare</h5>
            <ul className="space-y-1 opacity-90">
              <li>Student Counselling Board</li>
              <li>Anti Ragging Committee</li>
              <li>Student Discipline Board</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Counselling Support</h5>
            <p className="opacity-90">
              Supporting student well-being and success.
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
