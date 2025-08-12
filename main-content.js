async function runSinkSelect() {
  const iframe = document.querySelector(
    "iframe[name=smphtml5iframesmp-wrapper]"
  );
  if (!iframe) return;
  const permission = "speaker-selection";
  iframe.allow = iframe.allow ? `${iframe.allow}; ${permission}` : permission;

  const loadPromise = new Promise((resolve) => {
    iframe.addEventListener("load", () => resolve(), { once: true });
  });

  iframe.src = iframe.src;
  await loadPromise;
}

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === "run-sink-select") {
    await runSinkSelect();
  }
});
