import fetch from 'node-fetch';
const USERS_API = 'https://challenge.sunvoy.com/users'; // 🔄 BACK TO THIS
// Copy fresh cookie from Chrome DevTools (Application tab)
const JSESSIONID_COOKIE = '55572ad0-459e-4853-9e9b-803592dbf2be';
export async function fetchUsers() {
    console.log('📡 Fetching users with session cookie...');
    const response = await fetch(USERS_API, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'User-Agent': 'Mozilla/5.0',
            'Cookie': `JSESSIONID=${JSESSIONID_COOKIE}`,
        },
    });
    console.log('Status:', response.status);
    console.log('Content-Type:', response.headers.get('content-type'));
    if (!response.ok) {
        const html = await response.text();
        console.error('❌ Error:', html);
        return null;
    }
    const json = await response.json();
    console.log('✅ Users fetched successfully.');
    return json;
}
