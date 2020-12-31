import Link from "next/link";

import Slider from "react-slick";

export default function Destinations(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
    </Slider>
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
