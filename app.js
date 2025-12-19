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
      <div class="platform-card highlight">
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
<!-- PINNED HOW IT WORKS -->
<section class="how-it-works pinned">
  <div class="container how-it-works-grid">

    <div class="how-it-works-media">
      <img src="assets/home1.png" alt="Professional working with technology" />
    </div>

    <div class="how-it-works-content">
      <div class="eyebrow">HOW IT WORKS</div>

      <h2>
        Turning human insight into<br />
        responsible action.
      </h2>

      <p class="intro">
        Engaggio helps organisations listen to people, understand behaviour,
        and act ethically to improve outcomes across learning and work.
      </p>

      <ul class="how-steps">
        <li>
          <span>01</span>
          <div>
            <strong>Listen</strong>
            Capture engagement, wellbeing, and behavioural signals with
            consent-led, privacy-first design.
          </div>
        </li>

        <li>
          <span>02</span>
          <div>
            <strong>Understand</strong>
            Apply people intelligence and ethical AI to surface patterns,
            risks, and opportunities.
          </div>
        </li>

        <li>
          <span>03</span>
          <div>
            <strong>Act</strong>
            Enable leaders and institutions to take timely, informed,
            and responsible action.
          </div>
        </li>
      </ul>

      <button class="btn-primary">Request a Demo</button>
    </div>

  </div>
</section>

<!-- REQUIRED SPACER -->
<div class="how-it-works-spacer"></div>

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

  enterprise: `
    <section>
      <h1>Solutions for Enterprises</h1>
      <p>
        Drive performance, productivity, and retention with DECODE.
      </p>
    </section>
  `,

  leadership: `
    <section>
      <h1>Leadership & HR</h1>
      <p>
        Empower leaders with ethical workforce intelligence.
      </p>
    </section>
  `,

  insights: `
    <section>
      <h1>Insights</h1>
      <p>
        Research and thinking on people intelligence.
      </p>
    </section>
  `,

  contact: `
    <section>
      <h1>Request a Demo</h1>
      <p>We respect your privacy. No spam.</p>
      <form>
        <input placeholder="Name"><br><br>
        <input placeholder="Email"><br><br>
        <button>Submit</button>
      </form>
    </section>
  `,

  cadmus:`
  <section class= "product-hero">
  <div class="container product-hero-grid">

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
        <button class="btn-outline">Talk to Us</button>
      </div>
    </div>

    <div class="product-hero-media">
      <img src="assets/cadmus-hero.png" alt="Student wellbeing intelligence illustration" />
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
