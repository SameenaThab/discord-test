const path = require("path");
const Datastore = require("../lib/datastore");
const sortUtil = require("../util/sort");
const { MESSAGE_LIMIT } = require("../constants");

const db = new Datastore({
  filename: path.join(__dirname, "../data/reactions.db"),
});


// enum Emoji {
//     Like,Love,Lol
//   }

class Reaction {
  constructor(rawReaction) {
    const { _id: id, messageId, userId , emojiId, createdAt} = rawReaction;
    this.createdAt = createdAt == null ? Date.now() : createdAt;
    this.id = id;
    this.messageId = messageId
    this.emojiId = emojiId;
    this.userId = userId;
  }


  static getAll() {
    return db
      .find({})
      .then((rawReactions) =>
        sortUtil
          .sortByCreation(rawReactions)
          .map((rawReaction) => new Reaction(rawReaction))
      );
  }

  static getById(id) {
    return db.findOne({ _id: id }).then((rawReaction) => {
      if (rawReaction != null) {
        return new Reaction(rawReaction);
      }
    });
  }

  static getByMessageId(messageId) {
    return db
      .find({ messageId })
      .then((rawReactions) =>
      rawReactions.map((rawReaction) => new Reaction(rawReaction))
      );
  }

  // static getByCount(messageId) {
  //   return db
  //     .count({ messageId,emoji});
  // }

  save() {
    try {
      return db.update({ _id: this.id }, this.serialize(), { upsert: true });
    } catch (e) {
      return Promise.reject(e);
    }
  }

  serialize() {
    return {
      messageId: this.messageId,
      emojiId: this.emojiId,
      createdAt: this.createdAt,
      userId: this.userId,
    };
  }
}

module.exports = Reaction;
