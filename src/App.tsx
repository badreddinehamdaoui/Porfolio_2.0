import { useState, useEffect, useRef, createContext, useContext } from "react"
import logoImg from "@/imports/Artboard-12.png"
import photoImg from "@/imports/Badr_Hamdaoui_PPic_.jpg"
import showreelPreview from "@/imports/P1-2.png"
import kontaktCampaignImg from "@/imports/Artboard_1.png"
import videoClipsImg from "@/imports/29541389_1825090014462357_4788868206959788032_n.jpg"
import vfxEditingImg from "@/imports/41.jpg"
import abstractMotionImg from "@/imports/19.jpg"
import brandIdentity3DImg from "@/imports/7.png"
import photoRef01 from "@/imports/photo-ref01.jpg"
import photoRef02 from "@/imports/photo-ref02.jpg"
import photoRef03 from "@/imports/photo-ref03.jpg"
import photoRef04 from "@/imports/photo-ref04.png"
import aiRef06 from "@/imports/ai-ref06.png"
import aiRef07 from "@/imports/ai-ref07.png"
import aiRef08 from "@/imports/ai-ref08.png"
import threeDRef09 from "@/imports/threed-ref09.jpg"
import threeDRef10 from "@/imports/threed-ref10.jpg"

// ── Language system ───────────────────────────────────────────────────────────

type Lang = "fr" | "en"
const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
})
function useLang() {
  return useContext(LangCtx)
}

function detectLang(): Lang {
  // Auto-detect by browser/navigator language
  const nav = navigator.language || ""
  if (nav.startsWith("fr")) return "fr"
  return "en"
}

// ── Translations ──────────────────────────────────────────────────────────────

const T = {
  role: {
    fr: "ARTISTE AUDIO VISUEL",
    en: "AUDIO VISUAL ARTIST",
  },
  tagline: {
    fr: "Monteur Vidéo · Artiste 3D · Designer · Artiste IA",
    en: "Video Editor · 3D Artist · Designer · AI Artist",
  },
  available: {
    fr: "DEPUIS 2005 · PREMIER PC · PREMIÈRE PASSION",
    en: "SINCE 2005 · FIRST PC · FIRST PASSION",
  },
  watchReel: {
    fr: "↓ Voir le Showreel",
    en: "↓ Watch Showreel",
  },
  scroll: {
    fr: "Défiler",
    en: "Scroll",
  },
  reelCta: {
    fr: "Cliquez pour lancer · Demo Reel 2025",
    en: "Click to play · 2025 Demo Reel",
  },
  aboutLabel: {
    fr: "À propos",
    en: "About",
  },
  aboutNumber: {
    fr: "01 — Artiste",
    en: "01 — Artist",
  },
  aboutHeadline: {
    fr: ["La force créative", "derrière l'image"],
    en: ["The creative force", "behind the frame"],
  },
  aboutP1: {
    fr: "Graphiste créatif passionné par l'univers de l'édition, fort de plus de 4 ans d'expérience en conception visuelle au sein de KONTAKT – Groupe DEMCO. Solide maîtrise de la Creative Suite et de la chaîne graphique complète, de la conception à la préparation des fichiers pour l'impression.",
    en: "Creative graphic artist passionate about with design, cinematography, editing and creative process, with 4+ years of visual design experience at KONTAKT – Groupe DEMCO. Strong command of Creative Suite and the complete graphic production workflow, from concept to print-ready artwork.",
  },
  aboutP2: {
    fr: "Créatif polyvalent en 3D, photographie, motion design et post-production, avec une expérience confirmée en photomontage, illustration, identité visuelle et impression textile. Film sélectionné au Festival de Cannes et collaborations avec Pablo Katiba, Esserpent et El Castro.",
    en: "A multidisciplinary creative working across 3D, photography, motion design and post-production, with proven experience in photo compositing, illustration, visual identity and textile printing. Cannes-selected film and collaborations with Pablo Katiba, Esserpent and El Castro.",
  },
  statYears: { fr: "Ans d'expérience", en: "Years Experience" },
  statCannes: { fr: "Sélection Cannes", en: "Cannes Selection" },
  statTools: { fr: "Logiciels maîtrisés", en: "Tools Mastered" },
  selectedWork: { fr: "Travaux Sélectionnés", en: "Selected Work" },
  expertiseLabel: { fr: "Compétences", en: "Expertise" },
  expertiseHeadline: { fr: ["CRÉATION", "À PRODUCTION"], en: ["CONCEPT", "TO PRODUCTION"] },
  expertiseIntro: {
    fr: "Une pratique complète qui relie direction artistique, création digitale et maîtrise des contraintes techniques de production.",
    en: "An end-to-end practice connecting art direction, digital creation and the technical demands of production.",
  },
  toolsLabel: { fr: "Outils & Logiciels", en: "Tools & Software" },
  toolsHeadline: { fr: ["ARSENAL", "PROFESSIONNEL"], en: ["PROFESSIONAL", "ARSENAL"] },
  expLabel: { fr: "Expérience", en: "Experience" },
  expHeadline: { fr: ["LE", "PARCOURS"], en: ["THE", "JOURNEY"] },
  contactLabel: { fr: "Contact", en: "Contact" },
  contactHeadline: {
    fr: ["CRÉONS", "QUELQUE CHOSE", "D'EXTRAORDINAIRE"],
    en: ["LET'S CREATE", "SOMETHING", "EXTRAORDINARY"],
  },
  emailLabel: { fr: "E-mail", en: "Email" },
  phoneLabel: { fr: "Téléphone", en: "Phone" },
  addressLabel: { fr: "Adresse", en: "Address" },
  hireCta: { fr: "Travaillons Ensemble", en: "Get in Touch" },
  hireNav: { fr: "Me contacter", en: "Hire Me" },
  footer: { fr: "Tous droits réservés", en: "All rights reserved" },
  interests: { fr: "Intérêts", en: "Interests" },
  languages: { fr: "Langues", en: "Languages" },
  sectionEditing: { fr: "MONTAGE", en: "EDITING" },
  sectionEditingDesc: {
    fr: "Montage vidéo court et long format. Reels, publicités Meta Ads, clips musicaux et films — chaque frame pensée pour l'impact.",
    en: "Short and long-form video editing. Reels, Meta Ads, music videos and films — every frame crafted for impact.",
  },
  section3D: { fr: "3D", en: "3D" },
  section3DDesc: {
    fr: "Blender, Cinema 4D, Maya, Houdini, Clo3D. Modélisation, animation, rendu produit — la troisième dimension au service de la marque.",
    en: "Blender, Cinema 4D, Maya, Houdini, Clo3D. Modeling, animation, product rendering — the third dimension serving the brand.",
  },
  sectionPhoto: { fr: "PHOTO", en: "PHOTO" },
  sectionPhotoDesc: {
    fr: "Direction artistique et photographie. Portrait, éditorial, e-commerce — la lumière comme outil de narration.",
    en: "Art direction and photography. Portrait, editorial, e-commerce — light as a storytelling tool.",
  },
  sectionAI: { fr: "IA", en: "AI" },
  sectionAIDesc: {
    fr: "Je peux créer tout ce que vous imaginez de façon réaliste — même des productions à gros budget, livrées à une fraction du coût avec les mêmes résultats exacts, garantis.",
    en: "I can create anything you imagine in a realistic way — even productions that would require a huge budget in real life, delivered at a fraction of the cost with the exact same results, guaranteed.",
  },
}

function t(key: keyof typeof T, lang: Lang): string {
  const val = T[key]
  if (typeof val === "object" && !Array.isArray(val)) {
    return (val as Record<Lang, string>)[lang] ?? ""
  }
  return ""
}

function ta(key: keyof typeof T, lang: Lang): string[] {
  const val = T[key]
  if (val && typeof val === "object") {
    const v = (val as Record<Lang, string[]>)[lang]
    if (Array.isArray(v)) return v
  }
  return []
}

// ── Static Data ───────────────────────────────────────────────────────────────

const EDITING_WORK = [
  {
    title: "KONTAKT Campaign Video & Content",
    sub: { fr: "Commercial · 2022–Présent", en: "Commercial · 2022–Present" },
    tags: ["Premiere Pro", "After Effects", "CapCut"],
    img: kontaktCampaignImg,
    size: "large",
    link: "https://canva.link/1ogqd0s4ji1nv7q",
  },
  {
    title: "Video Clips",
    sub: { fr: "Clips Musicaux · Depuis 2015", en: "Music Videos · Since 2015" },
    tags: ["DaVinci Resolve", "Color Grading", "After Effects"],
    img: videoClipsImg,
    size: "small",
    link: "https://canva.link/ypr3iij1wn8nm8m",
  },
  {
    title: "VFX, Editing & Motion Graphics",
    sub: { fr: "Post-Production · 2017–Présent", en: "Post-Production · 2017–Present" },
    tags: ["After Effects", "Premiere Pro", "Nuke", "DaVinci Resolve"],
    img: vfxEditingImg,
    size: "small",
    link: "coming",
  },
  {
    title: "Aylan Baby",
    sub: { fr: "Cinéma · Cannes 2019", en: "Cinema · Cannes 2019" },
    tags: ["VFX & Post-Production", "Premiere Pro"],
    img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=900&h=640&fit=crop&auto=format",
    size: "large",
    link: "coming",
  },
  {
    title: "Abstract Motion Design",
    sub: { fr: "Motion Graphics · 2024", en: "Motion Graphics · 2024" },
    tags: ["Houdini", "After Effects"],
    img: abstractMotionImg,
    size: "small",
    link: "coming",
    video: false,
  },
]

const THREE_D_WORK = [
  {
    title: "Product Visualization",
    sub: { fr: "Rendu 3D · 2024", en: "3D Render · 2024" },
    tags: ["Blender", "Cinema 4D"],
    img: threeDRef09,
    size: "large",
    link: "coming",
    video: false,
  },
  {
    title: "3D Campaign",
    sub: { fr: "Mode 3D · 2024", en: "3D Fashion · 2024" },
    tags: ["Clo3D", "Blender"],
    img: threeDRef10,
    size: "small",
    link: "coming",
    video: false,
  },
  {
    title: "Brand Identity 3D",
    sub: { fr: "Design 3D · 2023", en: "3D Design · 2023" },
    tags: ["3ds Max", "Maya"],
    img: brandIdentity3DImg,
    size: "large",
    link: "coming",
    video: false,
  },
]

const PHOTO_WORK = [
  {
    title: "Fashion",
    sub: { fr: "Photographie · 2024", en: "Photography · 2024" },
    tags: ["Studio", "Lighting", "Artistic Direction", "Photography", "Retouch"],
    img: photoRef01,
    size: "large",
    aspect: "portrait",
    link: "coming",
    video: false,
  },
  {
    title: "Artists",
    sub: { fr: "Photographie · 2024", en: "Photography · 2024" },
    tags: ["Studio", "Lighting", "Artistic Direction", "Photography", "Retouch"],
    img: photoRef02,
    size: "small",
    aspect: "portrait",
    link: "coming",
    video: false,
  },
  {
    title: "Products",
    sub: { fr: "Photographie · 2024", en: "Photography · 2024" },
    tags: ["Studio", "Lighting", "Artistic Direction", "Photography", "Retouch"],
    img: photoRef03,
    size: "small",
    aspect: "portrait",
    link: "coming",
    video: false,
  },
  {
    title: "Portraits",
    sub: { fr: "Photographie · 2024", en: "Photography · 2024" },
    tags: ["Studio", "Lighting", "Artistic Direction", "Photography", "Retouch"],
    img: photoRef04,
    size: "large",
    aspect: "landscape",
    link: "coming",
    video: false,
  },
]

const AI_WORK = [
  {
    title: "Campaigns",
    sub: { fr: "Art IA · 2025–2026", en: "AI Art · 2025–2026" },
    tags: ["GPT Image", "Nano Banana Pro"],
    img: aiRef06,
    size: "large",
    aspect: "portrait",
    video: true,
    link: "coming",
  },
  {
    title: "Brand Campaign",
    sub: { fr: "Génération IA & Prompt Engineering · 2025", en: "AI Generation & Prompt Engineering · 2025" },
    tags: ["Veo 3.1", "Kling 3.0", "Premiere Pro", "After Effects"],
    img: aiRef07,
    size: "small",
    aspect: "portrait",
    video: true,
    link: "coming",
  },
  {
    title: "Cinematic · Trailers · Short Films",
    sub: { fr: "Génération IA & Prompt Engineering · 2026", en: "AI Generation & Prompt Engineering · 2026" },
    tags: ["Nano Banana", "Cinema Studio", "Seedance 2", "Premiere Pro", "After Effects"],
    img: aiRef08,
    size: "large",
    aspect: "portrait",
    video: true,
    link: "coming",
  },
]

const TOOLS_ROW1 = [
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe InDesign",
  "Adobe Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "CapCut",
  "Blender",
  "Clo3D",
  "Cinema 4D",
  "Maya",
  "3Ds Max",
  "Nuke",
  "Houdini",
  "FL Studio",
  "Microsoft Office",
  "Canva",
]

const TOOLS_ROW2 = [
  "GPT Image",
  "Nano Banana",
  "Midjourney",
  "Veo 3.1",
  "Kling 3.0",
  "Seedance 2",
  "Motion Design",
  "Color Grading",
  "3D Modeling",
  "Rigging & Animation",
  "Sound Design",
  "Compositing",
  "Graphic Design",
  "UI/UX Design",
  "Direction Artistique",
  "Short-form Content",
  "Meta Ads",
  "Google Workspace",
  "Microsoft Teams",
  "Zoom",
]

const EXPERTISE = [
  {
    number: "01",
    title: { fr: "Design éditorial", en: "Editorial design" },
    items: {
      fr: ["Couvertures & photomontage", "Mise en page & direction artistique", "Logos & identités visuelles"],
      en: ["Covers & photo compositing", "Layout & art direction", "Logos & visual identities"],
    },
  },
  {
    number: "02",
    title: { fr: "Print & production", en: "Print & production" },
    items: {
      fr: ["Fichiers prêts à imprimer", "Contrôle qualité & colorimétrie", "Validation & archivage"],
      en: ["Print-ready artwork", "Quality control & color accuracy", "Validation & archiving"],
    },
  },
  {
    number: "03",
    title: { fr: "Motion & digital", en: "Motion & digital" },
    items: {
      fr: ["Motion graphics & montage", "Compositing & post-production", "UI/UX & contenus digitaux"],
      en: ["Motion graphics & editing", "Compositing & post-production", "UI/UX & digital content"],
    },
  },
  {
    number: "04",
    title: { fr: "3D & textile", en: "3D & textile" },
    items: {
      fr: ["Modélisation, rigging & animation", "Visuels produits & campagnes", "Impression textile & sublimation"],
      en: ["Modeling, rigging & animation", "Product & campaign visuals", "Textile printing & sublimation"],
    },
  },
]

const EXPERIENCE = [
  {
    year: "2022–",
    role: {
      fr: "Lead Vidéo, 3D & Design (Marketing)",
      en: "Lead Video, 3D & Design (Marketing)",
    },
    company: "Kontakt — Groupe DEMCO · Moknine, Monastir",
    current: true,
  },
  {
    year: "2026",
    role: {
      fr: "Expert Formateur — Adobe Photoshop & Illustrator",
      en: "Expert Trainer — Adobe Photoshop & Illustrator",
    },
    company: "TEXFORCE · Burkina Faso",
    current: false,
  },
  {
    year: "2021",
    role: {
      fr: "Certification & Formation",
      en: "Certification & Training",
    },
    company: "SmartTraining365 & Brignole University · Texas, Houston",
    current: false,
  },
  {
    year: "2020",
    role: {
      fr: "Direction & Montage — Clips Musicaux",
      en: "Direction & Editing — Music Videos",
    },
    company: "Pablo Katiba · Esserpent",
    current: false,
  },
  {
    year: "2019",
    role: {
      fr: "Film sélectionné — Festival de Cannes",
      en: "Film selected — Festival de Cannes",
    },
    company: '"Aylan Baby"',
    current: false,
  },
  {
    year: "2018",
    role: {
      fr: "Festival International de Carthage — 54ème édition · Clips Musicaux",
      en: "Festival International de Carthage — 54th edition · Music Videos",
    },
    company: "El Castro",
    current: false,
  },
  {
    year: "2017",
    role: {
      fr: "Contrat de services",
      en: "Service contract",
    },
    company: "Cité de la Culture · Tunis",
    current: false,
  },
]

const INTERESTS = {
  fr: ["Production Musicale", "Cinéma", "Graphic Design", "Fitness", "Photographie"],
  en: ["Music Production", "Cinema", "Graphic Design", "Fitness", "Photography"],
}

const LANGUAGES_DATA = [
  { name: { fr: "Arabe", en: "Arabic" }, pct: 100 },
  { name: { fr: "Anglais", en: "English" }, pct: 100 },
  { name: { fr: "Français", en: "French" }, pct: 60 },
]

const NAV_LINKS = [
  { label: { fr: "Montage", en: "Editing" }, href: "#editing" },
  { label: { fr: "3D", en: "3D" }, href: "#threed" },
  { label: { fr: "Expertise", en: "Expertise" }, href: "#expertise" },
  { label: { fr: "Contact", en: "Contact" }, href: "#contact" },
]

// ── Hooks ─────────────────────────────────────────────────────────────────────

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

// ── Pointer spotlight ─────────────────────────────────────────────────────────

function PointerSpotlight() {
  useEffect(() => {
    let raf = 0
    function onPointerMove(e: PointerEvent) {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--pointer-x", `${e.clientX}px`)
        document.documentElement.style.setProperty("--pointer-y", `${e.clientY}px`)
      })
    }
    window.addEventListener("pointermove", onPointerMove, { passive: true })
    return () => {
      window.removeEventListener("pointermove", onPointerMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div className="pointer-spotlight" aria-hidden="true" />
}

// ── Custom Cursor ─────────────────────────────────────────────────────────────

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const posRef = useRef({ x: -100, y: -100 })
  const ringPosRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    function onMove(e: MouseEvent) {
      posRef.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px"
        dotRef.current.style.top = e.clientY + "px"
      }
    }
    function tick() {
      const { x, y } = posRef.current
      ringPosRef.current.x += (x - ringPosRef.current.x) * 0.1
      ringPosRef.current.y += (y - ringPosRef.current.y) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = ringPosRef.current.x + "px"
        ringRef.current.style.top = ringPosRef.current.y + "px"
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    function onOver(e: MouseEvent) {
      const el = e.target as HTMLElement
      if (el.closest("a, button, [data-hover]")) setHovered(true)
    }
    function onOut(e: MouseEvent) {
      const el = e.target as HTMLElement
      if (el.closest("a, button, [data-hover]")) setHovered(false)
    }
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseover", onOver)
    window.addEventListener("mouseout", onOut)
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onOver)
      window.removeEventListener("mouseout", onOut)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor"
        style={{
          position: "fixed", width: hovered ? 10 : 6, height: hovered ? 10 : 6,
          background: "#dd8c00", borderRadius: "50%",
          transform: "translate(-50%,-50%)", pointerEvents: "none",
          zIndex: 10002, transition: "width 0.2s, height 0.2s",
        }}
      />
      <div
        ref={ringRef}
        className="custom-cursor"
        style={{
          position: "fixed", width: hovered ? 56 : 36, height: hovered ? 56 : 36,
          border: `1px solid rgba(221,140,0,${hovered ? 0.8 : 0.45})`, borderRadius: "50%",
          transform: "translate(-50%,-50%)", pointerEvents: "none",
          zIndex: 10001, transition: "width 0.3s, height 0.3s, border-color 0.3s",
        }}
      />
    </>
  )
}

// ── Scroll Progress ───────────────────────────────────────────────────────────

function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    function onScroll() {
      const el = document.documentElement
      const scrollableHeight = el.scrollHeight - el.clientHeight
      setProgress(scrollableHeight > 0 ? el.scrollTop / scrollableHeight : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <div
      className="scroll-progress"
      style={{ transform: `scaleX(${progress})`, width: "100%" }}
    />
  )
}

// ── Nav Bar ───────────────────────────────────────────────────────────────────

function NavBar() {
  const { lang, setLang } = useLang()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.7)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className="nav-bar fixed top-0 left-0 right-0 z-[9000] flex items-center justify-between px-8 py-5"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        opacity: visible ? 1 : 0,
        background: "rgba(6,6,6,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <a href="#top" data-hover="true">
        <img src={logoImg} alt="Hamdaoui Badr-Eddine" style={{ height: 26, filter: "invert(1)" }} />
      </a>

      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            data-hover="true"
            className="nav-link font-mono text-xs tracking-widest uppercase text-white/50 hover:text-[#dd8c00] transition-colors duration-300"
          >
            {l.label[lang]}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        {/* Language toggle */}
        <button
          data-hover="true"
          onClick={() => setLang(lang === "fr" ? "en" : "fr")}
          className="font-mono text-xs tracking-widest uppercase flex items-center gap-1"
          style={{ color: "rgba(255,255,255,0.35)", transition: "color 0.3s" }}
        >
          <span style={{ color: lang === "fr" ? "#dd8c00" : "rgba(255,255,255,0.25)" }}>FR</span>
          <span style={{ color: "rgba(255,255,255,0.15)", margin: "0 2px" }}>/</span>
          <span style={{ color: lang === "en" ? "#dd8c00" : "rgba(255,255,255,0.25)" }}>EN</span>
        </button>
        <a
          href="#contact"
          data-hover="true"
          className="font-mono text-xs tracking-widest uppercase border border-white/20 hover:border-[#dd8c00] hover:text-[#dd8c00] text-white/60 px-4 py-2 transition-all duration-300 hidden md:inline-block"
        >
          {t("hireNav", lang)}
        </a>
      </div>
    </nav>
  )
}

// ── Lang Pill (floating, visible always) ─────────────────────────────────────

function LangPill() {
  const { lang, setLang } = useLang()
  return (
    <div
      style={{
        position: "fixed", bottom: 28, right: 28, zIndex: 9500,
        display: "flex", alignItems: "center", gap: 0,
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(6,6,6,0.85)",
        backdropFilter: "blur(12px)",
        overflow: "hidden",
      }}
    >
      {(["fr", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          data-hover="true"
          onClick={() => setLang(l)}
          className="font-mono text-xs tracking-widest uppercase px-4 py-2 transition-all duration-300"
          style={{
            background: lang === l ? "#dd8c00" : "transparent",
            color: lang === l ? "#000" : "rgba(255,255,255,0.35)",
          }}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

// ── Social Dock ───────────────────────────────────────────────────────────────

type SocialBrand = "facebook" | "instagram" | "vimeo"

const SOCIAL_LINKS: { label: string; brand: SocialBrand; href: string }[] = [
  { label: "Facebook", brand: "facebook", href: "https://www.facebook.com/BadrScotty/" },
  { label: "Instagram", brand: "instagram", href: "https://www.instagram.com/badr_hamdaoui_bdh/" },
  { label: "Vimeo", brand: "vimeo", href: "https://vimeo.com/badrhamdaoui" },
]

function SocialIcon({ brand }: { brand: SocialBrand }) {
  if (brand === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.7 22v-8h2.8l.4-3.2h-3.2v-2c0-.9.3-1.6 1.6-1.6H17V4.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.3 1.6-4.3 4.4v2.2H7.4V14h2.8v8h3.5Z" />
      </svg>
    )
  }
  if (brand === "instagram") {
    return (
      <svg className="social-icon-outline" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.8" r="1" className="social-icon-fill" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.4 7.2c-.1 2-1.5 4.8-4.2 8.3C15.3 19.2 12.9 21 11 21c-1.2 0-2.2-1.1-3.1-3.4L6.2 11.5C5.6 9.2 5 8.1 4.2 8.1c-.1 0-.7.3-1.6 1L1.6 7.9l3-2.7C6 4 7 3.4 7.7 3.3c1.6-.2 2.6.9 3 3.3.4 2.6.7 4.1.8 4.6.5 2.1 1 3.2 1.5 3.2.4 0 1.1-.7 2-2.1.9-1.4 1.3-2.4 1.4-3.1.1-1.2-.3-1.8-1.4-1.8-.5 0-1 .1-1.5.3 1-3.4 3-5 5.9-4.9 2.1.1 3.1 1.1 3 3.3Z" />
    </svg>
  )
}

function SocialDock() {
  return (
    <aside className="social-dock" aria-label="Social media">
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          data-hover="true"
          data-label={social.label}
          aria-label={social.label}
          className="social-dock-link"
        >
          <SocialIcon brand={social.brand} />
        </a>
      ))}
    </aside>
  )
}

// ── Hero Section ──────────────────────────────────────────────────────────────

function HeroSection() {
  const { lang } = useLang()
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    function onScroll() { setScrollY(window.scrollY) }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section
      id="top"
      style={{ minHeight: "100svh", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}
    >
      <div
        aria-hidden="true"
        className="hero-ambient"
        style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 80% 70% at 60% 40%, rgba(221,140,0,0.04) 0%, transparent 70%), radial-gradient(ellipse 60% 60% at 20% 80%, rgba(80,0,200,0.06) 0%, transparent 70%)",
          zIndex: 0,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Top bar */}
      <div
        className="fade-in fade-in-delay-1 flex items-center justify-between px-8 md:px-14 py-8"
        style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 2, opacity: 0 }}
      >
        <img src={logoImg} alt="Hamdaoui Badr-Eddine" style={{ height: 32, filter: "invert(1)" }} />
        <div className="font-mono text-xs text-white/25 tracking-widest flex items-center gap-6">
          <span>Agban Monastir · Tunisia</span>
          <span className="hidden md:inline">(+216) 52 339 464</span>
        </div>
      </div>

      {/* Main name */}
      <div
        style={{
          position: "relative", zIndex: 2,
          padding: "0 clamp(28px, 6vw, 80px)",
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      >
        <div className="font-display" style={{ lineHeight: 0.88, userSelect: "none" }}>
          <span
            className="hero-line hero-line-1"
            style={{ fontSize: "clamp(68px, 14.5vw, 190px)", fontWeight: 900, color: "#f0f0f0", letterSpacing: "-0.02em", opacity: 0 }}
          >
            BADR-EDDINE
          </span>
          <br />
          <span
            className="hero-line hero-line-2"
            style={{ fontSize: "clamp(68px, 14.5vw, 190px)", fontWeight: 900, color: "#dd8c00", letterSpacing: "-0.02em", opacity: 0 }}
          >
            HAMDAOUI
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mt-8 gap-6">
          <p
            className="hero-line hero-line-3 font-display text-white/40 uppercase tracking-widest"
            style={{ fontSize: "clamp(13px, 1.4vw, 17px)", letterSpacing: "0.22em", opacity: 0 }}
          >
            {t("tagline", lang)}
          </p>
          <div
            className="hero-line hero-line-4 font-mono text-white/20 text-xs tracking-widest"
            style={{ opacity: 0 }}
          >
            {t("available", lang)}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        className="fade-in fade-in-delay-2 flex items-end justify-between px-8 md:px-14 pb-10"
        style={{ opacity: 0, position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2 }}
      >
        <a
          href="#showreel"
          data-hover="true"
          className="font-display text-white/50 hover:text-[#dd8c00] transition-colors duration-300 uppercase tracking-widest"
          style={{ fontSize: 13 }}
        >
          {t("watchReel", lang)}
        </a>
        <a
          href="#showreel"
          data-hover="true"
          aria-label={t("watchReel", lang)}
          className="flex flex-col items-center gap-2 group"
        >
          <div className="scroll-dot w-px h-10 bg-white/20" />
          <span className="font-mono text-[10px] text-white/20 group-hover:text-[#dd8c00] transition-colors tracking-widest uppercase">{t("scroll", lang)}</span>
        </a>
      </div>

      <div
        aria-hidden="true"
        style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1, height: 1, background: "rgba(255,255,255,0.05)" }}
      />
    </section>
  )
}

// ── Showreel Section ──────────────────────────────────────────────────────────

function ShowreelSection() {
  const { lang } = useLang()
  const [playing, setPlaying] = useState(false)
  const { ref, visible } = useReveal(0.1)

  return (
    <section id="showreel" style={{ position: "relative", padding: "80px 0" }}>
      <div
        ref={ref}
        className={`reveal ${visible ? "visible" : ""}`}
        style={{ maxWidth: 1400, margin: "0 auto", padding: "0 clamp(20px,5vw,80px)" }}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <span className="section-line" />
            <span className="font-mono text-xs text-white/30 tracking-widest uppercase">Showreel</span>
          </div>
          <span className="font-mono text-xs text-white/20 tracking-widest">2025</span>
        </div>

        <div
          data-hover="true"
          style={{
            position: "relative", width: "100%", aspectRatio: "16/9",
            background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.07)",
            overflow: "hidden",
          }}
          onClick={() => setPlaying(true)}
        >
          <img
            src={showreelPreview}
            alt="Showreel preview"
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              filter: playing ? "brightness(0)" : "brightness(0.3) saturate(0.4)",
              transition: "filter 0.8s ease",
            }}
          />

          {!playing && (
            <>
              {/* Background SHOWREEL text — purely decorative */}
              <div
                aria-hidden="true"
                className="font-display text-center"
                style={{
                  position: "absolute", inset: 0, zIndex: 1,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "clamp(36px, 9vw, 110px)", fontWeight: 900, lineHeight: 0.9,
                  color: "rgba(255,255,255,0.04)", letterSpacing: "-0.02em", userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                SHOW<br />REEL
              </div>

              {/* Play button — truly centered */}
              <div
                style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)", zIndex: 3,
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 16,
                }}
              >
                <button
                  data-hover="true"
                  style={{ width: 80, height: 80, position: "relative" }}
                  aria-label="Play showreel"
                >
                  <div className="play-ring" />
                  <div
                    style={{
                      width: 80, height: 80, border: "1px solid rgba(221,140,0,0.7)",
                      borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                      background: "rgba(221,140,0,0.1)",
                    }}
                  >
                    <svg width="22" height="24" viewBox="0 0 20 22" fill="none">
                      <path d="M2 1.5L18 11L2 20.5V1.5Z" fill="#dd8c00" />
                    </svg>
                  </div>
                </button>
                <p className="font-mono text-xs text-white/30 tracking-widest uppercase">
                  {t("reelCta", lang)}
                </p>
              </div>

              <div className="absolute top-5 left-5 font-mono text-xs text-white/20 tracking-widest uppercase">HAMDAOUI BADR-EDDINE</div>
              <div className="absolute top-5 right-5 font-mono text-xs text-[#dd8c00]/40 tracking-widest uppercase">REC ●</div>
              <div className="absolute bottom-5 left-5 font-mono text-xs text-white/15 tracking-widest">00:00:00:00</div>
              <div className="absolute bottom-5 right-5 font-mono text-xs text-white/15 tracking-widest">4K · 25FPS</div>
            </>
          )}

          {playing && (
            <div style={{ position: "absolute", inset: 0, zIndex: 3 }}>
              <iframe
                src={`https://player.vimeo.com/video/1046914991?autoplay=${window.innerWidth >= 1024 ? 1 : 0}&muted=1&loop=0&title=0&byline=0&portrait=0&color=dd8c00`}
                title="Showreel 2025"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
              />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-5">
          <p className="font-mono text-xs text-white/20 tracking-widest">{t("tagline", lang)}</p>
          <span className="font-mono text-xs text-white/10 tracking-widest">Kairouan · Tunisia</span>
        </div>
      </div>
    </section>
  )
}

// ── About Section ─────────────────────────────────────────────────────────────

function AboutSection() {
  const { lang } = useLang()
  const { ref, visible } = useReveal(0.1)

  const headline = ta("aboutHeadline", lang)

  return (
    <section style={{ padding: "120px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div
        ref={ref}
        style={{ maxWidth: 1400, margin: "0 auto", padding: "0 clamp(20px,5vw,80px)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Photo */}
          <div className={`reveal ${visible ? "visible" : ""} reveal-delay-1`}>
            <div
              className="photo-frame relative"
              style={{ aspectRatio: "3/4", overflow: "hidden", maxWidth: 460 }}
            >
              <img
                src={photoImg}
                alt="Hamdaoui Badr-Eddine"
                className="about-portrait"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", filter: "grayscale(15%) contrast(1.05)" }}
              />
              <div
                style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: "30%",
                  background: "linear-gradient(to top, rgba(221,140,0,0.04), transparent)",
                }}
              />
            </div>
            <p className="font-mono text-xs text-white/20 tracking-widest mt-4">Rue Farhat Hached · Bouhajla · Kairouan</p>

            {/* Interests */}
            <div style={{ marginTop: 28, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20 }}>
              <p className="font-mono text-xs text-white/25 tracking-widest uppercase mb-4">{t("interests", lang)}</p>
              <div className="flex flex-wrap gap-2">
                {INTERESTS[lang].map((interest) => (
                  <span
                    key={interest}
                    className="font-mono text-xs tracking-widest"
                    style={{ border: "1px solid rgba(255,255,255,0.08)", padding: "4px 12px", color: "rgba(255,255,255,0.3)" }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div style={{ marginTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20 }}>
              <p className="font-mono text-xs text-white/25 tracking-widest uppercase mb-5">{t("languages", lang)}</p>
              <div className="flex flex-col gap-4">
                {LANGUAGES_DATA.map((l) => (
                  <div key={l.name.fr}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs text-white/40 tracking-widest">{l.name[lang]}</span>
                      <span className="font-mono text-xs text-[#dd8c00]/60">{l.pct}%</span>
                    </div>
                    <div style={{ height: 1, background: "rgba(255,255,255,0.06)", position: "relative" }}>
                      <div
                        style={{
                          position: "absolute", top: 0, left: 0, height: "100%",
                          width: `${l.pct}%`, background: "#dd8c00",
                          transition: visible ? "width 1.2s cubic-bezier(0.16,1,0.3,1)" : "none",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-start">
            <div className={`reveal ${visible ? "visible" : ""} flex items-center gap-4 mb-8`}>
              <span className="section-line" />
              <span className="font-mono text-xs text-white/30 tracking-widest uppercase">{t("aboutLabel", lang)}</span>
            </div>
            <div className={`reveal ${visible ? "visible" : ""} reveal-delay-2`}>
              <div
                className="font-display"
                style={{ fontSize: "clamp(11px, 1.1vw, 14px)", color: "#dd8c00", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}
              >
                {t("aboutNumber", lang)}
              </div>
              <h2
                className="font-display"
                style={{ fontSize: "clamp(40px, 5.5vw, 76px)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.02em", marginBottom: 32 }}
              >
                {headline[0]}<br />
                <span style={{ color: "rgba(240,240,240,0.3)" }}>{headline[1]}</span>
              </h2>
            </div>

            <div className={`reveal ${visible ? "visible" : ""} reveal-delay-3`}>
              <p style={{ color: "rgba(240,240,240,0.55)", lineHeight: 1.8, fontSize: 15, marginBottom: 20, fontWeight: 300 }}>
                {t("aboutP1", lang)}
              </p>
              <p style={{ color: "rgba(240,240,240,0.38)", lineHeight: 1.8, fontSize: 14, fontWeight: 300 }}>
                {t("aboutP2", lang)}
              </p>
            </div>

            <div className={`reveal ${visible ? "visible" : ""} reveal-delay-4 grid grid-cols-3 gap-6 mt-12`}>
              {([
                { target: 10, suffix: "+", label: t("statYears", lang) },
                { target: 2019, suffix: "", label: t("statCannes", lang), startFrom: 2015, duration: 1400 },
                { target: 25, suffix: "+", label: t("statTools", lang) },
              ] as { target: number; suffix: string; label: string; startFrom?: number; duration?: number }[]).map((stat) => (
                <div key={stat.label} style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20 }}>
                  <div className="font-display" style={{ fontSize: "clamp(30px, 3.5vw, 48px)", fontWeight: 800, color: "#dd8c00", lineHeight: 1 }}>
                    <CountUp target={stat.target} suffix={stat.suffix} startFrom={stat.startFrom} duration={stat.duration ?? 2000} />
                  </div>
                  <div className="font-mono text-xs text-white/25 tracking-widest mt-2 uppercase leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Work Card ─────────────────────────────────────────────────────────────────

// ── CountUp ───────────────────────────────────────────────────────────────────

function CountUp({ target, prefix = "", suffix = "", duration = 2000, startFrom }: {
  target: number; prefix?: string; suffix?: string; duration?: number; startFrom?: number
}) {
  const from = startFrom ?? 0
  const [count, setCount] = useState(from)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); obs.disconnect() }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const startTime = Date.now()
    let raf: number
    function tick() {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(from + eased * (target - from)))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, target, from, duration])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

// ── WorkItem type ─────────────────────────────────────────────────────────────

type WorkItem = {
  title: string
  sub: { fr: string; en: string }
  tags: string[]
  img: string
  size: string
  aspect?: "landscape" | "portrait"
  link?: string | null
  video?: boolean
}

function WorkCard({ item, lang }: { item: WorkItem; lang: Lang }) {
  const hasRealLink = !!(item.link && item.link !== "coming" && item.link !== "ddddddd")
  const isComingLink = item.link === "coming" || item.link === "ddddddd"

  const aspectRatio = item.aspect === "portrait"
    ? "3/4"
    : item.size === "large" ? "16/9" : "4/5"

  const colSpan = item.size === "large" ? "span 2" : "span 1"

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType === "touch") return
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    card.style.setProperty("--card-x", `${x * 100}%`)
    card.style.setProperty("--card-y", `${y * 100}%`)
    card.style.setProperty("--card-rotate-x", `${(0.5 - y) * 2.4}deg`)
    card.style.setProperty("--card-rotate-y", `${(x - 0.5) * 2.4}deg`)
  }

  function resetCard(e: React.PointerEvent<HTMLDivElement>) {
    const card = e.currentTarget
    card.style.setProperty("--card-rotate-x", "0deg")
    card.style.setProperty("--card-rotate-y", "0deg")
  }

  const inner = (
    <div
      className="work-card"
      data-hover="true"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetCard}
      style={{ position: "relative", overflow: "hidden", height: "100%" }}
    >
      <img
        src={item.img}
        alt={item.title}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", aspectRatio }}
      />

      {item.video && (
        <div
          style={{
            position: "absolute", top: 14, left: 14, zIndex: 3,
            display: "flex", alignItems: "center", gap: 6,
            background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)",
            border: "1px solid rgba(221,140,0,0.4)", padding: "4px 10px",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#dd8c00", display: "inline-block", animation: "scrollPulse 1.8s ease-in-out infinite" }} />
          <span className="font-mono text-[10px] text-white/60 tracking-widest uppercase">AI Video</span>
        </div>
      )}

      {hasRealLink && (
        <div style={{ position: "absolute", top: 14, right: 14, zIndex: 3, background: "#dd8c00", padding: "4px 10px" }}>
          <span className="font-mono text-[10px] text-black tracking-widest uppercase font-bold">View ↗</span>
        </div>
      )}
      {isComingLink && (
        <div style={{ position: "absolute", top: 14, right: 14, zIndex: 3, border: "1px solid rgba(255,255,255,0.15)", padding: "4px 10px" }}>
          <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase">Link Soon</span>
        </div>
      )}

      <div className="work-card-overlay">
        <div>
          <p className="font-mono text-xs text-white/35 tracking-widest uppercase mb-2">{item.sub[lang]}</p>
          <h3
            className="font-display"
            style={{ fontSize: "clamp(18px, 2.2vw, 26px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.01em" }}
          >
            {item.title}
          </h3>
        </div>
        <div className="work-card-details flex flex-wrap gap-2 mt-3">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs tracking-widest"
              style={{ color: "#dd8c00", border: "1px solid rgba(221,140,0,0.3)", padding: "3px 9px" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="work-card-accent" />
    </div>
  )

  if (hasRealLink) {
    return (
      <a
        href={item.link!}
        target="_blank"
        rel="noopener noreferrer"
        style={{ gridColumn: colSpan, display: "block", textDecoration: "none" }}
      >
        {inner}
      </a>
    )
  }

  return <div style={{ gridColumn: colSpan }}>{inner}</div>
}
// ── Work Section ──────────────────────────────────────────────────────────────

function WorkSection({
  id, number, titleKey, descKey, items,
}: {
  id: string
  number: string
  titleKey: keyof typeof T
  descKey: keyof typeof T
  items: typeof EDITING_WORK
}) {
  const { lang } = useLang()
  const { ref, visible } = useReveal(0.08)

  return (
    <section id={id} style={{ padding: "120px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div
        ref={ref}
        style={{ maxWidth: 1400, margin: "0 auto", padding: "0 clamp(20px,5vw,80px)" }}
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className={`reveal ${visible ? "visible" : ""}`}>
            <div className="flex items-center gap-4 mb-4">
              <span className="section-line" />
              <span className="font-mono text-xs text-white/30 tracking-widest uppercase">{t("selectedWork", lang)}</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="font-display" style={{ fontSize: 13, color: "#dd8c00", letterSpacing: "0.2em" }}>{number}</span>
              <h2
                className="font-display section-title-lg"
                style={{ fontSize: "clamp(52px, 9vw, 120px)", fontWeight: 900, lineHeight: 0.88, letterSpacing: "-0.03em" }}
              >
                {t(titleKey, lang)}
              </h2>
            </div>
          </div>
          <p
            className={`reveal ${visible ? "visible" : ""} reveal-delay-2`}
            style={{ maxWidth: 320, color: "rgba(240,240,240,0.4)", lineHeight: 1.75, fontSize: 14, fontWeight: 300 }}
          >
            {t(descKey, lang)}
          </p>
        </div>

        <div
          className={`reveal ${visible ? "visible" : ""} reveal-delay-3`}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}
        >
          {items.map((item) => (
            <WorkCard key={item.title} item={item} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Expertise Section ─────────────────────────────────────────────────────────

function ExpertiseSection() {
  const { lang } = useLang()
  const { ref, visible } = useReveal(0.1)

  return (
    <section id="expertise" style={{ padding: "120px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div
        ref={ref}
        style={{ maxWidth: 1400, margin: "0 auto", padding: "0 clamp(20px,5vw,80px)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 mb-16">
          <div>
            <div className={`reveal ${visible ? "visible" : ""} flex items-center gap-4 mb-8`}>
              <span className="section-line" />
              <span className="font-mono text-xs text-white/30 tracking-widest uppercase">{t("expertiseLabel", lang)}</span>
            </div>
            {ta("expertiseHeadline", lang).map((line, i) => (
              <h2
                key={line}
                className={`reveal ${visible ? "visible" : ""} reveal-delay-2 font-display`}
                style={{
                  fontSize: "clamp(44px, 7vw, 96px)",
                  fontWeight: 900,
                  lineHeight: 0.88,
                  letterSpacing: "-0.03em",
                  color: i === 0 ? "#f0f0f0" : "rgba(240,240,240,0.2)",
                }}
              >
                {line}
              </h2>
            ))}
          </div>
          <p
            className={`reveal ${visible ? "visible" : ""} reveal-delay-3 self-end`}
            style={{ maxWidth: 420, color: "rgba(240,240,240,0.42)", lineHeight: 1.8, fontSize: 15, fontWeight: 300 }}
          >
            {t("expertiseIntro", lang)}
          </p>
        </div>

        <div className={`reveal ${visible ? "visible" : ""} reveal-delay-4 grid grid-cols-1 md:grid-cols-2`}>
          {EXPERTISE.map((area) => (
            <article
              key={area.number}
              className="expertise-card"
              style={{ padding: "32px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex gap-6 md:gap-10">
                <span className="font-mono text-xs text-[#dd8c00] tracking-widest pt-2">{area.number}</span>
                <div>
                  <h3
                    className="font-display uppercase"
                    style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, lineHeight: 1, marginBottom: 20 }}
                  >
                    {area.title[lang]}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {area.items[lang].map((item) => (
                      <li key={item} className="font-mono text-xs text-white/35 tracking-wide flex items-center gap-3">
                        <span style={{ width: 14, height: 1, background: "rgba(221,140,0,0.5)", flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Skills Marquee ────────────────────────────────────────────────────────────

function SkillsMarquee() {
  const { lang } = useLang()
  const { ref, visible } = useReveal(0.1)
  const doubled1 = [...TOOLS_ROW1, ...TOOLS_ROW1]
  const doubled2 = [...TOOLS_ROW2, ...TOOLS_ROW2]

  return (
    <section style={{ padding: "100px 0", borderTop: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
      <div
        ref={ref}
        style={{ maxWidth: 1400, margin: "0 auto", padding: "0 clamp(20px,5vw,80px)", marginBottom: 40 }}
      >
        <div className={`reveal ${visible ? "visible" : ""} flex items-center gap-4 mb-12`}>
          <span className="section-line" />
          <span className="font-mono text-xs text-white/30 tracking-widest uppercase">{t("toolsLabel", lang)}</span>
        </div>
        <div className={`reveal ${visible ? "visible" : ""} reveal-delay-2`}>
          {ta("toolsHeadline", lang).map((line, i) => (
            <h2
              key={i}
              className="font-display"
              style={{
                fontSize: "clamp(40px, 7vw, 96px)", fontWeight: 900,
                lineHeight: 0.9, letterSpacing: "-0.03em",
                color: i === 0 ? "#f0f0f0" : "rgba(240,240,240,0.18)",
                marginBottom: i === 0 ? 0 : 60,
              }}
            >
              {line}
            </h2>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "18px 0", marginBottom: 2, overflow: "hidden" }}>
        <div className="marquee-track flex gap-8 whitespace-nowrap" style={{ width: "max-content" }}>
          {doubled1.map((tool, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="font-display uppercase tracking-wider text-white/55 hover:text-[#dd8c00] transition-colors" style={{ fontSize: "clamp(14px, 1.8vw, 22px)", fontWeight: 700 }}>
                {tool}
              </span>
              <span style={{ color: "#dd8c00", fontSize: 8 }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "18px 0", overflow: "hidden" }}>
        <div className="marquee-track-reverse flex gap-8 whitespace-nowrap" style={{ width: "max-content" }}>
          {doubled2.map((tool, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="font-display uppercase tracking-wider text-white/22 hover:text-white/50 transition-colors" style={{ fontSize: "clamp(14px, 1.8vw, 22px)", fontWeight: 600 }}>
                {tool}
              </span>
              <span style={{ color: "rgba(221,140,0,0.25)", fontSize: 8 }}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Experience Section ────────────────────────────────────────────────────────

function ExperienceSection() {
  const { lang } = useLang()
  const { ref, visible } = useReveal(0.1)

  return (
    <section style={{ padding: "120px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div
        ref={ref}
        style={{ maxWidth: 1400, margin: "0 auto", padding: "0 clamp(20px,5vw,80px)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <div className={`reveal ${visible ? "visible" : ""} flex items-center gap-4 mb-8`}>
              <span className="section-line" />
              <span className="font-mono text-xs text-white/30 tracking-widest uppercase">{t("expLabel", lang)}</span>
            </div>
            <div>
              {ta("expHeadline", lang).map((line, i) => (
                <h2
                  key={i}
                  className={`reveal ${visible ? "visible" : ""} reveal-delay-2 font-display`}
                  style={{
                    fontSize: "clamp(42px, 6vw, 88px)", fontWeight: 900,
                    lineHeight: 0.9, letterSpacing: "-0.03em",
                    color: i === 0 ? "#f0f0f0" : "rgba(240,240,240,0.22)",
                  }}
                >
                  {line}
                </h2>
              ))}
            </div>
          </div>

          <div className={`reveal ${visible ? "visible" : ""} reveal-delay-3`}>
            {EXPERIENCE.map((item, i) => (
              <div
                key={i}
                className="exp-item"
                style={{
                  padding: "20px 0",
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: 12,
                  background: item.current ? "rgba(221,140,0,0.04)" : undefined,
                }}
              >
                <span className="font-mono text-xs text-[#dd8c00] tracking-widest pt-1">{item.year}</span>
                <div>
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <p style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.45 }}>{item.role[lang]}</p>
                    {item.current && (
                      <span
                        className="font-mono text-[9px] tracking-widest uppercase"
                        style={{ background: "#dd8c00", color: "#000", padding: "2px 7px", fontWeight: 600, flexShrink: 0 }}
                      >
                        {lang === "fr" ? "Actuel" : "Current"}
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-xs text-white/28 tracking-widest">{item.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Contact Section ───────────────────────────────────────────────────────────

function ContactSection() {
  const { lang } = useLang()
  const { ref, visible } = useReveal(0.1)
  const headline = ta("contactHeadline", lang)

  return (
    <section
      id="contact"
      style={{ padding: "140px 0 100px", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", overflow: "hidden" }}
    >
      <div
        aria-hidden="true"
        className="font-display hidden md:block"
        style={{
          position: "absolute", bottom: -30, left: "50%",
          transform: "translateX(-50%)",
          fontSize: "clamp(80px, 14vw, 200px)", fontWeight: 900,
          letterSpacing: "-0.04em", color: "rgba(255,255,255,0.012)",
          whiteSpace: "nowrap", userSelect: "none", pointerEvents: "none",
        }}
      >
        CONTACT
      </div>

      <div
        ref={ref}
        style={{ maxWidth: 1400, margin: "0 auto", padding: "0 clamp(20px,5vw,80px)", position: "relative", zIndex: 1 }}
      >
        <div className={`reveal ${visible ? "visible" : ""} flex items-center gap-4 mb-10`}>
          <span className="section-line" />
          <span className="font-mono text-xs text-white/30 tracking-widest uppercase">{t("contactLabel", lang)}</span>
        </div>

        <div className={`reveal ${visible ? "visible" : ""} reveal-delay-2`}>
          {headline.map((line, i) => (
            <h2
              key={i}
              className="font-display"
              style={{
                fontSize: "clamp(46px, 9vw, 128px)", fontWeight: 900,
                lineHeight: 0.9, letterSpacing: "-0.03em",
                color: i === 0 ? "#f0f0f0" : i === 1 ? "#dd8c00" : "rgba(240,240,240,0.18)",
                marginBottom: i === headline.length - 1 ? 56 : 0,
              }}
            >
              {line}
            </h2>
          ))}
        </div>

        <div className={`reveal ${visible ? "visible" : ""} reveal-delay-3 grid grid-cols-1 md:grid-cols-3 gap-8`}>
          <a
            href="mailto:badreddinehamdaoui95@gmail.com"
            data-hover="true"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "block" }}
            className="group"
          >
            <p className="font-mono text-xs text-white/25 tracking-widest uppercase mb-3">{t("emailLabel", lang)}</p>
            <p style={{ fontSize: 14, color: "rgba(240,240,240,0.6)" }} className="group-hover:text-[#dd8c00] transition-colors duration-300 break-all">
              badreddinehamdaoui95@gmail.com
            </p>
          </a>

          <a
            href="tel:+21652339464"
            data-hover="true"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "block" }}
            className="group"
          >
            <p className="font-mono text-xs text-white/25 tracking-widest uppercase mb-3">{t("phoneLabel", lang)}</p>
            <p style={{ fontSize: 15, color: "rgba(240,240,240,0.7)" }} className="group-hover:text-[#dd8c00] transition-colors duration-300">
              (+216) 52 339 464
            </p>
          </a>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24 }}>
            <p className="font-mono text-xs text-white/25 tracking-widest uppercase mb-3">{t("addressLabel", lang)}</p>
            <p style={{ fontSize: 14, color: "rgba(240,240,240,0.45)", fontWeight: 300, lineHeight: 1.6 }}>
              Rue Farhat Hached, Bouhajla<br />Kairouan, Tunisia
            </p>
          </div>
        </div>

        <div className={`reveal ${visible ? "visible" : ""} reveal-delay-4 mt-16`}>
          <a
            href="mailto:badreddinehamdaoui95@gmail.com"
            data-hover="true"
            className="contact-cta inline-flex items-center gap-4"
            style={{
              border: "1px solid rgba(221,140,0,0.4)",
              padding: "20px 44px",
              transition: "all 0.4s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = "#dd8c00"
              el.style.color = "#000"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = "transparent"
              el.style.color = ""
            }}
          >
            <span className="font-display text-2xl font-bold uppercase tracking-wider">{t("hireCta", lang)}</span>
            <span style={{ fontSize: 20 }}>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  const { lang } = useLang()
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "40px 0" }}>
      <div
        style={{ maxWidth: 1400, margin: "0 auto", padding: "0 clamp(20px,5vw,80px)" }}
        className="flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <img src={logoImg} alt="Hamdaoui Badr-Eddine" style={{ height: 22, filter: "invert(1)", opacity: 0.25 }} />
        <p className="font-mono text-xs text-white/15 tracking-widest">
          © 2025 HAMDAOUI BADR-EDDINE — {t("footer", lang)}
        </p>
        <p className="font-mono text-xs text-white/10 tracking-widest uppercase">
          {lang === "fr" ? "Conçu pour impressionner" : "Designed to impress"}
        </p>
      </div>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [lang, setLang] = useState<Lang>(detectLang)

  return (
    <LangCtx.Provider value={{ lang, setLang }}>
      <div style={{ background: "#060606", minHeight: "100vh", color: "#f0f0f0" }}>
        <div className="grain-overlay" aria-hidden="true" />
        <PointerSpotlight />
        <CustomCursor />
        <ScrollProgress />
        <NavBar />
        <LangPill />
        <SocialDock />

        <main>
          <HeroSection />
          <ShowreelSection />
          <AboutSection />
          <WorkSection
            id="editing"
            number="02 —"
            titleKey="sectionEditing"
            descKey="sectionEditingDesc"
            items={EDITING_WORK}
          />
          <WorkSection
            id="threed"
            number="03 —"
            titleKey="section3D"
            descKey="section3DDesc"
            items={THREE_D_WORK}
          />
          <WorkSection
            id="photo"
            number="04 —"
            titleKey="sectionPhoto"
            descKey="sectionPhotoDesc"
            items={PHOTO_WORK}
          />
          <WorkSection
            id="ai"
            number="05 —"
            titleKey="sectionAI"
            descKey="sectionAIDesc"
            items={AI_WORK}
          />
          <ExpertiseSection />
          <SkillsMarquee />
          <ExperienceSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </LangCtx.Provider>
  )
}
