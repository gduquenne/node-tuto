import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  maxOccupancy: {
    type: Number,
    default: 1,
    validate: value => {
      if (value < 1) {
        throw new Error('Max occupancy must be at least 1');
      }
    },
  },
});

const Room = mongoose.model('Room', RoomSchema);

export default Room;
