import { styled } from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  //   justify-content: center;
  padding: 2rem;
  color: #0f466b;
  display: block;
  margin: auto;
  width: 70%;
  .searchSection {
    // display: flex;
    // flex-direction: row;
    // justify-content: space-between;
    width: 100%;
    input {
      width: 40%;
      display: flex;
      padding: 15px 25px;
      margin: 0.5rem 0rem;
      background-color: #eee;
      border-radius: 10px;
      border: 1px solid transparent;
      margin-top: 2rem;
    }
  }
  .buttonSearch {
    display: block;
    background-color: #0f466b;
    color: white;
    font-weight: bold;
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 15px 25px;
    cursor: pointer;
    font-size: 15px;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .TotalNumsDiv {
    margin-top: 2rem;
    margin-bottom: 2rem;
    span {
      color: black;
      font-size: 20px;
      margin-right: 10px;
    }
  }
`;
