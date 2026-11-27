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
    description: "Promoting Queens teaches girls chess to build confidence, focus, and critical thinking. ChessNCode is the next step: a pathway from the chessboard into coding, data science, and machine learning. Founded by Promoting Queens' project manager, who has been with the organization since its start and serves on its board, ChessNCode is built to carry Promoting Queens girls from the game into tech careers. ChessNCode has 2 scholars, 2 graduates, with 4 more enrolling. Our first graduate completed all 5 modules and earned 3 certificates.",
    stats: [
      {
        title: "Promoting Queens: girls engaged through programs",
        value: "750+",
      },
      {
        title: "Promoting Queens: regions reached",
        value: "4+",
      },
    ],
    website: "https://www.promotingqueens.org/",
    tag: "Together, we're building a brighter future for the next generation of female leaders",
  },
];
