import { ChatRoom } from "../schemas/ChatRoom";

class GetChatRoomByIdService {
  async execute(idChatRoom: string) {
    const room = await ChatRoom.findOne({
      idChatRoom,
    }).populate("idUsers").exec();

    return room;
  }
}

export { GetChatRoomByIdService };