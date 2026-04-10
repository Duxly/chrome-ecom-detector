# Installation Guide

## Quick Start (Developer Mode)

1. **Open Chrome Extensions Page**
   - Navigate to `chrome://extensions/` in Chrome
   - Or: Menu → Extensions → Manage Extensions

2. **Enable Developer Mode**
   - Toggle "Developer mode" switch in the top right corner

3. **Load the Extension**
   - Click "Load unpacked" button
   - Select the `chrome-ecom-detector` folder
   - The extension will appear in your extensions list

4. **Pin the Extension (Optional)**
   - Click the puzzle icon in Chrome toolbar
   - Find "E-commerce Platform Detector by Duxly"
   - Click the pin icon to keep it visible

## Testing the Extension

Visit any of these sites to test detection:

- **Shopify:** shopify.com, allbirds.com, gymshark.com
- **WooCommerce:** woocommerce.com, or any WordPress site with WooCommerce
- **Magento:** magento.com, or Adobe Commerce demo sites
- **BigCommerce:** bigcommerce.com
- **Others:** Browse e-commerce sites and see what platforms are detected!

## How to Use

1. **Browse Normally** — The extension runs automatically
2. **Check the Badge** — Platform abbreviation appears on the icon when detected
3. **View Details** — Click the extension icon to see full platform info
4. **Visit Duxly** — Click the CTA button to explore integrations

## Troubleshooting

### Extension not detecting platforms
- Make sure you've granted all permissions during installation
- Try refreshing the page (F5)
- Check Chrome DevTools console for errors

### Badge not showing
- The site might not be using a supported platform
- Detection may take 1-2 seconds on slow connections
- Try visiting the site again

### Extension icon not appearing
- Make sure it's enabled in chrome://extensions/
- Check if you've pinned it to the toolbar
- Restart Chrome if needed

## Updating the Extension

1. Make changes to the code
2. Go to chrome://extensions/
3. Click the refresh icon on the extension card
4. Changes will take effect immediately

## Publishing to Chrome Web Store

To publish this extension:

1. Create a Chrome Web Store developer account
2. Pay the one-time $5 registration fee
3. Prepare store assets:
   - Screenshots (1280x800 or 640x400)
   - Promotional images (optional)
   - Detailed description (use store-description.txt)
4. Upload the extension as a ZIP file
5. Submit for review

**Note:** Chrome Web Store review typically takes 1-3 days.

## File Structure

```
chrome-ecom-detector/
├── manifest.json         # Extension configuration ✓
├── background.js         # Service worker ✓
├── content.js            # Detection logic ✓
├── popup.html            # Popup UI ✓
├── popup.js              # Popup functionality ✓
├── popup.css             # Styling ✓
├── icons/
│   ├── icon16.png        # 16x16 icon ✓
│   ├── icon48.png        # 48x48 icon ✓
│   └── icon128.png       # 128x128 icon ✓
├── README.md             # Documentation ✓
├── INSTALLATION.md       # This file ✓
├── privacy-policy.html   # Privacy policy ✓
└── store-description.txt # Chrome Web Store listing ✓
```

## Support

- **Website:** https://www.duxly.nl
- **Email:** info@duxly.nl

---

Built with ❤️ by Duxly — E-commerce Integration Specialists
