import ResearchHero from "./_components/ResearchHero";
import Breadcrumbs from "./_components/Breadcrumbs";
import Theme from "./_components/Theme";

export default function ResearchLayout({ children }) {
  return (
    <div>
      <ResearchHero />
      <Breadcrumbs />
      <Theme />
      {children}
    </div>
  );
}
