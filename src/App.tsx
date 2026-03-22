import { motion } from 'framer-motion'
import { Leaf, ArrowUpRight, Plant, Drop, Grains, Sparkle, CheckCircle, WhatsappLogo } from '@phosphor-icons/react'

function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/40 backdrop-blur-xl inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] rounded-full px-6 py-3 border border-white/50">
        <div className="flex items-center gap-2 group cursor-pointer">
          <motion.div 
            whileHover={{ rotate: 90 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="bg-purple-deep p-2 rounded-full text-white flex-shrink-0"
          >
            <Leaf size={20} weight="fill" />
          </motion.div>
          <span className="font-sans font-bold text-purple-deep tracking-tighter text-lg uppercase">
            Açaí Artesanal
          </span>
        </div>
        
        <motion.button 
          whileHover={{ scale: 0.98, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-deep text-primary-bg px-6 py-2 rounded-full font-medium tracking-tight text-sm flex items-center gap-2 relative overflow-hidden group shadow-md"
        >
          <span className="relative z-10">Peça Agora</span>
        </motion.button>
      </div>
    </motion.nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col md:flex-row items-center justify-between px-6 pt-32 pb-12 overflow-hidden gap-12">
      <div className="flex-1 max-w-2xl z-10 relative md:pl-8">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ staggerChildren: 0.1 }}
           className="flex flex-col gap-6"
        >
          <motion.span 
            className="text-green-organic uppercase tracking-[0.2em] text-xs font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Edição Limitada
          </motion.span>
          <motion.h1 
            className="text-5xl md:text-7xl font-sans font-black tracking-tighter leading-[0.9] text-purple-deep"
          >
            Puro,
            <br />
            <span className="text-purple-vibrant">Intenso &</span>
            <br />
            Artesanal.
          </motion.h1>
          <motion.p className="text-lg text-purple-deep/70 max-w-[45ch] leading-relaxed font-light">
            Descubra a refrescância absoluta. Nossa fórmula em visualização explodida: 
            polpa pura da Amazônia, textura aveludada e montagem milimétrica.
          </motion.p>
          <motion.div className="flex items-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
          >
             <motion.button 
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-organic text-primary-bg px-8 py-4 rounded-full font-bold tracking-tight shadow-[0_20px_40px_-15px_rgba(43,112,66,0.6)] flex items-center gap-2"
              >
                Inicie sua Experiência
                <ArrowUpRight size={20} weight="bold" />
              </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="flex-1 w-full h-[60vh] md:h-[90vh] relative z-0 md:-mr-12 rounded-[2.5rem] overflow-hidden bg-purple-deep/5 border border-white max-w-4xl shadow-2xl">
         <motion.video 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/acai_bowl.mp4" 
            poster="/acai-copo.jpg"
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-center"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-primary-bg via-transparent to-transparent opacity-40 md:opacity-20 pointer-events-none" />
      </div>
    </section>
  )
}

function Features() {
  const feats = [
    { title: "Polpa Pura", icon: Drop, desc: "Extraída a frio, preservando antioxidantes.", delay: 0, image: "/polpa-pura.jpg" },
    { title: "Colheita Orgânica", icon: Plant, desc: "Frutas selecionadas diariamente para máxima vida útil.", delay: 0.1, image: "/colheita.jpg" },
    { title: "Granola Nativa", icon: Grains, desc: "Assada lentamente com mel selvagem.", delay: 0.2, image: "/granola.jpg" },
    { title: "Engenharia Fria", icon: Sparkle, desc: "Processo milimétrico de camadas resfriadas.", delay: 0.3, image: "/engenharia.jpg" }
  ]

  return (
    <section className="py-32 px-6 w-full max-w-7xl mx-auto relative mb-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
         <h2 className="text-4xl md:text-5xl font-black text-purple-deep leading-none tracking-tighter">
            Arquitetura <br/> do Sabor.
         </h2>
         <p className="text-purple-deep/60 max-w-[40ch] leading-relaxed">
            Nada é deixado ao acaso. Cada elemento é isolado, testado e montado para criar a experiência perfeita de refrescância.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {feats.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: f.delay }}
            className="group isolate relative bg-white rounded-[2rem] overflow-hidden min-h-[350px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] border border-slate-100/50 hover:shadow-[0_20px_40px_-15px_rgba(43,112,66,0.1)] hover:border-green-organic/20 transition-all duration-500 flex flex-col"
          >
            <div className="h-48 w-full relative overflow-hidden bg-slate-50">
               <img src={f.image} alt={f.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full text-green-organic shadow-sm">
                  <f.icon size={24} weight="duotone" />
               </div>
            </div>
            <div className="p-8 flex flex-col flex-1 bg-white">
               <h3 className="text-xl font-bold text-purple-deep mb-2">{f.title}</h3>
               <p className="text-sm text-purple-deep/70 leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Gallery() {
  const images = [
      "/acai-copo.jpg", 
      "/macro-verde.jpg",
      "/macro-granola.jpg"
  ];
  return (
    <section className="py-24 px-6 w-full max-w-7xl mx-auto overflow-hidden">
      <div className="mb-16">
         <h2 className="text-4xl md:text-5xl font-black text-purple-deep leading-none tracking-tighter">
            Detalhes<br/>Macro.
         </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-6 h-[80vh] min-h-[600px] max-h-[800px]">
         <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-[1.5] rounded-[2.5rem] overflow-hidden relative group"
         >
            <img src={images[0]} alt="Textura Macro do Açaí 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2.5rem] pointer-events-none" />
         </motion.div>
         <div className="flex-1 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-1 rounded-[2.5rem] overflow-hidden relative group"
            >
               <img src={images[1]} alt="Textura Macro Verde 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2.5rem] pointer-events-none" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex-1 flex rounded-[2.5rem] overflow-hidden relative group"
            >
               <img src={images[2]} alt="Textura Macro Granola 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2.5rem] pointer-events-none" />
            </motion.div>
         </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const reviews = [
    { name: "Catarina Villanova", role: "Crítica de Gastronomia", text: "O mais próximo da perfeição técnica em uma tigela. A proporção entre a acidez da fruta e o dulçor da granola é milimétrica." },
    { name: "Henrique Fontes", role: "Atleta de Alta Performance", text: "Recuperação pura. A textura é incrivelmente aveludada, sem os cristais de gelo que arruínam as marcas comerciais." },
    { name: "Isabela Rabelo", role: "Curadora de Sabores", text: "A estética da montagem reflete diretamente o sabor. É uma experiência imersiva e profundamente orgânica do início ao fim." }
  ]
  return (
    <section className="py-24 px-6 w-full max-w-7xl mx-auto bg-white rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.03)] border border-slate-100 my-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-deep/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
         <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-black text-purple-deep leading-none tracking-tighter mb-6">
              Vozes<br/>Satisfeitas.
            </h2>
            <p className="text-purple-deep/60 mb-8 max-w-[40ch]">
               A prova documental do nosso rigor técnico e dedicação artística, registrada por indivíduos exigentes.
            </p>
         </div>
         <div className="flex-[2] flex flex-col gap-6 w-full">
            {reviews.map((r, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ delay: i * 0.1 }}
                 className="bg-primary-bg rounded-[2rem] p-8 lg:p-10 border border-white hover:border-green-organic/20 transition-colors shadow-sm"
               >
                  <p className="text-lg text-purple-deep/90 mb-6 font-medium leading-relaxed">"{r.text}"</p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-purple-deep/10 flex items-center justify-center text-purple-deep font-bold">
                        {r.name.charAt(0)}
                     </div>
                     <div>
                        <div className="font-bold text-purple-deep flex items-center gap-2">
                          {r.name}
                          <CheckCircle weight="fill" className="text-green-organic" />
                        </div>
                        <div className="text-sm text-purple-deep/50">{r.role}</div>
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-purple-deep rounded-t-[3rem] md:rounded-t-[4rem] text-primary-bg py-24 px-6 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">
        <div className="flex-1">
           <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8 text-white">
             A Forma<br/>Exata do Sabor.
           </h2>
           <button className="bg-green-organic hover:bg-green-light transition-colors text-white rounded-full px-8 py-4 font-bold tracking-tight shadow-[0_10px_30px_-10px_rgba(43,112,66,0.6)] flex items-center gap-3">
              <WhatsappLogo size={24} weight="regular" />
              Solicite via WhatsApp
           </button>
        </div>
        
        <div className="flex flex-col gap-12 flex-1 lg:items-end w-full">
           <div className="flex flex-col gap-4 text-primary-bg/70 lg:text-right text-lg">
              <a href="#" className="hover:text-white transition-colors flex items-center lg:justify-end gap-2 group">
                 Instagram 
                 <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#" className="hover:text-white transition-colors flex items-center lg:justify-end gap-2 group">
                 Nossa História
                 <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#" className="hover:text-white transition-colors flex items-center lg:justify-end gap-2 group">
                 Termos Técnicos
                 <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
           </div>

           <div className="text-primary-bg/30 text-sm w-full lg:text-right border-t border-primary-bg/10 pt-8 mt-auto">
              © 2026 Açaí Artesanal. Todos os direitos puramente técnicos e estéticos reservados.
           </div>
        </div>
      </div>
    </footer>
  )
}

function FloatingWhatsApp() {
  return (
    <motion.a 
      href="#"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_20px_40px_-10px_rgba(37,211,102,0.6)] cursor-pointer"
    >
      <WhatsappLogo size={32} weight="fill" />
    </motion.a>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-primary-bg selection:bg-purple-vibrant selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Testimonials />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
