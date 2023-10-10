<p align="center">
<img alt="CoverCraft-nobg" src="https://github.com/mr-palindrome/CoverCraft/assets/56421861/aed1bba9-5e95-4c70-9e39-8b3ef084542d" width="50%" height="50%">
</p>
<p align="center">
CoverCraft: Effortlessly craft tailored cover letters based on Wellfound.com job descriptions, enhancing your job application process.
</p> <br>


<div align="center">

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/mr-palindrome/CoverCraft)&nbsp;
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=flat&logo=github)](https://github.com/mr-palindrome/CoverCraft)&nbsp;
![contributions welcome](https://img.shields.io/static/v1.svg?label=Contributions&message=Welcome&color=brightgreen&style=flat&logo=github)&nbsp;
[![first-timers-only](https://img.shields.io/badge/first--timers--only-friendly-blue.svg?style=flat)](https://github.com/mr-palindrome/CoverCraft)&nbsp;
[![GitHub stars](https://img.shields.io/github/stars/mr-palindrome/CoverCraft)](https://github.com/mr-palindrome/CoverCraft/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/mr-palindrome/CoverCraft)](https://github.com/mr-palindrome/CoverCraft/network/members)
[![GitHub Contributers](https://img.shields.io/github/contributors/mr-palindrome/CoverCraft)](https://github.com/mr-palindrome/CoverCraft/graphs/contributors)
[![GitHub issues](https://img.shields.io/github/issues/mr-palindrome/CoverCraft)](https://github.com/mr-palindrome/CoverCraft/issues)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/mr-palindrome/CoverCraft)](https://github.com/mr-palindrome/CoverCraft/pulls)
[![GitHub closed-issues](https://img.shields.io/github/issues-closed-raw/mr-palindrome/CoverCraft)](https://github.com/mr-palindrome/CoverCraft/pulls)
[![GitHub closed-prs](https://img.shields.io/github/issues-pr-closed-raw/mr-palindrome/CoverCraft)](https://github.com/mr-palindrome/CoverCraft/pulls)

</div>


## Setup Instructions

Follow these steps to set up the extension locally:

1. **Clone the Repository**

   Clone the CoverCraft repository to your local machine using the following command:

   ```bash
   git clone https://github.com/mr-palindrome/CoverCraft.git
   ```

2. **Generate Google MakerSuit API Key**

    - Go to [Google MakerSuit](https://makersuite.google.com/).
    - Navigate to the settings and create your API Key.

3. **Replace API Key in `contentScript.js`**

   Open the `contentScript.js` file in the `source` directory and replace the `apiKey` variable with the API Key you generated.

   ```JavaScript
   const apiKey = "api_key"; // Replace with your Google MakerSuit API Key
   ```

4. **Load the Extension in Chrome**

    - Open Google Chrome.
    - Go to `chrome://extensions/`.
    - Enable "Developer mode" using the toggle switch.
    - Click on "Load unpacked".
    - Select the folder where you cloned the repository (`CoverCraft`).

5. **Use the Extension**

    - Navigate to a job description page (e.g., a job posting on a job board).
    - Click on the CoverCraft extension icon.
    - Click the generated button to create a cover letter based on the job description.

## Usage

1. **Input Your Information**

   When using the extension, you can input your personal details (e.g., about, skills) in the extension popup.

2. **Generate Cover Letter**

   Click the CoverCraft icon, and it will generate a cover letter based on the job description and your provided information.

## Support Us
<a href="https://www.buymeacoffee.com/mrpalindrome" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

If you find CoverCraft useful and would like to support its development, you can:

- Star the [repository](https://github.com/mr-palindrome/CoverCraft) on GitHub.
- Contribute to the project by opening issues or pull requests.
- Share CoverCraft with others who might benefit from it.

- Thank you for your support!
