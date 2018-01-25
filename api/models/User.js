/**
 * Users.js
 *
 * @description :: Users model definition.
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    username: {
      required: true,
      type: 'string'
    },

    email: {
      required: true,
      type: 'string',
      unique: true
    },

    password: {
      type: 'string',
      required: true
    },

    guest: {
      type: 'boolean',
      defaultsTo: false
    },

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    cart: {
      collection: 'dessert',
      via: 'owner',
      through: 'cart'
    }

  },

  customToJSON: function () {
    return _omit(this, ['password']);
  },

  /**
   * Validates user password with stored password hash
   * @param password
   * @returns {Boolean}
   */
  validatePassword: function (password, done) {
    if (!password || password.length === 0) {
      return done(null, false);
    }

    // TODO: hash the entered password and compare it to the stored one
    let hashedPassword = password;
    done(null, hashedPassword === this.password);
  },

  /**
   * Encrypt password before creating a User
   * @param values
   * @param next
   */
  beforeCreate: function (values, next) {
    if (!this.guest)
      null; // TODO: Update user password wit hashed version.
    next();
  }

};
