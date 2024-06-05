# URL Modifier Chrome Extension

A Chrome extension that automatically modifies Scribd document URLs to embed URLs.

## Description

This extension takes the current URL of a Scribd document and transforms it into an embed URL. For example, `https://www.scribd.com/document/543081123/fiches-pedagogiques` becomes `https://www.scribd.com/embeds/543081123/content`. This can be particularly useful for embedding Scribd documents into web pages or for other purposes.

## Features

- Automatically captures the current Scribd document URL from the active tab.
- Transforms the URL to its embed form.
- Opens the modified URL in a new tab.

## Installation

### Manual Installation

1. Clone or download this repository.

    ```bash
    git clone https://github.com/yourusername/url_modifier_extension.git
    ```

2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable "Developer mode" by clicking the toggle switch in the top right corner.

4. Click the "Load unpacked" button and select the directory where you cloned/downloaded the repository.

### Using the Extension

1. Navigate to a Scribd document URL in Chrome.
2. Click on the URL Modifier extension icon in the Chrome toolbar.
3. Click the "Modify URL" button in the popup.
4. A new tab will open with the transformed embed URL.

## Usage

1. Open a Scribd document URL in your Chrome browser (e.g., `https://www.scribd.com/document/543081123/fiches-pedagogiques`).
2. Click the extension icon located in the Chrome toolbar.
3. Click the "Modify URL" button.
4. The extension will automatically transform the URL and open the modified embed URL (e.g., `https://www.scribd.com/embeds/543081123/content`) in a new tab.

## Screenshots

![Extension Popup](screenshots/popup.png)

## Development

### Folder Structure

### manifest.json

This file describes your extension, its permissions, and other metadata.

### popup.html

The HTML file that defines the user interface for the extension’s popup.

### popup.js

The JavaScript file that contains the logic to handle user interactions and URL modifications.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, feel free to open an issue or contact me directly at [your-email@example.com](mailto:your-email@example.com).
