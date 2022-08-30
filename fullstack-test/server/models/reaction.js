const path = require("path");
const Datastore = require("../lib/datastore");
const sortUtil = require("../util/sort");

const db = new Datastore({
  filename: path.join(__dirname, "../data/reactions.db"),
});

class Reaction {
  constructor(rawReaction) {
    const { _id: id, messageId, userId , emoji, createdAt} = rawReaction;
    this.createdAt = createdAt == null ? Date.now() : createdAt;
    this.id = id;
    this.messageId = messageId
    this.emoji = emoji;
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

  save() {
    return db.update({ _id: this.id }, this.serialize(), { upsert: true });
  }

  delete() {
    return db.remove({ _id: this.id });
  }

  serialize() {
    return {
      messageId: this.messageId,
      emoji: this.emoji,
      createdAt: this.createdAt,
      userId: this.userId,
    };
  }
}

module.exports = Reaction;
