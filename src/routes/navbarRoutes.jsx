import researchData from "@/app/(routes)/Research/data"
const image = "https://image.slidesdocs.com/responsive-images/background/detailed-3d-rendering-of-laboratory-instruments-and-microscope-perfect-for-chemical-research-on-a-blue-backdrop-powerpoint-background_d56837dd13__960_540.jpg"

export const researchSubroutes = researchData.map(item => ({
    name: item.title,
    href: `/Research/${item.id}`,
    img: image, 
  }));


export const membersSubroutes = [
    {
        name: "Supervisors",
        href: "/Members/Supervisors"
    },
    {
        name: "Students",
        href: "/Members/Students"
    },
    {
        name: "Collaborative Researchers",
        href: "/Members/Collaborators"
    },
    {
        name: "Lab Head",
        href: "/Members/LabHead"
    }
]


export const achievementsSubroutes = [
    {
        name: "Research Fundings",
        href: "/Achievements/Fundings"
    },
    {
        name: "Journals",
        href: "/Achievements/Journals"
    },
    {
        name: "Patents",
        href: "/Achievements/Patents"
    },
]

