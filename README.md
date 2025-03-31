
# BG-Color-Changer React App

A beautiful **React + Vite** application that lets users change the background color by clicking on vibrant color buttons. Features a glassmorphism UI design with smooth transitions.



## Features
-**Interactive color buttons** that change the background
-**Glassmorphism effect** (frosted glass panel)
-**Smart text contrast** - auto-switches between white/black text for readability
-**Hover animations** on buttons
-**Responsive design** that works on all screen sizes
-**Reset functionality** to return to default white background
-**Smooth color transitions** with CSS animations

## Installation and Setup
### Prerequisites
Make sure you have **Node.js** and **npm** installed on your machine.

### Steps to Run the Project
1. **Clone this repository**
   ```sh
   git clone https://github.com/VishnuLohkna022/BG-Color-Changer.git
   ```

2. **Navigate to project directory:**
    ```sh
    cd bg-changer
    ```

3. **Install dependencies**
   ```sh
   npm install
   ```

4. **Start the development server**
   ```sh
   npm run dev
   ```

5. **Open in browser**
   Once the server starts, open **http://localhost:5173** in your browser (default Vite port).

## Project Structure
```
bg-changer/
│-- .gitignore          # Git ignore file
│-- README.md           # Project documentation
│-- eslint.config.js    # ESLint configuration (if applicable)
│-- index.html          # Main HTML file
│-- package-lock.json   # Lock file for dependencies
│-- package.json        # Project dependencies and scripts
│-- vite.config.js      # Vite configuration
│-- public/
│   ├── vite.svg        # Default Vite logo (can be removed)
│-- src/
│   ├── App.jsx         # Main React component
│   ├── main.jsx        # Entry point for React & Vite
│   ├── App.css        # CSS file for styling
```

## Technologies Used
- **React.js** - Frontend library
- **Vite** - Fast development and build tool
- **JavaScript (ES6+)** - Programming language
- **CSS** - Styling

## Customization
- You can **add more colors** to the `colors` array inside `App.jsx`.
- Modify the **button styles** to match your preferred design.
- Adjust Vite settings in `vite.config.js` if needed.