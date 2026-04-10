const pillars = [
  'Behavior change',
  'Role-based training',
  'Phishing resilience',
  'Security culture',
  'Metrics and reporting'
];

const weeklyCards = [
  {
    title: 'Weekly scenarios',
    text: 'Real-world business context simulations designed for decisions under pressure.'
  },
  {
    title: 'Decision-based learning',
    text: 'Learners navigate branching choices to understand risk tradeoffs and consequences.'
  },
  {
    title: 'Behavioral outcomes',
    text: 'Each challenge maps to measurable shifts in reporting, escalation, and secure habits.'
  }
];

const metrics = [
  { label: 'Click rate', value: '4.8%', trend: '↓ 32% QoQ' },
  { label: 'Report rate', value: '71%', trend: '↑ 24% QoQ' },
  { label: 'Repeat clickers', value: '1.7%', trend: '↓ 43% QoQ' }
];

const dashboard = [
  { title: 'Training Completion', value: '96%', detail: 'Global completion across all functions' },
  { title: 'Phishing Resilience', value: 'A-', detail: 'Risk exposure trending down across regions' },
  { title: 'Culture Engagement', value: '84', detail: 'Security sentiment index, enterprise-wide' }
];

const timeline = [
  {
    phase: '30 Days',
    plan: 'Assess baseline maturity, stakeholder map, and risk-prioritized awareness gaps.'
  },
  {
    phase: '60 Days',
    plan: 'Launch role-based pilots, targeted phishing tracks, and outcome reporting cadence.'
  },
  {
    phase: '90 Days',
    plan: 'Scale high-performing interventions, align to business KPIs, and embed governance.'
  }
];

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-20 section-grid">
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <p className="text-xs uppercase tracking-[0.28em] text-steel/80 mb-3">{subtitle}</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function App() {
  return (
    <div>
      <header className="hero flex items-center">
        <div className="hero-content mx-auto max-w-6xl px-6 py-32 w-full">
          <p className="text-steel uppercase tracking-[0.3em] text-xs md:text-sm mb-6">Fitch Group Candidate Profile</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight max-w-4xl">
            Associate Director Security Awareness
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-steel max-w-2xl">
            Transformational Security Awareness Strategy
          </p>
          <a
            href="#philosophy"
            className="inline-block mt-12 px-7 py-3 rounded-full border border-steel/30 text-sm uppercase tracking-[0.16em] hover:border-neon/60 hover:text-neon transition"
          >
            Explore Strategy
          </a>
        </div>
      </header>

      <main>
        <Section id="philosophy" subtitle="Executive Philosophy" title="Security Leadership Vision">
          <blockquote className="glass-card rounded-2xl p-8 md:p-10 text-2xl md:text-3xl font-medium leading-relaxed">
            “Security awareness is not about training people — it's about transforming behavior.”
          </blockquote>
        </Section>

        <Section id="framework" subtitle="Transformational Security Framework" title="Five Integrated Pillars">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {pillars.map((item) => (
              <div key={item} className="glass-card rounded-xl p-6 min-h-32 flex items-end">
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="game-theory" subtitle="Weekly Game Theory" title="Security Is Not a Trivia Game">
          <div className="grid md:grid-cols-3 gap-5">
            {weeklyCards.map((card) => (
              <article key={card.title} className="glass-card rounded-xl p-7">
                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                <p className="text-steel leading-relaxed">{card.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="phishing" subtitle="Phishing Program" title="Operational Resilience Metrics">
          <div className="grid md:grid-cols-3 gap-5">
            {metrics.map((item) => (
              <div key={item.label} className="glass-card rounded-xl p-7">
                <p className="text-steel uppercase tracking-wider text-xs mb-4">{item.label}</p>
                <p className="text-4xl font-semibold mb-3">{item.value}</p>
                <p className="text-neon text-sm">{item.trend}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="dashboard" subtitle="Metrics Dashboard" title="Executive Performance Snapshot">
          <div className="grid md:grid-cols-3 gap-5">
            {dashboard.map((card) => (
              <div key={card.title} className="glass-card rounded-xl p-7">
                <h3 className="text-lg font-semibold mb-4">{card.title}</h3>
                <p className="text-4xl font-semibold mb-3">{card.value}</p>
                <p className="text-steel text-sm">{card.detail}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="plan" subtitle="30-60-90 Day Plan" title="Execution Timeline">
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={item.phase} className="glass-card rounded-xl p-6 flex gap-5 items-start">
                <div className="h-9 w-9 rounded-full border border-neon/40 text-neon grid place-items-center text-sm font-semibold">
                  {index + 1}
                </div>
                <div>
                  <p className="text-lg font-semibold mb-2">{item.phase}</p>
                  <p className="text-steel leading-relaxed">{item.plan}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="glass-card rounded-2xl p-10 md:p-14 text-center">
              <p className="text-xs uppercase tracking-[0.28em] text-steel mb-5">Call to Action</p>
              <h2 className="text-3xl md:text-5xl font-semibold mb-5">Day One Security Awareness Leadership</h2>
              <p className="text-steel max-w-2xl mx-auto">
                Ready to establish a measurable, behavior-focused security awareness program aligned to global financial priorities.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
