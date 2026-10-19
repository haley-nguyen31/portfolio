// Scroll reveal and metric count-up. Both are skipped under prefers-reduced-motion.
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const canObserve = 'IntersectionObserver' in window;

// Stagger children of [data-reveal-group] by 60ms.
document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((g) => {
  Array.from(g.children).forEach((c, i) => {
    const el = c as HTMLElement;
    el.setAttribute('data-reveal', '');
    el.style.setProperty('--d', `${i * 60}ms`);
  });
});

const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (reduced || !canObserve) {
  targets.forEach((el) => el.classList.add('in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -4% 0px' },
  );
  targets.forEach((el) => io.observe(el));
}

// Count-up: "40+" counts to 40 and keeps its suffix. Runs once, 1200ms.
const counters = document.querySelectorAll<HTMLElement>('[data-count]');
if (!reduced && canObserve && counters.length) {
  const fmt = (n: number) => n.toLocaleString('en-US');
  const run = (el: HTMLElement) => {
    const end = Number(el.dataset.count);
    const suffix = el.dataset.suffix ?? '';
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / 1200, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = fmt(Math.round(end * eased)) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io2 = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          run(e.target as HTMLElement);
          io2.unobserve(e.target);
        }
      }
    },
    { threshold: 0.6 },
  );
  counters.forEach((el) => {
    el.textContent = '0' + (el.dataset.suffix ?? '');
    io2.observe(el);
  });
}
