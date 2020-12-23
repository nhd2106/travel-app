import styled from 'styled-components';
import {
  Button,
} from '@material-ui/core';


export const NavigationsStyled = styled.div`
  color: white;
  .top-header {
    background-color: #ffa900;
    .top-brand {
      cursor: pointer;
    }
  }
  .brand {
    cursor: pointer;
    background-color: white;
    border-radius: 50%;
  }
  .active {
    color: yellow;
    text-decoration: none !important;
  }
  a {
    color: white;
    text-transform: uppercase;
    font-weight: 500;
    &:hover {
      text-decoration: none;
      color: yellow;
    }
  }
  .MuiDrawer-paper {
    background-color:  '#393A44';
  }
`;

export const DestinationsStyled = styled.div`
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
a {
  text-decoration: none;
  color: black;
  display: flex;
  jutify-content: center;
  align-items: center;
  width: 12rem;
}
  @media (max-width:  959px) {
    .wrapper {
        grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr))
    }
  } 
  @media (max-width: 767px) {
    
    a {
      flex-direction: column;
      width: 5rem;
    }
  }

`