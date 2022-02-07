import React from 'react';
import { Container } from '../components/Container/Container';

const WrongPage = () => {

    return(
        <Container direction='column' align='center'>
            <h1>Ops! Wrong page! </h1>
            <p>Theres nothing here</p>
            <img src={require('../images/cat_in_doubt.png')} alt="cat_in_doubt" />
        </Container>
    )
}

export default WrongPage;