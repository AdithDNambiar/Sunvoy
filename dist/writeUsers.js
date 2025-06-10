import fs from 'fs';
import { createObjectCsvWriter } from 'csv-writer';
export async function writeUsersToCSV(users) {
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
    console.log('users.csv written successfully!');
}
export async function writeUsersToJSON(users, currentUser) {
    const data = {
        users,
        currentUser: currentUser || null,
    };
    fs.writeFileSync('users.json', JSON.stringify(data, null, 2), 'utf-8');
    console.log('users.json created with users and currentUser.');
}
