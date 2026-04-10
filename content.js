/**
 * E-commerce Platform Detector - Content Script
 * Runs on every page to detect e-commerce platforms
 * Built by Duxly - https://www.duxly.nl
 */

(function() {
  'use strict';

  // Platform detection rules
  const platformDetectors = {
    shopify: {
      name: 'Shopify',
      abbr: 'SF',
      color: '#96BF48',
      detect: () => {
        // CDN check
        if (document.querySelector('script[src*="cdn.shopify.com"]')) return true;
        // Global variable
        if (window.Shopify && window.Shopify.theme) return true;
        // Meta generator
        const generator = document.querySelector('meta[name="generator"]');
        if (generator && generator.content.toLowerCase().includes('shopify')) return true;
        return false;
      },
      getVersion: () => {
        const generator = document.querySelector('meta[name="generator"]');
        if (generator) {
          const match = generator.content.match(/Shopify/i);
          return match ? 'Detected' : null;
        }
        return null;
      }
    },

    woocommerce: {
      name: 'WooCommerce',
      abbr: 'WC',
      color: '#96588A',
      detect: () => {
        // Class check
        if (document.querySelector('.woocommerce')) return true;
        if (document.querySelector('.wc-ajax')) return true;
        // Meta generator
        const generator = document.querySelector('meta[name="generator"]');
        if (generator && generator.content.toLowerCase().includes('woocommerce')) return true;
        // Body class
        if (document.body.classList.contains('woocommerce')) return true;
        return false;
      },
      getVersion: () => {
        const generator = document.querySelector('meta[name="generator"]');
        if (generator) {
          const match = generator.content.match(/WooCommerce ([0-9.]+)/i);
          return match ? match[1] : null;
        }
        return null;
      }
    },

    magento: {
      name: 'Magento',
      abbr: 'MG',
      color: '#EE672F',
      detect: () => {
        // Cookie check
        const cookies = document.cookie;
        if (cookies.includes('mage-') || cookies.includes('MAGE_')) return true;
        // Class check
        if (document.querySelector('.magento')) return true;
        // Script check
        if (document.querySelector('script[src*="mage/"]')) return true;
        // Body class
        if (document.body.classList.contains('catalog-product-view')) return true;
        if (document.body.classList.contains('cms-index-index')) return true;
        return false;
      },
      getVersion: () => {
        // Magento version is hard to detect from frontend
        return 'Detected';
      }
    },

    'adobe-commerce': {
      name: 'Adobe Commerce',
      abbr: 'AC',
      color: '#EE672F',
      detect: () => {
        // Adobe Commerce is Magento 2 rebranded
        // Same detection as Magento
        const cookies = document.cookie;
        if (cookies.includes('mage-') || cookies.includes('MAGE_')) return true;
        if (document.querySelector('.magento')) return true;
        if (document.querySelector('script[src*="mage/"]')) return true;
        return false;
      },
      getVersion: () => {
        return 'Detected';
      }
    },

    lightspeed: {
      name: 'Lightspeed',
      abbr: 'LS',
      color: '#FF6900',
      detect: () => {
        // Domain/CDN check
        if (document.querySelector('script[src*="lightspeedhq"]')) return true;
        if (document.querySelector('link[href*="lightspeedhq"]')) return true;
        // Cookie check
        const cookies = document.cookie;
        if (cookies.includes('ls-session')) return true;
        return false;
      },
      getVersion: () => {
        return 'Detected';
      }
    },

    prestashop: {
      name: 'PrestaShop',
      abbr: 'PS',
      color: '#DF0067',
      detect: () => {
        // Meta generator
        const generator = document.querySelector('meta[name="generator"]');
        if (generator && generator.content.toLowerCase().includes('prestashop')) return true;
        // Global variable
        if (window.prestashop) return true;
        // ID check
        if (document.getElementById('prestashop')) return true;
        return false;
      },
      getVersion: () => {
        const generator = document.querySelector('meta[name="generator"]');
        if (generator) {
          const match = generator.content.match(/PrestaShop ([0-9.]+)/i);
          return match ? match[1] : null;
        }
        return null;
      }
    },

    bigcommerce: {
      name: 'BigCommerce',
      abbr: 'BC',
      color: '#1F5EAF',
      detect: () => {
        // CDN check
        if (document.querySelector('script[src*="bigcommerce"]')) return true;
        if (document.querySelector('link[href*="bigcommerce"]')) return true;
        // Stencil theme framework
        if (document.querySelector('script[src*="stencil"]')) return true;
        // Cookie check
        const cookies = document.cookie;
        if (cookies.includes('SHOP_SESSION_TOKEN')) return true;
        return false;
      },
      getVersion: () => {
        return 'Detected';
      }
    },

    'salesforce-commerce': {
      name: 'Salesforce Commerce Cloud',
      abbr: 'SC',
      color: '#00A1E0',
      detect: () => {
        // Demandware (old name) check
        if (document.querySelector('script[src*="demandware"]')) return true;
        if (document.querySelector('link[href*="demandware"]')) return true;
        // Body class
        if (document.body.classList.contains('dwfrm')) return true;
        return false;
      },
      getVersion: () => {
        return 'Detected';
      }
    },

    opencart: {
      name: 'OpenCart',
      abbr: 'OC',
      color: '#2AC0EB',
      detect: () => {
        // Meta generator
        const generator = document.querySelector('meta[name="generator"]');
        if (generator && generator.content.toLowerCase().includes('opencart')) return true;
        // Route check (common OpenCart URL pattern)
        if (window.location.href.includes('route=')) return true;
        // Cookie check
        const cookies = document.cookie;
        if (cookies.includes('OCSESSID')) return true;
        return false;
      },
      getVersion: () => {
        const generator = document.querySelector('meta[name="generator"]');
        if (generator) {
          const match = generator.content.match(/OpenCart ([0-9.]+)/i);
          return match ? match[1] : null;
        }
        return null;
      }
    },

    squarespace: {
      name: 'Squarespace Commerce',
      abbr: 'SQ',
      color: '#000000',
      detect: () => {
        // Meta generator
        const generator = document.querySelector('meta[name="generator"]');
        if (generator && generator.content.toLowerCase().includes('squarespace')) return true;
        // Body class
        if (document.body.classList.contains('squarespace')) return true;
        // CDN check
        if (document.querySelector('script[src*="squarespace"]')) return true;
        return false;
      },
      getVersion: () => {
        return 'Detected';
      }
    },

    wix: {
      name: 'Wix eCommerce',
      abbr: 'WX',
      color: '#0C6EFC',
      detect: () => {
        // Meta generator
        const generator = document.querySelector('meta[name="generator"]');
        if (generator && generator.content.toLowerCase().includes('wix.com')) return true;
        // Global variable
        if (window._wix) return true;
        // Cookie check
        const cookies = document.cookie;
        if (cookies.includes('_wix')) return true;
        return false;
      },
      getVersion: () => {
        return 'Detected';
      }
    }
  };

  /**
   * Detect which platform is running on the current page
   */
  function detectPlatform() {
    // Check platforms in priority order
    const platforms = [
      'shopify', 'woocommerce', 'magento', 'lightspeed', 'prestashop',
      'bigcommerce', 'salesforce-commerce', 'adobe-commerce', 'opencart',
      'squarespace', 'wix'
    ];

    for (const platformKey of platforms) {
      const platform = platformDetectors[platformKey];
      if (platform.detect()) {
        const version = platform.getVersion();
        return {
          detected: true,
          platform: platform.name,
          platformKey: platformKey,
          abbreviation: platform.abbr,
          color: platform.color,
          version: version
        };
      }
    }

    return { detected: false };
  }

  /**
   * Send detection result to background script
   */
  function sendDetectionResult() {
    const result = detectPlatform();
    chrome.runtime.sendMessage({
      action: 'platformDetected',
      data: result
    });
  }

  // Run detection when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', sendDetectionResult);
  } else {
    sendDetectionResult();
  }

  // Re-run detection after a delay to catch late-loading scripts (SPAs)
  setTimeout(sendDetectionResult, 2000);

})();
