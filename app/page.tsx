import Hero from '@/components/Hero'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import About from '@/components/About'
import Worship from '@/components/Worship'
import Beliefs from '@/components/Beliefs'
import OnlineWorship from '@/components/OnlineWorship'
import Sermons from '@/components/Sermons'
import Community from '@/components/Community'
import WorkersInTheVineyard from '@/components/WorkersInTheVineyard'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <AnnouncementBanner />
      <About />
      <Worship />
      <Beliefs />
      <OnlineWorship />
      <Sermons />
      <Community />
      <WorkersInTheVineyard />
      <Contact />
      <Footer />
    </main>
  )
}
