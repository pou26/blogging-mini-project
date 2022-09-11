
const isValidRequestBody = function(requestBody){
    return Object.keys(requestBody).length >0//Object.keys return array of keys.

}

const isValidfName = function(fname) {
    const nameRegex = /^[a-zA-Z_ ]*$/

    return nameRegex.test(fname)
}
const isValidlName = function(lname) {
    const nameRegex = /^[a-zA-Z_ ]*$/

    return nameRegex.test(lname)
}

const isValidName = function(body) {
    const nameRegex = /^[a-zA-Z_ ]*$/

    return nameRegex.test(body)
}

const isValidTitle = function(title){
    return["Mr", "Mrs", "Miss"].indexOf(title) !== -1
}

const isValidPassword = function(Password){
    const passRegex = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,16}$/
    return passRegex.test(Password) 
}

const isValidTag = function(tags){
    return["Book", "Friends", "Self help"].indexOf(tags) !== -1
}

const isValidAuthorId = function(title){
    return mongoose.isValidObjectId(title)
}

const isValidEmail = function(email){
        return /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email);

}

// const isEmailAlreadyUsed = await authorModel.findOne({ email }); 

//     if (isEmailAlreadyUsed) {
//         return res.status(400).send({ status: false, message: `email address is already registered` })
//     }

module.exports={isValidfName,isValidlName,isValidRequestBody,isValidName,isValidTitle,isValidPassword,isValidTag,isValidAuthorId,isValidEmail};