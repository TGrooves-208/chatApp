import React from 'react';

import {GiftedChat} from 'react-native-gifted-chat';

class Chat extends React.Component {
  state = {
    messages: []
  };
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          // send the message to your backend db through firebase
        }}
        user={{
          _id: 1,
        }}
      />
    );
  }
}

Chat.defaultProps = {
  name: 'Red Eye',
};

Chat.propTypes = {
  name: React.PropTypes.string,
};

export default Chat;
