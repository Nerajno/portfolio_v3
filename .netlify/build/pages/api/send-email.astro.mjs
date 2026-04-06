import sgMail from '@sendgrid/mail';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const body = await request.json();
  const { name, email, message } = body;
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(JSON.stringify({ error: "Invalid email format" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const apiKey = undefined                                ;
  if (!apiKey.startsWith("SG.")) {
    console.error("Invalid SendGrid API key format", process.env);
    return new Response(JSON.stringify({ error: "Invalid API key configuration" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
  sgMail.setApiKey(apiKey);
  const msg = {
    to: "nerando@developingdvlpr.com",
    from: "nerando@developingdvlpr.com",
    subject: `New message from ${name}`,
    text: `From: ${name} (${email})

Message: ${message}`,
    html: `<strong>From:</strong> ${name} (${email})<br><br><strong>Message:</strong><br>${message}`
  };
  try {
    await sgMail.send(msg);
    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
