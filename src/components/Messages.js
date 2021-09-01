import './Messages.scss';

import ChatElem from './ChatElem';
import right from '../assets/right.svg';
import { v4 as uuidv4 } from 'uuid';

const Messages = () => {
  const people = [
    {
      name: 'Ahmed Khaled',
      user: 'ahmillectual',
      date: '12h',
      text: 'Shared a Tweet',
    },
    {
      name: 'Mounir.',
      user: 'MounirAbdo',
      date: '23h',
      text: 'حصل والله',
    },
    {
      name: 'ElMister',
      user: 'SEldeen',
      date: 'Aug 22',
      text: 'Shared a Tweet',
    },
    {
      name: 'Abdulaal',
      user: 'abdulaal',
      date: 'Jul 14',
      text: '😂😂😂😂😂',
    },
    {
      name: 'Ahmed',
      user: 'Fathy',
      date: 'Jun 19',
      text: 'ولا',
    },
    {
      name: 'Ibrahim Amr',
      user: 'Ibramr',
      date: 'Jun 10',
      text: 'حبيبي والله',
    },
    {
      name: 'Shehab Ihab',
      user: 'Shehab910',
      date: 'May 29',
      text: 'N O I C E 😂',
    },
    {
      name: 'Farag Mohsen',
      user: 'FaragMoh',
      date: 'April 5',
      text: 'كل سنة وانت طيب يسطاااا ❤❤',
    },
    {
      name: 'Mostafa Bahr',
      user: 'Most12',
      date: 'April 2',
      text: 'Yastaaaa',
    },
    {
      name: 'Mahmoud Yasser',
      user: 'MahYass',
      date: 'Mar 28',
      text: 'يارب',
    },
  ];

  return (
    <div className='messages'>
      <div className='requests'>
        Message Requests <img src={right} alt='requests' />
      </div>
      <div className='search_for_people'>
        <input
          placeholder='Search for people and groups'
          type='text'
          name='search_for_people'
          id='search_for_people'
          className='search_for_people'
        />
      </div>
      {people.map((person) => (
        <ChatElem
          key={uuidv4()}
          name={person.name}
          user={person.user}
          date={person.date}
          text={person.text}
        />
      ))}
    </div>
  );
};

export default Messages;
