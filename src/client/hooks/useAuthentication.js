import { useEffect, useState } from 'react';
import { auth } from '../firebase';

function authRedirect() {
  if (
    window.location.pathname === '/sign-in' ||
    window.location.pathname === '/'
  ) {
    window.location.href = '/overview';
  }
}
/**
 * Docs: https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data
 */
export function useAuthentication() {
  // default not authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  // default is loading
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    auth.onAuthStateChanged((firebaseUser) => {
      // if user exists it means authenticated
      if (firebaseUser) {
        setIsAuthenticated(true);
        setIsLoading(false);
        setUser(firebaseUser);
        authRedirect();
      } else {
        setIsAuthenticated(false);
        setIsLoading(false);
        setUser(null);
      }
    });
    return () => {}; // eslint-disable-line
  }, []);
  return { isAuthenticated, isLoading, user };
}
