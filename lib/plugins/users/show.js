'use strict';

var User = require('../../models/user');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/users',
    config: {
      description: 'Update a User',
      handler: function(request, reply){
        User.findByIdAndUpdate(request.auth.credentials._id, request.payload, function(err, user){
          return reply(user);
        });
      }
    }
  });
  return next();
  };

  exports.register.attributes = {
    name: 'users.show'
  };
