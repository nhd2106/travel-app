import Link from "next/link";

import Slider from "react-slick";
import { 
  DestinationsStyled
} from '../styles';

export default function Destinations(props) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    dots: false,
    variableWidth: true,
  };

  return (
    // <Slider {...settings}>
    //   <Link href="/">
    //     <a
    //       style={{
    //         textDecoration: "none",
    //         color: "black",
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         width: "15rem",
    //       }}
    //     >
    //       <span
    //         style={{
    //           flex: "1 1 10rem",
    //         }}
    //       >
    //         <img
    //           src="/hcm.jpg"
    //           style={{
    //             borderRadius: "1rem",
    //             width: "100%",
    //           }}
    //         />
    //       </span>
    //       <span
    //         style={{
    //           display: "flex",
    //           flexDirection: "column",
    //           flex: "3 1 10rem",
    //           justifyContent: "flex-start",
    //         }}
    //       >
    //         <span>
    //           <b>Sài Gòn</b>
    //         </span>
    //         <span>15 phút lái xe</span>
    //       </span>
    //     </a>
    //   </Link>
    //   <Link href="/">
    //     <a
    //       style={{
    //         textDecoration: "none",
    //         color: "black",
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         width: "15rem",
    //       }}
    //     >
    //       <span
    //         style={{
    //           flex: "1 1 10rem",
    //         }}
    //       >
    //         <img
    //           src="/hcm.jpg"
    //           style={{
    //             borderRadius: "1rem",
    //             width: "100%",
    //           }}
    //         />
    //       </span>
    //       <span
    //         style={{
    //           display: "flex",
    //           flexDirection: "column",
    //           flex: "3 1 10rem",
    //           justifyContent: "flex-start",
    //         }}
    //       >
    //         <span>
    //           <b>Sài Gòn</b>
    //         </span>
    //         <span>15 phút lái xe</span>
    //       </span>
    //     </a>
    //   </Link>
    //   <Link href="/">
    //     <a
    //       style={{
    //         textDecoration: "none",
    //         color: "black",
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         width: "15rem",
    //       }}
    //     >
    //       <span
    //         style={{
    //           flex: "1 1 10rem",
    //         }}
    //       >
    //         <img
    //           src="/hcm.jpg"
    //           style={{
    //             borderRadius: "1rem",
    //             width: "100%",
    //           }}
    //         />
    //       </span>
    //       <span
    //         style={{
    //           display: "flex",
    //           flexDirection: "column",
    //           flex: "3 1 10rem",
    //           justifyContent: "flex-start",
    //         }}
    //       >
    //         <span>
    //           <b>Sài Gòn</b>
    //         </span>
    //         <span>15 phút lái xe</span>
    //       </span>
    //     </a>
    //   </Link>
    //   <Link href="/">
    //     <a
    //       style={{
    //         textDecoration: "none",
    //         color: "black",
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         width: "15rem",
    //       }}
    //     >
    //       <span
    //         style={{
    //           flex: "1 1 10rem",
    //         }}
    //       >
    //         <img
    //           src="/hcm.jpg"
    //           style={{
    //             borderRadius: "1rem",
    //             width: "100%",
    //           }}
    //         />
    //       </span>
    //       <span
    //         style={{
    //           display: "flex",
    //           flexDirection: "column",
    //           flex: "3 1 10rem",
    //           justifyContent: "flex-start",
    //         }}
    //       >
    //         <span>
    //           <b>Sài Gòn</b>
    //         </span>
    //         <span>15 phút lái xe</span>
    //       </span>
    //     </a>
    //   </Link>
    //   <Link href="/">
    //     <a
    //       style={{
    //         textDecoration: "none",
    //         color: "black",
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         width: "15rem",
    //       }}
    //     >
    //       <span
    //         style={{
    //           flex: "1 1 10rem",
    //         }}
    //       >
    //         <img
    //           src="/hcm.jpg"
    //           style={{
    //             borderRadius: "1rem",
    //             width: "100%",
    //           }}
    //         />
    //       </span>
    //       <span
    //         style={{
    //           display: "flex",
    //           flexDirection: "column",
    //           flex: "3 1 10rem",
    //           justifyContent: "flex-start",
    //         }}
    //       >
    //         <span>
    //           <b>Sài Gòn</b>
    //         </span>
    //         <span>15 phút lái xe</span>
    //       </span>
    //     </a>
    //   </Link>
    //   <Link href="/">
    //     <a
    //       style={{
    //         textDecoration: "none",
    //         color: "black",
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         width: "15rem",
    //       }}
    //     >
    //       <span
    //         style={{
    //           flex: "1 1 10rem",
    //         }}
    //       >
    //         <img
    //           src="/hcm.jpg"
    //           style={{
    //             borderRadius: "1rem",
    //             width: "100%",
    //           }}
    //         />
    //       </span>
    //       <span
    //         style={{
    //           display: "flex",
    //           flexDirection: "column",
    //           flex: "3 1 10rem",
    //           justifyContent: "flex-start",
    //         }}
    //       >
    //         <span>
    //           <b>Sài Gòn</b>
    //         </span>
    //         <span>15 phút lái xe</span>
    //       </span>
    //     </a>
    //   </Link>
    //   <Link href="/">
    //     <a
    //       style={{
    //         textDecoration: "none",
    //         color: "black",
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         width: "15rem",
    //       }}
    //     >
    //       <span
    //         style={{
    //           flex: "1 1 10rem",
    //         }}
    //       >
    //         <img
    //           src="/hcm.jpg"
    //           style={{
    //             borderRadius: "1rem",
    //             width: "100%",
    //           }}
    //         />
    //       </span>
    //       <span
    //         style={{
    //           display: "flex",
    //           flexDirection: "column",
    //           flex: "3 1 10rem",
    //           justifyContent: "flex-start",
    //         }}
    //       >
    //         <span>
    //           <b>Sài Gòn</b>
    //         </span>
    //         <span>15 phút lái xe</span>
    //       </span>
    //     </a>
    //   </Link>
    //   <Link href="/">
    //     <a
    //       style={{
    //         textDecoration: "none",
    //         color: "black",
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         width: "15rem",
    //       }}
    //     >
    //       <span
    //         style={{
    //           flex: "1 1 10rem",
    //         }}
    //       >
    //         <img
    //           src="/hcm.jpg"
    //           style={{
    //             borderRadius: "1rem",
    //             width: "100%",
    //           }}
    //         />
    //       </span>
    //       <span
    //         style={{
    //           display: "flex",
    //           flexDirection: "column",
    //           flex: "3 1 10rem",
    //           justifyContent: "flex-start",
    //         }}
    //       >
    //         <span>
    //           <b>Sài Gòn</b>
    //         </span>
    //         <span>15 phút lái xe</span>
    //       </span>
    //     </a>
    //   </Link>
    // </Slider>
    <DestinationsStyled>
    <div className="wrapper">
    <Link href="/">
        <a>
          <span
            style={{
              flex: "1 1 10rem",
              paddingRight: "1rem",
            }}
          >
            <img
              src="/hcm.jpg"
              style={{
                borderRadius: "1rem",
                width: "100%",
              }}
            />
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "3 1 10rem",
              justifyContent: "flex-start",
            }}
          >
            <span>
              <b>Sài Gòn</b>
            </span>
            <span>15 phút lái xe</span>
          </span>
        </a>
      </Link>

      <Link href="/">
        <a>
          <span
            style={{
              flex: "1 1 10rem",
              paddingRight: "1rem",
            }}
          >
            <img
              src="/vungtau.jpg"
              style={{
                borderRadius: "1rem",
                width: "100%",
              }}
            />
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "3 1 10rem",
              justifyContent: "flex-start",
            }}
          >
            <span>
              <b>Vũng Tàu</b>
            </span>
            <span>15 phút lái xe</span>
          </span>
        </a>
      </Link>

      <Link href="/">
        <a>
          <span
            style={{
              flex: "1 1 10rem",
              paddingRight: "1rem",
            }}
          >
            <img
              src="/hotram.jpg"
              style={{
                borderRadius: "1rem",
                width: "100%",
              }}
            />
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "3 1 10rem",
              justifyContent: "flex-start",
            }}
          >
            <span>
              <b>Hồ Tràm</b>
            </span>
            <span>15 phút lái xe</span>
          </span>
        </a>
      </Link>

      <Link href="/">
        <a>
          <span
            style={{
              flex: "1 1 10rem",
              paddingRight: "1rem",
            }}
          >
            <img
              src="/phanrang.jpg"
              style={{
                borderRadius: "1rem",
                width: "100%",
              }}
            />
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "3 1 10rem",
              justifyContent: "flex-start",
            }}
          >
            <span>
              <b>Phan Rang</b>
            </span>
            <span>15 phút lái xe</span>
          </span>
        </a>
      </Link>

      <Link href="/">
        <a>
          <span
            style={{
              flex: "1 1 10rem",
              paddingRight: "1rem",
            }}
          >
            <img
              src="/bmt.jpg"
              style={{
                borderRadius: "1rem",
                width: "100%",
              }}
            />
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "3 1 10rem",
              justifyContent: "flex-start",
            }}
          >
            <span>
              <b>Buôn Mê Thuột</b>
            </span>
            <span>15 phút lái xe</span>
          </span>
        </a>
      </Link>

      <Link href="/">
        <a>
          <span
            style={{
              flex: "1 1 10rem",
              paddingRight: "1rem",
            }}
          >
            <img
              src="/bienhoa.jpg"
              style={{
                borderRadius: "1rem",
                width: "100%",
              }}
            />
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "3 1 10rem",
              justifyContent: "flex-start",
            }}
          >
            <span>
              <b>Biên Hòa</b>
            </span>
            <span>15 phút lái xe</span>
          </span>
        </a>
      </Link>

      <Link href="/">
        <a>
          <span
            style={{
              flex: "1 1 10rem",
              paddingRight: "1rem",
            }}
          >
            <img
              src="/daophuquoc.jpg"
              style={{
                borderRadius: "1rem",
                width: "100%",
              }}
            />
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "3 1 10rem",
              justifyContent: "flex-start",
            }}
          >
            <span>
              <b>Phú Quốc</b>
            </span>
            <span>15 phút lái xe</span>
          </span>
        </a>
      </Link>

      <Link href="/">
        <a>
          <span
            style={{
              flex: "1 1 10rem",
              paddingRight: "1rem",
            }}
          >
            <img
              src="/tuyhoa.jpg"
              style={{
                borderRadius: "1rem",
                width: "100%",
              }}
            />
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "3 1 10rem",
              justifyContent: "flex-start",
            }}
          >
            <span>
              <b>Tuy Hòa</b>
            </span>
            <span>15 phút lái xe</span>
          </span>
        </a>
      </Link>
    </div>
    </DestinationsStyled>
  );
}
