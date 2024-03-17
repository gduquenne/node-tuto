import Room from '../models/roomModel.js';

export const addRoom = async (req, res) => {
  new Room(req.body)
    .save()
    .then(room => res.status(200).send(room))
    .catch(err => res.status(500).send(err));
};

export const getRooms = async (_, res) =>
  Room.find().then(rooms => res.send(rooms));

export const findRooms = async (req, res) => {
  return Room.find(
    Object.keys(req.body)
      .filter(el => el in Room.schema.paths)
      .reduce(
        (acc, el) => ({
          ...acc,
          [el]:
            typeof req.body[el] === 'string'
              ? req.body[el].toLowerCase()
              : req.body[el],
        }),
        {}
      ),
    'name maxOccupancy',
    { skip: 0, limit: 10 }
  )
    .then(room => res.send(room))
    .catch(err => res.status(400).send(err));
};

export const updateRoom = async (req, res) =>
  Room.findByIdAndUpdate(req.params.id, req.body)
    .then(room => room.save())
    .then(room => res.send(room))
    .catch(err => res.status(400).send(err));

export const deleteRoom = async (req, res) =>
  Room.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).send('Room deleted successfully'))
    .catch(() => res.status(404).send('No room found with that ID'));
