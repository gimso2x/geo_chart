import {
  ResponsiveChoroplethCanvas,
  Choropleth,
  ChoroplethCanvas,
} from "@nivo/geo";
import { FeatureCollection, getScaleAndProjection } from "./util";
import { useEffect, useState } from "react";

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

const Canvas = ({
  sido,
  sig,
}: {
  sido: string | undefined;
  sig: string | undefined;
}) => {
  const [features, setFeatures] = useState<FeatureCollection>();
  const [message, SetMessage] = useState("Loading.....");

  useEffect(() => {
    const ab = async () => {
      try {
        const response = await import(`@/geojson/${sido}/${sig || sido}.json`);
        const data = await response.default;
        setFeatures(data);
      } catch (error) {
        setFeatures(undefined);
        SetMessage("map json이 존재하지 않습니다.");
        console.error(error);
      }
    };
    sido && ab();
  }, [sido, sig]);

  return features ? (
    <ChoroplethCanvas
      width={500}
      height={500}
      data={data}
      features={features?.features || []}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="RdBu"
      domain={[0, 1000000]}
      unknownColor="#101b42"
      label="properties.EMD_NM"
      valueFormat="0.02s"
      {...getScaleAndProjection(features, 500, 500)}
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
  ) : (
    <div>{message}</div>
  );
};

export default Canvas;
