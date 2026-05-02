export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const response = await fetch('https://api.printify.com/v1/shops/1/products.json?limit=20', {
    headers: {
      'Authorization': `Bearer ${process.env.PRINTIFY_API_KEY}`
    }
  });

  const data = await response.json();
  res.status(200).json(data);
}
