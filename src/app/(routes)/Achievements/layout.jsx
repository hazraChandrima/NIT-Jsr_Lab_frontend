import ResearchHero from "../Research/_components/ResearchHero/ResearchHero";


export default function AchievementsLayout({ children }) {
    return (
        <div>
            <ResearchHero />
            {children}
        </div>
    )
}