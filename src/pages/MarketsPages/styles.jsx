import styled from 'styled-components'

export const Container = styled.div`
  width: 80vw;
  margin: 5vh auto 0;
  padding-bottom: 5vh;
  font-family: "Roboto", sans-serif;

  p, h1, h2, h3, h4, h5 {
      color:black;
  }
  
  .sections {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title h1{
      font-size: 6vh;
      font-weight: normal;
      margin-bottom: 4vh;
    }
    .markets {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 10px;
    }
  }
`