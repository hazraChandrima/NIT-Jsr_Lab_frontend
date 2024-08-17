import researchData from "@/app/(routes)/Research/data"
import { useEffect, useState } from "react";

const apiUrl= `https://cozy-captain-963d285ad5.strapiapp.com/api/research-sections?populate[Thumbnail]=*`


export const useResearchSubroutes =()=>{
    
    const [researchSubroutes, setResearchSubroutes]= useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(()=>{
        const getResearchData= async()=>{
            try{
                const response= await fetch(apiUrl);
                const result=await response.json();
                if(result.data){
                    defaultImage = "https://image.slidesdocs.com/responsive-images/background/detailed-3d-rendering-of-laboratory-instruments-and-microscope-perfect-for-chemical-research-on-a-blue-backdrop-powerpoint-background_d56837dd13__960_540.jpg";

                   const subroutes = result.data.map(item=>({
                    name: item.attributes.ResearchTitle,
                    href:`Research/${item.id}`,
                    image: item.attributes.Thumbnail?.data?.attributes?.url || defaultImage,
                   }))
                   setResearchSubroutes(subroutes);
                }
            }
            catch (error) {
                console.error("Error fetching research data:", error);
              } finally {
                setLoading(false);
              }
        };
        getResearchData();
    },[]);

    return {researchSubroutes, loading};
}


export const membersSubroutes = [
    {
        name: "Lab Head",
        href: "/Members/LabHead"
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
        name: "Pass-out Students",
        href: "/Members/PassOutStudents"
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

export const gallerySubroutes = [
    {
        name:"Gallery",
        href:"/Gallery",
    },
]

// export const informationSubroutes = [
//     {
//         name:"Information",
//         href:"/Information",
//     },
// ]

export const updatesSubroutes = [
    {
        name:"Updates",
        href:"/Updates",
    },
]