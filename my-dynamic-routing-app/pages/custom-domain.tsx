// import { useState } from 'react';

// interface VerificationResult {
//   error?: string;
//   domain?: string;
//   configured?: boolean;
//   records?: string[];
// }

// export default function CustomDomainSetup() {
//   const [domain, setDomain] = useState<string>(''); // For user input
//   const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
//   const [loading, setLoading] = useState<boolean>(false); // Loading state

//   // Function to handle API call
//   const verifyDomain = async () => {
//     setLoading(true);
//     setVerificationResult(null); // Reset the result
//     try {
//       const response = await fetch('/api/verify-dns', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ domain }),
//       });

//       const data = await response.json();
//       setVerificationResult(data);
//     } catch (error) {
//       console.error('Error verifying domain:', error);
//       setVerificationResult({ error: 'Failed to verify domain. Please try again.' });
//     }
//     setLoading(false);
//   };

//   return (
//     <div>
//       {/* Input for domain name */}
//       <div style={{ marginBottom: '1rem' }}>
//         <label htmlFor="domain">
//           <strong>Enter Domain:</strong>
//         </label>
//         <input
//           id="domain"
//           type="text"
//           value={domain}
//           onChange={(e) => setDomain(e.target.value)}
//           placeholder="example.com"
//           style={{ marginLeft: '0.5rem', padding: '0.5rem', border: '1px solid #ddd' }}
//         />
//         <button
//           onClick={verifyDomain}
//           disabled={!domain || loading}
//           style={{ marginLeft: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}
//         >
//           {loading ? 'Verifying...' : 'Verify'}
//         </button>
//       </div>

//       {/* Verification Result */}
//       {verificationResult && (
//         <div style={{ marginTop: '1rem', border: '1px solid #ddd', padding: '1rem' }}>
//           {verificationResult.error ? (
//             <p style={{ color: 'red' }}>{verificationResult.error}</p>
//           ) : (
//             <>
//               <p>
//                 <strong>Domain:</strong> {verificationResult.domain}
//               </p>
//               <p>
//                 <strong>Configured:</strong>{' '}
//                 {verificationResult.configured ? '✅ Yes' : '❌ No'}
//               </p>
//               <p>
//                 <strong>DNS Records:</strong>{' '}
//                 {verificationResult.records?.length
//                   ? verificationResult.records.join(', ')
//                   : 'No records found'}
//               </p>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from 'react';

interface VerificationResult {
  error?: string;
  domain?: string;
  configured?: boolean;
  records?: string[];
}

export default function CustomDomainSetup() {
  const [domain, setDomain] = useState<string>(''); // For user input
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  // Function to handle API call
  const verifyDomain = async () => {
    setLoading(true);
    setVerificationResult(null); // Reset the result
    try {
      const response = await fetch('/api/verify-dns', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain }),
      });

      const data = await response.json();
      setVerificationResult(data);
    } catch (error) {
      console.error('Error verifying domain:', error);
      setVerificationResult({ error: 'Failed to verify domain. Please try again.' });
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '600px',
        }}
      >
        <h2 style={{ marginBottom: '1rem', color: '#333', textAlign: 'center', fontWeight: 'bold', }}>
          Custom Domain Verification
        </h2>

        {/* Input for domain name */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <label htmlFor="domain" style={{ marginRight: '0.5rem', fontWeight: 'bold', color: '#333' }}>
            Enter Domain:
          </label>
          <input
            id="domain"
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="example.com"
            style={{
              flex: 1,
              padding: '0.6rem',
              border: '1px solid #ccc',
              borderRadius: '6px',
              fontSize: '1rem',
              color: '#333',
              outline: 'none',
            }}
          />
          <button
            onClick={verifyDomain}
            disabled={!domain || loading}
            style={{
              marginLeft: '1rem',
              padding: '0.6rem 1.2rem',
              backgroundColor: loading ? '#ccc' : '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          >
            {loading ? 'Verifying...' : 'Verify'}
          </button>
        </div>

        {/* Verification Result */}
        {verificationResult && (
          <div
            style={{
              marginTop: '1rem',
              border: '1px solid #eee',
              borderRadius: '6px',
              backgroundColor: '#f4f6f8',
              padding: '1.2rem',
            }}
          >
            {verificationResult.error ? (
              <p style={{ color: '#ff4d4f', fontWeight: 'bold' }}>{verificationResult.error}</p>
            ) : (
              <>
                <p style={{ marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                  <strong>Domain:</strong> {verificationResult.domain}
                </p>
                <p style={{ marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                  <strong>Configured:</strong>{' '}
                  {verificationResult.configured ? (
                    <span style={{ color: '#28a745' }}>✅ Yes</span>
                  ) : (
                    <span style={{ color: '#ff4d4f' }}>❌ No</span>
                  )}
                </p>
                <p style={{ marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                  <strong>DNS Records:</strong>{' '}
                  {verificationResult.records?.length ? (
                    <span>{verificationResult.records.join(', ')}</span>
                  ) : (
                    <span style={{ color: '#888' }}>No records found</span>
                  )}
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
