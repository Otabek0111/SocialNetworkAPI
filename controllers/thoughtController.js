const { Thought, User } = require('../models');

module.exports = {
    // get all thoughts
    async getAllThoughts(req, res) {
        try {
            const dbThoughtData = await Thought.find({}).populate('reactions');
            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // get one thought by id
    async getThoughtById({ params }, res) {
        try { 
            const dbThoughtData = await Thought.findOne({ _id: params.id }).populate('reactions');
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // create thought to user
    async createThought({ body }, res) {
        try {
            const dbThoughtData = await Thought.create(body);
            const dbUserData = await User.findOneAndUpdate(
                { _id: body.userId },
                { $push: { thoughts: dbThoughtData._id } },
                { new: true }
            );
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // update thought 
    async updateThought({ params, body }, res) {
        try {
            const dbThoughtData = await Thought.findOneAndUpdate(
                { _id: params.id },
                body,
                { new: true }
            );
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },  
    // delete thought
    // /api/thoughts/:id

    async deleteThought(req, res) {
        try {
            const dbThoughtData = await Thought.findOneAndDelete(
                { _id: req.params.thoughtId });
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            const dbUserData = await User.findOneAndUpdate(
                { username: dbThoughtData.username },
                { $pull: { thoughts: req.params.id } },
                { new: true }
            );
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json({ message: 'Thought deleted!' });
        }
        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // add reaction to thought
    async addReaction(req, res) {
        try {
            const dbThoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { $pull: { reactions: { _id: req.params.reactionId } } },
                { new: true }
            );
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!!!' });
                return;
            }
            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // delete reaction from thought
    async deleteReaction( req, res) {
        try {
            const dbThoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { _id: req.params.reactionId } } },
                { new: true }
            );
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json({ message: 'Reaction deleted!' });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};

// Path: routes/api/thought-routes.js
