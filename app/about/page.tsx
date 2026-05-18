
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Website MBS",
  description: "Learn more about our company",
  keywords: ["about", "company", "information"],
  twitter: {
    card: "summary_large_image",
    title: "About Us | Website MBS",
    description: "Learn more about our company",
    images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8n2sXo7l3m1Z5z5v5z5v5z5v5z5v5z5v5z5v5z5v5z5v5z5v5z5v5z5v5z5v5z5v5z5v5z5v5z",
  },
};

export default function AboutPage() {
   console.log("Hey is this in the server or client?");
  return (
    <div>About Page</div>
  );
}