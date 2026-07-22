export default {
  brandGuide: {
    file: "brand/Impact_Pockets_Brand_Guide.pdf",
    sha256: "265967ec51729f23978ce23a59ebf0b97c59ac1b8bf795c1f37e663bd048a161"
  },
  assets: [
    {
      id: "primary-full-color",
      file: "public/images/Logo.png",
      sha256: "915567547460503305e8c374e88473f041a3e2ac43fbefcf7103bf05f53135b9",
      variant: "Primary full color",
      allowedSurfaces: ["light"],
      minimumClearSpaceRatio: 0.25,
      minimumRenderedWidth: 180
    },
    {
      id: "reverse-raster",
      file: "public/images/Logo.png",
      sha256: "915567547460503305e8c374e88473f041a3e2ac43fbefcf7103bf05f53135b9",
      variant: "Reverse rendering from approved 408 pixel source",
      allowedSurfaces: ["dark"],
      minimumClearSpaceRatio: 0.25,
      minimumRenderedWidth: 180
    }
  ],
  usages: [
    {
      context: "Desktop header",
      assetId: "primary-full-color",
      surface: "light",
      renderedWidth: 180,
      renderedHeight: 48,
      clearSpace: { top: 16, right: 1000, bottom: 16, left: 24 }
    },
    {
      context: "Site footer",
      assetId: "reverse-raster",
      surface: "dark",
      renderedWidth: 180,
      renderedHeight: 48,
      clearSpace: { top: 24, right: 80, bottom: 24, left: 24 }
    }
  ]
};
