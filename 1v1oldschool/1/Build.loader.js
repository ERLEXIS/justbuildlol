var unityInstance = UnityLoader.instantiate("unityContainer", "1v1oldschool/1/Build.json", {
  onProgress: function(unityInstance, progress) {
    if (!unityInstance.Module) return;
    var container = document.getElementById("unityContainer");
    var loadingBar = document.getElementById("loadingBar");
    var progressBarFull = document.getElementById("progressBarFull");

    if (loadingBar) loadingBar.style.display = "block";
    if (progressBarFull) progressBarFull.style.width = (100 * progress) + "%";
  }
});
