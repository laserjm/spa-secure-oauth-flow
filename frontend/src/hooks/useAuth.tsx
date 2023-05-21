import * as React from "react";
import { AuthContext } from "../components/AuthProvider";

export function useAuth() {
  return React.useContext(AuthContext);
}
