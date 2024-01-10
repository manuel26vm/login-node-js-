import jwt from "jsonwebtoken";


export const authorizationRequired = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }

  jwt.verify(token,"manuel12345",(err, user) => {
     if (err) return res.status(403).json({ message: 'incorrect token' });

     req.user = user;
     
     
     next();
  })

  
  
};
