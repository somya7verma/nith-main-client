import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-10">
      Please visit again later.
      <br />
      <Link
        href="/admin/home"
        className="text-blue-600 underline underline-offset-4 transition-transform hover:scale-150"
      >
        Go to Admin Home
      </Link>
    </main>
  );
}
