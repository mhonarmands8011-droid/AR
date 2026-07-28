window.addEventListener("load", () => {
  const video = document.querySelector("#tutorialVideo");
  const target = document.querySelector("#target");

  target.addEventListener("targetFound", async () => {
    try {
      video.muted = false;
      video.volume = 1;
      video.currentTime = 0;
      await video.play();
    } catch (e) {
      console.error("Video play failed:", e);
    }
  });

  target.addEventListener("targetLost", () => {
    video.pause();
    video.currentTime = 0;
  });
});