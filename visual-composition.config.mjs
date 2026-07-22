export default {
  outputDirectory: "dist/client",
  report: "artifacts/visual-composition-report.json",
  screenshotDirectory: "artifacts/visual-composition",
  routes: ["/", "/about-impact-pockets/", "/our-process/", "/our-services/"],
  browsers: ["chromium", "webkit"],
  viewports: [
    { name: "desktop", width: 1440, height: 1000 },
    { name: "mobile", width: 390, height: 844 },
    { name: "minimum", width: 320, height: 720 }
  ]
};
