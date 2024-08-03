import ResearchHero from "../Research/_components/ResearchHero/ResearchHero";

export default function InfoLayout({ children }) {
    return (
        <div>
            <ResearchHero />
            {children}
        </div>
    )
}