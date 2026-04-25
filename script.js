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

function setupButton(btnId, iconId, storageKey) {
  const btn = document.getElementById(btnId);
  const icon = document.getElementById(iconId);
  let isLiked = localStorage.getItem(storageKey) === "yes";
  if (isLiked) {
    icon.classList.add("liked");
  }
  btn.addEventListener("click", function () {
    icon.classList.add("play-anim");
    setTimeout(() => icon.classList.remove("play-anim"), 400);

    if (isLiked) {
      icon.classList.remove("liked");
      isLiked = false;
      localStorage.setItem(storageKey, "no");
    } else {
      icon.classList.add("liked");
      isLiked = true;
      localStorage.setItem(storageKey, "yes");
    }
  });
}
setupButton("likeBtn", "thumbIcon", "thumbLiked");
setupButton("dislikeBtn", "dislikeIcon", "dislikeLiked");
setupButton("heartBtn", "heartIcon", "heartLiked");


