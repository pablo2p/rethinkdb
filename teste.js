import { io } from './node_modules/socket.io-client';

const URL = 'http://localhost:3000';
const socket = io(URL, { autoConnect: false });

(function () {
  var form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = e.target.querySelector('#name');
    var message = e.target.querySelector('#message');
    var data = {
      name: name.value,
      message: message.value,
    };
    socket.emit('/messages', data);
    e.target.reset();
  });
  socket.on('/messages', function (data) {
    var messages = document.querySelector('#messages');
    var message = '<b>' + data.name + ':</b> ' + data.message + '<br />';
    messages.innerHTML += message;
  });
})();
