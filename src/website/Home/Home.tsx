import { Typography, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { HomeContainer } from "../../assets/styledComponents/HomeStyles";
import Bike from "../../components/Bike";

import SkeletonBike from "../../uitilts/Skeleton";
import myAxios from "../../api/myAxios";
import { BikeDataItem } from "../../uitilts/interfaces";

const Home: React.FC = () => {
  const [data, setData] = useState<BikeDataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>("");

  const getData = async () => {
    setLoading(true);
    setError(null);
    // ?page=1&per_page=10&location=IP&distance=10&stolenness=stolen
    try {
      const res = await myAxios.get(`https://bikeindex.org:443/api/v3/search`, {
        params: {
          page,
          per_page: 10,
          location: "Munich",
          query: searchText,
          stolenness: "stolen",
        },
      });
      const resTotal = await myAxios.get(
        `https://bikeindex.org:443/api/v3/search/count`,
        {
          params: {
            page,
            per_page: 10,
            location: "Munich",
            query: searchText,
            stolenness: "stolen",
          },
        }
      );
      setData(res?.data?.bikes);
      setTotal(resTotal?.data?.stolen);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSearchClick = () => {
    setPage(1);
    getData();
  };

  return (
    <HomeContainer>
      <Typography variant="h3">Search for nearby stolen bikes</Typography>
      <div className="searchSection">
        <input
          type="text"
          placeholder="search title"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <button className="buttonSearch" onClick={handleSearchClick}>
        search
      </button>
      <div className="TotalNumsDiv">
        <span>Total numbers of bikes:</span>
        <span>{total}</span>
      </div>
      {loading ? (
        Array.from({ length: 5 }, (_, index) => <SkeletonBike key={index} />)
      ) : error ? (
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      ) : data.length === 0 ? (
        <span>no data</span>
      ) : (
        data.map((bike) => <Bike key={bike.id} bike={bike} />)
      )}
      {data.length === 0 ? (
        ""
      ) : (
        <Pagination
          count={total}
          page={page}
          onChange={handlePageChange}
          sx={{ marginTop: "2rem" }}
        />
      )}
    </HomeContainer>
  );
};

export default Home;
