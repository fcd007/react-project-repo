import styled from 'styled-components';
import { shade } from 'polished';

//template literals
export const Title = styled.h1`
    font-size: 40px;
    color: #3a3a3a;
    max-width: 450px;
    margin-top: 80px;
    line-height: 56px;
`;

//template literals
//SASS, LESS
export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
    }

    button {
        width: 210px;
        height: 70px;
        background: #04d351;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: #fff;
        font-weight: bold;

        &:hover {
            background: ${shade('0.2', '#04d351')};
        }
    }
`;
