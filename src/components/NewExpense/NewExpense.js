import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import React,{useState} from 'react';

const NewExpense = (props) => {
  const [isEditing,setIsEditing] = useState(false);

  const getExpenceFromExpenceForm = (enterdExpense) => {
    const expenceData = {
      ...enterdExpense,
      id: Math.random().toString(),
    };
    console.log(expenceData);
    props.onAddNewExpence(expenceData)
    setIsEditing(false)
  };

  const isEditingButtonHandler = ()=>{
    setIsEditing(true)
  }

  const stopEditingHandler = () =>{
    setIsEditing(false)
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={isEditingButtonHandler}>Add New Expences</button>}
      {isEditing && <ExpenseForm onExpenceAddChanges={getExpenceFromExpenceForm} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
