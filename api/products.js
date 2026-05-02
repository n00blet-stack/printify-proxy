export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  try {
    const response = await fetch('https://api.printify.com/v1/shops.json', {
      headers: {
        'Authorization': `Bearer ${process.env.PRINTIFY_API_KEY}`
      }
    });

    const text = await response.text();
    res.status(200).json({ 
      status: response.status, 
      body: text,
      hasKey: !!process.env.PRINTIFY_API_KEY
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
