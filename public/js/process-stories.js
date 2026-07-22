(() => {
  const stories = [...document.querySelectorAll("[data-process-story]")];
  const stages = [...document.querySelectorAll("[data-process-stage]")];
  const journey = document.querySelector("[data-process-journey]");
  const journeyLinks = journey
    ? [...journey.querySelectorAll("[data-stage-link]")]
    : [];

  if (!stories.length && !stages.length) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const processMain = document.querySelector(
    'main[data-page-archetype="fund-formation-process"]'
  );
  const siteHeader = document.querySelector("[data-site-header]");

  const syncHeaderHeight = () => {
    if (!processMain || !siteHeader) return;
    const headerHeight = Math.ceil(siteHeader.getBoundingClientRect().height);
    processMain.style.setProperty("--process-header-height", `${headerHeight}px`);
  };

  syncHeaderHeight();
  window.addEventListener("resize", syncHeaderHeight, { passive: true });

  stories.forEach((story) => {
    story.querySelectorAll("[data-process-step]").forEach((step, index) => {
      step.style.setProperty("--story-index", String(index));
    });
  });

  const supportsObserver = "IntersectionObserver" in window;

  if (reducedMotion.matches || !supportsObserver) {
    stories.forEach((story) => story.classList.add("is-story-visible"));
    stages.forEach((stage) => stage.classList.add("is-stage-visible"));
  } else {
    document.documentElement.classList.add("story-motion-ready");

    const storyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-story-visible");
          storyObserver.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -14% 0px",
        threshold: 0.18
      }
    );

    const stageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-stage-visible");
          stageObserver.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -22% 0px",
        threshold: 0.08
      }
    );

    stories.forEach((story) => storyObserver.observe(story));
    stages.forEach((stage) => stageObserver.observe(stage));
  }

  if (!journeyLinks.length || !stages.length) return;

  const setActiveStage = (stageId) => {
    journeyLinks.forEach((link) => {
      if (link.dataset.stageLink === stageId) {
        link.setAttribute("aria-current", "step");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const updateActiveStage = () => {
    const headerHeight = siteHeader?.getBoundingClientRect().height ?? 0;
    const journeyHeight = journey.getBoundingClientRect().height;
    const pivot = headerHeight + journeyHeight + window.innerHeight * 0.22;
    let currentStage = stages[0];

    stages.forEach((stage) => {
      if (stage.getBoundingClientRect().top <= pivot) currentStage = stage;
    });

    if (currentStage?.id) setActiveStage(currentStage.id);
  };

  let updateQueued = false;
  const queueActiveStageUpdate = () => {
    if (updateQueued) return;
    updateQueued = true;
    window.requestAnimationFrame(() => {
      updateActiveStage();
      updateQueued = false;
    });
  };

  journeyLinks.forEach((link) => {
    link.addEventListener("click", () => setActiveStage(link.dataset.stageLink));
  });

  updateActiveStage();
  window.addEventListener("scroll", queueActiveStageUpdate, { passive: true });
  window.addEventListener("resize", queueActiveStageUpdate, { passive: true });
})();
