import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository:  string;
}

const Repository: React.FC = () => {
    const { params }= useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={ logoImg } alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={ 16 }/>
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src="https://avatars3.githubusercontent.com/u/23359046?s=460&u=90066c4268b5c0489d541dafa129f2eab08407cb&v=4" 
                    alt="Facebook/react"/>
                    <div>
                        <strong>facebook/react</strong>
                        <p>Decrição do repositório</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                    <Link to= {"Teste to"} >
                        <div>
                            <strong>TItle</strong>
                            <p>descrition</p>
                        </div>
                        <FiChevronRight size={ 20 }/>
                    </Link>
            </Issues>
        </>
    );
};

export default Repository;