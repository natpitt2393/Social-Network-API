const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
  {
    // TODO: add thoughtText
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1
    }
    // TODO: add createdAt

    // TODO: add username

    // TODO: add reactions

  },
  {
    // TODO: Add toJSON option
  }
);

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
