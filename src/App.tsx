import { motion } from 'framer-motion'
import { HeroSpline } from './components/HeroSpline'
import { GlowingEffect } from './components/ui/glowing-effect'
import { InfiniteGrid } from './components/ui/infinite-grid'
import { Footerdemo } from './components/ui/footer-section'
import { TypewriterOnView, LazyLoad } from './components/ui/typewriter'
import { MousePointer2, Zap, Smartphone, Layout, ArrowRight, Mail } from 'lucide-react'
import './App.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

interface ProjectCardProps {
  title: string
  category: string
  description: string
  icon: React.ElementType
}

const ProjectCard = ({ title, category, description, icon: Icon }: ProjectCardProps) => (
  <motion.li
    className="min-h-[16rem] list-none"
    variants={fadeInUp}
  >
    <div className="relative h-full rounded-[1.25rem] border border-neutral-800 p-2 md:rounded-[1.5rem] md:p-3">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />
      <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-neutral-800 bg-[#0a0a0a] p-6 shadow-sm md:p-8">
        <div className="relative flex flex-1 flex-col justify-between gap-3">
          <div className="w-fit rounded-lg border border-neutral-700 bg-neutral-900 p-3">
            <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
          </div>
          <div className="space-y-3">
            <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
              {title}
            </h3>
            <p className="text-sm text-neutral-500 uppercase tracking-widest">{category}</p>
            <p className="text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-neutral-400">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer mt-4">
            VIEW PROJECT <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </div>
  </motion.li>
)

function App() {
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Navigation - simplified for performance */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-none">
        <div className="text-xl font-bold text-white tracking-tight">STUDIO.</div>
        <div className="hidden md:flex gap-10">
          <a href="#work" className="text-sm text-neutral-300 hover:text-white transition-colors uppercase tracking-widest">Work</a>
          <a href="#about" className="text-sm text-neutral-300 hover:text-white transition-colors uppercase tracking-widest">About</a>
          <a href="#contact" className="text-sm text-neutral-300 hover:text-white transition-colors uppercase tracking-widest">Contact</a>
        </div>
        <button className="md:hidden text-white">MENU</button>
      </nav>

      {/* Hero Section with Spline 3D */}
      <section className="pt-20">
        <HeroSpline />
      </section>

      {/* Projects Section */}
      <section id="work" className="py-24 px-8 relative">
        <InfiniteGrid className="z-0" gridSize={50} showBlurSpheres={true} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Selected Work</h2>
            <div className="w-16 h-1 bg-white"></div>
          </motion.div>

          <motion.ul
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <ProjectCard
              title="Immersive UX"
              category="Creative Direction"
              description="Crafting unforgettable user experiences through innovative design and interaction."
              icon={MousePointer2}
            />
            <ProjectCard
              title="Next-Gen Web"
              category="Development"
              description="Building blazing-fast, modern web applications with cutting-edge technologies."
              icon={Zap}
            />
            <ProjectCard
              title="Mobile Luxury"
              category="UI/UX Design"
              description="Premium mobile experiences that feel native and delight users at every tap."
              icon={Smartphone}
            />
            <ProjectCard
              title="Cloud Systems"
              category="Architecture"
              description="Scalable, resilient infrastructure designed for the modern enterprise."
              icon={Layout}
            />
          </motion.ul>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-8 bg-neutral-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <LazyLoad delay={0}>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  <TypewriterOnView text="About Me" delay={80} />
                </h2>
              </LazyLoad>

              <LazyLoad delay={0.2}>
                <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                  <TypewriterOnView
                    text="I'm a creative developer passionate about building immersive digital experiences. With expertise in 3D, animation, and modern web technologies, I bring ideas to life through innovative design and cutting-edge development."
                    delay={15}
                  />
                </p>
              </LazyLoad>

              <LazyLoad delay={0.4}>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  <TypewriterOnView
                    text="Every project is an opportunity to push boundaries and create something extraordinary. Let's build something amazing together."
                    delay={15}
                  />
                </p>
              </LazyLoad>
            </div>

            <LazyLoad delay={0.3}>
              <div className="relative h-[400px] rounded-2xl overflow-hidden bg-neutral-900">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-9xl font-bold text-white/10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    JD
                  </motion.div>
                </div>
              </div>
            </LazyLoad>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Let's Work <br /> Together
            </h2>
            <p className="text-neutral-400 text-xl max-w-2xl mx-auto mb-12">
              Have a project in mind? I'd love to hear about it. Drop me a line and let's create something extraordinary.
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-white border-b-2 border-white pb-2 hover:pb-4 transition-all"
            >
              <Mail size={28} /> hello@studio.dev
            </a>
          </motion.div>
        </div>
      </section>

      {/* Premium Footer */}
      <Footerdemo />
    </div>
  )
}

export default App
