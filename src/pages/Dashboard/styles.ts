import styled from 'styled-components';

//template literals
export const Title = styled.h1`
    font-size: 40px;
    color: #3a3a3a;
    max-width: 450px;
    margin-top: 80px;
    line-height: 56px;
`;

//template literals
export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
    }

    button {
        width: 210px;
    }
`;
