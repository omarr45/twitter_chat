import newMessageIcon from '../assets/new_msg.svg';
import settingsIcon from '../assets/settings.svg';

const MessagesHeader = () => {
  return (
    <div className='messages_header'>
      Messages
      <img src={settingsIcon} alt='settings' className='settings icon' />
      <img
        src={newMessageIcon}
        alt='new_message'
        className='new_message icon'
      />
    </div>
  );
};

export default MessagesHeader;
