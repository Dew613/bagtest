// Brief explanation of what the code does
This repository contains scripts to automate the creation of fake visitors for testing purposes on BAG sites using Playwright.

// Instructions
## Getting Started

### Clone the Repository
```bash
git clone https://github.com/Dew613/bagtest
```
### Navigate to the Repository
```bash
cd bagtest
```

### Install Packages
```bash
npm install
```

### Running the Tests
I recommend running the tests in UI mode first if there is a need for debugging:
```bash
npx playwright test --ui
```

To run the `visitor.spec.js` file directly:
```bash
npx playwright test tests/visitor.spec.js
```

### Creating a New Visitor
To create a new visitor, edit the `const num` variable in the `tests/visitor.spec.js` file. This variable is used to generate unique visitor details.

```javascript
// filepath: /Users/dewansunnah/Desktop/bagtest/tests/visitor.spec.js
const num = 21; // Change this number to create a new visitor
```

### Running in UI Mode
Playwright provides a UI mode to help with debugging:
```bash
npx playwright test --ui
```

// Additional Information
For more details on using Playwright, refer to the [Playwright documentation](https://playwright.dev/docs/intro).
