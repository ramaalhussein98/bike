import { BikeImg } from "../assets/images";
import { BikeContainer } from "../assets/styledComponents/BikeStyles";
import { BikeDataItem } from "../uitilts/interfaces";

const Bike = ({ bike }: { bike: BikeDataItem }) => {
  return (
    <BikeContainer>
      <div className="imgContainer">
        <img src={bike.thumb ?? BikeImg} alt={bike.title} />
      </div>
      <div className="BikeInfo">
        <div className="BikeInfoSpace">
          <div>
            <span className="bikeTitle">Title:</span>
            <span>{bike.title}</span>
          </div>
          <div>
            <span className="bikeDesc">Description:</span>
            <span>
              {bike.description ? 
                bike.description.slice(0,200)
               : (
                <i>no description</i>
              )}
            </span>
          </div>
          <div className="bikeDesc">Position stole:</div>
          <span>{bike.stolen_location}</span>
        </div>
        <div className="BikeInfoSpace">
          <div>
            <span className="bikeDesc">Date stole:</span>
            <span>{new Date(bike?.date_stolen * 1000).toLocaleString()}</span>
          </div>
          <div>
            <span className="bikeDesc">Date report:</span>
            <span>01-09-2023</span>
          </div>
        </div>
      </div>
    </BikeContainer>
  );
};

export default Bike;
