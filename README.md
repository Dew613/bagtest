// Brief explanation of what the code does
This repository contains scripts to automate the creation of fake visitors for testing purposes on BAG sites using Playwright.

// Instructions
## Getting Started

### Clone the Repository
```bash
git clone <repository-url>
cd <repository-directory>
```

### Install Packages
```bash
npm install
```

### Running the Tests
To run the `visitor.spec.js` file:
```bash
npx playwright test visitor.spec.js
```

### Creating a New Visitor
To create a new visitor, edit the `const` variable in the `visitor.spec.js` file.

### Running in UI Mode
Playwright provides a UI mode to help with debugging:
```bash
npx playwright test --ui
```

// Additional Information
For more details on using Playwright, refer to the [Playwright documentation](https://playwright.dev/docs/intro).
