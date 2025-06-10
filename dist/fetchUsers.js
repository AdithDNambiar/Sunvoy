import fetch from 'node-fetch';
const USERS_API = 'https://challenge.sunvoy.com/api/users';
const JSESSIONID = 'd0ab3a99-dec0-420f-9bc2-8f2eabd1dd01';
export async function fetchUsers() {
    console.log('Fetching users...');
    const response = await fetch(USERS_API, {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'User-Agent': 'Mozilla/5.0',
            'Cookie': `JSESSIONID=${JSESSIONID}`,
            'Content-Length': '0',
        },
    });
    if (!response.ok) {
        const html = await response.text();
        console.error('Error:', html);
        return null;
    }
    const json = await response.json();
    return Array.isArray(json) ? json : null;
}
