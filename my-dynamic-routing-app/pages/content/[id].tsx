import { useRouter } from 'next/router';

export default function ContentPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Content ID: {id}</h1>
    </div>
  );
}
