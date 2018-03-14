module.exports = {


  friendlyName: 'Verify token',


  description: 'Verify given token and ',


  inputs: {

  },


  // exits: {
  //   invalidToken: {
  //     description: 'Invalid Authorization Token',
      
  //   }

  // },


  fn: async function (inputs, exits) {

    // All done.
    return exits.success();

    return jwt.verify(
      token, // The token to be verified
      tokenSecret, // Same token we used to sign
      {}, // No Option, for more see https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
      callback //Pass errors or decoded token to callback
    );

  }

};

