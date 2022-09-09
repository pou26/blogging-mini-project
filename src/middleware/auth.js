const jwt = require("jsonwebtoken");

const authenticate = function (req, res, next) {
  try {
    let token = req.headers["x-api-key"];
    if (!token) {
      return res.status(401).send({ status: false, msg: "token must be present" });
    }
    //console.log(token);
    let decodedToken = jwt.verify(token, "functionup-plutonium-blogging-Project1-secret-key");
    if (!decodedToken) {
      return res.status(401).send({ status: false, msg: "Invalid Token" })
    }
    req.authorLoggedIn = decodedToken.authorId
    next()
  } catch (error) {
    res.status(500).send({ msg: "server error", error: error.message })
  }
}
//-----------------------------------------------------------------------------------------------------------------------//



// Authorization:->>>=======================================================================>>>
const authorize = async function (req, res, next) {
  try {
    let token = req.headers["x-api-key"];
    if (!token) token = req.headers["x-api-key"];
    if (!token) {
      return res.status(400).send({ status: false, msg: "Token must be present" });
    }
    let decodedToken = jwt.verify(token, "functionup-plutonium-blogging-Project1-secret-key");
    if (!decodedToken) {
      return res.status(401).send({ status: false, msg: "Token is invalid" });
    }
    // let authorId=blogModel.authorId;
  
    let authorToBeModified = req.authorId;
    let authorLoggedin = decodedToken.authorId;
    console.log(authorToBeModified);
    console.log(authorLoggedin);
    if (authorToBeModified != authorLoggedin) {
      return res.status(403).send({status: false,msg: "author loggedin not allowed to modify changes"});
    }
    next();
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.messge });
  }
};

//authorise

// const authorize = async function(req,res,next){
//   try {
//     const query = req.query;
//     if (Object.keys(query).length==0){
//         return res.status(401).send({status:false, msg:"query is mandatory"})
//       }
//       const a= await blogModel.find(query)
//       if (a.length==0){
//        return res.status(404).send({status : false, msg: "data not found"})
//       }
//     next()
// } catch (err) {
//     return res.status(500).send({ msg: "server error", error: err });
// }

// }

module.exports.authenticate = authenticate;
module.exports.authorize = authorize;