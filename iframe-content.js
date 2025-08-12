async function runSinkSelect() {
  document.addEventListener(
    "click",
    () => {
      navigator.mediaDevices.selectAudioOutput().then(({ deviceId }) => {
        const audio = document.querySelector("audio");
        if (audio && audio.setSinkId) {
          audio.setSinkId(deviceId);
        }
      });
    },
    { capture: true }
  );
}

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === "run-iframe-sink-select") {
    await runSinkSelect();
  }
});
