window.addEventListener('DOMContentLoaded', () => {
  const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

  tl.to("#name", { opacity: 1, y: -20 });

  tl.to("#bio", { opacity: 1, y: -20, onStart: () => {
    document.getElementById("bio").textContent = "";
  } }, "-=0.7");

  tl.to("#social-links", { opacity: 1, y: -20 }, "-=0.7");

  const testText = "Welcome to my website. This is currently a personal test space and placeholder, with major updates planned soon. I'm using it as a landing page for now, but more content will be added over time. Meanwhile, feel free to check out my GitHub projects, my Instagram, and my YouTube channel.";
  const testEl = document.getElementById("test-text");
  testEl.style.opacity = 1;

  let i = 0;
  function type() {
    if (i < testText.length) {
      testEl.textContent += testText.charAt(i);
      i++;
      setTimeout(type, 100);
    } else {
      testEl.style.borderRight = 'none';
    }
  }
  setTimeout(type, 600);

  const bg = document.querySelector("#retro-bg img");
  window.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    gsap.to(bg, { x: x, y: y, duration: 1, ease: "power3.out" });
  });
});
