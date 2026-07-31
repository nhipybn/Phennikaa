import Header from '@/components/header'
import HeroBanner from '@/components/hero-banner'
import Subheadline from '@/components/subheadline'
import Audience from '@/components/audience'
import WhyWebinar from '@/components/why-webinar'
import Problems from '@/components/problems'
import Speakers from '@/components/speakers'
import Agenda from '@/components/agenda'
import RegistrationForm from '@/components/registration-form'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <Subheadline />
      <Audience />
      <WhyWebinar />
      <Problems />
      <Speakers />
      <Agenda />
      <RegistrationForm />
      <Footer />
    </main>
  )
}
