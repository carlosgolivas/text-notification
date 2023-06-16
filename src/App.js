import React from 'react';
import TextNotification from './components/TextNotification';
import './App.css';

const App = () => {
  const textMessage = {
    from: '3342079227',
    text: 'This is a message from your client about a loan',
    threadId: '123456789'
  };

  const sendReply = (replyMessage) => {
    console.log('Reply Message:', replyMessage);
  };

  const navigateToInboxThread = (threadId) => {
    console.log('Navigate to Thread:', threadId);
  };

  return (
    <div className='app'>
      <TextNotification textMessage={textMessage} sendReply={sendReply} navigateToInboxThread={navigateToInboxThread} />
    </div>
  );
};

export default App;
