import avatar from "../images/avatar.jpg";
function User(props) {
  return (
    <div>
      <h2>{props.userName}</h2>
      <img src={avatar} alt="" />
    </div>
  );
}
export default User;
