import styled from 'styled-components'

export const Container = styled.div`
    .market {
      display: flex;
      justify-content: space-between;
      background-color: #C4C4C4;
      padding: 1vh 1vw;
      border-radius: 8px;;

      img {
        border-radius: 200px;
        height: 30vh;
        width: 30vh;
        object-fit: cover;
      }

      .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .title{
          font-size: 5vh;
          font-weight: normal;
        }
        p{
          font-size: 3vh;
        }
      }

      .buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        justify-content: center;
        width: 15%;

        .details {
          width: 100%;
          font-size: 3vh;
          padding: 10px 30px;
          border: none;
          border-radius: 12px;
          color: white;
          transition: 300ms;
          cursor: pointer;
          margin: 0.5vh 0;
          background-color: #587813;

          &:hover {
            transition: 300ms;
            filter: brightness(0.7)
          }
        }

        .route {
          width: 100%;
          font-size: 3vh;
          padding: 10px 30px;
          border: none;
          border-radius: 12px;
          color: white;
          transition: 300ms;
          cursor: pointer;
          margin: 0.5vh 0;
          background-color: #134878;

          &:hover {
            transition: 300ms;
            filter: brightness(0.7)
          }
        }
      }
    }
`