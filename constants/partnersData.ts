export interface Partner {
  partnerName: string;
  logoUrl: string;
  description: string;
  stats: { title: string; value: string }[];
  website: string;
  tag: string;
}

export const partners: Partner[] = [
  {
    partnerName: "Promoting Queens",
    logoUrl: "/promoting-queens.svg",
    description: "ChessNcode operates in strategic partnerships with promoting Queens (US 501(c) (3)) which has empowered 750+ girls across 4+ regions .",
    stats: [
      {
        title: "Girls Empowered in 2024 alone",
        value: "750+",
      },
      {
        title: "Regions Reached",
        value: "4+",
      },
      {
        title: "Success Rate",
        value: "100%",
      },
    ],
    website: "https://www.promotingqueens.org/",
    tag: "Together, we're building a brighter future for the next generation of female leaders",
  },
];
