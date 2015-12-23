import Ember from 'ember';
import jwt from 'npm:jsonwebtoken';

export default Ember.Route.extend({
  model() {
    return Ember.Object.create({
      token: jwt.sign({foo: 'bar'}, 'secret')
    });
  }
});
