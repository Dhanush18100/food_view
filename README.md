# food_view

![License](https://img.shields.io/badge/license-ISC-green)

## 📝 Description

Food View is a dynamic web application designed for culinary enthusiasts to discover and share their favorite dishes. Leveraging the power of Express.js, the platform provides a seamless web experience with integrated user authentication and a robust database for managing content. Whether you're a foodie looking to explore new flavors or a cook wanting to showcase your creations, Food View offers a secure and engaging community to document and view diverse culinary journeys.

## ✨ Features

- 🗄️ Database
- 🔐 Auth
- 🕸️ Web


## 🛠️ Tech Stack

- 🚀 Express.js


## 📦 Key Dependencies

```
bcryptjs: ^3.0.3
cookie-parser: ^1.4.7
cors: ^2.8.5
dotenv: ^17.2.3
express: ^5.2.1
imagekit: ^6.0.0
jsonwebtoken: ^9.0.3
mongoose: ^9.0.1
multer: ^2.0.2
nodemon: ^3.1.11
uuid: ^13.0.0
```

## 🚀 Run Commands

- **start**: `npm run start`


## 📁 Project Structure

```
.
├── backend
│   ├── controllers
│   │   ├── authController.js
│   │   ├── food-partnerController.js
│   │   └── foodController.js
│   ├── middleware
│   │   └── authMiddleware.js
│   ├── package.json
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── food-partnerRoutes.js
│   │   └── foodRoutes.js
│   ├── server.js
│   ├── services
│   │   └── storageService.js
│   └── src
│       ├── app.js
│       ├── db
│       │   └── db.js
│       └── models
│           ├── foodItemModel.js
│           ├── foodpartnerModel.js
│           ├── likesModel.js
│           ├── saveModel.js
│           └── userModel.js
└── frontend
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── public
    │   └── vite.svg
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── assets
    │   │   └── react.svg
    │   ├── components
    │   │   ├── BottomNav.jsx
    │   │   ├── ProtectedRoute.jsx
    │   │   └── ReelFeed.jsx
    │   ├── index.css
    │   ├── main.jsx
    │   ├── pages
    │   │   ├── auth
    │   │   │   ├── ChooseRegister.jsx
    │   │   │   ├── FoodPartnerLogin.jsx
    │   │   │   ├── FoodPartnerRegister.jsx
    │   │   │   ├── UserLogin.jsx
    │   │   │   └── UserRegister.jsx
    │   │   ├── food-partner
    │   │   │   ├── CreateFood.jsx
    │   │   │   └── Profile.jsx
    │   │   └── general
    │   │       ├── Home.jsx
    │   │       └── Saved.jsx
    │   ├── routes
    │   │   └── AppRoutes.jsx
    │   └── styles
    │       ├── auth-shared.css
    │       ├── bottom-nav.css
    │       ├── create-food.css
    │       ├── profile.css
    │       ├── reels.css
    │       └── theme.css
    └── vite.config.js
```

## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/Dhanush18100/food_view.git`
3. **Create** a new branch: `git checkout -b feature/your-feature`
4. **Commit** your changes: `git commit -am 'Add some feature'`
5. **Push** to your branch: `git push origin feature/your-feature`
6. **Open** a pull request

Please ensure your code follows the project's style guidelines and includes tests where applicable.

## 📜 License

This project is licensed under the ISC License.

---
