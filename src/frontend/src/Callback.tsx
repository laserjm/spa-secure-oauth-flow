import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface CallbackProps {
  setAccessToken: Dispatch<SetStateAction<string | null>>;
  setIdToken: Dispatch<SetStateAction<string | null>>;
}
export const Callback: React.FC<CallbackProps> = ({
  setAccessToken,
  setIdToken,
}) => {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const authorizationCode = urlParams.get("code");

  useEffect(() => {
    const fetchToken = async () => {
      const response = await fetch(`/api/oauth/token/${authorizationCode}`);
      // console.log(response);
      debugger;
      const data = await response.json();
      setAccessToken(data.access_token);
      setIdToken(data.id_token);

      navigate("/");
    };

    fetchToken();
  }, [authorizationCode]);

  return (
    <>
      <h2>Authenticating...</h2>
    </>
  );
};
export default Callback;
