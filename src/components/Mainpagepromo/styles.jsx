import styled from 'styled-components'

export const Container = styled.div`

    .product{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        border-radius: 10px;
        border: 1px solid black;
        width: 80vh;
        height: 20vh;
        background-color: #554D4D;
        img {
            border-radius: 100px;
            height: 18vh;
            width: 18vh;
            object-fit: cover;
            margin-top: 1%;

        }
        .info{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 1%;

        }
        .title{
          font-size: 4vh;
          font-weight: normal;
        }
        p{
          font-size: 2vh;
        }
        .old-price{
          text-decoration: line-through;
        }
        .buttons{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-top: 4%;
            .details{
                height: 5vh;
                font-size: 1.5rem;
                color: white;
                background-color: green;
                transition-duration: 0.1s ease-in-out;
                cursor: pointer;
                :hover{
                    background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
                }
            }
        }
        .like-deslike{
            width: 12vh;
            display: flex;
            justify-content: space-between;
        }
    }


`