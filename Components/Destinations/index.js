import Link from "next/link";
import Slider from "react-slick";

import { DestinationsStyled } from '../styles';

export default function Destinations(props) {
  const settings =  {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <DestinationsStyled>
      <Slider {...settings}>
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
      <Link href="/phuquoc.jpg">
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
              <b>Đà Lạt</b>
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
              src="/hcm.jpg"
              style={{
                borderRadius: "1rem",
               
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
              <b>Nha Trang</b>
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
              src="/hcm.jpg"
              style={{
                borderRadius: "1rem",
               
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
              <b>Đà Nẵng</b>
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
              src="/hcm.jpg"
              style={{
                borderRadius: "1rem",
               
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
              <b>Lý Sơn</b>
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
              src="/hcm.jpg"
              style={{
                borderRadius: "1rem",
               
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
    </Slider>
    </DestinationsStyled>
    // <DestinationsStyled>
    // <div className="wrapper">
    // <Link href="/">
    //     <a>
    //       <span
    //         style={{
    //           flex: "1 1 10rem",
    //           paddingRight: "1rem",
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
    //     <a>
    //       <span
    //         style={{
    //           flex: "1 1 10rem",
    //           paddingRight: "1rem",
    //         }}
    //       >
    //         <img
    //           src="/vungtau.jpg"
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
    //           <b>Vũng Tàu</b>
    //         </span>
    //         <span>15 phút lái xe</span>
    //       </span>
    //     </a>
    //   </Link>

    //   <Link href="/">
    //     <a>
    //       <span
    //         style={{
    //           flex: "1 1 10rem",
    //           paddingRight: "1rem",
    //         }}
    //       >
    //         <img
    //           src="/hotram.jpg"
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
    //           <b>Hồ Tràm</b>
    //         </span>
    //         <span>15 phút lái xe</span>
    //       </span>
    //     </a>
    //   </Link>

    //   <Link href="/">
    //     <a>
    //       <span
    //         style={{
    //           flex: "1 1 10rem",
    //           paddingRight: "1rem",
    //         }}
    //       >
    //         <img
    //           src="/phanrang.jpg"
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
    //           <b>Phan Rang</b>
    //         </span>
    //         <span>15 phút lái xe</span>
    //       </span>
    //     </a>
    //   </Link>

    //   <Link href="/">
    //     <a>
    //       <span
    //         style={{
    //           flex: "1 1 10rem",
    //           paddingRight: "1rem",
    //         }}
    //       >
    //         <img
    //           src="/bmt.jpg"
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
    //           <b>Buôn Mê Thuột</b>
    //         </span>
    //         <span>15 phút lái xe</span>
    //       </span>
    //     </a>
    //   </Link>

    //   <Link href="/">
    //     <a>
    //       <span
    //         style={{
    //           flex: "1 1 10rem",
    //           paddingRight: "1rem",
    //         }}
    //       >
    //         <img
    //           src="/bienhoa.jpg"
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
    //           <b>Biên Hòa</b>
    //         </span>
    //         <span>15 phút lái xe</span>
    //       </span>
    //     </a>
    //   </Link>

    //   <Link href="/">
    //     <a>
    //       <span
    //         style={{
    //           flex: "1 1 10rem",
    //           paddingRight: "1rem",
    //         }}
    //       >
    //         <img
    //           src="/daophuquoc.jpg"
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
    //           <b>Phú Quốc</b>
    //         </span>
    //         <span>15 phút lái xe</span>
    //       </span>
    //     </a>
    //   </Link>

    //   <Link href="/">
    //     <a>
    //       <span
    //         style={{
    //           flex: "1 1 10rem",
    //           paddingRight: "1rem",
    //         }}
    //       >
    //         <img
    //           src="/tuyhoa.jpg"
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
    //           <b>Tuy Hòa</b>
    //         </span>
    //         <span>15 phút lái xe</span>
    //       </span>
    //     </a>
    //   </Link>
    // </div>
    // </DestinationsStyled>
  );
}
