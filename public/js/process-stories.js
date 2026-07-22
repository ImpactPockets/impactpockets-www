(() => {
  const stories = [...document.querySelectorAll("[data-process-story]")];

  if (!stories.length) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  stories.forEach((story) => {
    story.querySelectorAll("[data-process-step]").forEach((step, index) => {
      step.style.setProperty("--story-index", String(index));
    });
  });

  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    stories.forEach((story) => story.classList.add("is-story-visible"));
    return;
  }

  document.documentElement.classList.add("story-motion-ready");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-story-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -14% 0px",
      threshold: 0.18
    }
  );

  stories.forEach((story) => observer.observe(story));
})();
