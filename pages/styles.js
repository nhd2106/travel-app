import styled from "styled-components";

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
`;
export const TraiNghiemStyles = styled.div`
  min-height: 76vh;
  width: 90%;
  margin: 7rem auto;
  .top-images {
    height: 100%;
    width: 100%;
    min-height: 76vh;
    display: flex;
    alig-items: center;
    .text {
      flex: 1 1 40rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }

    .image {
      flex: 4 1 100rem;
      // background: url("/trainghiemimages.jpg");
      // width: 100%;
      // height: 100%;
      // background-position: center;
      // background-size: cover;
      // background-repeat: no-repeat;
      // min-height: 76vh;
      svg {
        width: 100%;  
      }
    }
    margin-bottom: 7rem;
  }
  .card-wrapper {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (max-width: 599px) {
    .top-images {
      flex-direction: column;
      .text, .image {
        flex: unset;
      }
      svg {
        heigh t: 10rem;
      }
    }
  }
`;

export const LienHeStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), transparent),
    url("/relaxing.jpg");
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .form-wrapper {
    min-height: 70vh;
    min-width: 60vw;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 1rem;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1),
      0px 20px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    alin-items: center;

    .right,
    .left {
      text-align: center;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    svg {
      height: 25rem;
    }
  }
 
`;

export const BlogStyles = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`