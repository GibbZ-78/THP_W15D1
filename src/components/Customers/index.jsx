import React from 'react';
import { faker } from '@faker-js/faker';
import Customer from 'components/Customer';

const Customers = () => {
  const customersList = Array.from({ length: 100 }, () => ({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    jobTitle: faker.name.jobTitle(),
    avatarImage: faker.internet.avatar()
  }));

  console.log(customersList);

  return (
    <ul>
      {customersList.map((customerData) => (
        <Customer data={customerData} key={customerData.id} />
      ))}
    </ul>
  );
};

export default Customers;