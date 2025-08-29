const ChatMessages = ({ name, message }) => {
  return (
    <div className="flex items-center">
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="User Icon"
        className="w-8 h-8 rounded-full"
      />
      <span className="font-semibold  px-1">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessages;
