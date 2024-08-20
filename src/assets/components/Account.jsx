import Button from "./Button";

function Account(props) {
  console.log(props);
  const { name, balance, color, operations } = props.data;
  return (
    <section>
      <div className="title" style={{ backgroundColor: `${color}` }}>
        <h2>{name}</h2>
        <span>{balance} €</span>
      </div>
      <div className="core">
        {operations.map((opperation, index) => {
          return (
            <div className="opperation">
              <span className="date">{opperation.date}</span>
              <span className="description">{opperation.description}</span>
              <span className="amount">{opperation.amount} €</span>
            </div>
          );
        })}
      </div>
      <Button children="SEE MORE" />
    </section>
  );
}
export default Account;
