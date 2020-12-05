//requiring bcrypt for password hashing. using the bcryptjs version
//as the regular bcrypt module sometimes causes errors on windows machines
const bcrypt = require('bcryptjs');
const passport = require('../config/passport');
//creating our User model
module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        //the email cannot be null, and must be a proper email before creation
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        //the password cannot be null
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
//creating a custom method for our User model. this will check if an
//unhashed password entered by the user can be compared to the hashed
//password stored in DB
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
//hooks are automatic methods that run during various phases of the User Model lifecycle
//in this case, before a User is created, we will automatically hash their password
    User.addHook('beforeCreate', user => {
        user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
        );
    });
    return User;
};