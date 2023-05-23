import { Container as MapDiv, NaverMap, useNavermaps } from "react-naver-maps";
import ChildNaverMap from "./child";

const NaverMapComponent = () => {
  return (
    <MapDiv
      style={{
        width: "100%",
        height: "600px",
      }}
    >
      <ChildNaverMap />
    </MapDiv>
  );
};

export default NaverMapComponent;
