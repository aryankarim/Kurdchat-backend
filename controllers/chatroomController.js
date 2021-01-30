const mongoose = require("mongoose");
const Chatroom = mongoose.model("Chatroom");

exports.createChatroom = async (req, res) => {

    const { name } = req.body;

    if (!name) throw "Chatroom name cannot be empty";

    if (name.length < 4) throw "Chatroom name is too short";

    const nameRegex = /^[A-Za-z\s]+$/;
    const spaceRegex = /^\s*$/

    if (!nameRegex.test(name)) throw "Chatroom name can contain only alphabets.";
    if (spaceRegex.test(name)) throw "Chatroom name can't be only spaces";

    const chatroomExists = await Chatroom.findOne({ name });

    if (chatroomExists) throw "Chatroom with that name already exists!";

    const chatroom = new Chatroom({
        name,
    });

    await chatroom.save();

    const theRoom = await Chatroom.findOne({ name });
    res.json({
        message: "Chatroom created!",
        theRoom
    });
};

exports.getAllChatrooms = async (req, res) => {///////return????????????????
    const chatrooms = await Chatroom.find({});//??????????????????

    res.json(chatrooms);
};