async function setupIframePermissions() {
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

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "run-set-iframe-permissions") {
    setupIframePermissions().then(() => {
      console.log("IFrame permissions set");
      sendResponse("hey");
    });
    return true;
  }
});

// browser.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
//   if (message.action === "run-set-iframe-permissions") {
//     await setupIframePermissions();
//     console.log("IFrame permissions set");
//     return "hey";
//   }
// });
