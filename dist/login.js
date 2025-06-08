import fetch from 'node-fetch';
import tough from 'tough-cookie';
import fetchCookie from 'fetch-cookie';
const LOGIN_URL = 'https://challenge.sunvoy.com/api/auth/login';
export const cookieJar = new tough.CookieJar();
const fetchWithCookies = fetchCookie(fetch, cookieJar);
export async function login() {
    console.log('🔐 Logging in to get cookies...');
    try {
        const response = await fetchWithCookies(LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'demo@example.org',
                password: 'test',
            }),
        });
        console.log('Status:', response.status);
        console.log('Set-Cookie:', response.headers.raw()['set-cookie']?.join('\n') || '❌ None');
        const result = await response.text();
        console.log('🔓 Login result:', result);
        return cookieJar;
    }
    catch (err) {
        console.error('❌ Login failed:', err.message);
        return null;
    }
}
