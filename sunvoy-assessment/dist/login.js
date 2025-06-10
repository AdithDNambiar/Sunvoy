import fetch from 'node-fetch';
import fs from 'fs';
import { CookieJar } from 'tough-cookie';
import fetchCookie from 'fetch-cookie';

const LOGIN_URL = 'https://challenge.sunvoy.com/login';
const USERS_URL = 'https://challenge.sunvoy.com/users';

const jar = new CookieJar();
const fetchWithCookies = fetchCookie(fetch, jar);

export async function login() {
  console.log('🟡 Logging in...');

  const res = await fetchWithCookies(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: 'demo@example.org',
      password: 'test',
    }),
  });

  const text = await res.text();
  if (!res.ok) {
    console.log('❌ Login failed');
    console.log(text.slice(0, 300));
    return { success: false };
  }

  // Save cookie jar to disk
  fs.writeFileSync('cookies.json', JSON.stringify(jar.serializeSync(), null, 2));
  console.log('✅ Logged in. Cookies saved.');

  // Optionally: immediately fetch users
  const usersRes = await fetchWithCookies(USERS_URL);
  const usersData = await usersRes.json();

  fs.writeFileSync('users.json', JSON.stringify(usersData, null, 2));
  console.log('✅ users.json saved with', usersData.length, 'users');

  return { success: true };
}
