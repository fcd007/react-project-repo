import React from 'react';
import logoImg from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';
// import Repository from '../Repository';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={ logoImg } alt="Github Explorer" />
            <Title>Explore Repository no Github </Title>
            <Form >
                <input type="text" placeholder="Digite o nome do repostório"/>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="http://">
                    <img 
                        src="https://avatars3.githubusercontent.com/u/23359046?s=460&u=90066c4268b5c0489d541dafa129f2eab08407cb&v=4" 
                        alt="Avatar"
                    />
                    <div>
                        <strong>Rocketseat/unform</strong>
                        <p>Test descrition repository unform list</p>
                    </div>
                    <FiChevronRight size={ 20 }/>
                </a>

                <a href="http://">
                    <img 
                        src="https://avatars3.githubusercontent.com/u/23359046?s=460&u=90066c4268b5c0489d541dafa129f2eab08407cb&v=4" 
                        alt="Avatar"
                    />
                    <div>
                        <strong>Rocketseat/unform</strong>
                        <p>Test descrition repository unform list</p>
                    </div>
                    <FiChevronRight size={ 20 }/>
                </a>

                <a href="http://">
                    <img 
                        src="https://avatars3.githubusercontent.com/u/23359046?s=460&u=90066c4268b5c0489d541dafa129f2eab08407cb&v=4" 
                        alt="Avatar"
                    />
                    <div>
                        <strong>Rocketseat/unform</strong>
                        <p>Test descrition repository unform list</p>
                    </div>
                    <FiChevronRight size={ 20 }/>
                </a>
            </Repositories>
        </>
    );
}

export default Dashboard;