# WeTalk

WeTalk is a real-time chatting application developed using Socket.IO and the MERN stack. It provides users with instant messaging and a seamless user experience. Chat with friends in a friendly way!

## Features

- **Real-time Messaging:** Instant chat functionality powered by Socket.IO.
- **User Authentication:** Secure login and signup with JWT authentication.
- **Responsive UI:** A clean and modern interface built with React.js and Daisy UI.
- **State Management:** Efficient global state management using Zustand.
- **Scalability:** Built with Node.js and Express.js for a robust backend.

## Tech Stack

- **Frontend:** React.js, Daisy UI, Zustand
- **Backend:** Node.js, Express.js, Socket.IO
- **Database:** MongoDB
- **Validation:** Zod
- **Authentication:** JWT

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- npm / yarn / pnpm (Choose your preferred package manager)
- MongoDB (Locally or via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation
Clone the repository and install dependencies:

```bash
# Clone the repo
git clone https://github.com/yourusername/wetalk.git
cd wetalk

# Install dependencies
npm install  # or yarn install or pnpm install
```

### Running the Development Server

#### Start the Backend Server
```bash
cd backend
npm run dev  # or yarn dev or pnpm dev
```

#### Start the Frontend Server
```bash
cd frontend
npm run dev  # or yarn start or pnpm start
```

Open [http://localhost:5173](http://localhost:5173) in your browser to access the application.

## Environment Variables
Create a `.env` file in the root directory and configure the necessary environment variables:

```env
PORT=
MONGODB_URI=
JWT_SECRET=
NODE_ENV=
```

## Contribution
Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to your branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

---

💬 **WeTalk - Connect, Chat, Enjoy!**

