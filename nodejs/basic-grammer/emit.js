const EventEmitter = require('events');
const myEmitter = new EventEmitter(); // EventEmitterインスタンスを生成

// イベントが発動された時の処理を記述する
myEmitter.on('myEvent', () => {
    console.log('Emitted Event');
});

// イベントを発動させる
myEmitter.emit('myEvent');