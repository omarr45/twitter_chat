import './SendMessage.scss';

import emoji from '../assets/emoji.svg';
import gif from '../assets/gif.svg';
import media from '../assets/media.svg';
import send from '../assets/send.svg';

const SendMessage = () => {
  return (
    <div className='send_message'>
      <img src={media} alt='media' />
      <img src={gif} alt='gif' />
      <span className='send_wrapper'>
        <input
          type='text'
          name='send'
          id='send'
          className='send'
          placeholder='Start a new message'
        />
        <img src={emoji} alt='emoji' className='emoji' />
      </span>
      <img src={send} alt='send' />
    </div>
  );
};

export default SendMessage;
