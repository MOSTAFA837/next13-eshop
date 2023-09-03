import axios from "axios";
import Main from "./Maun";
import Top from "./Top";

export default async function Header() {
  let country = await axios
    .get("https://api.ipregistry.co/?key=b56793nukrwrwq5n")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      <Top country={country} />
      <Main />
    </div>
  );
}
