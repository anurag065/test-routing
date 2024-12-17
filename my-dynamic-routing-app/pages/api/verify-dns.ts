import { NextApiRequest, NextApiResponse } from 'next';
import { promises as dns } from 'dns';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { domain } = req.body;

  if (!domain) {
    return res.status(400).json({ error: 'Domain parameter is required.' });
  }

  try {
    // Resolve the A records for the given domain
    const records = await dns.resolve(domain, 'A');

    // Expected IP for verification
    const expectedIP = '203.0.113.10';

    // Check if the expected IP is present
    const isConfigured = records.includes(expectedIP);

    return res.status(200).json({
      domain,
      configured: isConfigured,
      records,
    });
  } catch (error) {
    console.error('Error resolving DNS:', error);
    return res.status(500).json({ error: 'Failed to resolve DNS records.', details: error });
  }
}
