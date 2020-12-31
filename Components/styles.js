import styled from 'styled-components';

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

export const FooterStyles = styled.div`
a {
  text-decoration: none;
  color: #757575;
  &:hover {
    color: #FFA900;
  }
}
  position: position: fixed;;
  .top-footer{
    margin-top: 15px;
    padding: 30px 0px;

    border-top: 1px solid #ebebeb;
  }
  .middle-footer{
    margin-top: 15px;
    padding: 30px 0px;
    .email-input {
      margin-right: 10px;
      width: 70%;
    }
    input {
      padding: 10px 15px;
      border: 1px solid lightgray;
      &:focus {
        outline: none;
      }
    }

    .getInfo-button {
      background:#FFA900;
      color: white;
      border: 1px solid transparent;
    }
    border-top: 1px solid #ebebeb;
    .social-network{
      ul {
        padding: 0px;
      }
      li {
        position: relative;
        float: left;
        list-style: none;
        margin-right: 10px;
        &:nth-child(1) {
          background: #455b94;
          border-radius: 50%;
          &:hover {
            position: relative;
            background: white;
            border: 1px solid #455b94;
            color: #455b94;
            padding: 0;
          }
        }
        &:nth-child(2) {
          position: relative;
          background: #43E2E4;
          border-radius: 50%;
          &:hover {
            background: white;
            border: 1px solid #455b94;
            padding: 0;
          }
        }
        &:nth-child(3) {
          position: relative;
          background: #FC4B3E;
          border-radius: 50%;
          &:hover {
            background: white;
            border: 1px solid #455b94;
            padding: 0;
          }
        }
        a {
          display: inline-block;
          width: 33px;
          height: 33px;
          text-align: center;
          line-height: 33px;
          border-radius: 50%;
          text-decoration: none;
          color: white;
          position: relative;
          
        }
        .facbook-link:hover {
          color: #455b94;
          
        }
        .insta-link:hover {
          color: #43E2E4;
        }
        .utube-link:hover {
          color: #FC4B3E;
        }
      }
    }
  }



  .bottom-footer {
    position: relative;
    text-align: center;
    border-top: 1px solid #ebebeb;
    align-items: center;
    vertical-align: center;
    margin-bottom: 20px;
    div {
      margin-top: 20px;
      margin-top: 20px;
    }
    span:last-child {
        color: #FFB000;
        font-weight: bold;
    }
  }

`;

export const SignInStyles = styled.div`
  display: flex !important;
  justify-content: center !important;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .form-wraper{
    width: 100%;
    max-width: 450px;
  }
  .top-sign-in {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .MuiFormControl-root{
      width: 100%;
    }
  }
`
