# htmx-crud
HTMX-based CRUD Chat Rooms
A simple chat application where users can perform CRUD operations on chat rooms using HTMX for asynchronous updates without full page reloads. The backend is simulated using JavaScript functions.

Features
Create Chat Rooms: Users can create new chat rooms with a unique name.

Edit Chat Rooms: Users can edit the name of their own chat rooms.

Delete Chat Rooms: Users can delete their chat rooms.

Join Chat Rooms: Users can "join" chat rooms (view is not implemented).

Modern Design: Built with Tailwind CSS for a clean and responsive UI.

HTMX Integration: All CRUD operations are handled asynchronously using HTMX.

Prerequisites
A modern web browser (e.g., Chrome, Firefox, Edge).

No backend or server is required—everything runs in the browser.

Setup and Running the Project
Download the Project:

Clone or download the project files to your local machine.

Project Structure:

/chat-app
  ├── index.html
  └── script.js
Open the Project:

Open the index.html file in your browser. You can do this by:

Double-clicking the index.html file in your file explorer.

Or, using a local development server (e.g., VS Code Live Server, Python HTTP server).

Use the Application:

Create, edit, and delete chat rooms.

Click the "Join" button to see a placeholder alert (room view is not implemented).

HTMX Integration
HTMX is used to handle CRUD operations asynchronously without full page reloads. Here's how it works:

Key HTMX Attributes Used
hx-post: Sends a POST request to create a new chat room.

hx-target: Specifies the element to update with the response.

hx-swap: Defines how the response is inserted into the target element.

Example
html
Copy
<form id="create-room-form" hx-post="/create-room" hx-target="#rooms-container" hx-swap="innerHTML">
  <input type="text" name="roomName" placeholder="Room Name" required>
  <input type="text" name="username" placeholder="Your Username" required>
  <button type="submit">Create</button>
</form>
Run HTML
Simulated Backend
The backend is simulated using JavaScript functions in script.js. These functions handle:

Creating, updating, and deleting chat rooms.

Rendering the updated list of chat rooms dynamically.

Code Overview
index.html
Contains the HTML structure of the application.

Integrates HTMX and Tailwind CSS via CDN.

Defines the form for creating chat rooms and the container for displaying them.

script.js
Simulates the backend using JavaScript functions.

Handles CRUD operations and dynamically updates the UI.

Includes the joinRoom function to display a placeholder alert when joining a room.

Functionality: Extend the script.js file to add more features (e.g., persistent storage using localStorage).

Troubleshooting
HTMX Not Working: Ensure the HTMX script is correctly loaded in index.html.

UI Not Updating: Check the browser console for errors and ensure script.js is correctly linked.
