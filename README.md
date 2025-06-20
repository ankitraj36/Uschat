🧩 Uschat - Social Media Profile Page (EJS Project)
Uschat is a lightweight and dynamic social media profile page built using Node.js, Express.js, and EJS (Embedded JavaScript Templates). This project demonstrates how to render user-specific data on the frontend using templating and integrate basic UI interactions with Bootstrap and JavaScript.

🚀 Features:
Dynamic Rendering: The page uses <%= %> syntax from EJS to inject user data dynamically — including username, followers, following, and user posts.

Posts Grid: Posts are displayed in a responsive Bootstrap grid, with each card showing the image, likes, and comments.

Like & Subscribe Buttons: Interactive buttons trigger alerts when clicked, demonstrating client-side event handling using vanilla JavaScript.

Reusable Components: Includes partial templates for the head and footer sections using <%- include() %>, promoting modularity and DRY principles.

Fallback Images: If a post image is missing, a default image is shown using a conditional check (post.image || default).

🧰 Tech Stack:
Frontend: Bootstrap 5, Font Awesome for icons

Templating Engine: EJS

Backend: Node.js + Express.js

Scripting: Basic client-side JavaScript for UI interactivity

📁 Folder Structure:
/views – Contains EJS templates

include/head.ejs – HTML head (title, CSS links)

include/footer.ejs – Footer or closing scripts

main.ejs – The main user profile view

/public – Static assets like CSS, JS, images

📌 Usage:
Clone the repo and install dependencies with npm install

Start the server using node app.js

Visit http://localhost:PORT/ to view the Uschat profile page

This project serves as a great starting point for learning dynamic rendering with EJS, integrating UI with Bootstrap, and managing user-generated content in Express-based web apps.
