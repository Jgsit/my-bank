import Account from "./Account";

function Accounts(props) {
  return (
    <div className="container">
      {props.accounts.map((account, index) => {
        return <Account key={index} data={account} />;
      })}
    </div>
  );
}
export default Accounts;
