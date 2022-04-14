import styled from 'styled-components'

export const Container = styled.div`
    background-color: #C4C4C4;
    .elements {
        padding-left: 20vw;
        margin: 0 2vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 12vh;
    }

    img {
        height: 8vh;
    }

    .link {
        font-size: 3vh;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
        color: black;
        transition: 200ms;
    }

    .link:hover {
        color: grey;
        transition: 200ms;
    }
`