export type TechnologyType = {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tooling";
  description: string;
  icon: string;
  rating: number;
  difficulty: "Beginner-Friendly" | "Intermediate" | "Advanced";
  badge: string;
};
