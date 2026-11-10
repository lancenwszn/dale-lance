import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-orange px-5 text-center text-paper">
      <p className="label text-ink">Error 404</p>
      <h1 className="display mt-4 text-[clamp(3rem,12vw,12rem)]">Not found.</h1>
      <Link href="/" className="label mt-8 bg-ink px-5 py-3.5 text-paper hover:bg-paper hover:text-ink">
        Back to home
      </Link>
    </main>
  );
}
