import { useLayoutEffect, useState } from "react";

import cx from "classnames";

import styles from "@/styles/components/Timer.module.scss";

export default function Timer() {

    const [time, setTime] = useState(getTimeUntilMidnight());

    function getTimeUntilMidnight() {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0);
      const timeUntilMidnight = Math.max(Math.floor((midnight - now) / 1000.00), 0);
  
      if (timeUntilMidnight === 0) {
        return 24 * 60 * 60;
      }
  
      return timeUntilMidnight;
    }
  
    useLayoutEffect(() => {
      const countdownInterval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(countdownInterval);
            return getTimeUntilMidnight();
          }
          return prevTime - 1;
        });
      }, 1000);
  
      return () => {
        clearInterval(countdownInterval);
      };
    }, []);

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
  
    return (
        <div className={styles.timer}>
            <div className={cx("grid-x grid-container", styles.grid)}>
                <div className="small-16 text-center">
                    <div className={styles.content}>
                        <span>
                        {`${hours.toString().padStart(2, '0')}:${minutes
                            .toString()
                            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
                        </span>
                        
                        <p>Oportunidade relâmpago para os primeiros 100 novos representantes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}