import { useLogto } from '@logto/react';
import { Button } from '@mantine/core';

export default function SignOut() {
  const { signOut } = useLogto();

  return (
    <Button onClick={() => signOut('https://flyboat.biishop.org')}>
      Sign out
    </Button>
  );
};
