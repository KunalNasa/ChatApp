import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"

export const sendMessage = async (req, res) => {
    const {message} = req.body;
    const {id : receiverId} = req.params;
    const senderId = req.user._id;


    let conversation = await Conversation.findOne({
        participants : {$all: [senderId, receiverId]}
    });
    if(!conversation){
        conversation = await Conversation.create({
            participants : [senderId, receiverId],
        })
    }
    const newMessage = new Message({
        senderId,
        receiverId,
        message
    })
    if(newMessage){
        conversation.messages.push(newMessage._id);
    }

    // SOCKET IO FUNCTIONALITY HERE
    
    // await conversation.save();
    // await newMessage.save();

    // this will run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);
    return res.status(200).json(newMessage)
}
export const getMessages = async (req, res) => {
    
}