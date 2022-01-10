import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense() {
  return <div className="new-expense">
      <form>
        <ExpenseForm></ExpenseForm>
      </form>
  </div>
}

export default NewExpense;