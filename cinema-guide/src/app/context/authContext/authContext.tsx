import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

type TAuthContext = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

type TAuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<TAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: TAuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  
  const login = () => {
    console.log(isAuthenticated)
    setIsAuthenticated(true);
  };

  const logout = () => {
    console.log(isAuthenticated)
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
