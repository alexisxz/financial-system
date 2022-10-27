import * as Styled from './styles'

import { Item } from '../../types/Item'

import { categories } from '../../data/categories'

import { formatDate } from '../../helpers/dateFilter'

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {

    return (
        <Styled.TableLine>
            <Styled.TableColumn>{formatDate(item.date)}</Styled.TableColumn>
            <Styled.TableColumn>
                <Styled.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </Styled.Category>
            </Styled.TableColumn>
            <Styled.TableColumn>{item.title}</Styled.TableColumn>
            <Styled.TableColumn>
                <Styled.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </Styled.Value>
            </Styled.TableColumn>
        </Styled.TableLine>
    )
}