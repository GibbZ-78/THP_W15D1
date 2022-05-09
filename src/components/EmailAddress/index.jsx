import React from 'react';

const EmailAddress = (props) => {
  const { firstName, lastName } = props.data;
  const myEmail = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
  return (
    <a href={`mailto:${myEmail}`}>Envoyer un message à {myEmail}</a>
  );
};


export default EmailAddress;