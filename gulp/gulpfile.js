const { series, src, dest } = require("gulp");
const jsonTransform = require("gulp-json-transform");
const clean = require("gulp-clean");
const rename = require("gulp-rename");

function cleanTask() {
  return src("./out/").pipe(clean());
}

function defaultTask(cb) {
  return src("./source/**/*.geojson")
    .pipe(
      jsonTransform(function (data, file) {
        return {
          ...data,
          features: data.features.map((feature) => {
            return { id: feature.properties.EMD_CD, ...feature };
          }),
        };
      })
    )
    .pipe(rename({ extname: ".json" }))
    .pipe(dest("./out/"));
}

exports.default = series(cleanTask, defaultTask);
