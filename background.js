/**
 * E-commerce Platform Detector - Background Service Worker
 * Manages badge updates and stores detection results
 * Built by Duxly - https://www.duxly.nl
 */

// Store detection results per tab
const detectionCache = {};

/**
 * Update extension badge with platform info
 */
function updateBadge(tabId, data) {
  if (data.detected) {
    // Set badge text to platform abbreviation
    chrome.action.setBadgeText({
      tabId: tabId,
      text: data.abbreviation
    });

    // Set badge background color
    chrome.action.setBadgeBackgroundColor({
      tabId: tabId,
      color: data.color
    });

    // Update tooltip
    chrome.action.setTitle({
      tabId: tabId,
      title: `${data.platform} detected`
    });
  } else {
    // Clear badge if no platform detected
    chrome.action.setBadgeText({
      tabId: tabId,
      text: ''
    });

    chrome.action.setTitle({
      tabId: tabId,
      title: 'E-commerce Platform Detector by Duxly'
    });
  }
}

/**
 * Handle messages from content script
 */
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'platformDetected' && sender.tab) {
    const tabId = sender.tab.id;
    
    // Store detection result
    detectionCache[tabId] = message.data;
    
    // Update badge
    updateBadge(tabId, message.data);
  }

  // Handle popup requests for detection data
  if (message.action === 'getDetectionData') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        const data = detectionCache[tabs[0].id] || { detected: false };
        sendResponse(data);
      }
    });
    return true; // Keep channel open for async response
  }
});

/**
 * Clear cache when tab is closed
 */
chrome.tabs.onRemoved.addListener((tabId) => {
  delete detectionCache[tabId];
});

/**
 * Clear badge when tab is updated (new URL)
 */
chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === 'loading') {
    // Clear old detection
    delete detectionCache[tabId];
    
    // Reset badge
    chrome.action.setBadgeText({ tabId: tabId, text: '' });
    chrome.action.setTitle({
      tabId: tabId,
      title: 'E-commerce Platform Detector by Duxly'
    });
  }
});
