import { styled } from "styled-components";
export const BikeContainer = styled.main`
  display: flex;
  flex-direction: row;
  width: 100%;
  //   justify-content: space-between;
  background-color: #eee;
  height: 180px;
  cursor: pointer;
  margin-top: 2rem;

  // border-radius: 10px;
  .imgContainer {
    background: #f2f2f2;
    width: 200px;
    padding: 1rem;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .BikeInfo {
    display: grid;
    grid-template-columns: 2fr 200px;
    gap: 1rem;

    color: black;
    padding: 2rem;
    width: 100%;
    .BikeInfoSpace {
      display: flex;
      flex-direction: column;
      // justify-content: center;
    }
  }
  .bikeTitle {
    color: #3498db;
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
  }
  .bikeDesc {
    font-size: 20px;
    font-weight: bold;
    color: #666;
    margin-right: 10px;
  }
`;
