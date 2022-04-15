import styled from 'styled-components'

export const Container = styled.div`
   
    button {
        cursor: pointer;
        background-color: white;
        border: none; 
        color: black; 
        font-size: 3vh;
        padding: 4px;
        border-radius: 10px;
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.7);
        }
    }
`;