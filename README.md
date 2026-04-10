# E-commerce Platform Detector by Duxly

Production repo for the Duxly Chrome extension that detects e-commerce platforms on visited websites.

## Project structure

- `manifest.json` - Chrome extension manifest
- `background.js` - badge/service worker logic
- `content.js` - platform detection logic
- `popup.*` - popup UI
- `icons/` - extension icons
- `DEPLOY.md` - packaging, submission, and review flow
- `submission/REVIEW-NOTES.md` - source of truth for Chrome Web Store review status

## Working rules

- Every submission gets logged in `submission/REVIEW-NOTES.md`
- Every resubmission bumps the version in `manifest.json`
- No dashboard-only changes without writing them back into this repo


A Chrome extension that instantly detects which e-commerce platform any website is using.

Built by [Duxly](https://www.duxly.nl) — E-commerce Integration Specialists.

## Features

- 🔍 **Instant Detection** — Automatically detects platforms as you browse
- 🏷️ **Badge Indicator** — Shows platform abbreviation on the extension icon
- 📊 **Detailed Info** — View platform name and version in a clean popup
- 🚀 **11 Platforms Supported** — Detects the most popular e-commerce platforms

## Supported Platforms

- **Shopify** — The leading cloud-based e-commerce platform
- **WooCommerce** — The most popular WordPress e-commerce plugin
- **Magento / Adobe Commerce** — Enterprise-grade e-commerce solution
- **Lightspeed** — Point of Sale and e-commerce platform
- **PrestaShop** — Open-source e-commerce platform
- **BigCommerce** — SaaS e-commerce platform
- **Salesforce Commerce Cloud** — Enterprise commerce solution
- **OpenCart** — Free and open-source shopping cart
- **Squarespace Commerce** — All-in-one website and store builder
- **Wix eCommerce** — Drag-and-drop website builder with e-commerce

## Installation

### From Chrome Web Store
*(Coming soon)*

### Manual Installation (Development)

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked"
5. Select the extension directory
6. The extension is now installed and active!

## How It Works

The extension uses multiple detection methods to identify e-commerce platforms:

- **DOM Patterns** — Checks for platform-specific HTML classes and IDs
- **Meta Tags** — Reads generator tags and other metadata
- **Script Sources** — Identifies platform-specific CDN URLs
- **Cookies** — Detects platform-specific cookie names
- **Global Variables** — Checks for JavaScript variables exposed by platforms

Detection runs automatically when you visit any website. If a platform is detected, the extension badge will show its abbreviation (e.g., "SF" for Shopify, "WC" for WooCommerce).

## Privacy

This extension:
- ✅ Only analyzes publicly visible page content
- ✅ Does NOT collect any personal data
- ✅ Does NOT track your browsing history
- ✅ Does NOT send data to external servers
- ✅ Works entirely locally in your browser

See [privacy-policy.html](privacy-policy.html) for full details.

## Technology

- **Manifest V3** — Uses the latest Chrome extension API
- **Service Worker** — Efficient background processing
- **Content Scripts** — Runs detection on every page
- **No External Dependencies** — Lightweight and fast

## About Duxly

Duxly is a team of e-commerce integration specialists based in the Netherlands. We help businesses connect their e-commerce platforms with ERPs, accounting software, and other business tools.

**Need custom integrations?**
Visit [www.duxly.nl/platforms](https://www.duxly.nl/platforms) to learn more.

## Development

### Project Structure

```
chrome-ecom-detector/
├── manifest.json         # Extension configuration
├── background.js         # Service worker (badge management)
├── content.js            # Content script (detection logic)
├── popup.html            # Popup interface
├── popup.js              # Popup logic
├── popup.css             # Popup styling
├── icons/                # Extension icons (16px, 48px, 128px)
├── README.md             # This file
├── store-description.txt # Chrome Web Store listing
└── privacy-policy.html   # Privacy policy
```

### Detection Logic

Each platform has its own detector object with:
- `name` — Full platform name
- `abbr` — Badge abbreviation (2 letters)
- `color` — Badge background color
- `detect()` — Detection function (returns boolean)
- `getVersion()` — Version detection (returns string or null)

### Adding New Platforms

To add a new platform:

1. Add a detector object in `content.js`
2. Implement `detect()` with multiple detection methods
3. Implement `getVersion()` if version detection is possible
4. Add platform key to the detection order array
5. Test on real websites using that platform

## License

Copyright © 2026 Duxly. All rights reserved.

## Contact

- Website: [www.duxly.nl](https://www.duxly.nl)
- Email: info@duxly.nl

---

**Made with ❤️ by Duxly — E-commerce Integration Specialists**
