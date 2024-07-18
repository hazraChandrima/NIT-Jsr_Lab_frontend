import React from "react";
import Image from "next/image";
import image_1 from "../assests/ResearchImages/img_1.jpg";
import image_2 from "../assests/ResearchImages/img_2.jpg";
import Button from "./Button";

const Content = () => {
  return (
    <div className="flex flex-wrap justify-around items-start bg-blue-100">
      <div className="flex-[1_1_330px] h-full text-white p-4 m-2 max-width-[600px] relative">
        <div className="w-full h-[20rem] mb-5">
          <Image src={image_1} alt="Image 1" />
        </div>
        <div className="w-[60%]  ml-[5rem] ">
          <Image src={image_2} alt="Image 2" />
        </div>
      </div>
      <div className="flex-[1_1_330px] items-start text-white p-4 m-2 max-width-[600px] ">
        <h3 className="font-serif pb-6 text-md text-gray-700  tracking-wide font-bold">
          Electrophysiological monitoring of skin and fat
        </h3>
        <p className="text-sm text-gray-700 tracking-wider pb-6">
          Skin and fat are the first barrier of the human body to protect, sense
          and react to external stimuli and conditions. Moreover, it has been
          found that the health status can be indirectly known by looking at the
          electrophysiological status. To observe the vital status of the human
          body, in this respect, electrophysiological monitoring of skin and fat
          plays an important role. In accordance with the sustainable
          development goals of Society 5.0, we set our research objectives as
          follows: (1) Development of micro coplanar sensors and data
          acquisition systems for electronic skin devices; (2) Coplanar sensor
          image reconstruction algorithm and spectroscopic analysis for
          electrophysiological skin fat status prediction based on conformal
          mapping and distribution of relaxation time; (3) Skin fat biomaterial
          phantom fabrication based on long-term durable material recipe.
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Content;
