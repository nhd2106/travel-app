import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import Destinations from "../Components/Destinations";

import { HotelTypes } from "./styles";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Lux Journey</title>
      </Head>
      <section className="imageCover">
        <div className={styles.carousel}>
          {/* <img width="100%" src="/phuquoc.jpg"/> */}
        </div>
      </section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5rem",
        }}
      >
        <div
          className="destinations"
          style={{
            width: "80%",
          }}
        >
          <Destinations />
          <HotelTypes>
            <h1>Luôn phù hợp</h1>
            <div>
              <ul className="wrapper">
                <li>
                  <div>
                    <Link href="/">
                      <a>
                        <img src="/home.jpg" />
                        <div>
                          <span>Nguyên nhà</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link href="/">
                      <a>
                        <img src="/stage.jpg" />
                        <div>
                          <span>Gác mái</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link href="/">
                      <a>
                        <img src="/uniqe.jpg" />
                        <div>
                          <span>Riêng biệt</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link href="/">
                      <a>
                        <img src="/petwelcome.jpg" />
                        <div>
                          <span>Được mang vật nuôi</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </HotelTypes>
        </div>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
