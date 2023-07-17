import Single from "../../components/single/Single";
import { singleUser } from "../../data";
import "./user.scss";

const User = () => {
  //Fetch data and send to Single component

  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default User;
