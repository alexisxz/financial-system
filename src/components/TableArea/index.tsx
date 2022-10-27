import * as Styled from './styles'

import { TableItem } from '../TableItem'

import { Item } from '../../types/Item'

type Props = {
    list: Item[]
}

export const TableArea = ({ list }: Props) => {

    return (
        <Styled.Table>
            <thead>
                <tr>
                    <Styled.TableHeadColumn widht={100}>Data</Styled.TableHeadColumn>
                    <Styled.TableHeadColumn widht={130}>Categoria</Styled.TableHeadColumn>
                    <Styled.TableHeadColumn>Título</Styled.TableHeadColumn>
                    <Styled.TableHeadColumn widht={150}>Valor</Styled.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem key={index} item={item} />
                ))}
            </tbody>
        </Styled.Table>
    )
}