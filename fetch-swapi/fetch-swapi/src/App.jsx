import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [planet, setPlanet] = useState(null);
  const [loadingPlanet, setLoadingPlanet] = useState(false);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then((res) => res.json())
      .then((data) => setUsers(data.results))
      .catch((err) => console.error("Users fetch error:", err));
  }, []);

  const handleUserClick = (userUid) => {
    setSelectedUser(null);
    setPlanet(null);
    setLoadingPlanet(false);

    fetch(`https://www.swapi.tech/api/people/${userUid}`)
      .then((res) => res.json())
      .then((data) => setSelectedUser(data.result.properties))
      .catch((err) => console.error("User fetch error:", err));
  };

  const showHomePlanet = () => {
    setLoadingPlanet(true);

    fetch(selectedUser.homeworld)
      .then((res) => res.json())
      .then((data) => {
        setPlanet(data.result.properties.name);
        setLoadingPlanet(false);
      })
      .catch((err) => console.error("Planet fetch error:", err));
  };

  return (
    <div>
      <h1>Star Wars Users</h1>

      <ul>
        {users.map((user) => (
          <li key={user.uid}>
            <button onClick={() => handleUserClick(user.uid)}>
              {user.name}
            </button>
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div>
          <h2>{selectedUser.name}</h2>

          {!planet && !loadingPlanet && (
            <button onClick={showHomePlanet}>Show Home Planet</button>
          )}

          {loadingPlanet && <p>loading...</p>}

          {planet && <p>Home Planet: {planet}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
