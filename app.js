const app = document.getElementById("app");

const pages = {
  home: `
<body>
<!-- HERO -->
<section class="hero-home">
  <div class="hero-home-content">
    <h1>Understanding Humans. Improving Performance.</h1>
    <p>
      Engaggio is a People Intelligence and AI technology company helping organisations
      and learning ecosystems understand engagement, wellbeing, and behaviour.
    </p>
    <div class="hero-home-actions">
      <button class="btn-primary">Request a Demo</button>
    </div>
  </div>
</section>

<!-- PLATFORMS -->
<section class="platforms-section">
  <div class="container">

    <div class="section-title">
      <h2>Our Platforms</h2>
      <p>
        Purpose-built intelligence platforms designed to understand humans across
        learning and work.
      </p>
    </div>

    <div class="platforms-grid">

      <!-- CADMUS -->
      <div class="platform-card">
        <h3>CADMUS</h3>
        <p>
          Student engagement and wellbeing intelligence beyond academics —
          enabling early intervention and responsible decision-making.
        </p>
        <a href="#" class="platform-link">Explore CADMUS →</a>
      </div>

      <!-- DECODE -->
      <div class="platform-card">
        <h3>DECODE</h3>
        <p>
          Employee engagement and sentiment intelligence that helps leaders
          understand culture, motivation, and performance drivers.
        </p>
        <a href="#" class="platform-link">Explore DECODE →</a>
      </div>

    </div>
  </div>
</section>

<!-- WHAT YOU CAN ACHIEVE -->

<section class="slider-section">
  <div class="container">
    <div class="slider">
      <div class="slider-header">
        <div>
          <div class="eyebrow">WHAT YOU CAN ACHIEVE</div>
          <h2 class="section-title">
            Turning human insight into measurable outcomes.
          </h2>
          <p class="section-sub">
            Engaggio helps organisations understand behaviour, engagement,
            and wellbeing to improve learning, work, and performance outcomes.
          </p>
        </div>

        <div class="slider-controls">
          <button class="slider-btn" id="sliderPrev" aria-label="Previous slide">←</button>
          <div class="dots">
            <div class="dot active" data-slide="0"></div>
            <div class="dot" data-slide="1"></div>
            <div class="dot" data-slide="2"></div>
          </div>
          <button class="slider-btn" id="sliderNext" aria-label="Next slide">→</button>
        </div>
      </div>

      <div class="slider-items" id="sliderItems">

        <!-- SLIDE 1 -->
        <div class="slider-card" data-slide-index="0">
          <strong>Improve Engagement & Wellbeing</strong>
          Gain a deeper understanding of how people feel, engage, and behave
          across learning and work environments.
        </div>

        <div class="slider-card" data-slide-index="0">
          <strong>Enable Early Intervention</strong>
          Identify early signals of disengagement, burnout, or risk and take
          informed, timely action.
        </div>

        <div class="slider-card" data-slide-index="0">
          <strong>Support Better Outcomes</strong>
          Use behavioural and engagement insights to improve performance,
          retention, and success.
        </div>

        <!-- SLIDE 2 -->
        <div class="slider-card" data-slide-index="1" style="display:none;">
          <strong>Strengthen Leadership Decisions</strong>
          Provide leaders with clear, human-centric intelligence to guide
          strategy and decision-making.
        </div>

        <div class="slider-card" data-slide-index="1" style="display:none;">
          <strong>Align People & Performance</strong>
          Connect engagement, behaviour, and outcomes to understand what
          truly drives performance.
        </div>

        <div class="slider-card" data-slide-index="1" style="display:none;">
          <strong>Build Trust & Transparency</strong>
          Ensure insights are collected and used responsibly with consent-led,
          privacy-first design.
        </div>

        <!-- SLIDE 3 -->
        <div class="slider-card" data-slide-index="2" style="display:none;">
          <strong>Scale Responsibly</strong>
          Deploy people intelligence across institutions and enterprises
          without compromising ethics or trust.
        </div>

        <div class="slider-card" data-slide-index="2" style="display:none;">
          <strong>Unify Insight Across Contexts</strong>
          Understand humans consistently across education, work, and leadership
          environments.
        </div>

        <div class="slider-card" data-slide-index="2" style="display:none;">
          <strong>Future-Proof Your Organisation</strong>
          Prepare for a data-driven, human-centred future of learning and work.
        </div>

      </div>
    </div>
  </div>
</section>

<!-- TRUST -->
<section class="trust">
  <div class="container">
    <h2>Built on Trust. Designed for Responsibility.</h2>
    <p>Privacy-first. Consent-led. Ethical AI by design.</p>
    <br/>
    <button class="btn-primary">Request a Demo</button>
  </div>
</section>
<!-- CLIENTS & PARTNERS -->
<section class="clients-slider-section">
  <div class="container">

    <div class="clients-header">
      <h3>Clients & Partners</h3>
    </div>

    <div class="clients-slider">

      <button class="clients-nav prev" id="clientsPrev">←</button>

      <div class="clients-viewport">
        <div class="clients-track" id="clientsTrack">

          <!-- LOGO CARD -->
          <div class="client-card">
            <img src="assets/logos/client1.png" alt="Client 1">
          </div>

          <div class="client-card">
            <img src="assets/logos/client2.png" alt="Client 2">
          </div>

          <div class="client-card">
            <img src="assets/logos/client3.png" alt="Client 3">
          </div>

          <div class="client-card">
            <img src="assets/logos/client4.png" alt="Client 4">
          </div>

          <div class="client-card">
            <img src="assets/logos/client5.png" alt="Client 5">
          </div>

          <div class="client-card">
            <img src="assets/logos/client6.png" alt="Client 6">
          </div>

        </div>
      </div>

      <button class="clients-nav next" id="clientsNext">→</button>

    </div>

  </div>
</section>

</body>
  `,

  education: `
<body>
<!-- HERO -->
<section class="hero">
  <div class="hero-inner">
    <div>
      <div class="breadcrumb">Solutions / For Education</div>
      <h1>Transforming Education through Student Engagement Intelligence</h1>
      <p>
        Empower institutions to understand learner wellbeing, motivation,
        and engagement—ethically, responsibly, and beyond academics.
      </p>
      <button class="btn-primary">Request a Demo</button>
    </div>
  </div>
</section>

<!-- SOLUTIONS -->
<section>
  <div class="container">
    <div class="section-title">
      <h2>Our Education Solutions</h2>
      <p>Purpose-built to improve student wellbeing, engagement, and success.</p>
    </div>

    <div class="grid-3">
      <div class="card">
        <i class="fa fa-heart"></i>
        <h3>Emotional Wellbeing Insights</h3>
        <p>Identify early signals around stress, comfort, and balance.</p>
      </div>

      <div class="card">
        <i class="fa fa-users"></i>
        <h3>Social Belonging</h3>
        <p>Understand inclusion, peer harmony, and learner safety.</p>
      </div>

      <div class="card">
        <i class="fa fa-chart-line"></i>
        <h3>Engagement Trends</h3>
        <p>Track motivation, confidence, and behavioural patterns over time.</p>
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIAL -->
<section>
  <div class="testimonial">
    <p>
      “CADMUS has transformed how we support our students.
      We now intervene earlier and more responsibly.”
    </p>
    <span>— Dean of Student Services, University Partner</span>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="container">
    <h2>Drive Better Learning Outcomes with CADMUS</h2>
    <br/>
    <button class="btn-primary">Request a Demo</button>
  </div>
</section>

</body>
</html>
  `,

  leadership: `
<section class="page-hero leadership-hero">
  <div class="container">
    <div class="breadcrumb">Solutions / Leadership & HR</div>
    <h1>Empowering Leaders with Ethical Workforce Intelligence</h1>
    <p>
      Give leaders the clarity they need to support people, culture,
      and performance—responsibly.
    </p>
    <button class="btn-primary">Request a Demo</button>
  </div>
</section>

<section class="page-features">
  <div class="container grid-3">
    <div class="card">
      <h3>Human-Centred Insights</h3>
      <p>Move beyond metrics to understand real workforce experiences.</p>
    </div>
    <div class="card">
      <h3>Early Risk Signals</h3>
      <p>Identify burnout, disengagement, and risk before issues escalate.</p>
    </div>
    <div class="card">
      <h3>Responsible Decisions</h3>
      <p>Support decisions with privacy-first, consent-led intelligence.</p>
    </div>
  </div>
</section>
  `,

  insights: `
<!-- HERO -->
<section class="page-hero insights-hero">
  <div class="container">
    <div class="breadcrumb">Insights</div>
    <h1>Insights on People, Performance & Ethical AI</h1>
    <p>
      Research, thinking, and perspectives on engagement, wellbeing,
      and the future of work and learning.
    </p>
  </div>
</section>

<!-- INSIGHTS OVERVIEW -->
<section class="page-features">
  <div class="container grid-3">
    <div class="card">
      <h3>Research</h3>
      <p>Evidence-based insights into engagement, wellbeing, and behaviour.</p>
    </div>
    <div class="card">
      <h3>Perspectives</h3>
      <p>Thought leadership on ethical AI and people intelligence.</p>
    </div>
    <div class="card">
      <h3>Case Studies</h3>
      <p>Real-world applications across education and enterprise.</p>
    </div>
  </div>
</section>

<!-- BLOG -->
<section class="insights-section">
  <div class="container">
    <div class="section-title">
      <h2>Blog</h2>
      <p>Latest thinking from Engaggio on people intelligence and ethics.</p>
    </div>

    <div class="grid-3">
      <article class="card insight-card">
        <h3>Why Engagement Data Needs Context</h3>
        <p>
          Understanding behaviour requires more than scores —
          it requires ethical interpretation.
        </p>
        <a href="#" class="text-link">Read Article →</a>
      </article>

      <article class="card insight-card">
        <h3>The Future of Ethical AI at Work</h3>
        <p>
          How organisations can use AI responsibly without eroding trust.
        </p>
        <a href="#" class="text-link">Read Article →</a>
      </article>

      <article class="card insight-card">
        <h3>Wellbeing Beyond Surveys</h3>
        <p>
          Moving from reactive measurement to proactive insight.
        </p>
        <a href="#" class="text-link">Read Article →</a>
      </article>
    </div>
  </div>
</section>

<!-- CASE STUDIES -->
<section class="insights-section alt">
  <div class="container">
    <div class="section-title">
      <h2>Case Studies</h2>
      <p>How institutions and enterprises apply Engaggio in practice.</p>
    </div>

    <div class="grid-3">
      <article class="card insight-card">
        <h3>University Wellbeing Intervention</h3>
        <p>
          Using CADMUS to identify disengagement early and support students.
        </p>
        <a href="#" class="text-link">View Case Study →</a>
      </article>

      <article class="card insight-card">
        <h3>Enterprise Engagement Transformation</h3>
        <p>
          How DECODE helped leaders connect culture with performance.
        </p>
        <a href="#" class="text-link">View Case Study →</a>
      </article>

      <article class="card insight-card">
        <h3>Responsible AI Rollout</h3>
        <p>
          Embedding trust, consent, and transparency in people intelligence.
        </p>
        <a href="#" class="text-link">View Case Study →</a>
      </article>
    </div>
  </div>
</section>

<!-- RESEARCH / RESOURCES -->
<section class="insights-section">
  <div class="container">
    <div class="section-title">
      <h2>Research & Resources</h2>
      <p>Whitepapers, reports, and frameworks grounded in evidence.</p>
    </div>

    <div class="grid-3">
      <article class="card insight-card">
        <h3>Engagement & Wellbeing Framework</h3>
        <p>
          A research-backed model for understanding human engagement.
        </p>
        <a href="#" class="text-link">Download PDF →</a>
      </article>

      <article class="card insight-card">
        <h3>Ethical AI Principles</h3>
        <p>
          Designing people intelligence with responsibility and trust.
        </p>
        <a href="#" class="text-link">Download PDF →</a>
      </article>

      <article class="card insight-card">
        <h3>Future of Work Report</h3>
        <p>
          Trends shaping engagement, leadership, and performance.
        </p>
        <a href="#" class="text-link">Download PDF →</a>
      </article>
    </div>
  </div>
</section>
`,

  contact: `
<section class="page-hero contact-hero">
  <div class="container">
    <div class="breadcrumb">Request a Demo</div>
    <h1>Let’s Talk</h1>
    <p>Tell us about your organisation. We respect your privacy.</p>
  </div>
</section>

<section class="contact-section">
  <div class="container">
    <form class="contact-form">
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Work Email" required />
      <textarea placeholder="How can we help?" rows="4"></textarea>
      <button class="btn-primary">Submit Request</button>
    </form>
  </div>
</section>
  `,

  cadmus:`
  <section class= "product-hero-cadmus">
  <div class="container product-hero-grid-cadmus">

    <div class="product-hero-content">
      <span class="eyebrow">CADMUS PLATFORM</span>

      <h1>
        Understanding learners<br />
        beyond academics.
      </h1>

      <p class="product-sub">
        CADMUS is the world’s first holistic engagement intelligence platform
        designed to understand emotional, social, and behavioural wellbeing —
        ethically, responsibly, and without academic judgement.
      </p>

      <div class="product-actions">
        <button class="btn-primary">Request a Demo</button>
        <button class="btn-outline-cadmus">Talk to Us</button>
      </div>
    </div>
  </div>
</section>


<!-- WHY CADMUS -->
<section class="product-section bg-soft">
  <div class="container narrow">

    <h2 class="section-title">Why CADMUS</h2>

    <p class="section-lead">
      Learning outcomes are shaped long before grades appear.
      Emotional wellbeing, belonging, motivation, and confidence
      determine how learners engage, grow, and perform.
    </p>

    <p>
      CADMUS makes these invisible factors visible —
      without diagnosis, labelling, or academic evaluation.
    </p>

  </div>
</section>


<!-- WHAT CADMUS HELPS YOU UNDERSTAND -->
<section class="product-section">
  <div class="container">

    <h2 class="section-title">What CADMUS Helps You Understand</h2>

    <div class="feature-grid">

      <div class="feature-card">
        <h3>Emotional Wellbeing</h3>
        <p>Early signals around emotional comfort, balance, and stress patterns.</p>
      </div>

      <div class="feature-card">
        <h3>Social Connectedness</h3>
        <p>Understand inclusion, peer harmony, and social safety.</p>
      </div>

      <div class="feature-card">
        <h3>Motivation & Engagement</h3>
        <p>Track interest, curiosity, and participation trends over time.</p>
      </div>

      <div class="feature-card">
        <h3>Confidence & Resilience</h3>
        <p>See how learners express themselves and cope with challenges.</p>
      </div>

      <div class="feature-card">
        <h3>Behavioural Stability</h3>
        <p>Identify consistency, volatility, and emerging support needs.</p>
      </div>

      <div class="feature-card">
        <h3>AI-Guided Recommendations</h3>
        <p>Clear, age-appropriate guidance for families and institutions.</p>
      </div>

    </div>
  </div>
</section>


<!-- HOW IT WORKS -->
<section class="product-section bg-soft">
  <div class="container narrow">

    <h2 class="section-title">How CADMUS Works</h2>

    <ul class="process-list">
      <li><strong>Secure login</strong> for every learner</li>
      <li><strong>Short, age-appropriate check-ins</strong></li>
      <li><strong>Pattern-based analysis</strong> over time</li>
      <li><strong>Clear reports</strong> for families and institutions</li>
    </ul>

    <p class="muted-note">
      No academic evaluation. No diagnosis. No labelling.
    </p>

  </div>
</section>


<!-- TRUST -->
<section class="product-section">
  <div class="container narrow">

    <h2 class="section-title">Built for Trust & Safety</h2>

    <div class="trust-grid">
      <span>Privacy-first & consent-led</span>
      <span>Role-based access</span>
      <span>Non-diagnostic insights</span>
      <span>Child-safe by design</span>
    </div>

  </div>
</section>


<!-- WHO IT IS FOR -->
<section class="product-section bg-soft">
  <div class="container narrow">

    <h2 class="section-title">Who CADMUS Is For</h2>

    <ul class="audience-list">
      <li>Learning institutions & ecosystems</li>
      <li>Wellbeing and student support teams</li>
      <li>Families and caregivers</li>
      <li>Academic and institutional leadership</li>
    </ul>

  </div>
</section>


<!-- FINAL CTA -->
<section class="product-cta">
  <div class="container narrow">
    <h2>See CADMUS in Action</h2>
    <p>
      Experience a responsible, insight-driven approach to learner
      engagement and wellbeing.
    </p>
    <button class="btn-primary">Request a Demo</button>
  </div>
</section>
`,

  decode:`
  <!-- ================= DECODE HERO ================= -->
<section class="product-hero-decode">
  <div class="container product-hero-grid-decode">

    <div class="product-hero-content">
      <div class="eyebrow">DECODE</div>
      <h1>Employee Engagement Intelligence</h1>
      <p class="intro">
        Go beyond surveys. Understand engagement through behavioural patterns,
        analytics, and AI-guided insights — in real time.
      </p>

      <div class="hero-actions">
        <button class="btn-primary">Book a Demo</button>
        <button class="btn-outline">Talk to Us</button>
      </div>
    </div>

  </div>
</section>


<!-- ================= WHY DECODE ================= -->
<section class="product-section light">
  <div class="container narrow">
    <h2>Why DECODE</h2>
    <p>
      Engagement is dynamic. Annual surveys capture opinions —
      but miss what’s changing, what’s declining, and where action matters most.
    </p>
    <p>
      DECODE reveals engagement patterns leaders can actually act on.
    </p>
  </div>
</section>


<!-- ================= WHAT DECODE HELPS YOU SEE ================= -->
<section class="product-section">
  <div class="container">

    <div class="section-title">
      <h2>What DECODE Helps You See</h2>
      <p>Outcome-focused engagement intelligence for modern organisations.</p>
    </div>

    <div class="grid-3">

      <div class="card">
        <h3>Real-Time Engagement Signals</h3>
        <p>Understand how engagement evolves across teams, roles, and time.</p>
      </div>

      <div class="card">
        <h3>Behavioural & Sentiment Patterns</h3>
        <p>Identify drivers behind morale, motivation, and energy.</p>
      </div>

      <div class="card">
        <h3>Manager & Team Health Insights</h3>
        <p>Spot strengths, risks, and improvement opportunities.</p>
      </div>

      <div class="card">
        <h3>Burnout & Overload Indicators</h3>
        <p>Detect early warning patterns — before performance drops.</p>
      </div>

      <div class="card">
        <h3>Retention & Stability Signals</h3>
        <p>Understand risk trends without invasive monitoring.</p>
      </div>

      <div class="card">
        <h3>AI-Guided Action Recommendations</h3>
        <p>Practical, role-specific steps for leaders and managers.</p>
      </div>

    </div>
  </div>
</section>


<!-- ================= HOW IT WORKS ================= -->
<section class="product-section soft">
  <div class="container how-it-works-simple">

    <h2>How DECODE Works</h2>

    <div class="steps-grid">

      <div class="step">
        <span>01</span>
        <h4>Lightweight Engagement Inputs</h4>
        <p>Low-friction data collection designed for participation.</p>
      </div>

      <div class="step">
        <span>02</span>
        <h4>Continuous Listening</h4>
        <p>Ongoing insight — not one-time surveys.</p>
      </div>

      <div class="step">
        <span>03</span>
        <h4>Clear Dashboards</h4>
        <p>Actionable views for HR, leaders, and managers.</p>
      </div>

      <div class="step">
        <span>04</span>
        <h4>Measurable Improvement</h4>
        <p>Track progress and outcomes over time.</p>
      </div>

    </div>
  </div>
</section>


<!-- ================= ENTERPRISE TRUST ================= -->
<section class="product-section light">
  <div class="container narrow">
    <h2>Built for Enterprise Trust</h2>
    <ul class="trust-list">
      <li>Secure and role-based access</li>
      <li>Audit-ready data handling</li>
      <li>Scalable across teams and locations</li>
    </ul>
  </div>
</section>


<!-- ================= WHO IT'S FOR ================= -->
<section class="product-section">
  <div class="container narrow">
    <h2>Who DECODE Is For</h2>
    <ul class="audience-list">
      <li>HR and People Teams</li>
      <li>Business and Functional Leaders</li>
      <li>Organisations focused on performance and retention</li>
    </ul>
  </div>
</section>


<!-- ================= FINAL CTA ================= -->
<section class="product-cta">
  <div class="container">
    <h2>Turn Engagement Insight into Performance</h2>
    <p>See how DECODE helps organisations move from data to action.</p>
    <button class="btn-primary">Book a Demo</button>
  </div>
</section>
`,
Whoarewe: `
<section class="page-hero">
  <div class="container">
    <h1>Who We Are</h1>
    <p>
      Engaggio is a people intelligence company helping organisations
      understand engagement, wellbeing, and behaviour — responsibly.
    </p>
  </div>
</section>

<!-- ENGAGGIO OVERVIEW -->
<section id="Engaggiooverview" class="page-section">
  <div class="container narrow">
    <h2>Engaggio Overview</h2>
    <p>
      Engaggio combines behavioural science, ethical AI, and digital platforms
      to help organisations make better decisions about people.
    </p>
    <p>
      We operate across education, enterprises, and leadership contexts —
      always with privacy, consent, and trust at the core.
    </p>
  </div>
</section>

<!-- LEADERSHIP -->
<section id="leadership" class="page-section soft">
  <div class="container narrow">
    <h2>Leadership & HR</h2>
    <p>
      We partner with leaders and HR teams to translate people insight
      into responsible action — from engagement to performance.
    </p>
  </div>
</section>

<!-- MISSION -->
<section id="Mission" class="page-section">
  <div class="container narrow">
    <h2>Mission & Purpose</h2>
    <p>
      Our mission is to help organisations understand humans more deeply
      — and act more responsibly.
    </p>
    <ul class="bullets">
      <li>Human-first intelligence</li>
      <li>Ethical, consent-led design</li>
      <li>Insight that drives positive outcomes</li>
    </ul>
  </div>
</section>

<!-- EDUCATION -->
<section id="education" class="page-section soft">
  <div class="container narrow">
    <h2>Education</h2>
    <p>
      Through CADMUS, we help educational institutions understand
      student wellbeing, engagement, and risk beyond academics.
    </p>
  </div>
</section>

<!-- CAREERS -->
<section id="careers" class="page-section">
  <div class="container narrow">
    <h2>Careers</h2>
    <p>
      We’re building a multidisciplinary team passionate about
      people, ethics, and meaningful technology.
    </p>
    <button class="btn-primary">View Open Roles</button>
  </div>
</section>
`,

whatwedo: `
<section class="page-hero">
  <div class="container">
    <h1>What We Do</h1>
    <p>
      Purpose-built platforms that turn human insight into action
      across learning and work.
    </p>
  </div>
</section>

<!-- CADMUS (NO HERO) -->
<section id="cadmus" class="page-section">
  <div class="container narrow">
    <h2>CADMUS</h2>
    <p class="section-lead">
      Student engagement and wellbeing intelligence for education.
    </p>

    <p>
      CADMUS helps institutions understand how students feel,
      engage, and behave — ethically and beyond academics.
    </p>

    <ul class="bullets">
      <li>Wellbeing & engagement signals</li>
      <li>Early intervention indicators</li>
      <li>Privacy-first, consent-led design</li>
    </ul>

    <a href="#education" class="text-link">View CADMUS in Education →</a>
  </div>
</section>

<!-- DECODE (NO HERO) -->
<section id="decode" class="page-section soft">
  <div class="container narrow">
    <h2>DECODE</h2>
    <p class="section-lead">
      Workforce engagement and sentiment intelligence for enterprises.
    </p>

    <p>
      DECODE helps organisations understand culture, motivation,
      and performance drivers across teams and locations.
    </p>

    <ul class="bullets">
      <li>Engagement & sentiment insights</li>
      <li>Leadership decision support</li>
      <li>Responsible people analytics</li>
    </ul>

    <a href="#enterprise" class="text-link">View DECODE for Enterprises →</a>
  </div>
</section>
`,

Engaggiooverview:`
<section class="page-hero overview-hero">
  <div class="container">
    <div class="breadcrumb">Who We Are / Engaggio Overview</div>
    <h1>People Intelligence, Built Responsibly</h1>
    <p>
      Engaggio is a people intelligence and AI technology company helping
      organisations understand engagement, wellbeing, and behaviour —
      ethically, transparently, and beyond traditional metrics.
    </p>
    <button class="btn-primary">Request a Demo</button>
  </div>
</section>

<section class="overview-section">
  <div class="container overview-grid">

    <!-- LEFT -->
    <div class="overview-content">
      <h2>Understanding Humans at Scale</h2>
      <p>
        Engaggio exists to help organisations truly understand people — how they
        feel, engage, and behave across learning and work environments.
      </p>
      <p>
        Our platforms combine behavioural science, people analytics, and ethical
        AI to deliver insight that leaders can trust and act on responsibly.
      </p>
    </div>

    <!-- RIGHT -->
    <div class="overview-stats">
      <div class="stat">
        <strong>Education</strong>
        <span>Student engagement & wellbeing intelligence</span>
      </div>
      <div class="stat">
        <strong>Enterprise</strong>
        <span>Workforce engagement & performance insight</span>
      </div>
      <div class="stat">
        <strong>Leadership</strong>
        <span>Human-centred decision intelligence</span>
      </div>
    </div>

  </div>
</section>

<section class="overview-pillars">
  <div class="container grid-3">

    <div class="card">
      <h3>Ethical by Design</h3>
      <p>
        Consent-led, privacy-first intelligence that respects individuals
        and organisations alike.
      </p>
    </div>

    <div class="card">
      <h3>Science-Led</h3>
      <p>
        Built on behavioural science, psychology, and validated engagement models.
      </p>
    </div>

    <div class="card">
      <h3>Actionable Insight</h3>
      <p>
        Clear, practical intelligence that enables timely and responsible action.
      </p>
    </div>

  </div>
</section>

<section class="overview-cta">
  <div class="container">
    <h2>Helping organisations act with insight, not assumption.</h2>
    <button class="btn-primary">Explore Our Platforms</button>
  </div>
</section>
`,

Mission: `
<section class="page-hero mission-hero">
  <div class="container">
    <div class="breadcrumb">Company / Mission & Purpose</div>
    <h1>Our Mission & Purpose</h1>
    <p>
      To help organisations understand humans more deeply —
      and act more responsibly.
    </p>
  </div>
</section>

<section class="mission-section">
  <div class="container mission-grid">

    <div class="mission-content">
      <h2>Why Engaggio Exists</h2>
      <p>
        Organisations make decisions about people every day — often with
        incomplete, biased, or purely transactional data.
      </p>
      <p>
        Engaggio exists to change that. We help leaders understand engagement,
        wellbeing, and behaviour in ways that are ethical, transparent, and
        genuinely human.
      </p>
    </div>

    <div class="mission-values">
      <div class="value-card">
        <strong>Human First</strong>
        <span>People are not data points. Every insight must respect dignity and trust.</span>
      </div>
      <div class="value-card">
        <strong>Ethics by Design</strong>
        <span>Consent-led, privacy-first, and responsible AI at every layer.</span>
      </div>
      <div class="value-card">
        <strong>Insight with Impact</strong>
        <span>Intelligence only matters when it enables better decisions.</span>
      </div>
    </div>

  </div>
</section>

<section class="mission-cta">
  <div class="container">
    <h2>Helping organisations act with insight, not assumption.</h2>
    <button class="btn-primary">Explore Our Platforms</button>
  </div>
</section>
`,

careers: `
<section class="page-hero careers-hero">
  <div class="container">
    <div class="breadcrumb">Company / Careers</div>
    <h1>Build the Future of People Intelligence</h1>
    <p>
      Join a team shaping ethical, human-centred intelligence
      for learning and work.
    </p>
  </div>
</section>

<section class="careers-section">
  <div class="container careers-grid">

    <div class="careers-content">
      <h2>Why Work at Engaggio?</h2>
      <p>
        We are a multidisciplinary team of technologists, researchers,
        designers, and strategists who care deeply about people.
      </p>
      <p>
        At Engaggio, you’ll work on meaningful problems — building products
        that influence how organisations understand and support humans.
      </p>
    </div>

    <div class="careers-perks">
      <div class="perk">Purpose-driven work</div>
      <div class="perk">Flexible & remote-friendly</div>
      <div class="perk">Ethics-led innovation</div>
      <div class="perk">Learning & growth focused</div>
    </div>

  </div>
</section>

<section class="open-roles">
  <div class="container">
    <h2>Open Roles</h2>

    <div class="role">
      <strong>Frontend Engineer</strong>
      <span>Remote / Hybrid</span>
    </div>

    <div class="role">
      <strong>Data Scientist (People Analytics)</strong>
      <span>Remote / Hybrid</span>
    </div>

    <div class="role">
      <strong>Product Manager</strong>
      <span>Remote / Hybrid</span>
    </div>

    <p class="careers-note">
      Don’t see a role that fits?  
      We’re always open to hearing from thoughtful people.
    </p>

    <button class="btn-primary">Get in Touch</button>
  </div>
</section>
`
};

function router() {
  const page = location.hash.replace("#", "") || "home";
  app.innerHTML = pages[page] || pages.home;

  // Scroll to top
  window.scrollTo(0, 0);

  // ✅ INIT SLIDER ONLY IF PRESENT
  if (page === "home" && window.initSlider) {
    // Delay ensures DOM is fully painted
    setTimeout(() => {
      window.initSlider();
    }, 0);
  }
}


window.addEventListener("hashchange", router);
window.addEventListener("load", router);
