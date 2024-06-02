import { Skeleton } from "@mui/material";

const SkeletonBike: React.FC = () => {
  return <Skeleton height={180} animation="wave" sx={{ padding: "3rem" , marginTop:"-4rem"}} />;
};
export default SkeletonBike;
