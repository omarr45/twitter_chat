import Avatar from 'react-nice-avatar';
import iIcon from '../assets/i.svg';

const PersonHeader = () => {
  return (
    <div className='person_header'>
      <Avatar
        style={{
          width: '2rem',
          height: '2rem',
          marginRight: '.6em',
          cursor: 'pointer',
        }}
      />
      Ahmed Tawfik
      <img src={iIcon} alt='more' className='more icon' />
    </div>
  );
};

export default PersonHeader;
