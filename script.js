document.body.setAttribute('data-theme', 'light');
document.getElementById('sun_icon').style.display = 'none';
document.getElementById('moon_icon').style.display = 'block';

function toggleTheme() {
  const sunIcon = document.getElementById('sun_icon');
  const moonIcon = document.getElementById('moon_icon');
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');

  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);

  if (newTheme === 'dark') {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  } else {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  }
}

const likeBtn = document.getElementById("likeBtn");
const thumbIcon = document.getElementById("thumbIcon");
const likeCount = document.getElementById("likeCount");

// 读取本地状态
let count = parseInt(localStorage.getItem("likeTotal")) || 0;
let isLiked = localStorage.getItem("isLiked") === "yes";

// 初始化
likeCount.textContent = count;
if (isLiked) {
  thumbIcon.classList.add("liked");
}

likeBtn.addEventListener("click", function () {
  // 动画强制只给图标
  thumbIcon.classList.add("play-anim");
  setTimeout(() => thumbIcon.classList.remove("play-anim"), 400);

  if (isLiked) {
    // 取消点赞
    count--;
    thumbIcon.classList.remove("liked");
    isLiked = false;
    localStorage.setItem("isLiked", "no");
  } else {
    // 点赞（限制一次）
    count++;
    thumbIcon.classList.add("liked");
    isLiked = true;
    localStorage.setItem("isLiked", "yes");
  }

  // 更新计数保存
  likeCount.textContent = count;
  localStorage.setItem("likeTotal", count);
});