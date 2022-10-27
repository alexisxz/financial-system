import { useState } from 'react';
import * as Styled from './styles';
import { Item } from '../../types/Item';

import { categories } from '../../data/categories';
import { newDateAdjusted } from '../../helpers/dateFilter';

type Props = {
    onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
    const [dateField, setDateField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [titleField, setTitleField] = useState('');
    const [valueField, setValueField] = useState(0);

    let categoryKeys: string[] = Object.keys(categories);

    const handleAddEvent = () => {
        let errors: string[] = [];

        if (isNaN(new Date(dateField).getTime())) {
            errors.push('Data inválida!');
        }
        if (!categoryKeys.includes(categoryField)) {
            errors.push('Categoria inválida!');
        }
        if (titleField === '') {
            errors.push('Título vazio!');
        }
        if (valueField <= 0) {
            errors.push('Valor inválido!');
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
        } else {
            onAdd({
                date: newDateAdjusted(dateField),
                category: categoryField,
                title: titleField,
                value: valueField
            });
            clearFields();
        }
    }

    const clearFields = () => {
        setDateField('');
        setCategoryField('');
        setTitleField('');
        setValueField(0);
    }

    return (
        <Styled.Container>
            <Styled.InputLabel>
                <Styled.InputTitle>Data</Styled.InputTitle>
                <Styled.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
            </Styled.InputLabel>
            <Styled.InputLabel>
                <Styled.InputTitle>Categoria</Styled.InputTitle>
                <Styled.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
                    <>
                        <option></option>
                        {categoryKeys.map((key, index) => (
                            <option key={index} value={key}>{categories[key].title}</option>
                        ))}
                    </>
                </Styled.Select>
            </Styled.InputLabel>
            <Styled.InputLabel>
                <Styled.InputTitle>Título</Styled.InputTitle>
                <Styled.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
            </Styled.InputLabel>
            <Styled.InputLabel>
                <Styled.InputTitle>Valor</Styled.InputTitle>
                <Styled.Input type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
            </Styled.InputLabel>
            <Styled.InputLabel>
                <Styled.InputTitle>&nbsp;</Styled.InputTitle>
                <Styled.Button onClick={handleAddEvent}>Adicionar</Styled.Button>
            </Styled.InputLabel>
        </Styled.Container>
    );
}