import fetch from 'node-fetch';
const USERS_API = 'https://challenge.sunvoy.com/api/users';
const JSESSIONID_COOKIE = '9054fde2-3a4d-4080-87f4-047a3f71cc73';
export async function fetchUsers() {
    console.log('📡 Fetching users...');
    const response = await fetch(USERS_API, {
        method: 'POST', // 🔥 this matters!
        headers: {
            'Accept': '*/*',
            'User-Agent': 'Mozilla/5.0',
            'Cookie': `JSESSIONID=${JSESSIONID_COOKIE}`,
            'Content-Length': '0',
        },
    });
    if (!response.ok) {
        const html = await response.text();
        console.error('❌ Error:', html);
        return null;
    }
    const json = await response.json();
    if (!Array.isArray(json)) {
        console.error('❌ API response is not an array:', json);
        return null;
    }
    return json;
}
