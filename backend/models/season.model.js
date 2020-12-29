const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const seasonSchema = new Schema({
  // season: { type: Number },
  episodes: { type: Array, required: true }
}, {
  timestamps: true
})

const Season = mongoose.model('Season', seasonSchema);

module.exports = Season;


// const mongoose = require("mongoose")
// const Schema = mongoose.Schema

// const userSchema = new Schema({
//   userName: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//     minlength: 3
//   },
// }, {
//   timestamps: true,
// })

// const User = mongoose.model('User', userSchema)

// module.exports = User