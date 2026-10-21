// ===== Efeito de digitação =====
const roles = [
  "Policial Penal",
  "Instrutor de Prática de Serviço Penitenciário",
  "Tecnólogo em Cibersegurança",
  "Pós-graduando em Soluções de IA",
  "Estudante de Pedagogia",
];
const typingEl = document.getElementById("typing");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const current = roles[roleIndex];
  typingEl.textContent = current.slice(0, charIndex);

  if (!deleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 70);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 35);
  } else {
    deleting = !deleting;
    if (!deleting) roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, deleting ? 1800 : 300);
  }
}
type();

// ===== Foto: mostra ícone caso a imagem não exista =====
const photo = document.getElementById("profilePhoto");
function photoFailed() {
  photo.closest(".photo-frame").classList.add("no-photo");
}
photo.addEventListener("error", photoFailed);
if (photo.complete && photo.naturalWidth === 0) photoFailed();

// ===== Menu mobile =====
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

function setMenu(open) {
  navLinks.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.querySelector("i").className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}
menuBtn.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

// ===== Scroll: navbar, barra de progresso, voltar ao topo, link ativo =====
const navbar = document.getElementById("navbar");
const progress = document.getElementById("scrollProgress");
const backToTop = document.getElementById("backToTop");
const sections = document.querySelectorAll("main section[id]");

function onScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;

  navbar.classList.toggle("scrolled", y > 20);
  backToTop.classList.toggle("show", y > 500);
  progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;

  let currentId = sections[0].id;
  sections.forEach((sec) => {
    if (y >= sec.offsetTop - window.innerHeight / 3) currentId = sec.id;
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === `#${currentId}`)
  );
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ===== Animação de entrada ao rolar + barras de progresso =====
function fillBars(root) {
  root.querySelectorAll(".bar span[data-width]").forEach((bar) => {
    bar.style.width = `${bar.dataset.width}%`;
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      fillBars(entry.target);
      setTimeout(() => {
        entry.target.style.transitionDelay = "";
        entry.target.classList.remove("reveal", "visible");
      }, 900);
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 60}ms`;
  observer.observe(el);
});

// ===== Filtro de projetos =====
const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;

    projects.forEach((card) => {
      const show = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hide", !show);
      if (show) {
        card.classList.remove("pop");
        void card.offsetWidth;
        card.classList.add("pop");
      }
    });
  })
);

// ===== Baixar PDF (impressão) e ano no rodapé =====
document.querySelectorAll(".js-print").forEach((btn) => btn.addEventListener("click", () => window.print()));
window.addEventListener("beforeprint", () => {
  document.querySelectorAll(".bar span[data-width]").forEach((bar) => {
    bar.style.transition = "none";
    bar.style.width = `${bar.dataset.width}%`;
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
