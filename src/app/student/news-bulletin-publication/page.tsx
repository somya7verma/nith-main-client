import Link from 'next/link';

export const metadata = {
  title: 'News Bulletin & Publications | NIT Hamirpur',
  description:
    'Official news bulletins and institutional publications of National Institute of Technology, Hamirpur.',
};

export default function NewsBulletinPublicationPage() {
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
          <Link href="/news" className="hover:text-[#7b1e1e]">
            News
          </Link>
          <Link href="/publications" className="hover:text-[#7b1e1e]">
            Publications
          </Link>
          <Link href="/academics" className="hover:text-[#7b1e1e]">
            Academics
          </Link>
          <Link href="/downloads" className="hover:text-[#7b1e1e]">
            Downloads
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-bold text-[#7b1e1e] mb-3">
            News Bulletin & Publications
          </h2>
          <p className="max-w-3xl text-sm text-gray-600 leading-relaxed">
            Stay informed with the latest official announcements, circulars,
            newsletters, and institutional publications of NIT Hamirpur.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* Latest News */}
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="text-xl font-semibold text-[#7b1e1e] mb-4">
            Latest News Bulletins
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="border-l-4 border-[#7b1e1e] pl-4">
              <p className="font-medium">
                Academic Calendar Notification – 2025
              </p>
              <span className="text-xs text-gray-500">
                Published on: 12 July 2025
              </span>
            </li>

            <li className="border-l-4 border-[#7b1e1e] pl-4">
              <p className="font-medium">
                Notice regarding Semester Registration
              </p>
              <span className="text-xs text-gray-500">
                Published on: 05 July 2025
              </span>
            </li>

            <li className="border-l-4 border-[#7b1e1e] pl-4">
              <p className="font-medium">Circular on Examination Guidelines</p>
              <span className="text-xs text-gray-500">
                Published on: 28 June 2025
              </span>
            </li>
          </ul>
        </div>

        {/* Publications */}
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="text-xl font-semibold text-[#7b1e1e] mb-4">
            Institutional Publications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="border rounded-md p-5 hover:shadow transition">
              <h4 className="font-semibold mb-2">Annual Report</h4>
              <p className="text-gray-600">
                Comprehensive overview of academic, administrative, and research
                achievements.
              </p>
            </div>

            <div className="border rounded-md p-5 hover:shadow transition">
              <h4 className="font-semibold mb-2">Institute Newsletter</h4>
              <p className="text-gray-600">
                Periodic newsletter highlighting campus events and milestones.
              </p>
            </div>

            <div className="border rounded-md p-5 hover:shadow transition">
              <h4 className="font-semibold mb-2">Departmental Bulletins</h4>
              <p className="text-gray-600">
                Technical and academic updates published by departments.
              </p>
            </div>
          </div>
        </div>

        {/* Archive */}
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="text-lg font-semibold text-[#7b1e1e] mb-3">
            Archives & Access
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            All past news bulletins and publications are archived digitally and
            can be accessed through the institute website or respective
            administrative sections.
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
            <h5 className="font-semibold mb-2">Quick Links</h5>
            <ul className="space-y-1 opacity-90">
              <li>News Archive</li>
              <li>Annual Reports</li>
              <li>Institute Notices</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Publications</h5>
            <p className="opacity-90">
              Transparency through timely and accurate communication.
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
