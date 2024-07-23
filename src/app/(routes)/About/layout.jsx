import ResearchHero from "../Research/_components/ResearchHero/ResearchHero";

export default function AboutLayout({ children }) {
    return (
        <div>
            <ResearchHero />
            {children}
        </div>
    )
}
