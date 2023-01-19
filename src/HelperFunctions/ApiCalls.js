import axios from "axios";


export const convertFromApiCard = (apiCard) => {
  const { board_id: boardId, id, likes_count: likesCount, message } = apiCard;

  return { boardId, id, likesCount, message };
};

export const getAllBoardsApi = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/boards`
  );
  return response.data;
};

export const deleteCardApi = async (cardId) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}`
  );
  return convertFromApiCard(response.data);
};


