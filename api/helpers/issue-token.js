module.exports = {


  friendlyName: 'Issue token',


  description: 'Issue JSON Web Token (JWT) giving a User object to be encrypted',


  inputs: {
    
    user: {
      type: 'ref',
      description: 'User instance to generate token for'
    },

    age: {
      type: 'number',
      defaultsTo: sails.config.tokens.tokenAge
    }

  },


  fn: async function (inputs, exits) {
    const jwt = require('jsonwebtoken');
    const tokenSecret = sails.config.tokens.tokenSecret;
    const user = inputs.user;
    const age = inputs.age;

    // User attributes that should expire current tokens when any is updated.
    payload = {
      id: user.id,
      email: user.email,
      password: user.password
    };

    token = jwt.sign(payload, tokenSecret, { expireInMinutes: age });

    // All done.
    return exits.success(token);

  }


};

