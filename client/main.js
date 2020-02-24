import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import 'bulma/css/bulma.css'
import './main.html';


// COMPONENTS
import './components/navbar.html';
import './components/footer.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.name = new ReactiveVar('Name');
});

Template.hello.helpers({
  name() {
    return Template.instance().name.get();
  },
});

Template.hello.events({
  'keyup input'(event, instance) {
    instance.name.set(event.target.value);
  },

  'click button'(event, instance) {
  	// instance.team.set();
  	// console.log(instance.team)
  }
});
