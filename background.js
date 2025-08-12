// background.js
// Listens for the extension button click and sends a message to the content script

chrome.action.onClicked.addListener(async (tab) => {
  await chrome.tabs.sendMessage(tab.id, { action: "run-sink-select" });
  await chrome.tabs.sendMessage(tab.id, { action: "run-iframe-sink-select" });
});
