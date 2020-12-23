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
      background: url("/trainghiemimages.jpg");
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      min-height: 76vh;
    }
    margin-bottom: 7rem;
  }
  .card-wrapper {
      margin-top: 5rem;
      display: grid;
      grid-template-columns: repeat(5, 1fr)
  }
`;
