import { urlBuilder } from "./urlBuilder";
import { decodeToken } from "react-jwt";

interface HomeProps {
  accessToken: string | null;
  idToken: string | null;
  greeting: string;
}

export const Home: React.FC<HomeProps> = ({
  accessToken,
  idToken,
  greeting,
}) => {
  const handleLogin = () => {
    const authUrl = urlBuilder().authUrlBuilder();
    window.location.href = authUrl;
  };

  const handleLogout = () => {
    const logoutUrl = urlBuilder().logoutUrlBuilder();
    window.location.href = logoutUrl;
  };

  const getEmail = () => {
    const decodedToken: any = decodeToken(idToken!!);
    const email: string = decodedToken.email;
    return email;
  };

  const getPicture = () => {
    const decodedToken: any = decodeToken(idToken!!);
    const picture: string = decodedToken.picture;
    return picture;
  };

  const getDecodedToken = () => {
    return decodeToken(idToken!!);
  };

  return (
    <>
      <div>
        <h2>Home</h2>
        {accessToken !== null ? (
          <>
            <div>
              Hello <code>{getEmail()}</code>
            </div>
            <div>
              <button onClick={handleLogout}>Logout</button>
            </div>
            <div>
              <img
                src={getPicture()}
                alt="..."
                style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              />
              <pre
                style={{
                  textAlign: "left",
                  backgroundColor: "black",
                  padding: "5px",
                }}
              >
                {JSON.stringify(getDecodedToken(), null, 2)}
              </pre>
            </div>
          </>
        ) : (
          <>
            <div>Hello {greeting}, please login</div>
            <div>
              <button onClick={handleLogin}>Login</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Home;
