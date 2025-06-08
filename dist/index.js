import fetch from "node-fetch";
const url = "https://challenge.sunvoy.com/api/users";
const headers = {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-length": "0",
    "origin": "https://challenge.sunvoy.com",
    "priority": "u=1, i",
    "referer": "https://challenge.sunvoy.com/list",
    "sec-ch-ua": `"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"`,
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": `"Windows"`,
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
    "cookie": `user_preferences=eyJ0aGVtZSI6ImxpZ2h0IiwibGFuZ3VhZ2UiOiJlbiIsInRpbWV6b25lIjoiVVRDIiwibm90aWZpY2F0aW9ucyI6dHJ1ZX0%3D; feature_flags=eyJuZXdEYXNoYm9hcmQiOnRydWUsImJldGFGZWF0dXJlcyI6ZmFsc2UsImFkdmFuY2VkU2V0dGluZ3MiOnRydWUsImV4cGVyaW1lbnRhbFVJIjpmYWxzZX0%3D; tracking_consent=accepted; JSESSIONID=55572ad0-459e-4853-9e9b-803592dbf2be; _csrf_token=84edc256d34a720a66c2de920e9ef26a584bbd445c65a740640174fc88decae0; analytics_id=analytics_5326768735e70ded35455c4cbf630d4c; session_fingerprint=68d9405b57210df4e0fd43b070dd5ebde0dc8585c339412cc6e380a29f6bc00f; device_id=device_8fc6d728099a5a3e8cb9778e`
};
(async () => {
    console.log("🚀 Fetching users...");
    const res = await fetch(url, {
        method: "POST", // ⚠️ You had POST in your curl, not GET
        headers: headers
    });
    console.log("Status:", res.status);
    const text = await res.text();
    console.log("📦 Response Body:\n", text);
})();
