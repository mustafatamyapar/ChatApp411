import {
  createContext,
  useContext,
  useReducer,
} from "react";
import { AuthC } from "./AuthC";

export const ChatC = createContext();

export const ChatCProvider = ({ children }) => {
  const { currentUser } = useContext(AuthC);
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatC.Provider value={{ data:state, dispatch }}>
      {children}
    </ChatC.Provider>
  );
};