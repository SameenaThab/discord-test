const keyMirror = require("key-mirror");

const clientEvents = keyMirror({
  FETCH_ALL_MESSAGES: null,
  FETCH_ALL_CHANNELS: null,
  FETCH_ALL_USERS: null,
  CREATE_CHANNEL: null,
  CREATE_MESSAGE: null,
  FETCH_ALL_REACTION:null,
  EDIT_MESSAGE: null,
  CREATE_USER: null,
  LOG_IN: null,
  LOG_OUT: null,
});

const serverEvents = keyMirror({
  UPDATE_ALL_MESSAGES: null,
  UPDATE_ALL_CHANNELS: null,
  UPDATE_ALL_USERS: null,
});

const emojiReactions = keyMirror({
  LIKE: '👍',
  LOVE: '❤️',
  LOL: '😂',
});

const MESSAGE_LIMIT = 256;

module.exports = {
  clientEvents,
  serverEvents,
  MESSAGE_LIMIT,
  emojiReactions,
};
