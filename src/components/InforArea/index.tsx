import * as Styled from './styles'

import { ResumeItem } from '../ResumeItem';

import { formateCurrentMonth } from '../../helpers/dateFilter';


type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month), 1);
        currentDate.setMonth(currentDate.getMonth() - 1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()}`)
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month), 1);
        currentDate.setMonth(currentDate.getMonth() + 1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()}`)
    }

    return (
        <Styled.Container>

            <Styled.MonthArea>
                <Styled.MonthArrow onClick={handlePrevMonth}>⬅️</Styled.MonthArrow>
                <Styled.MonthTitle>{formateCurrentMonth(currentMonth)}</Styled.MonthTitle>
                <Styled.MonthArrow onClick={handleNextMonth}>➡️</Styled.MonthArrow>
            </Styled.MonthArea>

            <Styled.ResumeArea>
                <ResumeItem title='Receita' value={income} />
                <ResumeItem title='Despesas' value={expense} />
                <ResumeItem title='Balanço' value={income - expense} color={income - expense < 0 ? 'red' : 'green'} />
            </Styled.ResumeArea>

        </Styled.Container>
    )
}