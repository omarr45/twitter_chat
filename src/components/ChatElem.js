import './ChatElem.scss';

import Avatar from 'react-nice-avatar';

const ChatElem = ({ name, user, date, text }) => {
  return (
    <div className='chat_elem'>
      <Avatar style={{ width: '3rem', height: '3rem' }} />
      <div className='chat_elem_content'>
        <div className='chat_header'>
          <span className='chat_name'>{name}</span>
          <span className='chat_username'>@{user}</span>
          <span className='chat_date'>{date}</span>
        </div>
        <p className='chat_text'>{text}</p>
      </div>
    </div>
  );
};

export default ChatElem;
