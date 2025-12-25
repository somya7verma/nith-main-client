import Link from 'next/link';

export default function CulturalActivitiesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-[#7A0C0C] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-semibold">
            Cultural Activities & Clubs
          </h1>
          <p className="mt-2 text-gray-200">
            Promoting culture, creativity, and student engagement at NIT
            Hamirpur
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 mt-6 text-sm text-gray-600">
        Home <span className="mx-1">›</span> Student{' '}
        <span className="mx-1">›</span>
        <span className="text-[#7A0C0C] font-medium">
          Cultural Activities & Clubs
        </span>
      </div>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Overview</h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Cultural activities at NIT Hamirpur play a vital role in nurturing
          creativity, leadership, and teamwork among students. Various clubs and
          societies provide platforms for artistic expression, cultural
          exchange, and holistic development.
        </p>

        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
          Cultural Activities
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>› Introduction & List of Cultural Clubs</li>
          <li>› Music, Dance, Drama, and Literary Activities</li>
          <li className="bg-gray-100 px-4 py-2 rounded">
            › Annual Cultural Festival (Hillffair)
          </li>
          <li>› SPIC MACAY Cultural Programs</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 border-b pb-2">
          Cultural Clubs
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>› Music Club</li>
          <li>› Dance Club</li>
          <li>› Dramatics Club</li>
          <li>› Fine Arts & Photography Club</li>
          <li>› Literary & Debating Club</li>
        </ul>
      </section>
    </main>
  );
}
