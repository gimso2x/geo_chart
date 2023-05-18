import { geoMercator, geoPath } from "d3-geo";

export function getScaleAndProjection(features, width: number, height: number) {
  const projection = geoMercator().scale(1).translate([0, 0]);
  const path = geoPath().projection(projection);
  const b = path.bounds(features);

  const scale =
    0.95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height);

  // XXX we need to multiply by the width and height because nivo multiply this translation: https://github.com/plouc/nivo/blob/master/packages/geo/src/hooks.js#L57
  const translate: [number, number] = [
    (width - scale * (b[1][0] + b[0][0])) / 2 / width,
    (height - scale * (b[1][1] + b[0][1])) / 2 / height,
  ];

  // Update the projection to use computed scale & translate.
  return { projectionScale: scale, projectionTranslation: translate };
}
