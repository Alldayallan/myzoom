import axios from "axios";

export const checkIfRoomExists = async (roomId) => {
    const response = await axios.get(
        `https://zoom-like-services-9120-dev.twil.io/room-exists?roomId=${roomId}`
    );

    return response.data.reoomExists;
};