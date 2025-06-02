function UnityProgress(gameInstance, progress) {
  if (!gameInstance.Module)
    return;
  if (!gameInstance.logo) {
    gameInstance.logo = document.querySelector(".logo");
    gameInstance.progress = document.querySelector(".progress .full");
    gameInstance.loader = document.getElementById("loader");
  }
  if (progress === 1) {
    gameInstance.logo.style.display = gameInstance.progress.style.display = "none";
    gameInstance.loader.style.display = "none";
  } else {
    gameInstance.logo.style.display = gameInstance.progress.style.display = "block";
    gameInstance.progress.style.width = (100 * progress) + "%";
  }
}
