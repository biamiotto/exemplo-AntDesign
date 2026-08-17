import Link from 'next/link'

export default function page() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl font-bold'>2TDS1</h1>
        <h2 className='text-lg'>Desenvolvimento de Sistemas Web</h2>
        <h3 className='text-base'>Front-End II</h3>
        <h4 className='text-sm'>Marcelo e Thiago</h4>

        <Link href="/pac"
        className='bg-pink-500 px-4 py-2 text-white rounded-2xl hover:bg-pink-700'>
        Ir para Rota pac
         </Link>
    </main>
  );
}
