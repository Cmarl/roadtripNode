'use strict';

var Trip = require('../../models/trip');

exports.register = function(server, options, next){
  server.route({
    method: 'DELETE',
    path: '/trips/{tripId}',
    config: {
      description: 'Destroy a Trip',
      handler: function(request, reply){
        Trip.findOne({_id: request.params.tripId}, function(err, trip){
          if(err){return JSON.strigify(err);}
          trip.remove(function(){
            return reply(trip);
          });
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'trips.destroy'
};
