import React, { useEffect, useState } from "react";
import { Success } from "./components/Success";
import { Users } from "./components/Users";
import "./index.scss";
// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => setUsers(json.data))
      .catch((err) => console.err(err))
      .finally(() => setLoading(false));
  }, []);

  const onChangeValue = (e) => {
    setSearchValue(e.target.value);
  };

  const changeInvites = (id) => {
    if (invites.includes(id)) {
      setInvites((prevState) => prevState.filter((item) => item !== id));
    } else {
      setInvites((prevState) => [...prevState, id]);
    }
  };

  const onChangeSuccess = () => {
    setSuccess(true);
  };

  return (
    <div className="App">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          items={users}
          isLoading={isLoading}
          searchValue={searchValue}
          onChangeValue={onChangeValue}
          invites={invites}
          changeInvites={changeInvites}
          onChangeSuccess={onChangeSuccess}
        />
      )}
    </div>
  );
}

export default App;
