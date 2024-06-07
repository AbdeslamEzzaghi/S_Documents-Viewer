# S_Documents-Viewer

A Chrome extension that automatically previews scribd documents.

## Features

- Automatically captures the current Scribd document URL from the active tab.
- Opens a preview of the document in a new tab.

## Installation

### Manual Installation

1. Clone or download this repository.

    ```bash
    git clone https://github.com/AbdeslamEzzaghi/S_Documents-Viewer.git
    ```

2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable "Developer mode" by clicking the toggle switch in the top right corner.

4. Click the "Load unpacked" button and select the directory "url_modifier_extension" from the repo that you cloned/downloaded.

   ![2024_06_07_10_41_50_V1](https://github.com/AbdeslamEzzaghi/S_Documents-Viewer/assets/60900845/9a9f0675-9b21-4f80-884e-6ad941e98f5a)


### Using the Extension

1. Navigate to a Scribd document URL in your browser. (chrome or brave recommended)
2. Click on the extension icon in the browser toolbar.
3. Click the "Open" button in the popup.
4. A new tab will open with the document preview in a new tab.

   
![2024_06_07_10_41_50_V3](https://github.com/AbdeslamEzzaghi/S_Documents-Viewer/assets/60900845/6c6cea4c-c7af-434c-b471-4f04a8c1a5ad)



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

This project is licensed under the MIT License.
