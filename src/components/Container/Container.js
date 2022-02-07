import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 100px;
    display: flex;
    padding: 0 0 20px 30px;
    flex-direction: ${p => p.direction};

    text-align: ${p => p.align};
    justify-content: ${p => p.align};
    align-items: ${p => p.align};
`