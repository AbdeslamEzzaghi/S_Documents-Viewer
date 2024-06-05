document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('modifyButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      const currentUrl = currentTab.url;
      
      const modifiedUrl = modifyUrl(currentUrl);
      
      if (modifiedUrl) {
        // Open the modified URL in a new tab
        chrome.tabs.create({ url: modifiedUrl });
      } else {
        alert('This extension only works on Scribd document URLs.');
      }
    });
  });
});

function modifyUrl(url) {
  try {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/');
    
    if (pathParts.length >= 3 && pathParts[1] === 'document') {
      const documentId = pathParts[2];
      return `https://www.scribd.com/embeds/${documentId}/content`;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
}

