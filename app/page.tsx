import Link from 'next/link';

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center text-center justify-center p-24">
      <h1 className='text-3xl mb-5 font-semibold'>Homepage</h1>
      <div className='flex justify-center'>
        <Link href={'/movies'}
          className='animate-pulse bg-emerald-400 rounded-xl px-6 py-2 text-slate-900 font-bold'>
          Movies
        </Link>
      </div>
    </main>
  );
}
