# Password Generator

A simple password generator built with React that allows users to create secure passwords with customizable options such as length, inclusion of numbers, and special characters.

## Features

- Generate random passwords with adjustable length.
- Option to include numbers and special characters.
- Copy the generated password to the clipboard with a single click.
- Real-time password generation based on user input.


## Usage

1. Use the range slider to adjust the password length (6 to 100).
2. Toggle the checkboxes to include numbers or special characters in the password.
3. The password will be generated in real-time based on the selected options.
4. Click the "Copy" button to copy the generated password to the clipboard.


## Hooks Used

The following React hooks are used in this project:

- **`useState`**: Manages state for the length of the password, whether numbers or special characters are allowed, and the generated password.
- **`useCallback`**: Memoizes the password generation and clipboard copy functions to prevent unnecessary re-renders.
- **`useRef`**: Provides a reference to the password input field to enable copying the password to the clipboard.
- **`useEffect`**: Executes the password generation logic whenever the user changes the length or toggles the inclusion of numbers or special characters.

## What We Learned

Through this project, we learned:

- How to manage and update state in a React component using `useState`.
- The importance of optimizing performance by memoizing functions with `useCallback` to prevent re-rendering.
- How to interact with DOM elements using `useRef` to provide advanced functionality (like copying to the clipboard).
- How to perform side effects (like generating a new password) in a functional component using `useEffect`.

