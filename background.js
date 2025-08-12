// background.js
// Listens for the extension button click and sends a message to the content script

browser.action.onClicked.addListener(async (tab) => {
  console.log("Message: run-set-iframe-permissions");
  const response = await browser.tabs.sendMessage(tab.id, {
    action: "run-set-iframe-permissions",
  });
  console.log("Got response", response);
  console.log("Message: run-iframe-sink-select");
  await browser.tabs.sendMessage(tab.id, { action: "run-iframe-sink-select" });
});
