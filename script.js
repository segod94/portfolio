/* navbar scroll */
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('stuck', window.scrollY > 30);
});

/* scroll reveal */
const ro = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
  { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

/* skill bars */
let barsGone = false;
new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !barsGone) {
    barsGone = true;
    document.querySelectorAll('.s-fill').forEach(b => {
      setTimeout(() => b.style.width = b.dataset.w + '%', 150);
    });
  }
}, { threshold: 0.2 }).observe(document.getElementById('about'));

/* tabs */
document.querySelectorAll('.t-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.t-btn').forEach(b => b.classList.remove('on'));
    document.querySelectorAll('.t-panel').forEach(p => p.classList.remove('on'));
    this.classList.add('on');
    document.getElementById('tab-' + this.dataset.tab).classList.add('on');
  });
});

/* JS demo: dark mode toggle */
let dark = false;
function toggleDark() {
  dark = !dark;
  document.getElementById('jsDemoBox').classList.toggle('dark', dark);
  document.getElementById('jsDemoPara').style.color = dark ? '#94a3b8' : '#333';
}

/* JS demo: counter */
let n = 0;
function inc() { document.getElementById('jsCount').textContent = ++n; }
function rst() { n = 0; document.getElementById('jsCount').textContent = 0; }

/* JS demo: show/hide */
let shown = false;
function toggleText() {
  shown = !shown;
  document.getElementById('jsHidden').style.display = shown ? 'block' : 'none';
}

/* JS demo: form validation */
function validate() {
  const input = document.getElementById('jsInput');
  const msg   = document.getElementById('jsMsg');
  const v = input.value.trim();
  if (!v) {
    msg.innerHTML = '<span style="color:#f87171;">⚠️ Enter an email first.</span>';
    input.style.borderColor = '#f87171';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
    msg.innerHTML = '<span style="color:#f97316;">❌ Not a valid email.</span>';
    input.style.borderColor = '#f97316';
  } else {
    msg.innerHTML = '<span style="color:#4ade80;">✅ Looks good!</span>';
    input.style.borderColor = '#4ade80';
  }
}