var db = require('../db');
var qs = require('qs');

module.exports = {
  messages: {
    get: function (callback) {
      //callback(data)~~~~~~~~~~~~~~~~~~~~

      var queryString = 'SELECT * FROM messages';

      db.query(queryString, function(err, rows, fields) {
        if (err) { throw err; }
        console.log('IN ROWS: ', rows);
      });          
    }, // a function which produces all the messages
    post: function () {

      var queryPost = 'INSERT INTO messages (user_id, message, room_id) VALUES (***data from message***)';

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

