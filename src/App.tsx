import { useEffect, useState } from 'react';

// styles
import * as Styled from './App.styles'

// components
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InforArea';
import { InputArea } from './components/InputArea';

// types
import { Item } from './types/Item';
import { Category } from './types/Category';

//data
import { categories } from './data/categories';
import { items } from './data/items';

//helpers
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';


export const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <Styled.Container>

      <Styled.Header>
        <Styled.HeaderText>Sistema Financeiro</Styled.HeaderText>
      </Styled.Header>

      <Styled.Body>

        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <InputArea onAdd={handleAddItem} />

        <TableArea list={filteredList} />

      </Styled.Body>

    </Styled.Container>
  );
}