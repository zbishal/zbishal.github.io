window.addEventListener('DOMContentLoaded', () => {
  const projectList = document.getElementById('project-list');
  const overlay = document.getElementById('media-overlay');
  const mediaBox = document.getElementById('media-box');
  const img = document.getElementById('media-image');
  const desc = document.getElementById('media-desc');
  const closeBtn = document.getElementById('close-media');
  const introEl = document.getElementById('intro-text');
  const mainContent = document.getElementById('main-content');
  const bioText = document.getElementById('bio-text');
  const bgImg = document.querySelector('#mtn-bg img');

  bioText.textContent = '';

  const introText = "This website is created to showcase projects I have coded or worked on, providing a centralized space to share my latest developments and ideas. It serves as a growing collection of my work, where I will continually add new projects and updates. Feel free to browse around and check out my GitHub.";
  let idx = 0;
  function type() {
    if (idx < introText.length) {
      introEl.textContent += introText[idx++];
      setTimeout(type, 20);
    } else {
      introEl.style.borderRight = 'none';
    }
  }
  setTimeout(type, 500);

  const projects = [
    { title: 'Website Project', media: 'projects/P1-hkj2435hkj243j.png', desc: 'This is my first website project, created as a foundation to showcase and organize future projects and work. The site is built using HTML, CSS, and JavaScript, with Tailwind CSS providing the primary styling framework for a clean and responsive design. Additionally, Bootstrap is used selectively to enhance certain UI components. The website features interactive project popups, smooth animations, and a modern layout optimized for both desktop and mobile devices.' }
  ];

  projects.forEach((p, i) => {
    const el = document.createElement('span');
    el.textContent = p.title;
    el.className = 'project-item';
    el.dataset.index = i;
    projectList.appendChild(el);
  });

  function showOverlay(i) {
    const p = projects[i];
    img.style.opacity = 0;
    img.src = p.media;
    img.onload = () => gsap.to(img, { opacity: 1, duration: 0.7, ease: 'power4.out' });
    desc.textContent = p.desc;
    overlay.classList.add('show');
    gsap.to(mediaBox, { scale: 1, opacity: 1, duration: 0.7, ease: 'power4.out' });
    mainContent.classList.add('moved-up');
  }

  function hideOverlay() {
    gsap.to(mediaBox, {
      scale: 0.8, opacity: 0, duration: 0.5, ease: 'power4.in',
      onComplete: () => {
        overlay.classList.remove('show');
        mainContent.classList.remove('moved-up');
        img.style.opacity = 0;
      }
    });
  }

  projectList.addEventListener('click', e => {
    if (e.target.classList.contains('project-item')) {
      showOverlay(e.target.dataset.index);
    }
  });

  closeBtn.addEventListener('click', hideOverlay);

  overlay.addEventListener('mouseenter', () =>
    gsap.to(mediaBox, { scale: 1, opacity: 1, duration: 0.3, ease: 'power3.out' })
  );

  window.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 15;
    const y = (e.clientY / window.innerHeight - 0.5) * 15;
    gsap.to(bgImg, { x, y, duration: 1.2, ease: 'power3.out' });
  });
});
