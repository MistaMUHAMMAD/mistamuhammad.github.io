document.documentElement.classList.add("js");

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const navigationLinks = Array.from(document.querySelectorAll("#primary-navigation a[href^='#']"));

function closeMenu() {
  if (!menuButton || !navigation) return;

  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation menu");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    navigation.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  navigationLinks.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuButton.focus();
    }
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = navigation.contains(event.target);
    const clickedMenuButton = menuButton.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
  });
}

const observedSections = navigationLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && observedSections.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleEntry) return;

      navigationLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${visibleEntry.target.id}`;

        if (isCurrent) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    {
      rootMargin: "-25% 0px -60% 0px",
      threshold: [0.05, 0.2, 0.5],
    },
  );

  observedSections.forEach((section) => sectionObserver.observe(section));
}

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "Portfolio enquiry").trim();
    const message = String(formData.get("message") || "").trim();

    const emailBody = [
      `Hello Muhammad,`,
      "",
      message,
      "",
      `From: ${name}`,
      `Reply email: ${email}`,
    ].join("\n");

    const mailtoLink = `mailto:muhammad.musa4rl@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    if (formStatus) {
      formStatus.textContent = "Opening your email application…";
    }

    window.location.href = mailtoLink;
  });
}

const yearElement = document.querySelector("#current-year");

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const sampleViewer = document.querySelector("#sample-viewer");
const sampleLinks = Array.from(document.querySelectorAll("a[data-sample-preview]"));

// Each image remains a normal link when JavaScript or native dialog support is unavailable.
if (sampleViewer && typeof sampleViewer.showModal === "function" && sampleLinks.length) {
  const viewerImage = document.querySelector("#sample-viewer-image");
  const viewerTitle = document.querySelector("#sample-viewer-title");
  const viewerCaption = document.querySelector("#sample-viewer-caption");
  const viewerCount = document.querySelector("#sample-viewer-count");
  const originalLink = document.querySelector("#sample-viewer-original");
  const closeButton = sampleViewer.querySelector("[data-close-sample]");
  const previousButton = sampleViewer.querySelector("[data-previous-sample]");
  const nextButton = sampleViewer.querySelector("[data-next-sample]");
  let activeSampleIndex = 0;
  let viewerTrigger = null;

  function showSample(index) {
    activeSampleIndex = (index + sampleLinks.length) % sampleLinks.length;
    const link = sampleLinks[activeSampleIndex];
    const thumbnail = link.querySelector("img");

    viewerImage.src = link.href;
    viewerImage.alt = thumbnail ? thumbnail.alt : link.dataset.title;
    viewerTitle.textContent = link.dataset.title || "Work sample";
    viewerCaption.textContent = link.dataset.caption || "Representative portfolio sample.";
    viewerCount.textContent = `${activeSampleIndex + 1} of ${sampleLinks.length}`;
    originalLink.href = link.href;
  }

  sampleLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button > 0) return;
      event.preventDefault();
      viewerTrigger = link;
      showSample(index);
      sampleViewer.showModal();
      document.body.classList.add("sample-open");
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", () => sampleViewer.close());
  previousButton.addEventListener("click", () => showSample(activeSampleIndex - 1));
  nextButton.addEventListener("click", () => showSample(activeSampleIndex + 1));

  sampleViewer.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showSample(activeSampleIndex - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showSample(activeSampleIndex + 1);
    }
  });

  sampleViewer.addEventListener("click", (event) => {
    if (event.target !== sampleViewer) return;
    const bounds = sampleViewer.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      sampleViewer.close();
    }
  });

  sampleViewer.addEventListener("close", () => {
    document.body.classList.remove("sample-open");
    if (viewerTrigger) viewerTrigger.focus();
  });
}
