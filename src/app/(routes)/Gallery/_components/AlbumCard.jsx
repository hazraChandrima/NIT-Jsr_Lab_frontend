import React from 'react';
import Link from 'next/link';

const AlbumCard=({name, description, imageUrl, id})=> {

  return (
    <div>
      <Link href={`/Gallery/${id}`}>
      <div className="bg-white mx-5 rounded-sm hover:shadow-2xl shadow-lg transition transition-duration-200 overflow-hidden cursor-pointer"
      >
        <div className="flex items-center justify-around">
          <img src={imageUrl} alt={name} className="h-full w-full" />
        </div>
        <div className="p-2 bg-[#697382] w-[85%] relative bottom-4 text-white">
          <p className="text-md font-light truncate">{name}</p>
        </div>
        <div className="px-3">
          <hr className="bg-slate-500 h-[1px]" />
        </div>
        <div className="px-4 py-2">
          <div className="border-l-4 border-[#697382] px-2">
            <p className="text-black font-sans text-left text-md truncate">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
    </div>
  )
}

export default AlbumCard
