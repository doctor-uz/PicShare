# 📸 MERN Photo Sharing App

A full-stack photo sharing web application built with **MongoDB**, **Express**, **React**, and **Node.js**.  
Users can register manually or sign in with **Google Auth**, upload images, add titles and hashtags, like/unlike other users’ posts, and manage their own uploads.

---

## 🚀 Features

- **User Authentication**
  - Sign up with email/password
  - Log in via **Google Auth**
- **Photo Management**
  - Upload images with a title and hashtags
  - Edit or delete your own posts
- **Social Interactions**
  - Like or unlike photos from other users
  - View the number of likes per post
- **User-Friendly Interface**
  - Responsive design for mobile and desktop
  - Simple and intuitive UI

---

## 🛠 Tech Stack

**Frontend:**

- React
- Redux (or Context API, if applicable)
- Material UI / Tailwind CSS (adjust if different)

**Backend:**

- Node.js
- Express.js
- MongoDB (Mongoose)

**Authentication:**

- Google OAuth 2.0
- JWT (JSON Web Token) for session management

---

## 📷 Screenshots

_Add your app screenshots here for better presentation._

---

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/mern-photo-sharing-app.git
   cd mern-photo-sharing-app
   ```

2. **Install dependencies**

   - Install server dependencies:

     ```bash
     cd server
     npm install
     ```

   - Install client dependencies:

     ```bash
     cd ../client
     npm install
     ```

3. **Set up environment variables**
   Create a `.env` file in both `server` and `client` directories and add:

   **Server (.env):**

   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

   **Client (.env):**

   ```
   REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
   ```

4. **Run the development servers**

   - Start backend:

     ```bash
     cd server
     npm run dev
     ```

   - Start frontend:

     ```bash
     cd ../client
     npm start
     ```

---

## 📄 API Endpoints (Backend)

| Method | Endpoint          | Description           | Auth Required |
| ------ | ----------------- | --------------------- | ------------- |
| POST   | `/auth/signup`    | Register new user     | ❌            |
| POST   | `/auth/login`     | Login existing user   | ❌            |
| POST   | `/auth/google`    | Google OAuth login    | ❌            |
| GET    | `/posts`          | Get all posts         | ❌            |
| POST   | `/posts`          | Create a new post     | ✅            |
| PATCH  | `/posts/:id`      | Update a post         | ✅ (Owner)    |
| DELETE | `/posts/:id`      | Delete a post         | ✅ (Owner)    |
| PATCH  | `/posts/:id/like` | Like or unlike a post | ✅            |

---

## 🤝 Contributing

1. Fork the repository
2. Create a new feature branch:

   ```bash
   git checkout -b feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add some feature"
   ```

4. Push to the branch:

   ```bash
   git push origin feature-name
   ```

5. Create a Pull Request

---

**Dilshod Rahmatov**

- GitHub: [@doctor-uz](https://github.com/doctor-uz)
- LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/dilshodrahmatov/)
