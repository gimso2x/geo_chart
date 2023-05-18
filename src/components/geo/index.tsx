import {
  ResponsiveChoroplethCanvas,
  Choropleth,
  ChoroplethCanvas,
} from "@nivo/geo";
import world from "@/geojson/world_countries.json";
import gangdong from "@/geojson/gadong.json";
import seoul from "@/geojson/seoul.json";
import jeju from "@/geojson/jeju.json";
import { getScaleAndProjection } from "./util";

const data = [
  {
    id: "AFG",
    value: 556372,
  },
  {
    id: "KOR",
    value: 552972,
  },
  {
    id: "11740110",
    value: 552972,
  },
];
const MyResponsiveChoroplethCanvas = () => (
  <div style={{ width: 500, height: 500 }}>
    <ChoroplethCanvas
      width={500}
      height={500}
      data={data}
      features={gangdong.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="RdBu"
      domain={[0, 1000000]}
      unknownColor="#101b42"
      label="properties.EMD_NM"
      valueFormat="0.02s"
      {...getScaleAndProjection(gangdong, 500, 500)}
      enableGraticule={true}
      graticuleLineColor="rgba(0, 0, 0, .2)"
      // borderWidth={0.5}
      borderColor="#101b42"
      // legends={[
      //   {
      //     anchor: "bottom-left",
      //     direction: "column",
      //     justify: true,
      //     translateX: 20,
      //     translateY: -60,
      //     itemsSpacing: 0,
      //     itemWidth: 92,
      //     itemHeight: 18,
      //     itemDirection: "left-to-right",
      //     itemOpacity: 0.85,
      //     symbolSize: 18,
      //   },
      // ]}
    />
  </div>
);

export default MyResponsiveChoroplethCanvas;
