import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import 'bulma/css/bulma.css'
import './main.html';

// COMPONENTS
import './components/navbar.html';
import './components/footer.html';

// COLLECTIONS
import { Messages } from '../both/collections'

if (Meteor.isDevelopment) {
  window.Messages = Messages
}

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0

});

Template.hello.helpers({
  messages() {
    return Messages.find().fetch();
  }
});

Template.hello.events({
  'submit .js-insert-message'(event, instance) {
    event.preventDefault();

    const data = {
      content: event.target.content.value,
      createdAt: new Date()
    };

    Messages.insert(data);
    event.target.content.value = '';
  },

  'click .js-remove-message'(event, instance) {
    const id = event.target.id
    Messages.remove({_id: id})
  }
});