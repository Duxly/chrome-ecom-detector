/**
 * E-commerce Platform Detector - Popup Script
 * Displays detection results in the popup
 * Built by Duxly - https://www.duxly.nl
 */

(function() {
  'use strict';

  const resultContainer = document.getElementById('result-container');

  /**
   * Display platform detected result
   */
  function showDetected(data) {
    const version = data.version ? `Version: ${data.version}` : 'Version detected';
    
    resultContainer.innerHTML = `
      <div class="result-detected">
        <div class="platform-icon ${data.platformKey || ''}">
          ${data.abbreviation}
        </div>
        <h2 class="platform-name">${data.platform}</h2>
        <p class="platform-version">${version}</p>
        <a href="https://www.duxly.nl/platforms" target="_blank" class="cta-button">
          Bekijk onze integraties →
        </a>
      </div>
    `;
  }

  /**
   * Display no platform detected result
   */
  function showNotDetected() {
    resultContainer.innerHTML = `
      <div class="result-none">
        <div class="no-platform-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#999"/>
          </svg>
        </div>
        <p class="no-platform-text">
          No e-commerce platform detected on this page
        </p>
        <p class="info-text">
          This extension detects popular platforms like Shopify, WooCommerce, Magento, and more.
        </p>
      </div>
    `;
  }

  /**
   * Display error state
   */
  function showError() {
    resultContainer.innerHTML = `
      <div class="result-none">
        <div class="no-platform-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#e94560"/>
          </svg>
        </div>
        <p class="no-platform-text">
          Unable to detect platform
        </p>
        <p class="info-text">
          Please refresh the page and try again.
        </p>
      </div>
    `;
  }

  /**
   * Request detection data from background script
   */
  function loadDetectionData() {
    chrome.runtime.sendMessage(
      { action: 'getDetectionData' },
      (response) => {
        if (chrome.runtime.lastError) {
          console.error('Error:', chrome.runtime.lastError);
          showError();
          return;
        }

        if (response && response.detected) {
          showDetected(response);
        } else {
          showNotDetected();
        }
      }
    );
  }

  // Load detection data when popup opens
  document.addEventListener('DOMContentLoaded', loadDetectionData);

})();
