import dynamic from 'next/dynamic'

const MainContent = dynamic(() => import('../components/MainContent'), {
  ssr: false
})

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <MainContent />
    </main>
  )
}