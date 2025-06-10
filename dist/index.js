import { fetchUsers } from './fetchUsers.js';
import { writeUsersToCSV, writeUsersToJSON } from './writeUsers.js';
async function main() {
    console.log("Starting script...");
    const users = await fetchUsers();
    if (!users) {
        console.error(" Failed to fetch required data.");
        return;
    }
    await writeUsersToCSV(users);
    await writeUsersToJSON(users, { note: "currentUser skipped, endpoint unavailable" });
    console.log("Done.");
}
main();
