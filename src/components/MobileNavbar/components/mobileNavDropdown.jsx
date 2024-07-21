import React from 'react';

const MobileNavDropdown = () => {
    
    return (
        <div className="fixed w-screen h-screen p-5 pt-0 bg-black opacity-100 border-b border-b-white/20">
        <ul className="grid gap-2">
          {/* {routes.map((route) => {
            const { Icon } = route;

            return (
              <li
                key={route.title}
                className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
              >
                <a
                  onClick={() => setOpen((prev) => !prev)}
                  className={
                    "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                  }
                  href={route.href}
                >
                  <span className="flex gap-1 text-lg">{route.title}</span>
                  <Icon className="text-xl" />
                </a>
              </li>
            );
          })} */}
        </ul>
      </div>
    );
};

export default MobileNavDropdown;
