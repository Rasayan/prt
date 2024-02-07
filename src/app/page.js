"use client"

import { useEffect, useState } from "react";
import styles from "../../styles/page.module.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaGithub  } from "react-icons/fa6";

export default function Home() {
  const [animationStarted, setAnimationStarted] = useState(false);

useEffect(() => {
  if (!animationStarted) {
    const texts = ["RASAYAN", "РАСАЯН"];
    let animationRunning = false; // Flag to track if animation is already running

    function typeWriter(text, i, speed, element, n) {
      if (i <= n-1) {
        element.innerText += text.charAt(0);
        setTimeout(() => typeWriter(text.substring(1), i + 1, speed, element, n), speed);
      } else {
        animationRunning = false;
      }
    }

    // Function to loop through the texts array
    function startTypingAnimation() {
      let index = 0;

      function loop(currentText) {
        // Check if animation is already running
        if (!animationRunning) {
          animationRunning = true; 
          document.getElementById("typingText").innerText = "";
          // Start typing animation for the current text
          typeWriter(
            currentText,
            0,
            200,
            document.getElementById("typingText"),
            currentText.length
          );
          // Increment index for next text
          index++;
        }
        // Call loop recursively after a timeout
        setTimeout(
          () => {
            loop(texts[index % texts.length]);
            animationRunning = false; // Reset animationRunning flag after each loop iteration
          },
          currentText.length * 100 + 2000
        );
      }

      // Start the loop with the first text
      loop(texts[index % texts.length]);
    }

    startTypingAnimation();
    setAnimationStarted(true);
  }

  // Clean up function
  return () => {};
}, []);



  return (
    <main className={styles.main}>
      <div className={styles.homediv}>
        <div className={styles.homeh1name}>
          <h1 id="typingText"></h1>
        </div>

        <div className={styles.homeabout}>
          <div className={styles.aboutsec}>
            <div id={styles.aboutsec1}>
              <h2>/ ABOUT ME /</h2>

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

        <div className={styles.homework}>
          <div className={styles.worksec}>
            <div className={styles.workhead}>
              <h2 id={styles.workheading}>/ WORK /</h2>
            </div>

            <div className={styles.worklists}>
              <div className={styles.work1}></div>

              <div className={styles.work2}></div>

              <div className={styles.work3}></div>
            </div>
          </div>
        </div>

        <div className={styles.homesocials}>
          <div className={styles.socialssec}>
            
            <div className={styles.socialcontainer}>
              <div className={styles.socialmodels}>
                <FaLinkedinIn className={styles.socialicons}/>
              </div>
              <h5>LinkedIn</h5>
            </div>

            <div className={styles.socialcontainer}>
              <div className={styles.socialmodels}>
                <FaGithub className={styles.socialicons}/>
              </div>
              <h5>GitHub</h5>
            </div>

            <div className={styles.socialcontainer}>
              <div className={styles.socialmodels}>
                <FaXTwitter className={styles.socialicons}/>
              </div>
              <h5>Twitter 'X'</h5>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
