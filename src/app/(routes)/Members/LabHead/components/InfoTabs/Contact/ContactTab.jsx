"use client"

import React, { useState, useEffect } from "react";
import styles from './ContactTab.module.css';

const ContactTab = () => {
  const [person, setPerson] = useState(null);
  const [personLoaded, setPersonLoaded] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const personData = await fetch(`https://nitjsr.ac.in/backend/api/people/faculty?id=CS103`);

      const res = await personData.json()
      setPerson(res[0]);
      setPersonLoaded(true);
    };

    getData();
  }, []);

  return (
    <div className={styles.contactTab}>{
      personLoaded?
      <>
      <h2 className="text-sky-800">Contact Information</h2>
      <ul className="info-list">
        <li>
          <span className="font-weight-bold">E-mail: </span>
          {person.email ? person.email : "N/A"}
        </li>
        {
          person.fb_id?            <li className="social-share">
          <span className="font-weight-bold">Social: </span>
          <a
            href={person.fb_id}
            target="_blank"
            rel="noreferrer"
            className="ml-2 text-sky-600"
          >
           Facebook
          </a>
        </li>:null
        }

      </ul>
      <div className="block-box user-about">
        {person ? (
          <div className=" flex gap-4 w-full bg-slate-100 p-3 flex-wrap rounded-lg">
            <div className="py-2 px-4 bg-slate-200 rounded-lg flex items-center justify-center w-max">
              <span>Google Scholar:</span>
              {person.scholar_link ? (
                <a
                  href={person.scholar_link}
                  target="_blank"
                  className="ml-2 text-sky-500"
                  rel="noreferrer"
                >
                  View <i className="fad fa-external-link-alt"></i>
                </a>
              ) : (
                "N/A"
              )}
            </div>
            <div className="py-2 px-4 bg-slate-200 rounded-lg flex items-center justify-center w-max">
              <span>Website:</span>
              {person.pw_link ? (
                <a
                  href={person.pw_link}
                  target="_blank"
                  className="ml-2 text-sky-500"
                  rel="noreferrer"
                >
                  View <i className="fad fa-external-link-alt"></i>
                </a>
              ) : (
                "N/A"
              )}
            </div>
            <div className="py-2 px-4 bg-slate-200 rounded-lg flex items-center justify-center w-max">
              <span>Publon:</span>
              {person.publon_id ? (
                <a
                  href={person.publon_id}
                  target="_blank"
                  className="ml-2 text-sky-500"
                  rel="noreferrer"
                >
                  View <i className="fad fa-external-link-alt"></i>
                </a>
              ) : (
                "N/A"
              )}
            </div>
            <div className="py-2 px-4 bg-slate-200 rounded-lg flex items-center justify-center w-max">
              <span>Orcid:</span>
              {person.orcid_id ? (
                <a
                  href={person.orcid_id}
                  target="_blank"
                  className="ml-2 text-sky-500"
                  rel="noreferrer"
                >
                  View <i className="fad fa-external-link-alt"></i>
                </a>
              ) : (
                "N/A"
              )}
            </div>

            <div className="py-2 px-4 bg-slate-200 rounded-lg flex items-center justify-center w-max">
              <span>Vidwan:</span>
              {person.vidwan_id && person.vidwan_id !== "#" ? (
                <>
                  {person.vidwan_id.includes("http") ? (
                    <>
                      <a
                        href={person.vidwan_id}
                        target="_blank"
                        className="ml-2 text-sky-500"
                        rel="noreferrer"
                      >
                        View <i className="fad fa-external-link-alt"></i>
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href={`https://vidwan.inflibnet.ac.in/profile/${person.vidwan_id?.trim()}`}
                        target="_blank"
                        className="ml-2 text-sky-500"
                        rel="noreferrer"
                      >
                        View <i className="fad fa-external-link-alt"></i>
                      </a>
                    </>
                  )}
                </>
              ) : (
                "N/A"
              )}
            </div>
          </div>
        ) :  null }
      </div>
      </>
      :<>
      </>
    }
      
    </div>
  );
};

export default ContactTab;
