import axios from "axios"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

export default function PersonalInfo({ chosenList, name, setName, cpf, setCpf }) {


    let navigate = useNavigate()

    function completForm(e) {

        e.preventDefault()
        e.stopPropagation()


        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"

        const body = {
            ids: [...chosenList],
            name: name,
            cpf: cpf
        }



        const promise = axios.post(URL, body)

        promise.then(() => console.log("Post feito com sucesso!"));

        promise.catch((err) => alert("Post não feito devido a um erro"))

        navigate("/sucesso")

    }

    return (
        <>
            <StyledPersonalInfo>
                <form onSubmit={completForm}>
                    <div>
                        <label forhtml="name">Nome do comprador</label>
                        <input id="name"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                            placeholder="Digite seu nome..." />
                    </div>
                    <div>
                        <label forhtml="cpf">CPF do comprador</label>
                        <input
                            id="cpf"
                            type="number"
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                            required
                            placeholder="Digite seu CPF..." />
                    </div>

                    <button type="submit">
                        Reservar assento(s)
                    </button>

                </form>
            </StyledPersonalInfo>


        </>
    )
};

const StyledPersonalInfo = styled.div`
width: 100%;
display: flex;
flex-direction: column;

form{
    display: flex;
    flex-direction: column;
    align-items: center;
}

div{
    margin: 7px;
}

label{
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;

color: #293845;
}

input{
box-sizing: border-box;


width: 327px;
height: 51px;


background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 3px;


::placeholder{
font-family: 'Roboto', sans-serif;
font-style: italic;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;

color: #AFAFAF;
}
}

button{
width: 225px;
height: 42px;

margin-top: 40px;

background: #E8833A;
border-radius: 3px;

display: flex;
justify-content: center;
align-items: center;

 font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;

color: #FFFFFF;

}
`

