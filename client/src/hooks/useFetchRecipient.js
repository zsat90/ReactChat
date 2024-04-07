/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { baseUrl, getRequest } from "../utils/services";

export const useFetchRecipientUser = (chat, user) => {
  const [recipientUser, setRecipientUser] = useState(null);
  const [error, setError] = useState(null);

  const recpientId = chat?.members.find((id) => id != user?._id);

  useEffect(() => {
    const getUser = async () => {
      if (!recpientId) return null;

      const response = await getRequest(`${baseUrl}/users/find/${recpientId}`);

      if (response.error) {
        return setError(response);
      }

      setRecipientUser(response);
    };

    getUser();
  }, []);

  return { recipientUser };
};
