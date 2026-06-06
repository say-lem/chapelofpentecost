import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import About from '@/components/About'
import Worship from '@/components/Worship'
import Beliefs from '@/components/Beliefs'
import Sermons from '@/components/Sermons'
import Community from '@/components/Community'
import WorkersInTheVineyard from '@/components/WorkersInTheVineyard'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AnnouncementBanner />
      <About />
      <Worship />
      <Beliefs />
      <Sermons />
      <Community />
      <WorkersInTheVineyard />
      <Contact />
      <Footer />
    </main>
  )
}
