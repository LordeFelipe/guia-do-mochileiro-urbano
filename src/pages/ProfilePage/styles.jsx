import styled from 'styled-components'

export const Container = styled.div`
  height: 90vh;
  background-color: white;

  p, h2 {
    color: white;
  }
  .prof-page{
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    .profile{
      display:flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 65vh;
      height: 75vh;
      margin-top: 5%;
      border-radius: 1rem;
      margin-left: 5%;
      border: 2px solid black;
      margin-right: 10rem;
      background-color: #C4C4C4;
      img {
        height: 60%;
        width:75%;
        
      }
      h1{
        color: black;
        text-align: center;

      }
      button{
        width: 60%;
        height: 8%;
        font-size: larger;
        background-color: #554D4D;
        text-align: center;
        color: white;
        border-radius: 10px;
        transition-duration: 0.5s;
        cursor: pointer;
        :hover{
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        }
      }
      
    }
    .marketlist{
      border: 2px solid black;
      padding: 20px;
      border-radius: 20px;
      display: flex;
      height: 75vh;
      margin-top: 5%;;
      flex-direction: column;
      justify-content: space-evenly;
      background-color: #C4C4C4;
      
    }
  }
`