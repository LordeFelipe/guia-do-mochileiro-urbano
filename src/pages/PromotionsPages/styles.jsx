import styled from 'styled-components'

export const Container = styled.div`
  width: 80vw;
  margin: 5vh auto;
  font-family: "Roboto", sans-serif;
  
  .sections {
    display: flex;
    flex-direction: column;
    align-items: center;

    .market-info {
      display: flex;
      justify-content: space-between;
      gap: 5vw;
      margin-bottom: 12vh;
      width: 70%;

      img {
        border-radius: 200px;
        height: 40vh;
        width: 40vh;
        object-fit: cover;
      }

      .info-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
          font-size: 6vh;
          font-weight: normal;
        }
        p {
          font-size: 2.5vh;
          font-weight: bold;
          margin: 1vh 0;
        }
        button {
          width: 100%;
          font-size: 2.5vh;
          padding: 10px 30px;
          border: none;
          border-radius: 12px;
          color: white;
          transition: 300ms;
          cursor: pointer;
          margin: 0.5vh 0;

          &.route {
            background: #134878;
          }

          &.new-promotion {
            background: #782513;
          } 

          &:hover {
            transition: 300ms;
            filter: brightness(0.7)
          }
        }
      }
    }
    .title h1{
      font-size: 6vh;
      font-weight: normal;
      margin-bottom: 4vh;
    }
    .promotions {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 10px;
      .product {
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
          .old-price{
            text-decoration: line-through;
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

          .like-deslike {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .like, .deslike{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            button{
              background-color: none; 
            }
            p {
              font-size: 3vh;
            }
          }
        }
      }
    }
  }
`