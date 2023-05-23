import { FeatureCollection } from "@/components/geo/util";
import { Key, useEffect, useState } from "react";
import { Map, Polygon } from "react-kakao-maps-sdk";

function MapHome() {
  const [data, setData] = useState<FeatureCollection>();
  const sido = 50;
  const sig = undefined;
  useEffect(() => {
    const ab = async () => {
      try {
        const response = await import(`@/geojson/${sido}/${sig || sido}.json`);
        const data = await response.default;
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    ab();
  }, []);

  const handleCenter = (bbox: number[]) => {
    console.log({ lat: (bbox[1] + bbox[3]) / 2, lng: (bbox[0] + bbox[2]) / 2 });
    return { lat: (bbox[1] + bbox[3]) / 2, lng: (bbox[0] + bbox[2]) / 2 };
  };

  return (
    data && (
      <Map
        center={handleCenter(data.bbox!)}
        style={{ width: "500px", height: "500px" }}
        level={11}
      >
        {data.features.map(
          (features, featuresIndex: Key) =>
            features.geometry.coordinates[0].map((coord, i) => {
              const reverseCoord = coord.map((coordChild) => {
                return { lng: coordChild[0], lat: coordChild[1] };
              });
              return (
                <Polygon
                  key={`${featuresIndex}-${i}`}
                  path={reverseCoord}
                  strokeWeight={2}
                  strokeColor={"#004c80"}
                  strokeOpacity={0.8}
                  // fillColor={coord.isMouseover ? "#09f" : "#fff"}
                  fillColor={"#fff"}
                  fillOpacity={0.7}
                />
              );
            })
          //   // <Polygon
          //   //   // key={`area-${area.name}`}
          //   //   // path={area.path}
          //   //   strokeWeight={2}
          //   //   strokeColor={"#004c80"}
          //   //   strokeOpacity={0.8}
          //   //   // fillColor={area.isMouseover ? "#09f" : "#fff"}
          //   //   fillOpacity={0.7}
          //   // />
          // ))
        )}
        {/* {handlePath(data.features)} */}
      </Map>
    )
  );
}

export default MapHome;
