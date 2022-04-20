import styled from 'styled-components'

export const Container = styled.div`
  width: 85vw;
  margin: 5vh auto 0;
  padding-bottom: 5vh;
  font-family: "Roboto", sans-serif;

  p, h1, h2, h3, h4, h5 {
      color:black;
  }

  .sections {
    margin-top: 2vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5vw;
    .first-column, .second-column {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2vh;
    }

    .first-column{
      h1 {
        font-size: 6vh;
        font-weight: bold;
      }

      .image-box {
        padding: 40px;
        background-color: #C4C4C4;
        border-radius: 5px;
        width: 80%;
        display: flex;
        justify-content: center;
        img{
          border-radius: 200px;
          height: 35vh;
          width: 35vh;
          object-fit: cover;
        }
      }

      .like-deslike {
          display: flex;
          align-items: center;
          gap: 10px;
          
          .like, .deslike{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            button{
              background: none; 
              border: none;
              cursor: pointer;
            }
            p {
              font-size: 3vh;
            }
          }
      }

      .route {
        width: 60%;
        font-size: 3vh;
        padding: 10px 30px;
        border: none;
        border-radius: 12px;
        color: white;
        transition: 300ms;
        cursor: pointer;
        margin: 0.5vh 0;
        background-color: #134878;

      }

    }

    .second-column{
      justify-content: start;
      .old-price, .new-price {
        font-size: 5vh;
        margin: 0;
      }
      .old-price{
        text-decoration: line-through;
      }
      .info-box {
        padding: 20px;
        border: 3px solid #C4C4C4;
        min-height: 50vh;

        p {
          font-size: 3vh;
        }
      }
      .market {
        display: flex;
        align-items: center;
        gap: 5vw;

        img {
          border-radius: 200px;
          height: 25vh;
          width: 25vh;
          object-fit: cover;
        }

        .market-info {
          h1 {
            font-size: 5vh;
          }
        }
      }
    }
  }
  
`