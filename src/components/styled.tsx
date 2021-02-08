import styled from "styled-components";

export const PageWrapper = styled.div`
    padding: 30px;
`

export const Button = styled.div`
    border: 1px solid black;
    padding: 10px;
    width: 50px;
    text-align:center;
    border-radius:5px;
    margin:10px;
    color: black;
    cursor: pointer;
    
    :hover {
        color: white;
        border-color: teal;
        background: teal;
        
        > a {
            color: white;
        }
    }

    > a {
        text-decoration: none;
        color: black;
    }

`