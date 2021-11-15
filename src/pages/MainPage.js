import { useEffect } from "react";
import { CardGroup, Row } from "react-bootstrap";
import UserCard from "../components/UserCard/UserCard";
import useUsers from "../hooks/useUsers";

const MainPage = () => {
  const { usersList, loadUsers } = useUsers();

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <CardGroup>
      <Row xs={1} md={2} className="g-3">
        {usersList.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            age={user.age}
          />
        ))}
      </Row>
    </CardGroup>
  );
};

export default MainPage;
