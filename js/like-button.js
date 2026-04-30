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