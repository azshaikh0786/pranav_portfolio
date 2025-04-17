// app/page.tsx
'use client';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Education from '@/components/Education';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero/>
      <Skills />
      <Education />
      <Projects />
      <Footer />
    </main>
  );
}