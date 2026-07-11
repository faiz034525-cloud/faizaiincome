// netlify/functions/subscribe.js
//
// This runs on Netlify's servers, NOT in the browser.
// That's the whole point: your SendPulse API secret lives here,
// as environment variables, and is never visible to anyone
// viewing your site's source code.

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let name, email;
  try {
    const body = JSON.parse(event.body);
    name = (body.name || '').trim();
    email = (body.email || '').trim();
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) };
  }

  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Valid name and email required' }) };
  }

  const CLIENT_ID = process.env.SENDPULSE_CLIENT_ID;
  const CLIENT_SECRET = process.env.SENDPULSE_CLIENT_SECRET;
  const LIST_ID = process.env.SENDPULSE_LIST_ID;

  if (!CLIENT_ID || !CLIENT_SECRET || !LIST_ID) {
    console.error('Missing SendPulse env vars');
    return { statusCode: 500, body: JSON.stringify({ error: 'Server not configured' }) };
  }

  try {
    // Step 1: get an OAuth token from SendPulse
    const tokenRes = await fetch('https://api.sendpulse.com/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
    });

    if (!tokenRes.ok) {
      const t = await tokenRes.text();
      console.error('SendPulse auth failed:', t);
      return { statusCode: 502, body: JSON.stringify({ error: 'Auth with email provider failed' }) };
    }

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    // Step 2: add the contact to your mailing list
    const addRes = await fetch(`https://api.sendpulse.com/addressbooks/${LIST_ID}/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        emails: [
          {
            email: email,
            variables: { name: name },
          },
        ],
      }),
    });

    if (!addRes.ok) {
      const t = await addRes.text();
      console.error('SendPulse add contact failed:', t);
      return { statusCode: 502, body: JSON.stringify({ error: 'Could not add subscriber' }) };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error('Unexpected error:', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Unexpected server error' }) };
  }
};
