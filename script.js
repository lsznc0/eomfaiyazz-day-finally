/* ================================================================
   A little surprise for you ♡  —  script.js
   ----------------------------------------------------------------
   PART 1 (just below) is the ONLY part you need to edit.
   Everything after the line marked "DON'T NEED TO EDIT" is the
   machinery that makes the site work.

   Tip: use straight quotes ' ' around text. If your message has an
   apostrophe, use the curly one (’) so nothing breaks.
   ================================================================ */
'use strict';

/* ================================================================
   PART 1 — CUSTOMIZE ME
   ================================================================ */

/* ---------- Names + main messages ---------- */
const CONFIG = {
  // Her name. Shown on the envelope, the birthday title, the letter and more.
  herName: 'kyla',

  // Your name or nickname. Used to sign the letters.
  myName: '10',

  // Short line shown right after the envelope opens.
  introWelcome: 'this is my smol birthday gift',

  // Message on the Home section.
  welcomeMessage:
    'Every corner of this little world is stitched together from our messages, our interactions, and all the small ways you make my days better. Take your time and open everything. There are a few secrets hidden around, too.',

  // Greeting on the Birthday section.
  birthdayGreeting:
    'Im so grateful I got to know you this year :), I hope today is soft, silly, and full of everything you love.',
};

/* ---------- Section 3: The letter ---------- */
const LETTER = {
  typingSpeedMs: 20,            // lower = faster typing
  signOff: 'Forever yours,',    // your name comes after this automatically
  paragraphs: [
    'I’ve been trying to figure out how to put this into words, and I keep ending up in the same place: thank you. Thank you for showing up in my days, even on the ones when I’m quiet or tired or a little bit lost.',
    'You have turned a screen into the warmest place I know. The good morning messages,  the little updates throughout the day, and all the random conversations that somehow become my favorite part of the day. All of it feels like home to me now.',
    'I love how you care about the small things. How you remember what I said last week, how you laugh at your own jokes before you finish them, how you make my ordinary days feel worth telling you about.',
    'Today is about you, so I want you to know this: you are loved, really loved, in a way that doesn’t need a perfect setting or a special occasion. It’s in every message I send, every little thought of you throughout the day, and all the moments when I find myself smiling because something reminded me of you.',
    'Happy birthday po, baby. I hope this year is gentle with you and generous to you. I’m so proud of you, and I’m so grateful that you are here with me.',
  ],
};

/* ---------- Home: random compliment button ---------- */
const COMPLIMENTS = [
  'You have the kind of laugh that makes a bad day feel smaller.',
  'Your kindness is quiet, steady, and impossible to miss.',
  'Kung ang ganda mo ay bagyo, matagal na akong nagpa-anod.',
  'You’re smart in ways you don’t give yourself credit for.',
  'Wala akong balak maging astronaut, pero handa akong umikot sa mundo mo',
  'Kung ang mga tala ay may kani-kaniyang ningning, ikaw ang dahilan kung bakit tumitingala ako.',
  'Ikaw ang pahinga sa mundong hindi marunong huminto.',
  'Sa tanang gamayng butang nga makapalipay sa adlaw, apil ka pirmi.',
  'Your messages could cheer up the rainiest Monday.',
  'Kung ikaw ay assignment, hindi kita ipapasa sa iba. Akin ka na lang charot.',
  'You make me want to be a better person, and you don’t even try.',
];


/* ---------- Section 5: 30 things I adore about you ----------
   Edit the sentences, add or remove lines. Keep the commas. */
const REASONS = [
  'Your presence.',
  'Your laugh.',
  'How you remember the tiny details I only mention once.',
  'The patience you have with me on my worst days.',
  'The way you get excited over things you genuinely love.',
  'How you make distance feel like a technicality.',
  'The way u feel giddy when you talk about things you love.',
  'How you make me feel appreciated without making a big deal out of it.',
  'Your sense of humor, and your very questionable puns.',
  'How you hype me up before anything important.',
  'Your ability to be cute and annoying at the exact same time.',
  'You make me want to be a better person.',
  'Your talent for distracting me from literally everything else.',
  'How you never stop growing, even when the process gets uncomfortable.',
  'You make me feel like I don’t have to earn the right to be loved.',
  'You love fiercely and quietly at the same time.',
  'Your dreams, and how seriously you chase them.',
  'The inside jokes only we understand.',
  'How you make an ordinary Tuesday feel like a little celebration.',
  'Your curiosity about the world, and about me.',
  'How gracefully you apologize and forgive.',
  'The way you make me want to experience more of life.',
  'Your messages that arrive right when I need them.',
  'The way you believe in me before I believe in myself.',
  'You remind me that I don’t have to have everything figured out right now.',
  'How being loved by you has made my world feel a little kinder.',
  'The effort you put into us, every single day.',
  'Your softness, and the strength underneath it.',
  'How easy it is to be completely myself with you.',
  'You’re you, and I’m so glad you’re part of my life.',
];

/* ---------- Section 6: Open When letters ----------
   `icon` options: i-cloud, i-heart, i-butterfly, i-moon, i-flower,
                   i-star, i-sun, i-bow, i-sparkle
   Use a blank line (two line breaks, \n\n) to start a new paragraph. */
const OPEN_WHEN_SIGNOFF = 'With all my love,';   // your name follows automatically

const OPEN_WHEN = [
  {
    title: 'Open when you’re sad',
    icon: 'i-cloud',
    message:
      'Hey, love.\n\nI don\'t know exactly what\'s making you sad right now, but I hope you know that you don\'t have to pretend to be okay just because it\'s easier that way.\n\nYou don\'t always have to be the happy, cheerful version of yourself. You\'re allowed to have bad days, to feel things deeply, to be frustrated, and to not have everything figured out.\n\nI wish I could take away whatever is weighing on your heart, but since I can\'t, I hope these words can remind you that you\'re not alone in whatever you\'re going through.\n\nPlease be gentle with yourself, okay? Don\'t be too hard on someone who\'s trying her best. I\'m proud of you, even on days when you feel like you haven\'t done enough.\n\nAnd if today wasn\'t a good day, that\'s okay. You get another chance tomorrow.\n\nI love you, baby. Always.\n\n P.S. Di mo kailangang mag smile para mahalin kita, okay?',
  },
  {
    title: 'Open when you miss me',
    icon: 'i-heart',
    message:
      'Hi, baby. Miss muko? HAHAHAHAHAHHQHAHHAH awit.\n\nI know distance isn\'t always easy. There are probably moments when you wish things were a little different, when having someone beside you would be much nicer than staring at a screen.\n\nI miss you, moreee. More than I probably know how to explain.\n\nBut I hope you never forget that just because we\'re not physically in the same place doesn\'t mean you\'re any less a part of my everyday life.\n\nYou\'re in the little things I see, the random thoughts I have, and the stories I can\'t wait to tell you.\n\nSo whenever you miss me, remember that somewhere, I\'m probably thinking about you, too.\n\nFor now, consider this letter a little hug from me. A very long one, actually. No escaping.\n\nI love you, pretty girl. \n\n Sending approximately one million virtual hugs :>.',
  },
  {
    title: 'Open when you’re overthinking',
    icon: 'i-butterfly',
    message:
      'Hey, my love.\n\nFirst things first, take a deep breath. You don\'t have to figure everything out right this second.\n\nI know sometimes your mind can make a thousand different scenarios out of one little thing. I wish you could see yourself the way I see you, because I don\'t think you\'d spend so much time doubting yourself.\n\nPlease don\'t let your thoughts convince you of things that aren\'t true. Not every silence means something is wrong, not every bad day means something is falling apart, and not every uncertainty needs an immediate answer.\n\nAnd when it comes to us, please remember that we\'re on the same team. You don\'t have to guess how I feel or carry your worries alone.\n\nIf something bothers you, tell me. If something scares you, let me know. I\'d rather understand what\'s going on in your mind than have you deal with everything by yourself.\n\nOne thing at a time, okay?\n\n Your brain deserves a day off, too. You\'re doing better than you think. ',
  },
  {
    title: 'Open when you can’t sleep',
    icon: 'i-moon',
    message:
      'Can\'t sleep, baby?\n\n Siyempre kasi binabasa mo \'to eih 8080 ko nmn . Since you\'re awake reading this, I guess I\'ll keep you company through this letter for a little while.\n\nI hope you\'ve been taking care of yourself today. I hope you ate properly, drank enough water, and didn\'t spend the entire day worrying about things you can\'t control.\n\nYou deserve rest. Not just the kind where you close your eyes, but the kind where your mind finally gets to be quiet, too.\n\nI hope tonight you can set aside all the things you\'ve been thinking about. Tomorrow can wait. Your responsibilities can wait. You don\'t have to be productive every second of the day.\n\nFor now, just get comfortable, close your eyes, and let yourself rest.\n\nImagine me telling you to stop scrolling and go to sleep. Seryuso to ha HAHHAHAHAHAHAHHSAKHS.\n\nGoodnight, my favorite person. I hope you wake up feeling a little lighter.\n\nSweet dreams, love.',
  },
  {
    title: 'Open when you feel insecure',
    icon: 'i-flower',
    message:
      'Hi, pretty girl.\n\nI wish you could borrow my eyes for a moment and see all the things I find beautiful about you.\n\nAnd I\'m not just talking about how you look. I mean the way you think, the way you care, the way you express yourself, and all those little things that make you who you are.\n\nI know there might be days when you compare yourself to other people or find little things about yourself that you wish were different.\n\nBut please don\'t be so unkind to yourself.\n\nYou don\'t have to look a certain way, act a certain way, or become someone else just to be worthy of love and appreciation.\n\nYou are already someone worth loving.\n\nI hope you never feel like you have to compete with anyone for a place in my heart. There\'s no competition here, okay?\n\nYou\'re my baby, and I\'m very lucky to have you.\n\nNow stop being mean to my pretty girl. Thank you.\n\nP.S. Still the pinakamagandang babae sa balat ng encantadia (in my very biased opinion btw).',
  },
  {
    title: 'Open when you need motivation',
    icon: 'i-star',
    message:
      'Hey!\n\nYou\'ve got dreams you\'re working towards, things you want to accomplish, and probably a few things that feel a little too difficult right now.\n\nBut I hope you don\'t give up on yourself just because progress feels slow.\n\nYou don\'t have to get everything right on your first try. You don\'t have to be the best in the room. You don\'t even have to know exactly what you\'re doing all the time.\n\nWhat matters is that you keep showing up for yourself.\n\nI\'m proud of the effort you put into the things that matter to you, even the efforts nobody else gets to see.\n\nAnd please remember that resting isn\'t the same as giving up. You\'re allowed to take breaks. You\'re allowed to make mistakes. You\'re allowed to start again.\n\nI believe in you, po. Not just in what you can achieve, but in the person you\'re becoming.\n\nOne step at a time, bb. Kaya mo po to.\n\nYour number one supporter is always cheering for you.\n\n And yes fan na fan muko heEEEYYY I\'ll always be your loudest little supporter po!',
  },
  {
    title: 'Open when you want to smile',
    icon: 'i-sun',
    message:
      'HELLOOOOO, CUTIE!\n\nI was informed that someone needed a little happiness, so naturally, your favorite person has arrived. HAHAHAHAHAHWAHAA daming alam ampota.\n\nOkai seyuso n.\n\nDid you know that you\'re actually one of my favorite reasons to smile? Sometimes I remember something you said, one of your random jokes, or something completely ridiculous we talked about, and suddenly I\'m smiling at my screen like an idiot.\n\nHonestly, you have no business being this adorable.\n\nI hope you never lose that silly side of yours. The random stories, the unnecessary reactions, the little things that make you laugh. I love seeing you happy, especially when you\'re not even trying to be.\n\nHere\'s your reminder that you\'re pretty, funny, lovable, and occasionally a little bit of a headache.\n\nBut you\'re my favorite headache, so it\'s fine.\n\nNow give me your biggest smile. Yes, even if nobody\'s watching.\n\nI love you!\n\nUUuuuyy naga smile na sha haayayhahhahahahha lakas tlga ng tama mo sakenn eih nu :)',
  },
  {
    title: 'Open when you need reassurance',
    icon: 'i-bow',
    message:
      'Hi baby ko.\n\nIf you\'re reading this because you need a little reassurance, then let me remind you of a few things.\n\nI love you. I\'m happy that I get to know you, and I\'m grateful that we found each other.\n\nYou don\'t have to be perfect with me. You don\'t have to have the right words all the time. You don\'t have to hide your feelings just because you\'re afraid they might be too much.\n\nI want you to feel comfortable being yourself with me, even on the days when you\'re not feeling your best.\n\nAnd please don\'t ever think that one misunderstanding, one difficult conversation, or one bad day makes you any less important to me.\n\nWe can learn, communicate, understand each other, and figure things out together.\n\nI can\'t promise that every day will be easy, but I can promise that what we have is something I genuinely treasure.\n\nSo whenever you need to hear it again, here it is:\n\nYou\'re loved. You\'re appreciated. You\'re important to me.\n\nAnd I\'m really, really glad it\'s you.\n\nP.S. If you ever forget, you can read this as many times as you need. :))',
  },
];

/* ---------- Section 7: Playlist ----------
   HOW TO ADD YOUR OWN SONGS:
1. Put your MP3 files inside the "audio" folder next to index.html.
2. Change `src`, `title`, `artist` and the `note` (why this song matters).
3. `cover` is optional: put an image in "images" and write its path,
      or leave it as '' to use the default pink album cover.
   If a file can't be found, the player tells you which path is missing. */
const PLAYLIST = [
  { title: 'Sweet',          artist: 'Cigarettes After Sex',  src: 'audio/Sweet.mp3', cover: 'images/Opera House.jpg', note: 'For our quiet, late-night moments when just talking to you makes everything feel calm and safe.' },
  { title: 'Tattooed Heart', artist: 'Ariana Grande',        src: 'audio/Tattooed Heart.mp3', cover: 'images/Ariana Grande – Yours Truly.jpg', note: 'Because what I feel for you isn’t temporary—you’re permanently in my heart, no matter what ♡' },
  { title: 'Stick With You', artist: 'TOMORROW X TOGETHER',   src: 'audio/Stick With You.mp3', cover: 'images/844495367672293260.jpg', note: 'A little reminder that on your good days and your heavy ones, I’m always staying right by your side.' },
  { title: 'Far Away',       artist: 'NCT WISH',              src: 'audio/FAR AWAY.mp3', cover: 'images/WISHFUL.jpg', note: 'Even when there’s distance between us, you’re always the closest person to my heart.' },
];

/* ---------- Section 8: The final birthday message ---------- */
const FINAL_MESSAGE = {
  title: 'Happy birthday',           // her name is added after this
  paragraphs: [
    'I hope every wish you just made comes true.',
    'And I hope you know that you’re already someone’s biggest wish come true. You’re mine.',
    'Thank you for being exactly who you are, for every moment, every message, every laugh that breaks the silence. I’m so proud of you. I love you, today and every day after. :>',
  ],
  signOff: 'Always yours,',            // your name is added after this
};

/* ---------- Secret messages (hidden hearts, stars and stickers) ---------- */
const SECRETS = {
  star:    'You found a secret star! Galing maghanap ahhhhh parang ganun lng nung nahanap mo ‘ko..',
  flower:  'A hidden flower! I’d choose you and pick you out of any garden btw :>',
  heart:   'Nahanap mo yung heart. Isauli mo na kaya yung akin ? :) matagal mo nang tinangay eh.',
  bow:     'May nahanap kang ribbon. Wala na, panalo ka na naman sa pa-cute.',
  sparkle: 'Hidden sparkle! Kahit simple lng ‘tong ginawa ko, sana nmn napangiti po kita ngayon :)',
};
const ALL_SECRETS_MESSAGE =
  'at dahil 5/5 ka s quiz panalo ka ng washing machine with dryer! emeeee HAHAHAJAHJAHJAHJAAHAJAUAKA, unli kiss nlng sa pisnge and sa lips HEHHEEHEHH ss mo ‘to at isend saken para ma-claim bago mag expire'

/* ================================================================
   ================================================================
   DON'T NEED TO EDIT BELOW THIS LINE
   ================================================================
   ================================================================ */

/* ---------- Helpers ---------- */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const rand = (min, max) => Math.random() * (max - min) + min;
const pick = (list) => list[Math.floor(Math.random() * list.length)];
const scrollBehavior = () => (reduceMotion ? 'auto' : 'smooth');

/* Fill every element marked data-bind="..." with the matching CONFIG value */
function bindText() {
  $$('[data-bind]').forEach((el) => {
    const value = CONFIG[el.dataset.bind];
    if (value !== undefined) el.textContent = value;
  });
}

/* Pretty placeholder shown when an image file is missing */
function placeholderImage(label) {
  const safe = String(label).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffdbe4"/><stop offset="1" stop-color="#e3d4f5"/></linearGradient></defs>' +
    '<rect width="400" height="400" fill="url(#g)"/>' +
    '<g transform="translate(140 125) scale(5)" fill="#fff" opacity=".9"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></g>' +
    '<text x="200" y="320" font-family="Georgia,serif" font-size="24" text-anchor="middle" fill="#7b5a52">Your photo here</text>' +
    '<text x="200" y="352" font-family="monospace" font-size="15" text-anchor="middle" fill="#a8506b">' + safe + '</text>' +
    '</svg>';
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

/* Set an <img> source and fall back to the placeholder if it fails to load */
function setImage(img, src) {
  img.onerror = () => {
    img.onerror = null;
    img.src = placeholderImage(src);
  };
  img.src = src;
}

/* ---------- Toast (small message bubble) ---------- */
const toastEl = $('#toast');
let toastTimer = null;

function hideToast() {
  toastEl.classList.remove('show');
}

function showToast(message, { title = '', duration = 5200 } = {}) {
  clearTimeout(toastTimer);
  toastEl.replaceChildren();
  if (title) {
    const strong = document.createElement('strong');
    strong.textContent = title;
    toastEl.appendChild(strong);
  }
  const text = document.createElement('span');
  text.textContent = message;
  toastEl.appendChild(text);
  toastEl.classList.add('show');
  toastTimer = setTimeout(hideToast, duration);
}
toastEl.addEventListener('click', hideToast);

/* ---------- Modal helpers (focus handling, Esc, backdrop) ---------- */
let activeModal = null;
let lastFocused = null;

function openModal(modal, focusTarget) {
  lastFocused = document.activeElement;
  activeModal = modal;
  modal.hidden = false;
  requestAnimationFrame(() => modal.classList.add('is-open'));
  document.body.classList.add('modal-open');
  const target = focusTarget || $('.modal-close', modal);
  if (target) target.focus({ preventScroll: true });
}

function closeModal(modal = activeModal) {
  if (!modal) return;
  modal.classList.remove('is-open');
  setTimeout(() => {
    if (!modal.classList.contains('is-open')) modal.hidden = true;
  }, reduceMotion ? 0 : 260);
  document.body.classList.remove('modal-open');
  if (activeModal === modal) activeModal = null;
  if (lastFocused && lastFocused.focus) lastFocused.focus({ preventScroll: true });
  modal.dispatchEvent(new CustomEvent('modalclosed'));
}

function trapTab(event, container) {
  if (event.key !== 'Tab') return;
  const focusable = $$('button, [href], input, [tabindex]:not([tabindex="-1"])', container)
    .filter((el) => !el.disabled && !el.closest('[hidden]') && el.getClientRects().length > 0);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function setupModals() {
  $$('.modal').forEach((modal) => {
    modal.addEventListener('click', (event) => {
      if (event.target.closest('[data-close]')) closeModal(modal);
    });
  });
  document.addEventListener('keydown', (event) => {
    if (!activeModal) return;
    if (event.key === 'Escape') closeModal(activeModal);
    else trapTab(event, activeModal);
  });
}

/* ---------- Floating hearts, stars and sparkles ---------- */
function spawnFloaters(container, count) {
  if (!container || reduceMotion) return;
  const icons = ['i-heart', 'i-heart', 'i-star', 'i-sparkle'];
  const colors = ['#f4a3b8', '#f8bfcc', '#e3d4f5', '#f2d388', '#ffffff'];
  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = 'floater';
    el.style.setProperty('--x', rand(2, 96).toFixed(1) + '%');
    el.style.setProperty('--size', rand(12, 24).toFixed(0) + 'px');
    el.style.setProperty('--dur', rand(16, 30).toFixed(1) + 's');
    el.style.setProperty('--delay', (-rand(0, 28)).toFixed(1) + 's');
    el.style.setProperty('--drift', rand(-40, 40).toFixed(0) + 'px');
    el.style.setProperty('--c', pick(colors));
    el.innerHTML = '<svg class="icon" aria-hidden="true"><use href="#' + pick(icons) + '"/></svg>';
    container.appendChild(el);
  }
}

/* Slow confetti pieces that fall behind the Birthday section */
function spawnConfettiRain(container, count) {
  if (!container || reduceMotion) return;
  const colors = ['#f8bfcc', '#e3d4f5', '#f2d388', '#ffdbe4', '#c76f88', '#ffffff'];
  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = 'cf';
    el.style.setProperty('--x', rand(0, 100).toFixed(1) + '%');
    el.style.setProperty('--w', rand(6, 10).toFixed(0) + 'px');
    el.style.setProperty('--c', pick(colors));
    el.style.setProperty('--r', rand(0, 360).toFixed(0) + 'deg');
    el.style.setProperty('--dur', rand(12, 22).toFixed(1) + 's');
    el.style.setProperty('--delay', (-rand(0, 20)).toFixed(1) + 's');
    el.style.setProperty('--drift', rand(-50, 50).toFixed(0) + 'px');
    container.appendChild(el);
  }
}

/* ---------- Confetti bursts (canvas) ---------- */
const confetti = (() => {
  const canvas = $('#confettiCanvas');
  const ctx = canvas.getContext ? canvas.getContext('2d') : null;
  const colors = ['#f8bfcc', '#e58aa3', '#c76f88', '#e3d4f5', '#a98bd0', '#f2d388', '#ffffff', '#ffdbe4'];
  let particles = [];
  let running = false;
  let width = 0;
  let height = 0;

  function resize() {
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawHeart(s) {
    ctx.beginPath();
    ctx.moveTo(0, s * 0.3);
    ctx.bezierCurveTo(0, 0, -s * 0.5, 0, -s * 0.5, s * 0.3);
    ctx.bezierCurveTo(-s * 0.5, s * 0.6, 0, s * 0.8, 0, s);
    ctx.bezierCurveTo(0, s * 0.8, s * 0.5, s * 0.6, s * 0.5, s * 0.3);
    ctx.bezierCurveTo(s * 0.5, 0, 0, 0, 0, s * 0.3);
    ctx.fill();
  }

  function frame() {
    ctx.clearRect(0, 0, width, height);
    particles = particles.filter((p) => p.life > 0 && p.y < height + 40);
    for (const p of particles) {
      p.vy += 0.18;
      p.vx *= 0.992;
      p.vy *= 0.992;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      p.tilt += 0.12;
      p.life -= 1;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = Math.min(1, p.life / 40);
      ctx.fillStyle = p.color;
      if (p.shape === 'heart') {
        drawHeart(p.size);
      } else if (p.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2.4, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.scale(1, Math.cos(p.tilt));
        ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.6);
      }
      ctx.restore();
    }
    if (particles.length) {
      requestAnimationFrame(frame);
    } else {
      running = false;
      ctx.clearRect(0, 0, width, height);
    }
  }

  function burst({ x = 0.5, y = 0.6, count = 120, angle = -Math.PI / 2, spread = Math.PI * 0.9 } = {}) {
    if (reduceMotion || !ctx) return;
    if (!width) resize();
    const shapes = ['rect', 'rect', 'circle', 'heart'];
    for (let i = 0; i < count; i++) {
      const a = angle + (Math.random() - 0.5) * spread;
      const speed = rand(6, 15);
      particles.push({
        x: x * width,
        y: y * height,
        vx: Math.cos(a) * speed,
        vy: Math.sin(a) * speed,
        rot: rand(0, Math.PI * 2),
        vr: rand(-0.2, 0.2),
        tilt: rand(0, Math.PI * 2),
        size: rand(7, 14),
        color: pick(colors),
        shape: pick(shapes),
        life: rand(170, 280),
      });
    }
    if (!running) {
      running = true;
      requestAnimationFrame(frame);
    }
  }

  window.addEventListener('resize', resize);
  resize();
  return { burst };
})();

/* ---------- Section 1: Welcome envelope ---------- */
const intro = (() => {
  const root = $('#intro');
  const envelope = $('#envelope');
  const hint = $('#introHint');
  const welcome = $('#introWelcome');
  const welcomeText = $('#welcomeText');
  const button = $('#openBtn');
  let opened = false;

  function openEnvelope() {
    if (opened) return;
    opened = true;
    envelope.classList.add('open');
    envelope.setAttribute('aria-expanded', 'true');
    envelope.tabIndex = -1;
    root.classList.add('is-open');
    hint.hidden = true;
    button.disabled = true;
    setTimeout(() => {
      welcome.hidden = false;
      // let the browser paint once so the fade-in transition runs
      requestAnimationFrame(() => welcome.classList.add('show'));
      button.textContent = 'Step inside ♡';
      button.disabled = false;
      button.focus({ preventScroll: true });
      button.scrollIntoView({ block: 'nearest', behavior: scrollBehavior() });
    }, reduceMotion ? 0 : 1700);
  }

  function enterSite() {
    root.classList.add('leaving');
    document.body.classList.remove('is-locked');
    document.body.classList.add('is-entered');
    window.scrollTo(0, 0);
    site.start();
    confetti.burst({ x: 0.5, y: 0.75, count: 90 });
    setTimeout(() => root.classList.add('gone'), reduceMotion ? 0 : 1100);
  }

  function init() {
    welcomeText.textContent = 'hiiiiiii, ' + ' baby !' + ' ♡ ' + CONFIG.introWelcome;
    spawnFloaters($('#introFloaters'), window.innerWidth < 600 ? 9 : 14);
    envelope.addEventListener('click', () => openEnvelope());
    button.addEventListener('click', () => {
      if (!opened) openEnvelope();
      else enterSite();
    });
  }

  return { init };
})();

/* ---------- Navigation, scroll reveal, back to top ---------- */
const site = (() => {
  let started = false;
  const nav = $('#nav');
  const navToggle = $('#navToggle');
  const backToTop = $('#backToTop');

  function setNavOpen(open) {
    nav.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  function setActive(id) {
    $$('.nav-list a').forEach((link) => {
      const isActive = link.getAttribute('href') === '#' + id;
      link.classList.toggle('active', isActive);
      if (isActive) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  function setupNav() {
    navToggle.addEventListener('click', () => setNavOpen(!nav.classList.contains('is-open')));

    $$('.nav-list a').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = $(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
        setNavOpen(false);
      });
    });

    document.addEventListener('click', (event) => {
      if (nav.classList.contains('is-open') && !event.target.closest('#nav')) setNavOpen(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        setNavOpen(false);
        navToggle.focus();
      }
    });

    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: scrollBehavior() }));
    const onScroll = () => backToTop.classList.toggle('show', window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function setupObservers() {
    const reveals = $$('.reveal');
    if (!('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('in-view'));
      letter.start();
      return;
    }

    // Fade sections in as they enter the screen
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    reveals.forEach((el) => revealObserver.observe(el));

    // Highlight the section currently in the middle of the screen
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main .section').forEach((section) => sectionObserver.observe(section));

    // Start the typing animation the first time the letter is on screen
    const letterObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        letter.start();
        letterObserver.disconnect();
      }
    }, { threshold: 0.3 });
    letterObserver.observe($('#paper'));
  }

  function start() {
    if (started) return;
    started = true;
    spawnFloaters($('#floaters'), window.innerWidth < 600 ? 8 : 13);
    setupObservers();
    setActive('home');
  }

  setupNav();
  return { start };
})();

/* ---------- Home: random compliment ---------- */
function setupCompliments() {
  const button = $('#complimentBtn');
  const output = $('#complimentText');
  let last = -1;

  button.addEventListener('click', () => {
    let index;
    do {
      index = Math.floor(Math.random() * COMPLIMENTS.length);
    } while (index === last && COMPLIMENTS.length > 1);
    last = index;

    output.hidden = false;
    output.textContent = COMPLIMENTS[index];
    // restart the little pop animation
    output.style.animation = 'none';
    void output.offsetWidth;
    output.style.animation = '';
    button.textContent = 'Another one ♡';
  });
}

/* ---------- Section 3: Letter with typing animation ---------- */
const letter = (() => {
  const body = $('#letterBody');
  const sign = $('#letterSign');
  let chars = [];
  let timer = null;
  let token = 0;
  let started = false;

  // Build one <span> per character. The full text is always in the layout,
  // so nothing jumps around while it "types".
  function build() {
    body.textContent = '';
    chars = [];
    LETTER.paragraphs.forEach((text) => {
      const p = document.createElement('p');
      Array.from(text).forEach((character) => {
        const span = document.createElement('span');
        span.className = 'ch';
        span.textContent = character;
        p.appendChild(span);
        chars.push(span);
      });
      body.appendChild(p);
    });
    $('#letterSignOff').textContent = LETTER.signOff;
  }

  function reset() {
    clearTimeout(timer);
    token += 1;
    chars.forEach((c) => c.classList.remove('on', 'cur'));
    sign.classList.remove('is-visible');
  }

  function showAll() {
    clearTimeout(timer);
    token += 1;
    chars.forEach((c) => {
      c.classList.add('on');
      c.classList.remove('cur');
    });
    sign.classList.add('is-visible');
  }

  function type() {
    reset();
    if (reduceMotion) {
      showAll();
      return;
    }
    const myToken = token;
    let i = 0;
    (function step() {
      if (myToken !== token) return;
      if (i > 0) chars[i - 1].classList.remove('cur');
      if (i >= chars.length) {
        sign.classList.add('is-visible');
        return;
      }
      chars[i].classList.add('on', 'cur');
      const character = chars[i].textContent;
      i += 1;
      let delay = LETTER.typingSpeedMs;
      if ('.!?'.includes(character)) delay += 220;
      else if (',;:'.includes(character)) delay += 90;
      timer = setTimeout(step, delay);
    })();
  }

  function start() {
    if (started) return;
    started = true;
    type();
  }

  function init() {
    build();
    $('#replayLetter').addEventListener('click', () => {
      started = true;
      type();
    });
    $('#skipLetter').addEventListener('click', () => {
      started = true;
      showAll();
    });
  }

  return { init, start };
})();

/* ---------- Section 5: Reasons ---------- */
const reasons = (() => {
  const grid = $('#reasonGrid');
  const labelEl = $('#reasonLabel');
  const textEl = $('#reasonText');
  const progressEl = $('#reasonProgress');
  const opened = new Set();     // reasons already shown in this round
  let current = -1;

  function updateProgress() {
    if (opened.size >= REASONS.length) {
      progressEl.textContent = 'All ' + REASONS.length + ' opened ♡ Tap again and I’ll start the list over.';
    } else {
      progressEl.textContent = opened.size + ' of ' + REASONS.length + ' opened';
    }
  }

  function show(index) {
    current = index;
    opened.add(index);
    $$('.reason-heart', grid).forEach((heart, i) => {
      heart.classList.toggle('is-current', i === index);
      heart.classList.toggle('is-opened', opened.has(i));
    });

    const swap = () => {
      labelEl.textContent = 'Reason #' + (index + 1);
      textEl.textContent = REASONS[index];
      textEl.classList.remove('is-swapping');
    };
    if (reduceMotion) {
      swap();
    } else {
      textEl.classList.add('is-swapping');
      setTimeout(swap, 180);
    }
    updateProgress();
  }

  // Random pick that never repeats until every reason has been shown
  function randomReason() {
    if (opened.size >= REASONS.length) {
      opened.clear();
      $$('.reason-heart', grid).forEach((heart) => heart.classList.remove('is-opened'));
    }
    const unseen = REASONS.map((_, i) => i).filter((i) => !opened.has(i) && i !== current);
    show(pick(unseen));
  }

  function init() {
    REASONS.forEach((reason, i) => {
      const heart = document.createElement('button');
      heart.type = 'button';
      heart.className = 'reason-heart';
      heart.style.setProperty('--rot', ((i * 7) % 11 - 5) + 'deg');
      heart.setAttribute('aria-label', 'Reason ' + (i + 1));
      heart.innerHTML = '<svg class="icon" aria-hidden="true"><use href="#i-heart"/></svg><span class="n">' + (i + 1) + '</span>';
      heart.addEventListener('click', () => show(i));
      grid.appendChild(heart);
    });
    $('#anotherReason').addEventListener('click', randomReason);
    updateProgress();
  }

  return { init };
})();

/* ---------- Section 6: Open When letters ---------- */
const openWhen = (() => {
  const grid = $('#openGrid');
  const modal = $('#letterModal');
  const stage = $('#openStage');
  const letterEl = $('#openLetter');
  const titleEl = $('#openTitle');
  const bodyEl = $('#openBody');
  const signEl = $('#openSign');
  const iconUse = $('use', $('#openIcon'));
  const palettes = [
    ['#f9c6d3', '#ec9bb0'],
    ['#e3d4f5', '#b99bdc'],
    ['#fde1c8', '#e8a97c'],
    ['#f1b0c0', '#d9758f'],
  ];
  const tilts = [-2.5, 1.5, -1, 2.5, 1, -2, 2, -1.5];
  let timer = null;

  function openLetter(index) {
    const item = OPEN_WHEN[index];
    const [base, dark] = palettes[index % palettes.length];

    titleEl.textContent = item.title;
    bodyEl.textContent = '';
    item.message.split('\n\n').forEach((paragraph) => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      bodyEl.appendChild(p);
    });
    signEl.textContent = OPEN_WHEN_SIGNOFF + ' ' + CONFIG.myName;
    iconUse.setAttribute('href', '#' + item.icon);

    // show the little envelope first, then swap in the letter
    letterEl.hidden = true;
    stage.hidden = false;
    stage.classList.remove('is-opening');
    $('.mini-env', stage).style.setProperty('--c', base);
    $('.mini-env', stage).style.setProperty('--d', dark);

    openModal(modal);

    clearTimeout(timer);
    if (reduceMotion) {
      stage.hidden = true;
      letterEl.hidden = false;
      letterEl.scrollTop = 0;
      return;
    }
    requestAnimationFrame(() => requestAnimationFrame(() => stage.classList.add('is-opening')));
    timer = setTimeout(() => {
      stage.hidden = true;
      letterEl.hidden = false;
      letterEl.scrollTop = 0;
    }, 1500);
  }

  function init() {
    OPEN_WHEN.forEach((item, i) => {
      const [base, dark] = palettes[i % palettes.length];
      const envelope = document.createElement('button');
      envelope.type = 'button';
      envelope.className = 'oe';
      envelope.style.setProperty('--c', base);
      envelope.style.setProperty('--d', dark);
      envelope.style.setProperty('--rot', tilts[i % tilts.length] + 'deg');
      envelope.setAttribute('aria-label', item.title);
      envelope.innerHTML =
        '<span class="oe-flap"></span>' +
        '<span class="oe-seal"><svg class="icon" aria-hidden="true"><use href="#i-heart"/></svg></span>' +
        '<span class="oe-icon"><svg class="icon" aria-hidden="true"><use href="#' + item.icon + '"/></svg></span>' +
        '<span class="oe-label"></span>';
      $('.oe-label', envelope).textContent = item.title;
      envelope.addEventListener('click', () => openLetter(i));
      grid.appendChild(envelope);
    });

    modal.addEventListener('modalclosed', () => clearTimeout(timer));
  }

  return { init };
})();

/* ---------- Section 7: Music player ---------- */
const player = (() => {
  const audio = new Audio();
  audio.preload = 'metadata';

  const root = $('#player');
  const titleEl = $('#trackTitle');
  const artistEl = $('#trackArtist');
  const noteEl = $('#trackNote');
  const coverEl = $('#trackCover');
  const playBtn = $('#playBtn');
  const prevBtn = $('#prevBtn');
  const nextBtn = $('#nextBtn');
  const seek = $('#seek');
  const curEl = $('#timeCur');
  const durEl = $('#timeDur');
  const volume = $('#volume');
  const muteBtn = $('#muteBtn');
  const list = $('#trackList');
  const fab = $('#musicToggle');

  let index = 0;
  let playing = false;
  let wantPlay = false;
  let broken = false;
  let seeking = false;

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return m + ':' + String(s).padStart(2, '0');
  };

  function setRange(input, percent) {
    if (input) input.style.setProperty('--p', percent + '%');
  }

  function setPlaying(value) {
    playing = value;
    root?.classList.toggle('playing', value);
    fab?.classList.toggle('playing', value);
    fab?.setAttribute('aria-pressed', String(value));
    fab?.setAttribute('aria-label', value ? 'Pause music' : 'Play music');
    playBtn?.setAttribute('aria-label', value ? 'Pause' : 'Play');
    const icon = playBtn ? $('use', playBtn) : null;
    if (icon) icon.setAttribute('href', value ? '#i-pause' : '#i-play');
  }

  function missingAudio(track) {
    const path = track && track.src ? track.src : '(no file set)';
    if (typeof showToast === 'function') {
      showToast('Add your MP3 at “' + path + '” or check the exact filename in PLAYLIST.', {
        title: 'Couldn’t play that song',
        duration: 7000,
      });
    } else {
      console.error('Missing audio file:', path);
    }
  }

  function renderList() {
    list.textContent = '';
    PLAYLIST.forEach((track, i) => {
      const item = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'track-btn';
      button.dataset.i = i;
      button.innerHTML = '<span class="track-n"></span><span class="track-meta"><strong></strong><small></small></span>';
      $('.track-n', button).textContent = i + 1;
      $('strong', button).textContent = track.title;
      $('small', button).textContent = track.artist;
      button.addEventListener('click', () => {
        loadTrack(i);
        play();
      });
      item.appendChild(button);
      list.appendChild(item);
    });
  }

  function loadTrack(i) {
    if (!PLAYLIST.length) return;
    index = (i + PLAYLIST.length) % PLAYLIST.length;
    const track = PLAYLIST[index];

    wantPlay = false;
    broken = false;
    audio.pause();
    audio.currentTime = 0;

    if (track.src) {
      audio.src = encodeURI(track.src);
      audio.load();
    } else {
      audio.removeAttribute('src');
    }

    titleEl.textContent = track.title;
    artistEl.textContent = track.artist;
    noteEl.textContent = track.note || '';
    if (track.cover) {
      coverEl.hidden = false;
      coverEl.onerror = () => { coverEl.hidden = true; };
      coverEl.src = track.cover;
    } else {
      coverEl.hidden = true;
    }

    curEl.textContent = '0:00';
    durEl.textContent = '0:00';
    seek.value = 0;
    setRange(seek, 0);
    setPlaying(false);
    $$('.track-btn', list).forEach((button, n) => button.classList.toggle('is-current', n === index));
  }

  function play() {
    const track = PLAYLIST[index];
    if (!track || !track.src) {
      missingAudio(track);
      return;
    }

    if (broken) {
      broken = false;
      audio.src = encodeURI(track.src);
      audio.load();
    }

    wantPlay = true;
    setPlaying(true);

    const promise = audio.play();
    if (promise && typeof promise.catch === 'function') {
      promise.catch((error) => {
        if (error && error.name === 'AbortError') return;
        wantPlay = false;
        setPlaying(false);
        if (error && error.name === 'NotSupportedError') {
          broken = true;
          missingAudio(track);
        }
      });
    }
  }

  function pause() {
    wantPlay = false;
    audio.pause();
    setPlaying(false);
  }

  function toggle() {
    if (playing) pause();
    else play();
  }

  function skip(direction) {
    const keepPlaying = playing || wantPlay;
    loadTrack(index + direction);
    if (keepPlaying) play();
  }

  function init() {
    renderList();
    loadTrack(0);

    const initialVol = volume ? Number(volume.value) : 0.8;
    audio.volume = Number.isFinite(initialVol) ? initialVol : 0.8;
    setRange(volume, audio.volume * 100);

    playBtn?.addEventListener('click', toggle);
    fab?.addEventListener('click', toggle);
    prevBtn?.addEventListener('click', () => skip(-1));
    nextBtn?.addEventListener('click', () => skip(1));

    audio.addEventListener('timeupdate', () => {
      curEl.textContent = formatTime(audio.currentTime);
      if (!seeking && Number.isFinite(audio.duration) && audio.duration > 0) {
        const percent = (audio.currentTime / audio.duration) * 100;
        seek.value = percent;
        setRange(seek, percent);
      }
    });
    audio.addEventListener('loadedmetadata', () => { durEl.textContent = formatTime(audio.duration); });
    audio.addEventListener('durationchange', () => { durEl.textContent = formatTime(audio.duration); });
    audio.addEventListener('ended', () => {
      loadTrack(index + 1);
      play();
    });
    audio.addEventListener('error', () => {
      if (!audio.getAttribute('src')) return;
      broken = true;
      const attempted = wantPlay;
      wantPlay = false;
      setPlaying(false);
      if (attempted) missingAudio(PLAYLIST[index]);
    });

    // progress bar: drag or use arrow keys
    seek?.addEventListener('pointerdown', () => { seeking = true; });
    ['pointerup', 'pointercancel', 'change'].forEach((name) => {
      seek?.addEventListener(name, () => { seeking = false; });
    });
    seek?.addEventListener('input', () => {
      const percent = Number(seek.value);
      setRange(seek, percent);
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        audio.currentTime = (percent / 100) * audio.duration;
        curEl.textContent = formatTime(audio.currentTime);
      } else {
        seek.value = 0;
        setRange(seek, 0);
      }
    });

    // volume + mute
    volume?.addEventListener('input', () => {
      audio.volume = Number(volume.value);
      audio.muted = Number(volume.value) === 0;
      setRange(volume, Number(volume.value) * 100);
      syncMuteIcon();
    });
    muteBtn?.addEventListener('click', () => {
      audio.muted = !audio.muted;
      syncMuteIcon();
    });
  }

  function syncMuteIcon() {
    const icon = muteBtn ? $('use', muteBtn) : null;
    if (icon) icon.setAttribute('href', audio.muted ? '#i-mute' : '#i-volume');
    muteBtn?.setAttribute('aria-pressed', String(audio.muted));
    muteBtn?.setAttribute('aria-label', audio.muted ? 'Unmute' : 'Mute');
  }

  return { init };
})();

/* ---------- Section 8: Birthday cake ---------- */
const cake = (() => {
  const cakeEl = $('#cake');
  const prompt = $('#wishPrompt');
  const button = $('#wishBtn');
  const card = $('#finalMessage');
  const titleEl = $('#finalTitle');
  const bodyEl = $('#finalBody');
  const signEl = $('#finalSign');
  const promptText = prompt.textContent;
  let state = 'idle';           // idle -> wishing -> done
  let revealTimer = null;

  function buildFinalMessage() {
    titleEl.textContent = FINAL_MESSAGE.title + ', ' + CONFIG.herName;
    bodyEl.textContent = '';
    FINAL_MESSAGE.paragraphs.forEach((text, i) => {
      const p = document.createElement('p');
      p.textContent = text;
      p.style.setProperty('--i', i);
      bodyEl.appendChild(p);
    });
    signEl.textContent = FINAL_MESSAGE.signOff + ' ' + CONFIG.myName;
    signEl.style.setProperty('--i', FINAL_MESSAGE.paragraphs.length);
  }

  function reveal() {
    card.hidden = false;
    button.disabled = false;
    button.textContent = 'Light the candles again ♡';
    prompt.textContent = 'Your wish is on its way. ♡';
    state = 'done';
    setTimeout(() => card.scrollIntoView({ behavior: scrollBehavior(), block: 'center' }), 250);
  }

  function makeWish() {
    if (state === 'wishing') return;
    if (state === 'done') {
      reset();
      return;
    }
    state = 'wishing';
    button.disabled = true;
    prompt.textContent = 'Blowing out the candles… ♡';
    cakeEl.classList.add('is-out');

    const wait = reduceMotion ? 0 : 1100;
    revealTimer = setTimeout(() => {
      confetti.burst({ x: 0.5, y: 0.6, count: 140 });
      setTimeout(() => confetti.burst({ x: 0.05, y: 0.8, count: 70, angle: -Math.PI / 3, spread: Math.PI / 2 }), 350);
      setTimeout(() => confetti.burst({ x: 0.95, y: 0.8, count: 70, angle: (-2 * Math.PI) / 3, spread: Math.PI / 2 }), 500);
      reveal();
    }, wait);
  }

  function reset() {
    clearTimeout(revealTimer);
    cakeEl.classList.remove('is-out');
    card.hidden = true;
    prompt.textContent = promptText;
    button.textContent = 'Make a wish!';
    button.disabled = false;
    state = 'idle';
  }

  function init() {
    buildFinalMessage();
    button.addEventListener('click', makeWish);
  }

  return { init };
})();

/* ---------- Easter eggs ---------- */
function setupEasterEggs() {
  const eggs = $$('.egg');
  const found = new Set();
  const counter = $('#secretCount');

  eggs.forEach((egg) => {
    egg.addEventListener('click', () => {
      const key = egg.dataset.egg;
      const message = SECRETS[key];
      if (!message) return;

      const isNew = !found.has(key);
      found.add(key);
      egg.classList.add('found');
      counter.textContent = 'Secrets found: ' + found.size + ' of ' + eggs.length;

      if (isNew && found.size === eggs.length) {
        showToast(ALL_SECRETS_MESSAGE, { title: 'You found them all!', duration: 9000 });
        confetti.burst({ x: 0.5, y: 0.6, count: 120 });
      } else {
        showToast(message, { title: isNew ? 'Secret ' + found.size + ' of ' + eggs.length : 'Secret' });
      }
    });
  });
  counter.textContent = 'Secrets found: 0 of ' + eggs.length;
}

/* ---------- Start everything ---------- */
function init() {
  bindText();
  setupModals();
  intro.init();
  setupCompliments();
  letter.init();
  reasons.init();
  openWhen.init();
  player.init();
  cake.init();
  setupEasterEggs();
  spawnConfettiRain($('#confettiRain'), window.innerWidth < 600 ? 14 : 22);
}

init();
