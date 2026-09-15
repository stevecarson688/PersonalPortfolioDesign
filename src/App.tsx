import { useState, useEffect, useRef } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function IconX() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
function IconDownload() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 11.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 9 9l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 24 18.92z" />
    </svg>
  );
}
function IconMapPin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}
function IconSend() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
    </svg>
  );
}
function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.099-.473-.148-.673.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.613.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.372-.273.297-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.095 3.195 5.077 4.483.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414z" /><path d="M12 2a10 10 0 0 1 7.743 16.33L21 21l-2.697-1.24A10 10 0 1 1 12 2z" />
    </svg>
  );
}
function IconGitHub() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Expériences", href: "#experience" },
  { label: "Compétences", href: "#skills" },
  { label: "Formation", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "4+", label: "Années d'exp." },
  { value: "20+", label: "Projets livrés" },
  { value: "5+", label: "Clients ERP" },
  { value: "3", label: "Pays touchés" },
];

const experiences = [
  {
    company: "Kaeyros Analytics",
    role: "Delivery Manager / Intégrateur Odoo & n8n",
    period: "Mars 2023 – Présent",
    location: "Yaoundé, Cameroun",
    current: true,
    bullets: [
      "Pilotage de la livraison de solutions ERP Odoo (CRM, facturation, inventaire) pour des PME camerounaises",
      "Conception et déploiement de workflows d'automatisation avec n8n (intégration WhatsApp, formulaires, alertes)",
      "Coordination des équipes dev et gestion des plannings, KPIs et relations clients",
    ],
  },
  {
    company: "Seven Academy",
    role: "Stagiaire Développeur Full Stack",
    period: "2022 – 2023",
    location: "Yaoundé, Cameroun",
    current: false,
    bullets: [
      "Formation intensive React, Node.js, bases de données relationnelles",
      "Développement de projets fil rouge : e-commerce, tableau de bord admin",
    ],
  },
  {
    company: "Mega-ique",
    role: "Stagiaire Développeur Web",
    period: "2021 – 2022",
    location: "Yaoundé, Cameroun",
    current: false,
    bullets: [
      "Intégration de maquettes UI en HTML/CSS/JavaScript",
      "Participation à la mise en place d'une solution de ticketing interne",
    ],
  },
  {
    company: "NetAfrica",
    role: "Stagiaire Développeur",
    period: "2020 – 2021",
    location: "Yaoundé, Cameroun",
    current: false,
    bullets: [
      "Support technique et développement de fonctionnalités sur des applications web clients",
    ],
  },
  {
    company: "INGENIOTECH",
    role: "Stagiaire Génie Logiciel",
    period: "2019 – 2020",
    location: "Yaoundé, Cameroun",
    current: false,
    bullets: [
      "Découverte des cycles de développement logiciel et des outils de versioning (Git)",
    ],
  },
];

const skillGroups = [
  {
    category: "Automatisation & n8n",
    color: "#F5A623",
    icon: "⚡",
    skills: ["n8n", "Zapier", "Webhooks", "API REST", "WhatsApp Business API"],
  },
  {
    category: "ERP / Odoo",
    color: "#7B68EE",
    icon: "🔷",
    skills: ["Odoo 16/17", "Modules CRM", "Facturation", "Inventaire", "Personnalisation"],
  },
  {
    category: "Gestion de projet",
    color: "#4ECDC4",
    icon: "📋",
    skills: ["Delivery Management", "Scrum / Agile", "Notion", "Jira", "Reporting KPIs"],
  },
  {
    category: "Frontend",
    color: "#61DAFB",
    icon: "🖥",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    category: "Backend",
    color: "#68B984",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "Python", "FastAPI", "REST API"],
  },
  {
    category: "Mobile",
    color: "#FF6B6B",
    icon: "📱",
    skills: ["Flutter", "Dart", "React Native"],
  },
  {
    category: "Bases de données",
    color: "#FFA07A",
    icon: "🗄",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    category: "DevOps / Docker",
    color: "#A8D8EA",
    icon: "🐳",
    skills: ["Docker", "Docker Compose", "Git", "GitHub Actions", "Nginx"],
  },
];

const education = [
  {
    degree: "Certificat Développeur Web Full-Stack",
    school: "Seven Academy",
    period: "2022 – 2023",
    theme: "Applications web modernes avec React, Node.js et bases de données relationnelles",
    badge: "Certifié",
  },
  {
    degree: "BTS Génie Logiciel",
    school: "IUG2 / ISTA",
    period: "2019 – 2021",
    theme: "Mémoire : Conception et développement d'un système de gestion de bibliothèque universitaire",
    badge: "Diplômé",
  },
];

const languages = [
  { lang: "Français", level: 95, label: "Natif" },
  { lang: "Anglais", level: 65, label: "Intermédiaire B2" },
];

const interests = [
  "IA & automatisation", "Architecture logicielle", "Open Source", "Tech Afrique",
  "Entrepreneuriat", "Veille ERP", "Football", "Voyages",
];

// ─── Components ──────────────────────────────────────────────────────────────

function useSectionFade() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function SectionHeader({ label, title, accent }: { label: string; title: string; accent?: string }) {
  return (
    <div className="mb-12">
      <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--gold)", fontFamily: "JetBrains Mono, monospace" }}>
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
        {title}
        {accent && <span className="text-gold-gradient"> {accent}</span>}
      </h2>
      <div className="accent-line mt-4" />
    </div>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(6, 9, 26, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
            style={{ background: "var(--gold)", color: "var(--accent-foreground)", fontFamily: "Sora, sans-serif" }}
          >
            TZ
          </div>
          <span className="hidden sm:block font-semibold text-sm text-white/80 group-hover:text-white transition-colors" style={{ fontFamily: "Sora, sans-serif" }}>
            Tchao Ziwa
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: "var(--gold)", color: "var(--accent-foreground)" }}
          >
            <IconDownload />
            Télécharger CV
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white/70 hover:text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <IconX /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-4 space-y-3"
          style={{ background: "rgba(6, 9, 26, 0.97)", borderColor: "var(--navy-border)" }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-white/70 hover:text-white py-2 font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg font-semibold w-full justify-center mt-2 transition-all"
            style={{ background: "var(--gold)", color: "var(--accent-foreground)" }}
          >
            <IconDownload />
            Télécharger CV
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center grid-texture overflow-hidden"
      style={{ paddingTop: "96px" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,166,35,0.07) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-20 right-10 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(27,43,90,0.8) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
              style={{ background: "var(--gold-dim)", border: "1px solid rgba(245,166,35,0.25)", color: "var(--gold)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Disponible pour nouvelles opportunités
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4">
              Tchao Ziwa<br />
              <span className="text-gold-gradient">Bill Steve</span>
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Développeur Full Stack", "Delivery Manager", "Intégrateur Odoo & n8n"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.65)", maxWidth: "480px" }}>
              Je conçois et livre des solutions digitales sur mesure — ERP Odoo, automatisations n8n,
              apps web & mobile — pour accompagner les PME africaines dans leur transformation numérique.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ background: "var(--gold)", color: "var(--accent-foreground)" }}
              >
                Me contacter
                <IconArrow />
              </a>
              <a
                href="#experience"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-white/10"
                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                Voir mes projets
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Retrouvez-moi :</span>
              {[
                { icon: <IconLinkedIn />, href: "#", label: "LinkedIn" },
                { icon: <IconGitHub />, href: "#", label: "GitHub" },
                { icon: <IconWhatsApp />, href: "#", label: "WhatsApp" },
                { icon: <IconMail />, href: "mailto:tchaoziwa@gmail.com", label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,166,35,0.4)";
                    (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Avatar + stats */}
          <div className="flex flex-col items-center lg:items-end gap-8">
            {/* Avatar card */}
            <div className="relative">
              <div
                className="w-64 h-64 rounded-2xl overflow-hidden"
                style={{ border: "2px solid rgba(245,166,35,0.2)", boxShadow: "0 0 60px rgba(245,166,35,0.08)" }}
              >
                {/* Geometric avatar placeholder */}
                <div
                  className="w-full h-full flex items-center justify-center relative"
                  style={{ background: "linear-gradient(145deg, #0D1530, #1B2B5A)" }}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: "radial-gradient(circle at 30% 30%, rgba(245,166,35,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(27,43,90,0.8) 0%, transparent 50%)",
                    }}
                  />
                  <div className="relative text-center">
                    <div
                      className="w-28 h-28 rounded-full mx-auto mb-3 flex items-center justify-center text-4xl font-bold"
                      style={{ background: "linear-gradient(135deg, var(--gold), #FFD07A)", color: "#06091A", fontFamily: "Sora, sans-serif" }}
                    >
                      TZ
                    </div>
                    <p className="text-white/80 text-sm font-semibold">Tchao Ziwa B.S.</p>
                    <p className="text-white/40 text-xs mt-1">Yaoundé, Cameroun</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -right-4 px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5"
                style={{ background: "var(--card)", border: "1px solid rgba(245,166,35,0.3)", color: "var(--gold)" }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Delivery Manager
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl p-4 text-center"
                  style={{ background: "var(--card)", border: "1px solid var(--navy-border)" }}
                >
                  <p className="text-2xl font-bold text-gold-gradient" style={{ fontFamily: "Sora, sans-serif" }}>{s.value}</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location badge */}
        <div className="flex items-center gap-1.5 mt-12" style={{ color: "rgba(255,255,255,0.35)" }}>
          <IconMapPin />
          <span className="text-xs">Yaoundé, Cameroun · Disponible en remote</span>
        </div>
      </div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────

function About() {
  const ref = useSectionFade() as React.RefObject<HTMLElement>;
  return (
    <section id="about" ref={ref} className="section-fade py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader label="01 / À propos" title="Mon parcours," accent="en bref" />
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              <p>
                Développeur Web & Mobile Full Stack avec une spécialisation en intégration ERP Odoo et
                automatisation via n8n, je suis basé à Yaoundé (Cameroun) et j'interviens auprès de PME
                qui souhaitent gagner en efficacité opérationnelle grâce au digital.
              </p>
              <p>
                Depuis mars 2023, j'évolue chez <span style={{ color: "var(--gold)" }}>Kaeyros Analytics</span> en tant que Delivery Manager,
                où je pilote la livraison de projets ERP, coordonne les équipes techniques et accompagne
                les clients dans la prise en main de leurs outils.
              </p>
              <p>
                Titulaire d'un BTS Génie Logiciel et d'un certificat Full-Stack, je combine rigueur
                technique et sens du business pour livrer des solutions qui durent.
              </p>
            </div>
          </div>

          {/* Values / approach */}
          <div className="space-y-4">
            {[
              { title: "Solutions ERP & Odoo", desc: "Déploiement, paramétrage et formation sur mesure pour PME africaines.", icon: "🔷" },
              { title: "Automatisation intelligente", desc: "Workflows n8n qui connectent vos outils et éliminent les tâches répétitives.", icon: "⚡" },
              { title: "Delivery Management", desc: "De la conception à la livraison, je pilote les projets avec méthode et transparence.", icon: "📋" },
            ].map((v) => (
              <div
                key={v.title}
                className="card-hover rounded-xl p-5 flex gap-4"
                style={{ background: "var(--card)" }}
              >
                <span className="text-2xl mt-0.5">{v.icon}</span>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{v.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────

function Experience() {
  const ref = useSectionFade() as React.RefObject<HTMLElement>;
  return (
    <section id="experience" ref={ref} className="section-fade py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="02 / Expériences" title="Parcours" accent="professionnel" />

        <div className="relative">
          {/* Timeline line — desktop only */}
          <div
            className="hidden md:block absolute left-[140px] top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, var(--gold) 0%, rgba(245,166,35,0.1) 100%)" }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative flex flex-col md:flex-row gap-6">
                {/* Date — desktop */}
                <div className="hidden md:block w-[128px] flex-shrink-0 pt-5 text-right">
                  <p className="text-xs font-mono leading-tight" style={{ color: "var(--gold)", fontFamily: "JetBrains Mono, monospace" }}>
                    {exp.period.split(" – ")[0]}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                    {exp.period.split(" – ")[1] || ""}
                  </p>
                </div>

                {/* Dot */}
                <div className="hidden md:flex flex-col items-center pt-5 flex-shrink-0">
                  <div
                    className={`w-3 h-3 rounded-full border-2 flex-shrink-0 ${exp.current ? "timeline-dot-active" : ""}`}
                    style={{
                      background: exp.current ? "var(--gold)" : "var(--card)",
                      borderColor: exp.current ? "var(--gold)" : "rgba(255,255,255,0.2)",
                    }}
                  />
                </div>

                {/* Card */}
                <div
                  className="flex-1 card-hover rounded-xl p-6"
                  style={{ background: "var(--card)" }}
                >
                  {/* Mobile date */}
                  <p className="md:hidden text-xs font-mono mb-2" style={{ color: "var(--gold)", fontFamily: "JetBrains Mono, monospace" }}>
                    {exp.period}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-bold text-white text-base">{exp.role}</h3>
                      <p className="text-sm mt-0.5" style={{ color: "var(--gold)" }}>{exp.company}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:flex-shrink-0">
                      {exp.current && (
                        <span
                          className="text-xs px-2.5 py-1 rounded-full font-semibold"
                          style={{ background: "rgba(245,166,35,0.12)", color: "var(--gold)", border: "1px solid rgba(245,166,35,0.25)" }}
                        >
                          Actuel
                        </span>
                      )}
                      <span
                        className="text-xs px-2.5 py-1 rounded-full flex items-center gap-1"
                        style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)" }}
                      >
                        <IconMapPin />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--gold)" }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

function Skills() {
  const ref = useSectionFade() as React.RefObject<HTMLElement>;
  return (
    <section id="skills" ref={ref} className="section-fade py-24">
      <div
        className="py-1"
        style={{ background: "linear-gradient(180deg, transparent, rgba(27,43,90,0.15) 50%, transparent)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader label="03 / Compétences" title="Stack &" accent="expertise" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="card-hover rounded-xl p-5"
                style={{ background: "var(--card)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{group.icon}</span>
                  <h3 className="font-semibold text-xs text-white leading-tight">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 rounded-md font-medium"
                      style={{
                        background: `${group.color}12`,
                        color: group.color,
                        border: `1px solid ${group.color}25`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Education ────────────────────────────────────────────────────────────────

function Education() {
  const ref = useSectionFade() as React.RefObject<HTMLElement>;
  return (
    <section id="education" ref={ref} className="section-fade py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="04 / Formation" title="Parcours" accent="académique" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="card-hover rounded-xl p-6 relative overflow-hidden"
              style={{ background: "var(--card)" }}
            >
              {/* Decorative corner */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-[64px]"
                style={{ background: "linear-gradient(135deg, rgba(245,166,35,0.06), transparent)" }}
              />

              <span
                className="inline-block text-xs px-2.5 py-1 rounded-full font-semibold mb-4"
                style={{ background: "rgba(245,166,35,0.12)", color: "var(--gold)", border: "1px solid rgba(245,166,35,0.25)" }}
              >
                {edu.badge}
              </span>

              <h3 className="font-bold text-white text-base mb-1">{edu.degree}</h3>
              <p className="text-sm mb-1" style={{ color: "var(--gold)" }}>{edu.school}</p>
              <p className="text-xs mb-4 font-mono" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "JetBrains Mono, monospace" }}>
                {edu.period}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                {edu.theme}
              </p>
            </div>
          ))}
        </div>

        {/* Languages + Interests */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Languages */}
          <div
            className="rounded-xl p-6"
            style={{ background: "var(--card)", border: "1px solid var(--navy-border)" }}
          >
            <h3 className="font-semibold text-white text-sm mb-5">Langues</h3>
            <div className="space-y-4">
              {languages.map((l) => (
                <div key={l.lang}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-white/80 font-medium">{l.lang}</span>
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>{l.label}</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${l.level}%`,
                        background: "linear-gradient(90deg, var(--gold), #FFD07A)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div
            className="rounded-xl p-6"
            style={{ background: "var(--card)", border: "1px solid var(--navy-border)" }}
          >
            <h3 className="font-semibold text-white text-sm mb-5">Centres d'intérêt</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  const ref = useSectionFade() as React.RefObject<HTMLElement>;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "var(--foreground)",
    borderRadius: "8px",
    outline: "none",
    width: "100%",
    padding: "10px 14px",
    fontSize: "14px",
    fontFamily: "Manrope, sans-serif",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" ref={ref} className="section-fade py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="05 / Contact" title="Travaillons" accent="ensemble" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Vous avez un projet ERP, une idée d'automatisation ou un besoin de développement ?
              Je suis disponible pour discuter et vous proposer une solution adaptée.
            </p>

            <div className="space-y-4">
              {[
                { icon: <IconMail />, label: "Email", value: "tchaoziwa@gmail.com", href: "mailto:tchaoziwa@gmail.com" },
                { icon: <IconPhone />, label: "WhatsApp", value: "+237 6XX XXX XXX", href: "#" },
                { icon: <IconMapPin />, label: "Localisation", value: "Yaoundé, Cameroun", href: "#" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-200 hover:scale-[1.01]"
                  style={{ background: "var(--card)", border: "1px solid var(--navy-border)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,166,35,0.25)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--navy-border)"; }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--gold-dim)", color: "var(--gold)" }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{c.label}</p>
                    <p className="text-sm font-medium text-white">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: <IconLinkedIn />, label: "LinkedIn" },
                { icon: <IconGitHub />, label: "GitHub" },
                { icon: <IconWhatsApp />, label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,166,35,0.4)";
                    (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            className="rounded-2xl p-8"
            style={{ background: "var(--card)", border: "1px solid var(--navy-border)" }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-8 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                  style={{ background: "rgba(245,166,35,0.12)" }}
                >
                  ✓
                </div>
                <p className="font-semibold text-white">Message envoyé !</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Je vous répondrai dans les meilleurs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>Nom complet</label>
                  <input
                    type="text"
                    required
                    placeholder="Jean Dupont"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(245,166,35,0.4)"; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>Adresse email</label>
                  <input
                    type="email"
                    required
                    placeholder="jean@entreprise.cm"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(245,166,35,0.4)"; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Décrivez votre projet ou votre besoin..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(245,166,35,0.4)"; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{ background: "var(--gold)", color: "var(--accent-foreground)" }}
                >
                  <IconSend />
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      className="py-8 border-t"
      style={{ borderColor: "var(--navy-border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold"
            style={{ background: "var(--gold)", color: "var(--accent-foreground)", fontFamily: "Sora, sans-serif" }}
          >
            TZ
          </div>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} Tchao Ziwa Bill Steve. Tous droits réservés.
          </span>
        </div>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
          Yaoundé, Cameroun · Full Stack · Odoo · n8n
        </p>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
