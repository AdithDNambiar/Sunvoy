import fs from 'fs';
import { createObjectCsvWriter } from 'csv-writer';
import { User } from './types.js';

export async function writeUsersToCSV(users: User[]) {
  const csvWriter = createObjectCsvWriter({
    path: 'users.csv',
    header: [
  { id: 'id', title: 'ID' },
  { id: 'email', title: 'Email' },
  { id: 'firstName', title: 'First Name' },
  { id: 'lastName', title: 'Last Name' },
    ],

  });

  await csvWriter.writeRecords(users);
  console.log('✅ users.csv written successfully!');
}
