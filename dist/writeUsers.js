import { createObjectCsvWriter } from 'csv-writer';
export async function writeUsersToCSV(users) {
    const csvWriter = createObjectCsvWriter({
        path: 'users.csv',
        header: [
            { id: 'id', title: 'ID' },
            { id: 'name', title: 'Name' },
            { id: 'email', title: 'Email' },
            { id: 'firstName', title: 'First Name' },
            { id: 'lastName', title: 'Last Name' },
            // Add more headers if needed
        ],
    });
    await csvWriter.writeRecords(users);
    console.log('✅ users.csv written successfully!');
}
