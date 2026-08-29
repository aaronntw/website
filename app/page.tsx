const capabilities = ["Network security architecture", "Firewall & Zero Trust engineering", "Cloud and hybrid infrastructure", "Enterprise integration architecture", "Containerisation & self-hosting", "Technical risk assessment"];

const experience = [
  { period: "2023 — present", role: "Cyber Security & Network Engineering", detail: "Engineering and operating enterprise security across Palo Alto, FortiGate, Zscaler ZIA/ZPA, Azure and AWS environments." },
  { period: "2018 — 2023", role: "Integration Architecture & Digital Transformation", detail: "Designed integration landscapes, APIs, SSO and security assessments for complex enterprise platforms and transformation programmes." },
  { period: "2015 — 2018", role: "Enterprise Applications & Procurement Technology", detail: "Delivered SAP supply-chain and procurement solutions, user enablement and practical in-house applications." },
];

const projects = [
  { number: "01", title: "EV Efficiency Tracker", description: "A self-hosted application for tracking charging sessions, energy efficiency and ownership costs—with SQLite and PostgreSQL support, analytics and containerised deployment.", tags: ["Product engineering", "PostgreSQL", "Docker"] },
  { number: "02", title: "Enterprise Security Modernisation", description: "Firewall platform refreshes, cloud workload repatriation and Zero Trust connector migrations designed around continuity, control and operational clarity.", tags: ["Palo Alto", "Zscaler", "Hybrid cloud"] },
  { number: "03", title: "The Practical Home Lab", description: "A continuously evolving environment for learning by doing: segmented networking, private cloud, secure DNS, remote access, automation and observability.", tags: ["TrueNAS", "OPNsense", "Home Assistant"] },
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Aaron Ng, home">AN<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#work">Work</a><a href="#experience">Experience</a></nav>
      <a className="domain" href="#contact">aaronntw.com <span aria-hidden="true">↗</span></a>
    </header>

    <section className="hero" id="top">
      <div className="hero-kicker"><span className="status-dot" />Based in Malaysia · Building secure systems</div>
      <h1>I make complex<br />technology <em>work.</em></h1>
      <div className="hero-bottom">
        <p>I’m Aaron Ng—a network security engineer and technology builder working across cybersecurity, enterprise architecture and practical software.</p>
        <a className="round-link" href="#work" aria-label="View selected work">↓</a>
      </div>
      <div className="signal" aria-hidden="true"><span /><span /><span /><span /><span /></div>
    </section>

    <section className="intro section" id="about">
      <p className="eyebrow">01 / Profile</p>
      <div><h2>Security thinking.<br />Builder’s mindset.</h2>
        <p className="large-copy">For more than 11 years, I’ve worked where infrastructure, integration and security meet. I enjoy turning messy technical constraints into systems that are resilient, understandable and useful to the people running them.</p>
        <p className="muted-copy">My work spans enterprise network security, cloud controls, Zero Trust, system integration and data architecture. Outside work, I build software and run a hands-on home lab—because the best way to understand a system is to operate one.</p>
      </div>
    </section>

    <section className="capability-wrap">
      <div className="capability-head"><p className="eyebrow">What I work with</p><p>Strategy grounded in implementation.</p></div>
      <div className="capabilities">{capabilities.map((item, index) => <div className="capability" key={item}><span>0{index + 1}</span><p>{item}</p><i>—</i></div>)}</div>
    </section>

    <section className="projects section" id="work">
      <div className="projects-heading"><p className="eyebrow">02 / Selected work</p><h2>Things I’ve built<br />and helped transform.</h2></div>
      <div className="project-list">{projects.map((project) => <article className="project" key={project.title}>
        <span className="project-number">{project.number}</span><div><h3>{project.title}</h3><p>{project.description}</p>
        <ul aria-label={`${project.title} technologies`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
      </article>)}</div>
    </section>

    <section className="experience section" id="experience">
      <div><p className="eyebrow">03 / Experience</p><h2>From enterprise platforms to security engineering.</h2></div>
      <div className="timeline">{experience.map((item) => <article key={item.period}><p className="period">{item.period}</p><h3>{item.role}</h3><p>{item.detail}</p></article>)}</div>
    </section>

    <footer id="contact"><p className="eyebrow">The next system starts with a conversation.</p><h2>Let’s make it<br /><em>work.</em></h2>
      <div className="footer-row"><p>Aaron Ng · Network Security Engineer & Technology Builder</p><p>Malaysia · 2026</p></div>
    </footer>
  </main>;
}
