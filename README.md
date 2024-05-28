# CipherCraft Password Generator

CipherCraft is a simple and customizable password generator built with React. It allows users to generate strong passwords with options to include numbers and symbols and to set the desired length of the password.

## Features

- **Password Length**: Adjust the length of the password between 8 to 20 characters.
- **Include Numbers**: Option to include numbers in the generated password.
- **Include Symbols**: Option to include symbols in the generated password.
- **Copy to Clipboard**: Easily copy the generated password to the clipboard with a single click.

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) should be installed on your machine.

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/ciphercraft-password-generator.git
    ```

2. **Navigate to the project directory:**

   ```sh
   cd ciphercraft-password-generator
    ```

3. **Install dependencies:**

   ```sh
   npm install
    ```

4. **Start the development server:**

   ```sh
   npm run dev
    ```



### Usage

- Adjust the password length using the range input slider.
- Toggle the inclusion of numbers by checking or unchecking the "Numbers" checkbox.
- Toggle the inclusion of symbols by checking or unchecking the "Symbols" checkbox.
- The generated password will automatically update based on the selected options.
- Copy the password to your clipboard by clicking the "Copy" button next to the password input field.



## Code Overview

 # `App.js`

 This is the main component of the application:

- **State Management** : Manages the state for password, length, inclusion of numbers, and symbols.
- **Password Generation** : Generates a password based on the selected options.
- **Copy to Clipboard** : Copies the generated password to the clipboard.

# `CSS`

The application uses Tailwind CSS classes for styling. Ensure you have Tailwind CSS set up in your project.