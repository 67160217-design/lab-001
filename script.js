// ฟังก์ชันสำหรับปุ่ม Say Hello
const helloBtn = document.querySelector('#helloBtn');
const statusText = document.querySelector('#status');
let isHello = false;

helloBtn.addEventListener('click', () => {
  if (!isHello) {
    statusText.textContent = 'Hello from GitHub Pages! 👋';
    isHello = true;
  } else {
    statusText.textContent = 'Ready to deploy 🚀';
    isHello = false;
  }
});

// ฟังก์ชันสำหรับสลับ Dark Mode / Light Mode
const themeToggleBtn = document.querySelector('#themeToggleBtn');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = 'Toggle Light Mode';
  } else {
    themeToggleBtn.textContent = 'Toggle Dark Mode';
  }
});