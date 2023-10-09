# ![BYUI Professor Ratings Logo](logo-url.png)

A Chrome extension to streamline the experience of checking BYUI professor ratings right on the BYUI registration page by leveraging data from RateMyProfessor.

## Overview

This extension was crafted using base JavaScript to identify and parse professors' names from the registration table on BYU-Idaho's custom registration page. The names are sent through a custom API to an Azure serverless function, which executes a Python script to fetch the respective ratings from RateMyProfessor. This setup was chosen to explore cross-language development, a "typical" backend, and a cloud-hosted "auto-scaling" backend. The Python interaction was facilitated using a [pip library](https://github.com/Nobelz/RateMyProfessorAPI) and was deemed the most effective solution due to the absence of direct RateMyProfessor API access or suitable JS libraries at the time of development.

## Installation

### **Official Version (0.1.2)**:

**Prerequisites:**

-   A Chromium-based browser.

-   JavaScript enabled on the BYUI registration page.

-   Affiliation to BYUI.

**Instructions:**

1.  Navigate to the Chrome web store.

2.  Search for "Byui Professor Ratings" or visit [this link](https://chrome.google.com/webstore/detail/byui-professor-ratings/hdfbecpialoehfdcfejmpedcmcbimlmp).

3.  Click "Add to Chrome".

4.  Click the extension icon (usually top left) and click "Activate".

### **Developer Version (0.1.2)**:

**Prerequisites:**

-   All of the above.

-   Git installed.

-   A JS/HTML/CSS friendly code editor.

**Instructions:**

1.  Open your code editor.

2.  Clone this repository.

3.  Follow these [official instructions](https://support.google.com/chrome/a/answer/2714278?hl=en#:~:text=Go%20to%20chrome%3A%2F%2Fextensions,the%20app%20or%20extension%20folder.) from Chrome to load the cloned files.

> *Note: These instructions are for **Chromium-based** browsers. The steps are similar for other browsers like Brave, Arc, Opera, etc.*

## Versioning (majorUpdate.minorImprovement.minorFix)

Version numbering follows the pattern of adding 0.0.1 for minor fixes, 0.1.0 for improvements to existing features, and 1.0.0 for major updates or new feature additions.

## Contributions

Feel free to branch or submit a PR for any recommendations or additions you may have. Credits for the RateMyProfessor API interaction go to the authors of the pip library linked above.