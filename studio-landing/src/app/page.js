import Image from 'next/image'
import NavbarComp from './components/NavbarComp'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import WorkSection from './components/WorkSection'


export default function Home() {
  return (
    <main className="">
      <NavbarComp />
      <HeroSection />
      <AboutSection />
      <WorkSection />
    </main>
  )
}
