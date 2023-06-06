import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 4rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #fff;

`;

export const Title = styled.p`
    font-size: 1rem;
    font-weight: 700;

    margin-left: 12px;

    background-color: #fff;
    color: #000;

    cursor: default;
`;

export const ContainerButton = styled.div`
    background-color: #fff;

    display: flex;
    gap: 0.25rem;
    align-items: center;
    
    margin-right: 12px;
`;

export const ButtonOpenVagancy = styled.a`
    padding: 0.5rem 0.75rem;

    font-size: 0.8rem;

    background-color: #B22222;
    color: #fff;

    border: none;

    cursor: pointer;

    transition: all .2s ease-in-out;

    &:hover {
        background-color: #FF0000;
    }
`;

export const ButtonViewVagancy = styled.a`
    padding: 0.5rem 0.75rem;

    font-size: 0.8rem;

    background-color: #fff;
    color: #4F4F4F	;

    border: none;

    cursor: pointer;

    transition: all .2s ease-in-out;

    &:hover {
        background-color: 	#F5F5F5;
    }
`;