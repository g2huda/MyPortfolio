import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  PlayCircle,
  Award,
  Code2,
  Gamepad2,
  Smartphone,
  Box,
} from "lucide-react";

// One-page, cinematic portfolio.
// Tailwind is assumed to be available in the environment.

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: "easeOut" },
  }),
};

const projects = [
  {
    title: "Weirdwood Manor Vol. 2 – Rise of the Therimancer",
    subtitle: "Interactive Narrative Game",
    blurb:
      "An award-winning interactive storytelling experience combining branching narrative, gameplay logic, and animation-driven systems.",
    contributions: [
      "Implemented gameplay systems supporting branching narrative and player choice",
      "Built animation and state-driven logic to support narrative flow",
      "Collaborated with writers, designers, artists, producers, and QA to ship stable features",
      "Delivered production-ready systems under tight schedules and real-world constraints",
    ],
    tech: ["Unity", "C#", "Animation Systems", "Narrative Tooling"],
    media: {
      type: "video",
      // Vimeo player embed URL is already provided by you
      src: "https://player.vimeo.com/video/830586957",
      title: "Weirdwood Manor Vol. 2 – Video",
    },
    links: [
      {
        label: "Watch",
        href: "https://player.vimeo.com/video/830586957",
        icon: PlayCircle,
      },
    ],
  },
  {
    title: "PCH+ (Publishers Clearing House)",
    subtitle: "Live Mobile Consumer App",
    blurb:
      "A large-scale consumer mobile app featuring multiple games and live content updates. Focused on onboarding and player experience at scale.",
    contributions: [
      "Designed and implemented onboarding flows and tutorial systems",
      "Improved first-time user experience and player engagement",
      "Shipped gameplay features to a live audience with production-quality standards",
      "Worked within CI/CD pipelines and live-ops constraints",
    ],
    tech: ["Unity", "C#", "Mobile Optimization", "CI/CD"],
    media: {
      type: "video",
      // Use embed form for clean iframes
      src: "https://www.youtube.com/embed/xnsjU508yt0",
      title: "PCH+ – Video",
    },
    links: [
      {
        label: "Watch",
        href: "https://youtu.be/xnsjU508yt0",
        icon: PlayCircle,
      },
    ],
  },
  {
    title: "Unreal Interactive Room",
    subtitle: "Large-Scale Immersive Installation",
    blurb:
      "A real-time Unreal Engine interactive room integrating physical space, projection, and player interaction.",
    contributions: [
      "Developed Unreal Engine gameplay and interaction systems",
      "Integrated real-world inputs with in-engine logic",
      "Solved spatial mapping / coordinate transform challenges for physical environments",
      "Partnered with technical artists and hardware teams for reliable on-site operation",
    ],
    tech: ["Unreal Engine", "C++", "Blueprints", "Real-time Systems"],
    media: {
      type: "hostedVideo",
      src: "/videos/SecretLocationInno.mp4",
      title: "XR Prototype",
    },
    links: [
      {
        label: "Project page",
        href: "http://secretlocation.com/production/waking-wonderland",
        icon: ExternalLink,
      },
    ],
  },
  {
    title: "VUSR – VR / Interactive Experience",
    subtitle: "Prototype-Driven Interactive Project",
    blurb:
      "A prototype-focused interactive experience exploring immersive user interaction and rapid iteration.",
    contributions: [
      "Implemented gameplay and interaction logic",
      "Rapid prototyping and iteration with clear feedback loops",
      "Focused on responsiveness and user experience",
    ],
    tech: ["Interactive Systems", "Rapid Prototyping"],
    media: {
      type: "youtube",
      src: "https://www.youtube.com/embed/_Zzz_Ulh43o",
      title: "VUSR – Video",
    },
    links: [
      {
        label: "Watch",
        href: "https://youtu.be/_Zzz_Ulh43o",
        icon: PlayCircle,
      },
    ],
  },
];

const skills = [
  {
    icon: Gamepad2,
    title: "Gameplay & Systems",
    items: [
      "Gameplay architecture and systems design",
      "State machines, animation-driven logic",
      "Clean API design and maintainable code",
    ],
  },
  {
    icon: Code2,
    title: "Engines",
    items: ["Unity (C#)", "Unreal Engine (C++ / Blueprints)"],
  },
  {
    icon: Smartphone,
    title: "Mobile & Live Products",
    items: [
      "Mobile performance optimization",
      "Live content pipelines",
      "Onboarding and UX-driven gameplay",
    ],
  },
  {
    icon: Box,
    title: "Technical Foundations",
    items: [
      "Solid 3D math (linear algebra, transforms, geometry)",
      "Debugging and performance profiling",
      "CI/CD familiarity (Buildkite, Jenkins, GitHub Actions)",
      "Unit/integration/UI testing familiarity; mocking/stubbing",
    ],
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-white/20 selection:text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-[-220px] right-[-140px] h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
      </div>

      <header className="relative">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
          <div className="flex items-center gap-3">
            <img src="/images/hoda.jpg" alt="Hoda Fouda" className="h-22 w-16 rounded-2xl object-cover ring-1 ring-white/15" />
            <div>
              <div className="text-sm font-semibold tracking-wide">Hoda Fouda</div>
              <div className="text-xs text-neutral-300">Game Developer</div>
            </div>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="#projects"
              className="rounded-full px-4 py-2 text-sm text-neutral-200 hover:bg-white/10"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="rounded-full px-4 py-2 text-sm text-neutral-200 hover:bg-white/10"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="rounded-full px-4 py-2 text-sm text-neutral-200 hover:bg-white/10"
            >
              Contact
            </a>
          </div>
        </nav>

        <div className="mx-auto max-w-6xl px-5 pb-10 pt-4 sm:pb-14 sm:pt-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-200 ring-1 ring-white/15">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Remote-friendly • Canada
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              I build gameplay systems that ship —
              <span className="text-neutral-300"> from live mobile to Unreal installations.</span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-neutral-200 sm:text-lg">
              Game-focused software engineer with <span className="font-semibold">7+ years</span> of experience shipping
              live mobile titles, narrative-driven games, and immersive interactive experiences. I specialize in robust
              architecture, clean APIs, and performance-minded implementation — while collaborating closely with design,
              art, production, and QA.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Unity (C#)",
                "Gameplay Systems",
                "UI Systems",
                "Mobile/XR Games",
                "Unreal (C++ / Blueprints)",
                "CI/CD",
                "3D Math",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-200 ring-1 ring-white/15"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-100"
              >
                View Featured Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
              >
                Get in touch
              </a>
            </div>
          </motion.div>

          {/* Award highlight */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            variants={fadeUp}
            className="mt-12 rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 sm:mt-14 sm:p-7"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-2xl bg-white/10 p-2 ring-1 ring-white/15">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Innovation Award</div>
                  <div className="text-sm text-neutral-200">
                    Recognized for innovation, collaboration, and creative problem-solving with a cross-disciplinary team.
                  </div>
                </div>
              </div>
              <a
                href="https://www.facebook.com/share/p/1JepjPHP5b/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15 hover:bg-white/15"
              >
                View team photo <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="relative">
        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-5 pb-14 pt-6 sm:pb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            variants={fadeUp}
            className="flex items-end justify-between gap-4"
          >
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Featured Projects</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-200 sm:text-base">
                A selection of shipped work across live mobile, narrative games, and Unreal interactive experiences.
              </p>
            </div>
          </motion.div>

          <div className="mt-7 grid gap-6">
            {projects.map((p, idx) => (
              <ProjectCard key={p.title} project={p} index={idx} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-6xl px-5 pb-14 sm:pb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Skills</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-200 sm:text-base">
              I prioritize maintainable systems, clear communication, and performance-minded implementation.
            </p>
          </motion.div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {skills.map((s, idx) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20%" }}
                variants={fadeUp}
                custom={idx}
                className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-2xl bg-white/10 p-2 ring-1 ring-white/15">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{s.title}</div>
                    <ul className="mt-2 space-y-1.5 text-sm text-neutral-200">
                      {s.items.map((it) => (
                        <li key={it} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="mx-auto max-w-6xl px-5 pb-14 sm:pb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            variants={fadeUp}
            className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8"
          >
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How I work</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Maintainable systems",
                  body: "I aim for clear ownership boundaries, clean APIs, and tests where they add real confidence — especially in live products.",
                },
                {
                  title: "Player-first implementation",
                  body: "Whether it’s onboarding, animation logic, or interaction systems, I optimize for feel, clarity, and performance.",
                },
                {
                  title: "Cross-team collaboration",
                  body: "I communicate early and often, turning creative goals into technical plans that designers, artists, and QA can align around.",
                },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="text-sm font-semibold">{c.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-neutral-200">{c.body}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-5 pb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            variants={fadeUp}
            className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8"
          >
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Contact</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-200 sm:text-base">
              Want to chat about a role, a project, or a collaboration? Reach me here:
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <ContactChip
                icon={Mail}
                label="Email"
                value="huda.fouda@gmail.com"
                href="mailto:huda.fouda@gmail.com"
              />
              <ContactChip
                icon={Linkedin}
                label="LinkedIn"
                value="linkedin.com/in/hoda-fouda-9b843111a"
                href="https://linkedin.com/in/hoda-fouda-9b843111a"
              />
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs font-semibold uppercase tracking-wide text-neutral-300">Availability</div>
                <div className="mt-1 text-sm text-neutral-200">Open to Unity, Unreal, Gameplay, UI, and Mobile roles.</div>
              </div>
            </div>
            <div className="mt-6 text-xs text-neutral-400">
              Tip: replace the email and GitHub fields above, and optionally add a “Resume PDF” link.
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-xs text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Hoda Fouda</div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/10">Unity</span>
            <span className="rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/10">Unreal</span>
            <span className="rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/10">Gameplay</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const { title, subtitle, blurb, contributions, tech, media, links } = project;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
      variants={fadeUp}
      custom={index}
      className="overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10"
    >
      <div className="grid gap-0 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <div className="text-xs font-semibold uppercase tracking-wide text-neutral-300">{subtitle}</div>
            <span className="h-1 w-1 rounded-full bg-neutral-500" />
            <div className="text-xs text-neutral-400">{tech.join(" • ")}</div>
          </div>

          <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-neutral-200 sm:text-base">{blurb}</p>

          <div className="mt-5">
            <div className="text-xs font-semibold uppercase tracking-wide text-neutral-300">
              What I did
            </div>
            <ul className="mt-2 space-y-2 text-sm text-neutral-200">
              {contributions.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {links?.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15 hover:bg-white/15"
              >
                {l.icon ? <l.icon className="h-4 w-4" /> : null}
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 lg:border-l lg:border-t-0">
          <MediaPanel media={media} />
        </div>
      </div>
    </motion.article>
  );
}

function MediaPanel({ media }) {
  if (!media) return null;

  if (media.type === "video") {
    return (
      <div className="aspect-video w-full bg-neutral-950">
        <iframe
          className="h-full w-full"
          src={media.src}
          title={media.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  if (media.type === "hostedVideo") {
    return (
      <div className="aspect-video w-full bg-neutral-950">
        <video className="h-full w-full" controls preload="metadata">
          <source src={media.src} type="video/mp4" />
          Sorry, your browser doesn’t support embedded videos.
        </video>
      </div>
    );
  }

  // Link-only fallback
  return (
    <div className="flex h-full min-h-[200px] flex-col items-start justify-center gap-3 bg-neutral-950 p-6">
      <div className="text-sm font-semibold">Media</div>
      <a
        href={media.src}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15 hover:bg-white/15"
      >
        Open link <ExternalLink className="h-4 w-4" />
      </a>
      <div className="text-xs text-neutral-400">
        If you have a video for this project later, we can embed it here.
      </div>
    </div>
  );
}

function ContactChip({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className="group rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/10"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-neutral-300">{label}</div>
          <div className="mt-1 text-sm text-neutral-100">{value}</div>
        </div>
        <div className="rounded-2xl bg-white/10 p-2 ring-1 ring-white/15 group-hover:bg-white/15">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </a>
  );
}
