import * as Styled from './styles'

type Props = {
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({ title, value, color }: Props) => {

    return (
        <Styled.Container>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Info color={color}>R$ {value}</Styled.Info>
        </Styled.Container>
    )
}