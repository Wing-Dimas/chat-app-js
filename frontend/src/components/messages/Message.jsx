import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const shouldShake = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="user avatar" />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${bubbleBgColor} pb-2 ${shouldShake}`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;

// STARTER CODE TEMPLATE
// const Message = () => {
//   return (
//     <div className="chat chat-end">
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img
//             src="https://avatar.iran.liara.run/public/11"
//             alt="user avatar"
//           />
//         </div>
//       </div>
//       <div className={`chat-bubble text-white bg-blue-500 `}>
//         Hi! What is Upp
//       </div>
//       <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
//         12:42
//       </div>
//     </div>
//   );
// };

// export default Message;
