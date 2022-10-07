import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Session({ dayData }) {

    /*

    dayData = {
        id: Number,
        weekday: string
        date: string data,
        showtimes: Lista com objs  {
                                     name: string
                                     id: Number 
                                    }
    }

    */


    return (
        <StyledSession>
            <p>{dayData.weekday} {dayData.date}</p>
            <Container>
                {dayData.showtimes.map((i) =>( 
                <Link to = {`/filme-assentos/${i.id}`}>
                <div>{i.name}</div>
                </Link>
                ))}
            </Container>
        </StyledSession>
    )
};


const StyledSession = styled.div`
    width: 350px;
    height: 100px;
    
    box-sizing: border-box;
    margin:8px;


    p{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
display: flex;
align-items: center;
letter-spacing: 0.02em;

color: #293845;
}

`

const Container = styled.div`
display: flex;

div{
width: 83px;
height: 43px;

margin-right: 8px;

display: flex;
justify-content: center;
align-items: center;

background: #E8833A;
border-radius: 3px;

font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.02em;

color: #FFFFFF;
}
`