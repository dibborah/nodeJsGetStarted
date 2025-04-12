const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// customEmitter.emit('response');

customEmitter.on('response', (name, id) => {
    console.log(`data received of user ${name} of id ${id}!!!`);
})

// customEmitter.emit('response'); // 'response in the name of my event'

// subscribed
customEmitter.on('response', () => {// name of my event is 'response'
    console.log('Some another logic!!!');
})

// Here I am emitting the response event
customEmitter.emit('response', 'sam', 45); // 'response in the name of my event'

