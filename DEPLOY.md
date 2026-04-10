# Deploy & Submission

## 1. Local check

- Open `chrome://extensions/`
- Enable Developer mode
- Load unpacked: this folder
- Test on:
  - Shopify store
  - WooCommerce store
  - Magento store
  - Non-commerce site

## 2. Package for Chrome Web Store

From repo root:

```bash
mkdir -p dist
zip -r dist/chrome-ecom-detector-v1.0.0.zip \
  manifest.json background.js content.js popup.html popup.js popup.css \
  icons privacy-policy.html store-description.txt README.md INSTALLATION.md
```

## 3. Pre-submission checklist

- [ ] Version bumped in `manifest.json`
- [ ] Popup works
- [ ] Badge works
- [ ] No console errors
- [ ] Privacy policy up to date
- [ ] Screenshots ready
- [ ] Store description reviewed
- [ ] Test notes saved in `submission/REVIEW-NOTES.md`

## 4. Submit

- Open Chrome Web Store dashboard
- Upload zip from `dist/`
- Update listing assets
- Submit for review

## 5. Track review

After each submission, log in:
- submission date
- version
- review status
- rejection reason
- fix applied

Use: `submission/REVIEW-NOTES.md`
