
# Ultimate Pokémon

## Description

The Ultimate Pokémon is an extensive web application that offers in-depth information on a wide range of Pokémon. Users can explore Pokémon types, abilities, height, weight, and stats. The website provides an engaging user experience, enabling individuals to sign in, register, and efficiently manage their Pokémon collection.

## Features

- **User Authentication**: Users can sign in and register securely.
- **Pokémon Collection Management**: Users can add Pokémon to their collection and view detailed information.
- **Interactive Interface**: Easy-to-use forms and selectors to enhance user experience.
- **Responsive Design**: The website is fully responsive and works on various devices.

## Technical Specifications

### Frontend

- **HTML**: The structure of the web pages is created using HTML5.
    - **Files**:
        - `index.html`: The main page where users can sign in.
        - `pokemon.html`: The page where users can view and manage their Pokémon collection.
        - `register.html`: The registration page for new users.
- **CSS**: Styling is done using CSS, including external stylesheets.
    - **File**: `styles.css`
    - **External Libraries**:
        - Google Fonts: Provides custom fonts.
        - Font Awesome: Provides icons used in the application.
- **JavaScript**: Interactive elements and form validations are implemented using vanilla JavaScript.
    - **Files**:
        - `auth.js`: Handles the authentication logic for the sign-in form.
        - `register.js`: Handles the registration logic for the registration form.
        - `pokemon.js`: Handles the display and management of Pokémon data.
        - `utils.js`: Contains utility functions for validating email and password.
    - **Libraries**:
        - Fetch API: Used for making HTTP requests to the PokéAPI.

### Backend

- **Server**: There is no backend server in this project. All data fetching and interactions are performed using client-side JavaScript.

### External APIs

- **PokéAPI**: Used to fetch detailed information about Pokémon. The API provides data on Pokémon species, abilities, types, and more.

### Deployment

- **Static Hosting**: The project can be deployed on any static hosting service such as GitHub Pages, Netlify, or Vercel.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone git@github.com:seddonnguyen/SBA-308.git
   ```
2. Navigate to the project directory:
   ```sh
   cd SBA-308
   ```
3. Open `pages/index.html` in your preferred web browser.

## Usage

- **Sign In**: Navigate to the sign-in page (`pages/index.html`) and enter your credentials.
- **Register**: If you do not have an account, you can register on the registration page (`pages/register.html`).
- **Explore Pokémon**: After signing in, explore and manage your Pokémon collection on the main page (`pages/pokemon.html`).

## File Structure

```
SBA-308/
├── css/
│   └── styles.css
├── js/
│   ├── auth.js
│   ├── register.js
│   ├── pokemon.js
│   └── utils.js
├── pages/
│   ├── index.html
│   ├── pokemon.html
│   └── register.html
└── README.md
```