import jwt from "jsonwebtoken";

export function craeteAccsesToken(idUser) {
   return new Promise((resolve,reject)=>{
        jwt.sign(
            idUser,
            "manuel12345",
            {
              expiresIn: "1d",
            },
            (err, token) => {
              if (err) reject(err)
              resolve(token)
            }
          );
    })
 
}
