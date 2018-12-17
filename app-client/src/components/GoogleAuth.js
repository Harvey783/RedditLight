import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '1058742191222-g6utvrli9dt01n71d2elocr2u4aq2usv.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
