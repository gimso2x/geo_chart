import { useEffect, useState } from "react";
import { NaverMap, useNavermaps } from "react-naver-maps";

const ChildNaverMap = () => {
  const [map, setMap] = useState(null);
  const sido = 50;
  const sig = undefined;

  function startDataLayer(map: any, data: any) {
    map?.data.setStyle(function (feature: {
      getProperty: (arg0: string) => any;
    }) {
      var styleOptions = {
        fillColor: "#ff0000",
        fillOpacity: 0.0001,
        strokeColor: "#ff0000",
        strokeWeight: 2,
        strokeOpacity: 0.4,
      };

      if (feature.getProperty("focus")) {
        styleOptions.fillOpacity = 0.6;
        styleOptions.fillColor = "#0f0";
        styleOptions.strokeColor = "#0f0";
        styleOptions.strokeWeight = 4;
        styleOptions.strokeOpacity = 1;
      }

      return styleOptions;
    });

    // regionGeoJson.forEach(function (geojson) {
    map?.data.addGeoJson(data);
    // });

    map?.data.addListener("click", function (e: any) {
      var feature = e.feature;

      if (feature.getProperty("focus") !== true) {
        feature.setProperty("focus", true);
      } else {
        feature.setProperty("focus", false);
      }
    });

    map?.data.addListener("mouseover", function (e: { feature: any }) {
      var feature = e.feature,
        regionName = feature.getProperty("area1");

      // tooltip
      //   .css({
      //     display: "",
      //     left: e.offset.x,
      //     top: e.offset.y,
      //   })
      //   .text(regionName);

      map.data.overrideStyle(feature, {
        fillOpacity: 0.6,
        strokeWeight: 4,
        strokeOpacity: 1,
      });
    });

    map.data.addListener("mouseout", function () {
      // tooltip.hide().empty();
      map.data.revertStyle();
    });
  }
  useEffect(() => {
    const ab = async () => {
      try {
        const response = await import(`@/geojson/${sido}/${sig || sido}.json`);
        const data = await response.default;
        startDataLayer(map, data);
      } catch (error) {
        console.error(error);
      }
    };
    ab();
  }, [map]);

  return <NaverMap ref={setMap} />;
};

export default ChildNaverMap;
