import React, {createContext, useState, useCallback, useContext} from 'react';

export interface AuthState {
  token: string;
}

export interface AuthContext extends AuthState {
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider: React.FC = ({children}) => {
  const [authState, setAuthState] = useState<AuthState>({} as AuthState);

  const login = useCallback(() => {
    setAuthState((oldState) => ({...oldState, token: 'token here...'}));
  }, [setAuthState]);

  const logout = useCallback(() => {
    setAuthState({token: ''});
  }, [setAuthState]);

  return (
    <AuthContext.Provider value={{...authState, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth: () => AuthContext = () => {
  const auth = useContext(AuthContext);
  return auth;
};
