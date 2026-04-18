# E-commerce Platform Detector by Duxly

A Chrome extension that detects which e-commerce platform a website is using.

Built by [Duxly](https://www.duxly.nl), specialists in e-commerce migrations, integrations, and custom software.

## Features

- Detects common e-commerce platforms directly in the browser
- Shows a badge on the extension icon when a platform is detected
- Displays platform details in a popup
- Runs locally in the browser, with no external API calls

## Supported platforms

- Shopify
- WooCommerce
- Magento / Adobe Commerce
- Lightspeed
- PrestaShop
- BigCommerce
- Salesforce Commerce Cloud
- OpenCart
- Squarespace Commerce
- Wix eCommerce

## Installation

### Chrome Web Store
Coming soon.

### Manual install

1. Download or clone this repository
2. Open `chrome://extensions/` in Chrome
3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select this project folder

## How it works

The extension inspects publicly available frontend signals such as:
- DOM patterns
- meta tags
- script sources
- cookie names
- exposed JavaScript variables

If a supported platform is detected, the extension badge and popup are updated.

## Privacy

This extension:
- does not collect personal data
- does not send browsing data to external servers
- works entirely locally in the browser

See [privacy-policy.html](privacy-policy.html) for more details.

## Project files

- `manifest.json` — extension manifest
- `background.js` — badge / service worker logic
- `content.js` — detection logic
- `popup.html`, `popup.js`, `popup.css` — popup UI
- `icons/` — extension icons
- `DEPLOY.md` — packaging and submission notes
- `INSTALLATION.md` — local installation guide
- `store-description.txt` — store listing draft

## Development notes

- Bump the version in `manifest.json` before each store resubmission
- Keep Chrome Web Store reviewer feedback documented outside the public repo if it contains internal notes
- Avoid committing build artifacts unless they are intentionally versioned releases

## About Duxly

Duxly helps e-commerce companies with migrations, system integrations, and custom software when standard apps are not enough.

- Website: [www.duxly.nl](https://www.duxly.nl)
- Contact: [info@duxly.nl](mailto:info@duxly.nl)
