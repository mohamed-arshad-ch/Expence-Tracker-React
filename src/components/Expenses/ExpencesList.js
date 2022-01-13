import ExpenceItem from "./ExpenceItem";
import './ExpencesList.css'
const ExpencesList = (props) => {
 

  if (props.expences.length === 0) {
      return <h2 className="expenses-list__fallback"> Data Not Found</h2>
  }

  return (
    <ul className="expenses-list">
      {props.expences.map((item) => {
        return <ExpenceItem
          key={item.id}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />;
      })}
    </ul>
  );
};

export default ExpencesList;
