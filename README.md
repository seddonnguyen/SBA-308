
# Ultimate Pokémon
Are you ready to embark on your Pokémon journey? The Ultimate Pokémon is an immersive web application that unlocks a treasure trove of information about a diverse range of Pokémon. Dive into the fascinating world of Pokémon types, abilities, height, weight, and stats. This interactive platform offers a captivating user experience, empowering you to sign in, register, and effortlessly manage your prized Pokémon collection.

## Features
- **Secure User Authentication**: Easily sign in and register without worries.
- **Pokémon Collection Management**: Add Pokémon to your collection and explore detailed info.
- **Interactive Interface**: Enjoy using our user-friendly forms and selectors for a seamless experience.
- **Responsive Design**: Experience the magic on any device with our fully responsive website.

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
1. **Clone the repository**:
   ```bash
   git clone git@github.com:seddonnguyen/pokemon.git
   ```
   Or [download the ZIP file](https://github.com/seddonnguyen/pokemon/archive/refs/heads/main.zip)).
2. **Navigate to the project directory**:
   ```bash
   cd pokemon
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Build the project**:
   ```bash
   npm run build
   ```
5. **Sign In**:
   Simply open `index.html` in your preferred web browser.

## Getting Started
- **Sign In**: Ready to catch 'em all? Open the `index.html` or visit [Ultimate Pokémon](https://seddonnguyen.github.io/pokemon/) online to head to the sign-in page and unleash your Pokémon journey by entering your login details.
- **Register**: New to the world of Ultimate Pokémon? No worries! You can register and join the adventure on the registration page.
- **Explore Pokémon**: Once you’re in, embark on an epic adventure to explore and manage your Pokémon collection. It’s time to show off your skills and become the ultimate Pokémon master!"

## File Structure
```
pokemon/
├── css/
│   └── styles.css
├── dist/
│   ├── bundle.js
│   ├── index.html
│   └── styles.css
├── doc/
│   └── SBA 307 and 308 - HTML and JavaScript.docx
├── js/
│   ├── auth.js
│   ├── register.js
│   ├── pokemon.js
│   └── utils.js
├── pages/
│   ├── pokemon.html
│   └── register.html
├── .gitignore
├── README.md
├── index.html
├── package.json
└── webpack.config.js
```
