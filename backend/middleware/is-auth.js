const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ message: "Not Authenticated" });

  const token = authHeader.split(" ").at(1);

  console.log(token);

  if (!token) {
    return res.status(401).json({ message: "Not Authenticated" });
  }

  let decodedToken;

  try {
    decodedToken = jwt.verify(token, "tajnarole");
  } catch (err) {
    return res.status(401).json({ message: "Token verification failed" });
  }

  if (!decodedToken) {
    return res.status(401).json({ message: "Not Authenticated" });
  }

  req.userId = decodedToken.userId;
  next();
};
