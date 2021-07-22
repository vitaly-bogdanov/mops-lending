import EventEmitter from 'events';

export const sendFormDataEvent = {
  eventEmitter: new EventEmitter(),
  eventName: 'send-form-data',
  emit: function (telegramId, data) { 
    this.eventEmitter.emit(`${this.eventName}-${telegramId}`, data);
  },
  on: function (telegramId, callback) { 
    this.eventEmitter.on(`${this.eventName}-${telegramId}`, callback);
  }
}