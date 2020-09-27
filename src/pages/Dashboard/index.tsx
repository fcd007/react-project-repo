import React from 'react';
import logoImg from '../../assets/logo.svg';

import { Title, Form } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={ logoImg } alt="Github Explorer" />
            <Title>Explore Repository no Github </Title>

            <Form >
                <input type="text" placeholder="Digite o nome do repostório"/>
            </Form>
        </>
    );
}

export default Dashboard;