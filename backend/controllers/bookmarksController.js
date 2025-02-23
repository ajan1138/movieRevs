const Bookmark = require("../models/bookmark");

exports.getBookmarks = async (req, res) => {
  if (!req.userId) {
    res.status(403).json({ message: "Not authenticated!" });
  }

  const page = req.query.page || 1;
  const perPage = 4;

  try {
    const totalItems = await Bookmark.count({
      where: { userId: req.userId },
    });

    const bookmarks = await Bookmark.findAll({
      where: { userId: req.userId },
      order: [["createdAt", "DESC"]],
      offset: (page - 1) * perPage,
      limit: perPage,
    });

    const paginationSettings = {
      currentPage: page,
      hasNextPage: perPage * page < totalItems,
      hasPreviousPage: page > 1,
      nextPage: Number(page) + 1,
      previousPage: page - 1,
      lastPage: Math.ceil(totalItems / perPage),
      link: "/favorites",
    };

    res.status(200).json({
      bookmarks: bookmarks,
      paginationSettings: paginationSettings,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.postBookmark = async (req, res) => {
  try {
    if (!req.userId)
      return res.status(401).json({ message: "Not authenticated" });

    const { title, description, rate, releaseDate, poster, genres } = req.body;

    const existingBookmark = await Bookmark.findOne({
      where: { title: title, userId: req.userId },
    });

    if (existingBookmark)
      return res.status(409).json({ message: "Bookmark already exists" });

    const bookmark = new Bookmark({
      title: title,
      rate: rate,
      description: description,
      releaseDate: releaseDate,
      poster: poster,
      genres: genres,
      userId: req.userId,
    });

    await bookmark.save();

    return res.status(200).json({ message: "Successfully added bookmark!" });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteBookmark = async (req, res) => {
  try {
    const { bookmarkID } = req.body;

    if (!bookmarkID) return res.status(401).json({ message: "ID not found!" });

    console.log(bookmarkID);

    const bookmark = await Bookmark.findOne({
      where: {
        id: bookmarkID,
      },
    });

    if (!bookmark) {
      return res.status(404).json({ message: "Bookmark not found" });
    }

    if (req.userId !== bookmark.userId) {
      res.status(403).json({ message: "Unathorized access!" });
    }

    await bookmark.destroy();

    return res.status(200).json({ message: "Bookmark successfully deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
