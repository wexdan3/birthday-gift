const $ = (selector) => document.querySelector(selector);

function applyContent() {
  const c = SITE_CONTENT;

  document.title = c.pageTitle || "Birthday Gift";

  $("#brandText").textContent = c.brandText;
  $("#eyebrow").textContent = c.eyebrow;
  $("#heroTitle").innerHTML = `Happy Birthday, <span>${c.personName}</span>`;
  $("#heroMessage").textContent = c.heroMessage;
  $("#mainPhoto").src = c.mainPhoto;
  $("#noteOne").textContent = c.noteOne;
  $("#noteTwo").textContent = c.noteTwo;

  document.documentElement.style.setProperty("--accent", c.colors.accent);
  document.documentElement.style.setProperty("--accent-two", c.colors.accentTwo);
  document.documentElement.style.setProperty("--accent-three", c.colors.accentThree);

  $("#letterTitle").textContent = c.letterTitle;
  $("#letterBody").textContent = c.letterBody;
  $("#secretNote").textContent = c.secretNote;

  $("#reasonsTitle").textContent = c.reasonsTitle;
  $("#wishTitle").textContent = c.wishTitle;
  $("#wishBody").textContent = c.wishBody;

  renderReasons(c.reasons);
  renderTimeline(c.timeline);
  renderGallery(c.gallery);
}

let currentReasonIndex = 0;
let reasonItems = [];
let reasonIsAnimating = false;

function renderReasons(reasons) {
  reasonItems = reasons || [];
  currentReasonIndex = 0;

  if (!reasonItems.length) {
    $("#reasonNoteTitle").textContent = "No reasons added yet";
    $("#reasonNoteText").textContent = "";
    $("#reasonCounter").textContent = "";
    return;
  }

  updateReasonContent();
}

function updateReasonContent() {
  const reason = reasonItems[currentReasonIndex];

  $("#reasonNumber").textContent = String(currentReasonIndex + 1).padStart(2, "0");
  $("#reasonNoteTitle").textContent = reason.title;
  $("#reasonNoteText").textContent = reason.text;
  $("#reasonCounter").textContent = `${currentReasonIndex + 1} / ${reasonItems.length}`;
}

function showReason(newIndex, direction = "next") {
  if (!reasonItems.length || reasonIsAnimating) return;

  reasonIsAnimating = true;

  const card = $("#reasonNote");
  const outClass = direction === "next" ? "reason-slide-out-left" : "reason-slide-out-right";
  const inClass = direction === "next" ? "reason-slide-in-right" : "reason-slide-in-left";

  card.classList.remove(
    "reason-slide-out-left",
    "reason-slide-out-right",
    "reason-slide-in-left",
    "reason-slide-in-right"
  );

  card.classList.add(outClass);

  setTimeout(() => {
    currentReasonIndex = (newIndex + reasonItems.length) % reasonItems.length;
    updateReasonContent();

    card.classList.remove(outClass);

    void card.offsetWidth;

    card.classList.add(inClass);

    setTimeout(() => {
      card.classList.remove(inClass);
      reasonIsAnimating = false;
    }, 420);
  }, 220);
}

function setupReasonViewer() {
  const prev = $("#reasonPrev");
  const next = $("#reasonNext");

  if (!prev || !next) return;

  prev.addEventListener("click", () => {
    showReason(currentReasonIndex - 1, "prev");
  });

  next.addEventListener("click", () => {
    showReason(currentReasonIndex + 1, "next");
  });
}

function renderTimeline(items) {
  const timeline = $("#timeline");
  timeline.innerHTML = "";

  items.forEach((item) => {
    const block = document.createElement("article");
    block.className = "timeline-item";
    block.innerHTML = `
      <div class="timeline-date">${item.date}</div>
      <div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    `;
    timeline.appendChild(block);
  });
}

let currentMemoryIndex = 0;
let memoryItems = [];
let memoryIsAnimating = false;

function renderGallery(items) {
  memoryItems = items || [];
  currentMemoryIndex = 0;

  if (!memoryItems.length) {
    $("#memoryViewer").innerHTML = "<p>No memories added yet.</p>";
    return;
  }

  updateMemoryContent();
}

function updateMemoryContent() {
  const item = memoryItems[currentMemoryIndex];

  $("#memoryImage").src = item.image;
  $("#memoryImage").alt = item.caption;
  $("#memoryCaption").textContent = item.caption;
  $("#memoryCounter").textContent = `${currentMemoryIndex + 1} / ${memoryItems.length}`;
}

function showMemory(newIndex, direction = "next") {
  if (!memoryItems.length || memoryIsAnimating) return;

  memoryIsAnimating = true;

  const frame = document.querySelector(".memory-frame");

  const outClass = direction === "next" ? "memory-slide-out-left" : "memory-slide-out-right";
  const inClass = direction === "next" ? "memory-slide-in-right" : "memory-slide-in-left";

  frame.classList.remove(
    "memory-slide-out-left",
    "memory-slide-out-right",
    "memory-slide-in-left",
    "memory-slide-in-right"
  );

  frame.classList.add(outClass);

  setTimeout(() => {
    currentMemoryIndex = (newIndex + memoryItems.length) % memoryItems.length;
    updateMemoryContent();

    frame.classList.remove(outClass);

    void frame.offsetWidth;

    frame.classList.add(inClass);

    setTimeout(() => {
      frame.classList.remove(inClass);
      memoryIsAnimating = false;
    }, 420);
  }, 220);
}

function setupMemoryViewer() {
  const prev = $("#memoryPrev");
  const next = $("#memoryNext");
  const image = $("#memoryImage");

  if (!prev || !next || !image) return;

  prev.addEventListener("click", () => {
    showMemory(currentMemoryIndex - 1, "prev");
  });

  next.addEventListener("click", () => {
    showMemory(currentMemoryIndex + 1, "next");
  });

  image.addEventListener("click", () => {
    const item = memoryItems[currentMemoryIndex];
    if (item) openModal(item.image, item.caption);
  });
}

function updateCountdown() {
  const target = new Date(SITE_CONTENT.birthdayDate).getTime();
  const now = Date.now();
  const difference = target - now;

  if (Number.isNaN(target)) {
    $("#birthdayStatus").textContent = "Fix the birthdayDate inside content.js. Use this format: YYYY-MM-DDTHH:MM:SS";
    return;
  }

  if (difference <= 0) {
    $("#days").textContent = "00";
    $("#hours").textContent = "00";
    $("#minutes").textContent = "00";
    $("#seconds").textContent = "00";
    $("#birthdayStatus").textContent = "It is birthday time. Go celebrate properly.";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  $("#days").textContent = String(days).padStart(2, "0");
  $("#hours").textContent = String(hours).padStart(2, "0");
  $("#minutes").textContent = String(minutes).padStart(2, "0");
  $("#seconds").textContent = String(seconds).padStart(2, "0");
  $("#birthdayStatus").textContent = `Counting down to ${SITE_CONTENT.personName}'s birthday.`;
}

function setupRevealAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function setupSecretNote() {
  $("#openSecret").addEventListener("click", () => {
    $("#secretNote").classList.toggle("hidden");
  });
}

function setupThemeButton() {
  $("#themeButton").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
}

function setupMusic() {
  const toggle = $("#musicToggle");

  const youtubeSongUrl = "https://youtu.be/lC_oE025a1g";

  toggle.addEventListener("click", () => {
    spawnKisses(toggle, 12);
    window.open(youtubeSongUrl, "_blank", "noopener,noreferrer");
  });
}

function setupTilt() {
  const card = document.querySelector(".glass-photo");
  const area = document.querySelector(".hero-card");

  area.addEventListener("mousemove", (event) => {
    const rect = area.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotate(-3deg)`;
  });

  area.addEventListener("mouseleave", () => {
    card.style.transform = "rotate(-3deg)";
  });
}

function setupConfetti() {
  $("#confettiButton").addEventListener("click", () => {
    const colors = [
      SITE_CONTENT.colors.accent,
      SITE_CONTENT.colors.accentTwo,
      SITE_CONTENT.colors.accentThree,
      "#ffffff"
    ];

    for (let i = 0; i < 140; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      piece.style.left = `${Math.random() * 100}vw`;
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = `${Math.random() * 0.8}s`;
      piece.style.transform = `rotate(${Math.random() * 360}deg)`;
      document.body.appendChild(piece);

      setTimeout(() => piece.remove(), 4200);
    }
  });
}

function openModal(src, caption) {
  $("#modalImage").src = src;
  $("#modalImage").alt = caption;
  $("#imageModal").classList.remove("hidden");
  $("#imageModal").setAttribute("aria-hidden", "false");
}

function closeModal() {
  $("#imageModal").classList.add("hidden");
  $("#imageModal").setAttribute("aria-hidden", "true");
  $("#modalImage").src = "";
}

function setupModal() {
  $("#modalClose").addEventListener("click", closeModal);
  $("#imageModal").addEventListener("click", (event) => {
    if (event.target.id === "imageModal") closeModal();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}
function spawnKisses(element, amount = 24) {
  const rect = element.getBoundingClientRect();
  const startX = rect.left + rect.width / 2;
  const startY = rect.top + rect.height / 2;

  const kisses = ["💋", "💋", "💕", "❤️", "💖"];

  for (let i = 0; i < amount; i++) {
    const kiss = document.createElement("span");
    kiss.className = "kiss-pop";
    kiss.textContent = kisses[Math.floor(Math.random() * kisses.length)];

    const x = (Math.random() - 0.5) * 420;
    const y = -80 - Math.random() * 260;
    const rotate = (Math.random() - 0.5) * 80;

    kiss.style.left = `${startX}px`;
    kiss.style.top = `${startY}px`;
    kiss.style.setProperty("--kiss-x", `${x}px`);
    kiss.style.setProperty("--kiss-y", `${y}px`);
    kiss.style.setProperty("--kiss-rotate", `${rotate}deg`);
    kiss.style.animationDelay = `${Math.random() * 0.15}s`;

    document.body.appendChild(kiss);

    setTimeout(() => kiss.remove(), 1900);
  }
}

function setupKissAnimation() {
  document.querySelectorAll(".button.primary").forEach((button) => {
    button.addEventListener("click", () => {
      spawnKisses(button);
    });
  });
}
function setupHeartLock() {
  const lock = $("#heartLock");
  const button = $("#heartHoldButton");
  const progress = $("#holdProgress");

  if (!lock || !button || !progress) return;

  let holdTimer;
  let progressTimer;
  let progressValue = 0;

  const startHold = () => {
    progressValue = 0;
    progress.style.width = "0%";

    progressTimer = setInterval(() => {
      progressValue += 5;
      progress.style.width = `${Math.min(progressValue, 100)}%`;
    }, 100);

    holdTimer = setTimeout(() => {
      clearInterval(progressTimer);
      progress.style.width = "100%";
      lock.classList.add("unlocked");
      spawnKisses(button, 36);

      setTimeout(() => {
        lock.remove();
      }, 900);
    }, 2000);
  };

  const cancelHold = () => {
    clearTimeout(holdTimer);
    clearInterval(progressTimer);
    progressValue = 0;
    progress.style.width = "0%";
  };

  button.addEventListener("mousedown", startHold);
  button.addEventListener("touchstart", startHold);

  button.addEventListener("mouseup", cancelHold);
  button.addEventListener("mouseleave", cancelHold);
  button.addEventListener("touchend", cancelHold);
}
function setupLoveQuestion() {
  const gate = $("#loveGate");
  const card = document.querySelector(".love-gate-card");
  const yesButton = $("#yesLoveButton");
  const noButton = $("#noLoveButton");

  if (!gate || !card || !yesButton || !noButton) return;

  let noClickCount = 0;

  function moveNoButtonAway(event) {
    event.preventDefault();

    noClickCount += 1;

    noButton.classList.add("running");
    noButton.style.display = "inline-flex";
    noButton.style.visibility = "visible";
    noButton.style.opacity = "1";

    const padding = 24;
    const cardWidth = card.clientWidth;
    const cardHeight = card.clientHeight;
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const minX = padding;
    const minY = padding;
    const maxX = cardWidth - buttonWidth - padding;
    const maxY = cardHeight - buttonHeight - padding;

    const newX = minX + Math.random() * Math.max(1, maxX - minX);
    const newY = minY + Math.random() * Math.max(1, maxY - minY);

    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
    noButton.style.transform = `rotate(${(Math.random() - 0.5) * 24}deg)`;

    if (noClickCount === 1) {
      noButton.textContent = "Still no?";
    } else if (noClickCount === 2) {
      noButton.textContent = "Try again";
    } else if (noClickCount === 3) {
      noButton.textContent = "Not happening";
    } else {
      noButton.textContent = "No";
    }
  }

  yesButton.addEventListener("click", () => {
    spawnKisses(yesButton, 34);
    gate.classList.add("hidden-love");

    setTimeout(() => {
      gate.remove();
    }, 800);
  });

  noButton.addEventListener("click", moveNoButtonAway);
}
let currentQuizIndex = 0;

function setupMemoryQuiz() {
  const fallbackQuiz = [
    {
      question: "Who said I love you first?",
      options: ["Me", "You", "We both said it at the same time"],
      correctIndex: 1
    },
    {
      question: "What am I to you?",
      options: ["Just someone", "Your headache", "Your favorite person"],
      correctIndex: 2
    },
    {
      question: "What should you choose forever?",
      options: ["Me", "Also me", "Still me"],
      correctIndex: 0
    }
  ];

  const quiz = SITE_CONTENT.memoryQuiz || fallbackQuiz;

  const quizSection = $("#quizSection");
  const question = $("#quizQuestion");
  const options = $("#quizOptions");
  const feedback = $("#quizFeedback");
  const progress = $("#quizProgress");
  const gallerySection = $("#gallerySection");

  if (!quizSection || !question || !options || !feedback || !progress) {
    console.error("Quiz HTML is missing. Check quizSection, quizQuestion, quizOptions, quizFeedback, quizProgress.");
    return;
  }

  function showQuizQuestion() {
    const item = quiz[currentQuizIndex];

    progress.textContent = `Question ${currentQuizIndex + 1} / ${quiz.length}`;
    question.textContent = item.question;
    feedback.textContent = "";
    options.innerHTML = "";

    item.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.className = "quiz-option";
      button.type = "button";
      button.textContent = option;

      button.addEventListener("click", () => {
        if (index === item.correctIndex) {
          button.classList.add("correct");
          feedback.textContent = "Correct. Obviously you know me.";
          spawnKisses(button, 18);

          setTimeout(() => {
            currentQuizIndex += 1;

            if (currentQuizIndex >= quiz.length) {
              unlockGallery();
            } else {
              showQuizQuestion();
            }
          }, 900);
        } else {
          button.classList.add("wrong");
          feedback.textContent = "Wrong, but you’re still cute. Try again.";

          setTimeout(() => {
            button.classList.remove("wrong");
          }, 650);
        }
      });

      options.appendChild(button);
    });
  }

  function unlockGallery() {
    feedback.textContent = "Fine. You unlocked the memories ♡";

    if (gallerySection) {
      gallerySection.classList.remove("hidden");
      gallerySection.classList.add("visible");

      setTimeout(() => {
        gallerySection.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 900);
    } else {
      console.warn("Gallery section not found. Add id='gallerySection' to the gallery section.");
    }
  }

  showQuizQuestion();
}

function setupCatchHeartGame() {
  const area = $("#catchArea");
  const heart = $("#catchHeart");
  const message = $("#catchMessage");

  if (!area || !heart || !message) return;

  let caught = false;
  let moveTimer;

  function moveHeart() {
    if (caught) return;

    const padding = 18;
    const heartWidth = heart.offsetWidth;
    const heartHeight = heart.offsetHeight;

    const maxX = area.clientWidth - heartWidth - padding;
    const maxY = area.clientHeight - heartHeight - padding;

    const x = padding + Math.random() * Math.max(1, maxX - padding);
    const y = padding + Math.random() * Math.max(1, maxY - padding);

    heart.style.left = `${x + heartWidth / 2}px`;
    heart.style.top = `${y + heartHeight / 2}px`;
  }

  function startGame() {
    moveHeart();

    moveTimer = setInterval(() => {
      moveHeart();
    }, 900);
  }

  heart.addEventListener("click", () => {
    if (caught) return;

    caught = true;
    clearInterval(moveTimer);

    heart.classList.add("caught");
    heart.textContent = "♥";
    message.textContent = "You caught my heart. Again.";

    spawnKisses(heart, 34);
  });

  startGame();
}

applyContent();
updateCountdown();
setInterval(updateCountdown, 1000);
setupRevealAnimation();
setupSecretNote();
setupThemeButton();
setupMusic();
setupTilt();
setupConfetti();
setupModal();
setupKissAnimation();
setupHeartLock();
setupMemoryViewer();
setupReasonViewer();
setupLoveQuestion();
setupMemoryQuiz();
setupCatchHeartGame();