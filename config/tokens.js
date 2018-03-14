module.exports.tokens = {
  /***************************************************************************
  *                                                                          *
  * Configuration for JWT helpre used in user tokens                         *
  *                                                                          *
  ***************************************************************************/

    // Secret key to be used for generating and verifying tokens.
    tokenSecret: process.env.TOKEN_SECRET || 'di7lab_di7lab_n7la_b-bazboz_batta_b-ras_2otta',

    // Token age in minutes, defaults to 10080 (that's 7 days).
    tokenAge: Number(process.env.TOKEN_AGE) || 10080
  
  };
  