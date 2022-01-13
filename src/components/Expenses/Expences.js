import "./Expences.css";
import ExpencesList from './ExpencesList'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpencesChart from "./ExpencesChart";

const Expences = (props) => {
  const expenses = props.items;

  const [filterderYear, setFilterderYear] = useState("2020");

  const selectedYearChangehandler = (selectedYear) => {
    console.log(selectedYear);
    setFilterderYear(selectedYear);
  };

  const filterderExpences = expenses.filter((expence) => {
    return expence.date.getFullYear().toString() === filterderYear;
  });

  

  return (
    <div>
     
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterderYear}
          onSelectedYearChange={selectedYearChangehandler}
        />
         <ExpencesChart expenses={filterderExpences}/>
        <ExpencesList expences={filterderExpences}/>
        {/* {expenceNotFoundContent} */}
      </Card>
    </div>
  );
};

export default Expences;
