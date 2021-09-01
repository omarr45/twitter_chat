import './App.scss';

import Chat from './components/Chat';
import Messages from './components/Messages';
import MessagesHeader from './components/MessagesHeader';
import PersonHeader from './components/PersonHeader';
import SendMessage from './components/SendMessage';

const App = () => {
  return (
    <div className='App'>
      <MessagesHeader />
      <PersonHeader />
      <Messages />
      <Chat />
      <SendMessage />
    </div>
  );
};

export default App;
