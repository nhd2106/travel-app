import styled from 'styled-components';

export const HotelTypes = styled.div`
    ul {
        list-style: none;
        padding-inline-start: unset;
    }
    a {
        color: black;
        text-decoration: none;
    }
    .wrapper {
        display: flex;
        justify-content: space-between;
        span {
            font-size: 1.4rem;
            font-weight: bold;
        }
    }
    img {
        width: 90%;
        border-radius: 1rem;
    }
    @media screen and (max-width: 720px) {
        
    }
`