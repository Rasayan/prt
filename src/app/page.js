"use client"

import { useEffect, useState } from "react";
import styles from "../../styles/page.module.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaGithub  } from "react-icons/fa6";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.homediv}>
        <div className={styles.homeh1name}>
          <h1 id="typingTextEng">R A S A Y A N</h1>
          <h1 id="typingTextRus">Р А С А Я Н</h1>

          <div className={styles.homenamedetails}>
            <div>
              <h3>RASAYAN CHAKRABORTY</h3>

              <h3>2024</h3>
            </div>

            <div>
              <h3>Расаян Чакраборти</h3>

              <h3>Programmer/Designer</h3>
            </div>
            
          </div>
        </div>

        <div className={styles.homeabout} id="about">
          <div className={styles.aboutsec}>
            <div id={styles.aboutsec1}>
              <h2>ABOUT ME</h2>

              <div className={styles.sec1categories}>
                <div className={styles.categ}>
                  <h4>Full-Stack Web3.O Developer</h4>

                  <p>I am a full-stack developer, based on the M.E.R.N stack.
                    You can find my projects on my GitHub. Some notable projects 
                    includes
                    <ul>
                      <li>Real-Time chat application</li>
                      <li>Real-Time chat application</li>
                    </ul>
                  </p>
                </div>

                <div className={styles.categ}>
                  <h4>Security Enthusiast</h4>

                  <p>Enthusiastic in Cybersecurity, and especiallay in Blockchain
                     Security.
                    <ul>
                      <li>Real-Time chat application</li>
                      <li>Real-Time chat application</li>
                    </ul>
                  </p>
                </div>

                <div className={styles.categ}>
                  <h4>UI / UX Designer</h4>

                  <p>I do UI / UX Design on figma.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div className={styles.homework} id="work">
          <div className={styles.worksec}>
            <div className={styles.workhead}>
              <h2 id={styles.workheading}>WORK</h2>
            </div>

            <div className={styles.worklists}>
              <div className={styles.work1}></div>

              <div className={styles.work2}></div>

              <div className={styles.work3}></div>
            </div>
          </div>
        </div>

        <div className={styles.homesocials} id="connect">
          <div className={styles.socialssec}>
            
            <div className={styles.socialcontainer}>
              <div className={styles.socialmodels} id={styles.soc1}>
                <a href="https://www.linkedin.com/in/rasayan-chakraborty-48864b249/">
                  <FaLinkedinIn className={styles.socialicons}/>
                </a>
              </div>
              <h5>LinkedIn</h5>
            </div>

            <div className={styles.socialcontainer}>
              <div className={styles.socialmodels} id={styles.soc2}>
                <a href="https://github.com/Rasayan">
                  <FaGithub className={styles.socialicons}/>
                </a>
              </div>
              <h5>GitHub</h5>
            </div>

            <div className={styles.socialcontainer}>
              <div className={styles.socialmodels} id={styles.soc3}>
                <a href="https://github.com/Rasayan">
                  <FaXTwitter className={styles.socialicons}/>
                </a>
              </div>
              <h5>Twitter 'X'</h5>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
