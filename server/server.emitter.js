import EventEmitter from 'events';

export const sendFormDataEvent = {
  eventEmitter: new EventEmitter(),
  eventName: 'send-form-data',
  emit: function (data) { 
    this.eventEmitter.emit(this.eventName, data) 
  },
  on: function (callback) { 
    this.eventEmitter.on(this.eventName, callback) 
  }
}