import React from 'react';
import EmailAddress from 'components/EmailAddress';
import PhoneNumber from 'components/Phone';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Customer = (props) => {
  const { firstName, lastName, jobTitle, avatarImage } = props.data;
  const myKey = props.key;

  return (
    <li key={myKey}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={avatarImage} />
        <Card.Body>
          <Card.Title>{firstName} {lastName}</Card.Title>
          <Card.Text>
            {jobTitle}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          <PhoneNumber />
          <EmailAddress data={props.data} />
        </Card.Body>
      </Card>
      {firstName} {lastName} | {jobTitle} | <PhoneNumber /> | <EmailAddress data={props.data} />
    </li>
  );
};

export default Customer;