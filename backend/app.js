const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const cors = require("cors");
const sequelize = require("./util/postgresql.js");
const User = require("./models/user.js");
const Bookmark = require("./models/bookmark.js");

const movieController = require("./controllers/moviesController");
const usersController = require("./controllers/usersController.js");
const bookmarksController = require("./controllers/bookmarksController.js");

const isAuth = require("./middleware/is-auth.js");

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/", movieController.getMovies);

app.get("/search", movieController.getMoviesBySearch);

app.get("/movies/:movieId", movieController.getMovieByID);

app.post("/register", usersController.postRegisterUser);

app.post("/login", usersController.postLogin);

app.get("/bookmarks", isAuth, bookmarksController.getBookmarks);

app.post("/bookmark", isAuth, bookmarksController.postBookmark);

app.delete("/bookmark", isAuth, bookmarksController.deleteBookmark);

app.get(`/user-settings/:userId`, isAuth, usersController.getUserSettings);

app.post("/logout", isAuth, usersController.postLogout);

app.patch("/user-settings/:userId", isAuth, usersController.updateUser);

Bookmark.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Bookmark);

sequelize
  .sync()
  .then(() => {
    app.listen(8080);
  })
  .catch((err) => {
    console.error("Greška pri sinhronizaciji: ", err);
  });
