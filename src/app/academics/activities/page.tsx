import React from 'react';
import Link from 'next/link';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';

export default function page() {
  return (
    <div className="min-h-screen bg-white">
      <Header31 />

      <div className="bg-gray-50 py-4 px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-[#800000] transition-colors duration-200"
            >
              Home
            </Link>
            <span>›</span>
            <span className="text-gray-400">Academics</span>
            <span>›</span>
            <span className="text-[#800000] font-medium">Activities</span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <div className="relative z-10 text-center py-20 px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            ACTIVITIES
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Duties and responsibilities of the Dean (Academic)
          </p>
        </div>
      </section>
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Dean (Academic) — Duties &amp; Responsibilities
          </h2>
          <p className="text-gray-700 mb-6">
            As per the schedule &lsquo;C&rsquo; of NIT statutes the duties and
            responsibilities of the Dean (Academic) is to advise the Director
            in:
          </p>

          <div className="prose prose-slate">
            <ul className="list-disc space-y-2 pl-6">
              <li>Admission and enrollment of students.</li>
              <li>
                Finalisation of academic calender, time-tables, registration of
                students for course work and examinations, class arrangements
                and all other requirements for proper conduct of class work.
              </li>
              <li>
                Conduct of class tests and co-coordinating the finalization of
                session&rsquo;s evaluations and for ensuring the timely
                declaration of results.
              </li>
              <li>
                Supervision of the maintenance of up-to-date academic records of
                all categories of students.
              </li>
              <li>Publication and distribution of the syllabi.</li>
              <li>
                Organizing meeting of all the Institute level academic bodies.
              </li>
              <li>
                Arranging the issue of all academic certificates, medals and
                prizes to the students.
              </li>
              <li>
                To arrange or conduct of those examinations which are to be
                conducted by the Institute as stipulted in the Institute
                regulations.
              </li>
              <li>
                To formulate policies for the conduct of research and steps to
                maintain suitable standard by implementing the Board of
                Governors/Senate decision.
              </li>
              <li>
                To execute the policy of the Senate in the conduct of P.G.,
                Ph.D. and other research programmes including the examination of
                the thesis.
              </li>
              <li>To co-ordinates for the conduct of Convocation.</li>
              <li>
                All proposals to modify the teaching programmes will be
                considered by BOAC, for which Dean (Academic) i.e. the Chairman
                and if approved will be sent to the Senate for formal approval.
              </li>
              <li>
                To admit sponsored Early Faculty Induction Programme and Quality
                Improvement Programme candidates.
              </li>
              <li>
                To suggest the Director to take suitable steps from time to time
                to strive for the high academic standards.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
