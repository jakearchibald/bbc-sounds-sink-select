async function runSinkSelect() {
  console.log("Running frame content");
  document.addEventListener(
    "click",
    async () => {
      console.log("Got click");
      const { deviceId } = await navigator.mediaDevices.selectAudioOutput();
      const audio = document.querySelector("audio");
      if (audio && audio.setSinkId) {
        audio.setSinkId(deviceId);
      }
    },
    { capture: true, once: true }
  );
}

browser.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === "run-iframe-sink-select") {
    await runSinkSelect();
  }
});
