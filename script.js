// Mock data for chat rooms
let chatRooms = [];

// Function to simulate creating a chat room
function createRoom(roomName, username) {
  const newRoom = {
    id: Date.now().toString(),
    name: roomName,
    createdBy: username,
  };
  chatRooms.push(newRoom);
  return newRoom;
}

// Function to simulate updating a chat room
function updateRoom(roomId, newName) {
  const room = chatRooms.find((r) => r.id === roomId);
  if (room) {
    room.name = newName;
  }
  return room;
}

// Function to simulate deleting a chat room
function deleteRoom(roomId) {
  chatRooms = chatRooms.filter((r) => r.id !== roomId);
}

// Function to render the chat rooms list
function renderChatRooms() {
  const roomsContainer = document.getElementById("rooms-container");
  roomsContainer.innerHTML = chatRooms
    .map(
      (room) => `
      <div class="flex items-center justify-between p-4 border-b border-gray-200">
        <div>
          <h3 class="text-lg font-medium text-gray-800">${room.name}</h3>
          <p class="text-sm text-gray-500">Created by: ${room.createdBy}</p>
        </div>
        <div class="flex gap-2">
          <button
            onclick="handleEditRoom('${room.id}')"
            class="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
          >
            Edit
          </button>
          <button
            onclick="handleDeleteRoom('${room.id}')"
            class="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
          >
            Delete
          </button>
          <button
            class="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
          >
            Join
          </button>
        </div>
      </div>
    `
    )
    .join("");
}

// Handle Edit Room
function handleEditRoom(roomId) {
  const newName = prompt("Enter new room name:");
  if (newName) {
    updateRoom(roomId, newName);
    renderChatRooms();
  }
}

// Handle Delete Room
function handleDeleteRoom(roomId) {
  if (confirm("Are you sure you want to delete this room?")) {
    deleteRoom(roomId);
    renderChatRooms();
  }
}

// HTMX event listeners
document.addEventListener("DOMContentLoaded", () => {
  renderChatRooms();
});

document.getElementById("create-room-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const roomName = formData.get("roomName");
  const username = formData.get("username");
  createRoom(roomName, username);
  renderChatRooms();
});
function joinRoom(roomName) {
    alert(`Room View is not available` );
      
  }