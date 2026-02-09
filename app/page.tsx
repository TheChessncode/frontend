import { Metadata } from "next";
import HomePage from "@/components/home/HomePage";
import StructuredData from "@/components/seo/StructuredData";
import {
  generateMetadata as genMeta,
  generateWebSiteSchema,
  generateOrganizationSchema,
} from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Chessncode - Empowering Girls and Women through Chess and Coding",
  description:
    "Chessncode transforms strategic thinking from the chessboard into computational thinking for the digital world. Empowering 1 million girls and women by 2035 through chess and coding education.",
  keywords: [
    "chess and coding",
    "girls in tech",
    "women in coding",
    "STEM education",
    "coding education",
    "chess training",
    "programming courses",
    "data science education",
    "machine learning courses",
    "women empowerment",
    "tech education",
  ],
  url: "/",
});

export default function Home() {
  return (
    <>
      <StructuredData
        data={[generateWebSiteSchema(), generateOrganizationSchema()]}
      />
      <HomePage />
    </>
  );
}
