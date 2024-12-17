import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Your Project</h1>
      <p>
        Set up your custom domain{' '}
        <Link href="/custom-domain" style={{ color: 'blue' }}>
          here
        </Link>
        .
      </p>
    </div>
  );
}


