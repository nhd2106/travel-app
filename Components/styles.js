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

export const HotDeal = styled.div`
/* the slides */
.slick-slide {
  margin: 0 10px;
}
/* the parent */
.slick-list {
  margin: 0 -10px;
}
  justify-content: center;
  margin-top: 25px;
  text-align: center;
  .heading-deal {
    position: relative;
    display: block;
    color: #ffa900;
    .heading-title {
      padding-left: 10px;
      padding-right: 10px;
      margin-left: 10px;
    }
    &::before {
      content: '' !important;
      background: url('https://bizweb.dktcdn.net/100/348/213/themes/719322/assets/bg_title_hotdeal.png?1588840882092');
      height: 30px !important;
      width: 52px;
      position: absolute;
      left: 30.3%;
    }
    &::after {
      content: '' !important;
      background: url('https://bizweb.dktcdn.net/100/348/213/themes/719322/assets/bg_title_hotdeal.png?15888408820');
      height: 30px !important;
      width: 52px;
      position: absolute;
      transform: rotate(180deg);
      right: 30.3%;
    }
  }
`;

export const SlickStyles = styled.div`
  /* the slides */
  position: relative;
  .slick-slide {
      margin: 0 10px;
  }
  /* the parent */
  .slick-list {
      margin: 0 -10px;
  }
  margin-top: 20px;

  .itemWrapper {
    cursor: pointer;
    .foodName {
      font-size: 10px;
    }
    .price {
      color: #FBA900;
      display: block;
    }
    .rating {
      color: #CCCCCC;
    }
    .slickImage {
      transition: all ease-in-out 0.3s;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &:hover {
        transform: translateY(10px);
        transition: all ease-in-out 0.3s;
      }
    }
    .item-description {
      margin-top: 10px;
    }
    .itemBtn{
      display: none;
      color: white;
      background-color: #ffa900;
      &:hover {
        background-color: #D92B1F;
      }
    }
    .detailBtn {
        margin-left: 5px;
    }
    &:hover .item-description > .itemBtn {
      display: inline-block;
    }
    &:hover .item-description > .price {
      display: none;
    }
  }
`;

export const HomeProductsStyles = styled.div`

.col-md-12, .col-md-9, .col-md-3 {
  padding: 0px !important
}
@media screen and (max-width: 1200px) {
  .homeBanner {
    text-align: center;
  }
}
.homeBanner {

  .test{
    padding-bottom: 30px !important;
    display: inline-block;
    img {
      max-width: 100%;
    }
  }
}
.slick-component {
  align-items: center;
}
.titleBottom {
  postion: relative;
  width: 100%;
  &:before{
    content: "";
    width: 100%;
    border-bottom: 2px solid #ffa900;
    position: absolute;
    bottom: 0px;
  }
  &:after{
    content: "";
    display: block;
    clear: both;
  }
}
  .top-title-wrapper {
    margin-bottom: 20px;
  }
  .topTitleMenu {
    @media screen and (max-width: 800px) {
      font-size: 12px;
      line-height: 12px;
    }
    position: relative;
    p {
      margin: 0;
      padding: 10px 28px 10px 28px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      font-family: 'UTM';
      font-weight: 600;
      background: #ffa900;
      text-transform: uppercase;
      display: inline-block;
    }
    a {
      color: white;
      text-decoration: none;
    }
  }

`;

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
