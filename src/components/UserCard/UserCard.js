import { ButtonGroup, Card, Button } from "react-bootstrap";
import "./UserCard.css";

const UserCard = ({ name, image, age }) => {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img
        className="card-image"
        variant="top"
        src={image}
        alt="User image"
      />
      <Card.Body>
        <Card.Title>
          {name}, {age}
        </Card.Title>
      </Card.Body>

      <Card.Body>
        <ButtonGroup className="offset-1 gap-sm-5" aria-label="Buttons">
          <Button
            variant="primary"
            size="sm"
            type="button"
            value="Add to friends"
          >
            Add to friends
          </Button>
          <Button
            variant="primary"
            size="sm"
            type="button"
            value="Add to enemies"
          >
            Add to enemies
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
