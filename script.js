const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Web Designer", "UI/UX Enthusiast"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});


// Scroll-triggered skill animation (optional)
window.addEventListener('scroll', () => {
  const skillsSection = document.querySelector('.skills-container');
  if (!skillsSection) return;
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    document.querySelectorAll('.outer-circle').forEach(el => {
      el.style.animationPlayState = 'running';
    });
  }
});

// Read More toggle
const readMoreBtn = document.getElementById('readMoreBtn');
const extraText = document.getElementById('extraText');

readMoreBtn.addEventListener('click', () => {
  extraText.classList.toggle('show');
  readMoreBtn.textContent = extraText.classList.contains('show') ? 'Read Less' : 'Read More';
});
<script>
  let lastScrollTop = 0;
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      navbar.style.top = "-100px"; // Hide navbar
    } else {
      // Scrolling up
      navbar.style.top = "0"; // Show navbar
    }
    lastScrollTop = scrollTop;
  });
</script>

