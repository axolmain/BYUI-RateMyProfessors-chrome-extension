const checkPageButton = document.getElementById('scrapeButton');

if (checkPageButton) {
checkPageButton.addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    const activeTab = tabs[0];
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      files: ['contentScript.js']
    }, () => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
      }
    });
  });
});}
