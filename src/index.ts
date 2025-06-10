import { fetchUsers } from './fetchUsers.js';
import { writeUsersToCSV } from './writeUsers.js';
import { User } from './types.js';

async function main() {
  const users = await fetchUsers();

  if (users && users.length > 0) {
    await writeUsersToCSV(users);
  } else {
    console.log("❌ No users found.");
  }
}

main();
