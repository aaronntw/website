const experience = [
  { period: "2023 — present", role: "Cyber Security & Network Engineering", detail: "Engineering and operating enterprise security across Palo Alto, FortiGate, Zscaler ZIA/ZPA, Azure and AWS environments." },
  { period: "2018 — 2023", role: "Integration Architecture & Digital Transformation", detail: "Designed integration landscapes, APIs, SSO and security assessments for complex enterprise platforms and transformation programmes." },
  { period: "2015 — 2018", role: "Enterprise Applications & Procurement Technology", detail: "Delivered SAP supply-chain and procurement solutions, user enablement and practical in-house applications." },
];

const projects = [
  { title: "EV Efficiency Tracker", problem: "Charging data, efficiency and ownership costs were fragmented across apps and spreadsheets.", built: "A self-hosted application for recording charging sessions and analysing efficiency and cost over time.", technologies: "TypeScript · PostgreSQL / SQLite · Docker", status: "In active personal use; deployed as a containerised service." },
  { title: "Enterprise Security Modernisation", problem: "Legacy security platforms and cloud connectivity needed to change without disrupting critical services.", built: "Firewall refreshes, workload repatriation plans and Zero Trust connector migrations with explicit operational controls.", technologies: "Palo Alto · FortiGate · Zscaler · Azure · AWS", status: "Delivered across production enterprise environments." },
  { title: "Infrastructure Automation", problem: "Repeated infrastructure tasks were slow to reproduce and difficult to audit.", built: "Small, purpose-built tools and repeatable deployment workflows for services I operate myself.", technologies: "Containers · Linux · Git · Shell · Networking", status: "Continuously refined through practical use in the homelab." },
];

const homelab = [
  ["Compute & storage", "Containerised services backed by resilient local storage, with deliberate separation between data and workloads."],
  ["Network", "Segmented networks, policy-based access, secure DNS and controlled ingress rather than a flat trusted LAN."],
  ["Remote access", "Private access to internal services using identity-aware and encrypted connectivity; no unnecessary public exposure."],
  ["Operations", "Backups, monitoring, service health checks and documented recovery steps for the systems that matter."],
  ["Automation", "Repeatable configuration and deployment where it reduces effort; manual control where it improves understanding."],
  ["Current focus", "Improving observability, reducing operational complexity and keeping the environment understandable."],
];

const navigation = ["About", "Experience", "Projects", "Homelab", "Contact"];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top">Aaron Ng</a>
        <nav aria-label="Main navigation">{navigation.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav>
      </header>

      <section className="hero" aria-labelledby="page-title">
        <p className="label">Based in Malaysia</p>
        <h1 id="page-title">Aaron Ng</h1>
        <p className="role">Data Architecture · Network Security · Infrastructure</p>
        <p className="summary">I work across enterprise architecture, network security and infrastructure. Outside work, I build and self-host tools that solve problems I actually have.</p>
      </section>

      <section className="section two-column" id="about">
        <div><p className="section-number">01</p><h2>About</h2></div>
        <div className="prose">
          <p>I am a technical practitioner with more than a decade of experience across enterprise applications, integration architecture and cyber security.</p>
          <p>My work sits between design and operations: understanding constraints, making sensible trade-offs and leaving systems clearer than I found them. I value boring technology used well, documentation that survives handover and controls that work in practice.</p>
          <dl className="facts">
            <div><dt>Focus</dt><dd>Architecture, security, infrastructure</dd></div>
            <div><dt>Approach</dt><dd>Practical, evidence-led, maintainable</dd></div>
            <div><dt>Also</dt><dd>Self-hosting, small tools, systems operations</dd></div>
          </dl>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-heading"><div><p className="section-number">02</p><h2>Experience</h2></div><p>Selected areas of work, in reverse chronological order.</p></div>
        <div className="timeline">{experience.map((item) => <article key={item.period}><p className="period">{item.period}</p><div><h3>{item.role}</h3><p>{item.detail}</p></div></article>)}</div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading"><div><p className="section-number">03</p><h2>Projects</h2></div><p>Technical work described by the problem and outcome.</p></div>
        <div className="project-list">{projects.map((project, index) => <article className="project" key={project.title}>
          <p className="index">0{index + 1}</p><div className="project-content"><h3>{project.title}</h3><dl>
            <div><dt>Problem</dt><dd>{project.problem}</dd></div><div><dt>What I built</dt><dd>{project.built}</dd></div>
            <div><dt>Technologies</dt><dd>{project.technologies}</dd></div><div><dt>Result / status</dt><dd>{project.status}</dd></div>
          </dl></div>
        </article>)}</div>
      </section>

      <section className="section" id="homelab">
        <div className="section-heading"><div><p className="section-number">04</p><h2>Homelab</h2></div><p>A small environment for learning, operating and testing ideas properly.</p></div>
        <div className="homelab-intro"><p>I run infrastructure at home to understand the full lifecycle of a system—not only how to deploy it, but how to secure, observe, maintain and recover it.</p><p>The goal is not novelty or scale. It is a dependable environment that provides useful services and a safe place to test changes before trusting them elsewhere.</p></div>
        <div className="lab-grid">{homelab.map(([title, detail]) => <article key={title}><h3>{title}</h3><p>{detail}</p></article>)}</div>
        <p className="stack"><span>Representative stack</span> TrueNAS · OPNsense · Docker · Home Assistant · Private DNS · VPN / Zero Trust access</p>
      </section>

      <footer id="contact">
        <div><p className="section-number">05</p><h2>Contact</h2></div>
        <div><p>If you want to discuss architecture, security, infrastructure or a practical technical problem, get in touch.</p><a href="mailto:ngtongwu@gmail.com">ngtongwu@gmail.com</a></div>
        <p className="footer-note">Aaron Ng · Malaysia · 2026</p>
      </footer>
    </main>
  );
}
