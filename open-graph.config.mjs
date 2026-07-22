export default {
  outputDirectory: "public/images/social",
  reviewDirectory: "artifacts/open-graph-review",
  approvalFile: "open-graph-approvals.json",
  stateFile: "open-graph-state.json",
  templateVersion: "impact-pockets-1",
  seoContractVersion: "1",
  maximumBytes: 250_000,
  width: 1200,
  height: 630,
  eyebrow: "PRIVATE EQUITY FUND INCUBATION",
  tagline: "Your talent. Our strategy. Big impact.",
  domain: "www.impactpockets.com",
  mark: "Impact Pockets",
  colors: {
    background: "#181D3F",
    accent: "#FF8838",
    secondary: "#AFB6D3"
  },
  typography: {
    sansFamily: "Arial, sans-serif",
    accentFamily: "Arial, sans-serif",
    eyebrowSize: 18,
    headlineOneSize: 72,
    headlineTwoSize: 72,
    supportingSize: 24,
    destinationSize: 23
  },
  brandRules: {
    approvedColors: ["#181D3F", "#242D62", "#FF8838", "#AFB6D3", "#F0F1F6", "#FFFFFF"],
    approvedFontFamilies: ["Arial, sans-serif"],
    minimumSafePadding: 60,
    minimumSupportingTextSize: 18,
    maximumHeadlineTextSize: 84
  },
  contactInformation: {
    required: true,
    value: "www.impactpockets.com"
  },
  reviewContract: {
    reviewer: "Lane Campbell",
    reviewedOn: "2026-07-22",
    brandReference: "Impact Pockets Brand Guide, SHA-256 265967ec51729f23978ce23a59ebf0b97c59ac1b8bf795c1f37e663bd048a161",
    readabilityApproved: true,
    brandIntegrityApproved: true,
    contactInformationApproved: true
  },
  cards: [
    {
      name: "home",
      purpose: "Introduce the operator partnership when the homepage is shared.",
      lineOne: "Build Your",
      lineTwo: "Next Fund",
      sourceAssetSha256: "915567547460503305e8c374e88473f041a3e2ac43fbefcf7103bf05f53135b9"
    },
    {
      name: "about",
      purpose: "Introduce the Impact Pockets managing partners when the company page is shared.",
      lineOne: "Meet Our",
      lineTwo: "Managing Team",
      tagline: "Operating experience meets fund-building expertise.",
      sourceAssetSha256: "915567547460503305e8c374e88473f041a3e2ac43fbefcf7103bf05f53135b9"
    },
    {
      name: "process",
      purpose: "Summarize the fund-formation journey when the process page is shared.",
      lineOne: "A Proven Path",
      lineTwo: "To Fund Launch",
      tagline: "From discovery through formal fund formation.",
      sourceAssetSha256: "915567547460503305e8c374e88473f041a3e2ac43fbefcf7103bf05f53135b9"
    },
    {
      name: "services",
      purpose: "Present the breadth of Impact Pockets support when the services page is shared.",
      lineOne: "Full-Service",
      lineTwo: "Fund Incubation",
      tagline: "Strategy, infrastructure, fundraising, and support.",
      sourceAssetSha256: "915567547460503305e8c374e88473f041a3e2ac43fbefcf7103bf05f53135b9"
    },
    {
      name: "contact",
      purpose: "Invite qualified operators to connect when the contact page is shared.",
      lineOne: "Start The",
      lineTwo: "Conversation",
      tagline: "Connect with Impact Pockets.",
      sourceAssetSha256: "915567547460503305e8c374e88473f041a3e2ac43fbefcf7103bf05f53135b9"
    }
  ]
};
