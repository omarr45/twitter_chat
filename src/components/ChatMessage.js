const ChatMessage = ({ me, text, link }) => {
  return (
    <div className={`${me ? 'from_me' : 'not_me'} chat_message`}>
      {link ? (
        <a href={text} target='_blank' rel='noreferrer'>
          {text}
        </a>
      ) : (
        text
      )}
    </div>
  );
};

export default ChatMessage;
