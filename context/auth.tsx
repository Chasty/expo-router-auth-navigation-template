import { useRouter, useSegments } from "expo-router";
import React, { FC, ReactNode } from "react";

export type UserCredentials = {
  email: string;
  password: string;
};

type CredentialsContext = {
  signIn: (userCredentials: UserCredentials) => void;
  signOut: () => void;
  user: UserCredentials | null;
};

type AuthProviderProps = {
  userCredentials: UserCredentials | null;
  children?: ReactNode;
};

const AuthContext = React.createContext<CredentialsContext>({
  signIn: () => {},
  signOut: () => {},
  user: null,
});

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user: UserCredentials | null) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    console.log({ user, segments });
    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/login");
    } else if (user && (inAuthGroup || segments[0] === "[...404]")) {
      // Redirect away from the sign-in page.
      router.replace("/main");
    }
  }, [user, segments]);
}

export const Provider: FC<AuthProviderProps> = (props) => {
  const [user, setAuth] = React.useState<UserCredentials | null>(
    props.userCredentials
  );

  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        signIn: (userCredentials: UserCredentials) => setAuth(userCredentials),
        signOut: () => setAuth(null),
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
