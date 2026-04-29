export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
  linkedin?: string;
  qualification?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "nilesh-bhosale",
    name: "Nilesh Janardhan Bhosale",
    position: "Director",
    qualification: "B.Sc. Agriculture",
    bio: "Nilesh Janardhan Bhosale is a seasoned agriculture professional with over 20 years of extensive experience in Sales and Marketing within the Indian seed industry. Currently, he serves as the Director of HiCrossBrid Seeds International Pvt. Ltd. and is actively working as the National Sales Manager (NSM) for HiCross Seeds and Vasudha Seeds. He oversees national sales operations, product positioning, and long-term business growth strategies.",
    imageUrl: "/director-nilesh-bhosale.png",
  },
  {
    id: "sreenivasula-reddy",
    name: "B. Sreenivasula Reddy",
    position: "Managing Director",
    qualification: "",
    bio: "B. Sreenivasula Reddy is the Managing Director of HiCrossBrid Seeds International Pvt. Ltd. With a strong vision for sustainable agriculture and a deep commitment to farmer welfare, he leads the company's strategic direction and growth initiatives across India.",
    imageUrl: "/director-sreenivasula-reddy.jpg",
  },
  {
    id: "john-anderson",
    name: "John Anderson",
    position: "Chief Executive Officer",
    bio: "With over 25 years in agricultural biotechnology, John leads our vision of sustainable seed innovation.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    id: "maria-santos",
    name: "Dr. Maria Santos",
    position: "Head of Research & Development",
    bio: "PhD in Plant Genetics with 15+ years developing high-yield, disease-resistant seed varieties.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    id: "robert-chen",
    name: "Robert Chen",
    position: "Chief Operations Officer",
    bio: "Expert in agricultural supply chain management, ensuring quality from production to delivery.",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
  {
    id: "sarah-williams",
    name: "Sarah Williams",
    position: "Director of Quality Assurance",
    bio: "Certified quality specialist maintaining our rigorous testing and certification standards.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];
