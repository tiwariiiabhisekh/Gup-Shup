# Gup-Shup Chat App

Gup-Shup is a real-time chat application built with React, Redux Toolkit, Express, Socket.io, and MongoDB. It allows users to register, log in, and chat with other users in a modern, responsive interface.

## Features

- User registration and authentication
- Real-time messaging with Socket.io
- View and chat with other registered users
- Responsive UI with Tailwind CSS and DaisyUI
- Toast notifications for user feedback
- Protected routes and user sessions

## Tech Stack

- **Frontend:** React, Redux Toolkit, React Hot Toast, Tailwind CSS, DaisyUI
- **Backend:** Express, Socket.io, MongoDB, Mongoose
- **Other:** dotenv, cookie-parser, cors

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tiwariiiabhisekh/gup-shup-chat-app.git
   cd gup-shup-chat-app
   ```

2. **Install dependencies for both client and server:**
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `server` folder:

   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   CLIENT_URL=http://localhost:5000
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the backend server:**
   ```bash
   npm run dev
   ```

5. **Start the frontend client:**
   ```bash
   cd ../client
   npm start
   ```

6. **Open the app:**
   Visit [http://localhost:5000](http://localhost:5000) in your browser.

## Folder Structure

```
Gup-Shup-Chat-App/
├── client/      # React frontend
│   └── src/
│       └── pages/
│       └── store/
│       └── components/
├── server/      # Express backend
│   └── routes/
│   └── socket/
│   └── db/
│   └── middlewares/
```

## Usage

- Register a new account or log in with existing credentials.
- Select a user from the list to start chatting.
- Send and receive messages in real time.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

---

**Made with ❤️ for