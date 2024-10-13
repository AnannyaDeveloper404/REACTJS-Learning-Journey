import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);
  console.log("hello1");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user = await resp.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };

    fetchUser();
  }, []);
  if (isLoading) {
    console.log("hello2");
    return <h2>Loading ...</h2>;
  }
  if (isError) {
    console.log("err");
    return <h2>There was an error</h2>;
  }
  const { avatar_url, name, company, bio } = user;
  return (
    <div>
      <img
        src={avatar_url}
        style={{ width: "150px", borderRadius: "25px" }}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
