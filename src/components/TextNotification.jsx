import React, { useState } from 'react';
import PictureIcon from '../assets/picture.png';

const TextNotification = ({ textMessage, sendReply, navigateToInboxThread }) => {
  const [replyMessage, setReplyMessage] = useState('');

  const formatPhoneNumber = (number) => {
    const numberString = number.toString();
    const areaCode = numberString.slice(0, 3);
    const prefix = numberString.slice(3, 6);
    const lineNumber = numberString.slice(6);

    return `(${areaCode}) ${prefix} - ${lineNumber}`;
  };

  const handleReplyChange = (event) => {
    setReplyMessage(event.target.value);
  };

  const handleSendReply = () => {
    sendReply(replyMessage);
    setReplyMessage('');
  };

  const handleNavigateToInboxThread = () => {
    navigateToInboxThread(textMessage.threadId);
  };

  return (
    <div className='text-notification'>
      <div className='col'>
        <div className='btn-container'>
          <button className='btn-thread' onClick={handleNavigateToInboxThread}>
            <img src={PictureIcon} alt='PictureIcon' />
          </button>
        </div>
      </div>
      <div className='col'>
        <div className='text-gray'>
          <div className='font-bold'> New message from: </div>
          <div style={{ paddingTop: '4px' }}>{formatPhoneNumber(textMessage.from)}</div>
        </div>
        <div className='text-italics text-gray'>"{textMessage.text}"</div>
        <div>
          <textarea
            className='input-text'
            type='text'
            value={replyMessage}
            onChange={handleReplyChange}
            placeholder='You reply to be sent'
          />
        </div>
        <button className='btn-send text-bold' onClick={handleSendReply}>
          <img src={PictureIcon} alt='PictureIcon' />
          <span> Send Reply </span>
        </button>
      </div>
    </div>
  );
};

export default TextNotification;
