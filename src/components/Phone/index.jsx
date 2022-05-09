import React from 'react';
import { faker } from '@faker-js/faker';

const PhoneNumber = () => {
  const myPhone = faker.phone.phoneNumber();
  return (
    <a href={`tel:${myPhone}`}>Appeler le {myPhone}</a>
  );
};


export default PhoneNumber;