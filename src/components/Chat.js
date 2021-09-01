import './Chat.scss';

import ChatMessage from './ChatMessage';
import { v4 as uuidv4 } from 'uuid';

const Chat = () => {
  const messages = [
    // {
    //   text: 'Hi!',
    //   me: true,
    // },
    // {
    //   text: 'Hi',
    // },
    // {
    //   text: 'How are you?',
    // },
    // {
    //   text: "I'm fine",
    //   me: true,
    // },
    // {
    //   text: 'wbu?',
    //   me: true,
    // },
    // {
    //   text: "I'm great, thanks",
    // },
    {
      text: 'Hey!',
      me: true,
    },
    {
      text: 'What do you think about this chat clone?',
      me: true,
    },
    {
      text: 'I used ReactJS and SASS to build it.',
      me: true,
    },
    {
      text: 'Very good',
    },
    {
      text: 'Can I check the code of this project?',
    },
    {
      text: 'Of course! Here is a link to the repo',
      me: true,
    },
    {
      text: 'https://github.com/omarr45/twitter_chat',
      me: true,
      link: true,
    },
    {
      text: 'Do you have a portfolio?',
    },
    {
      text: 'Yeah sure, please visit this link',
      me: true,
    },
    {
      text: 'https://www.omar45.com/projects',
      me: true,
      link: true,
    },
    {
      text: 'You shall find all my projects + my CV there',
      me: true,
    },
    {
      text: "Alright, I'll check it rn",
    },
    {
      text: 'I would really appreciate it if you shared this project with your friends',
      me: true,
    },
    {
      text: 'Sure will do!',
    },
    {
      text: 'Thanks buddy ^^',
      me: true,
    },
  ];

  return (
    <div className='chat'>
      {messages.map((message) => (
        <ChatMessage
          text={message.text}
          me={message.me}
          link={message.link}
          key={uuidv4()}
        />
      ))}
    </div>
  );
};

export default Chat;
