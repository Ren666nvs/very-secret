const messages = [
  "Чи үнэхээр итгэлтэй байна уу?",
  "Чи үнэхээр итгэлтэй байгаа юу??",
  "Чи үнэхээр баттай байгаа юу??",
  "Пүүки, гуйя...",
  "Энэ талаар дахиж бодоод үз!",
  "Хэрвээ чи үгүй гэж хэлбэл, би маш их гунигтай байх болно...",
  "Би маш гунигтай байна...",
  "Би маш маш их гунигтай байна...",
  "За, би асуухаа больё...",
  "Зүгээр л тоглож байна, чи тийм гэж хэлээч! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
