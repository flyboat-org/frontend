import { useLogto } from "@logto/react";
import { Button } from "@mantine/core";

export default function SignIn() {
  const { signIn, isAuthenticated } = useLogto();

  if (isAuthenticated) {
    //console.log(getAccessToken('http://mytestapi'))
    return <div>Signed in</div>;
  }

  return (
    <Button
      variant="default"
      onClick={() => signIn(`${location.origin}/callback`)}
    >
      Sign In
    </Button>
  );
}
