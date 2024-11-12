const bcryptjs = require('bcryptjs')
const Person = require('./Model/person');

//1. Include the Import Package
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


const ComparePassword = async function (CandidatePassword, StoredPassword) {
    const isMatch = await bcryptjs.compare(CandidatePassword, StoredPassword);  // the compare function is provided by bcrypt.js and it takes two argument ( user password, hashedpassword ); it process the hashed password extract the salt from it and then combine it with user password, provide new hash and then match it with hash present in database.  
    return isMatch;
  };
  
  // eg- query you can request from server for checking - http://localhost:8000/Person/User/?username=ssss&password=zxcv@123
  
  passport.use(new LocalStrategy(async (USERNAME, PASSWORD, done) => {
    // authentication logic here
    try {
      console.log('Received Credentials', USERNAME, PASSWORD);
      const user = await Person.findOne({ username: USERNAME }); // get back the person if available of this particular username
      // console.log(user);
      if (!user) {
        return done(null, false, { message: 'Incorrect Username Or User not Found' });
      }
      const isPasswordMatch = await ComparePassword(PASSWORD, user.password);
    //   console.log(user.password, PASSWORD, isPasswordMatch);
      if (isPasswordMatch) {
        return done(null, user) // for true
      }
      else {
        return done(null, false, { message: 'Password not matched' })
      }
    } catch (err) {
      return done(err);
    }
  }))
  

  module.exports = passport; // export configured passport