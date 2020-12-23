import React from "react";

import MediaCard from "../Components/Card";
import { TraiNghiemStyles } from "./styles";

export default function TraiNghiem(props) {
  return (
    <TraiNghiemStyles>
      <div className="top-images">
        <div className="text">
          <h1>Lux Journey Trải nghiệm</h1>
          <p>Bọn mình đến đến, bọn mình trải nghiệm, bọn mình chia sẻ ^^.</p>
        </div>
        <div className="image"></div>
      </div>
      <div>
      </div>
      <h2>Phú Quốc nè</h2>
        <div className="card-wrapper">
          <MediaCard image="/mongolia.jpg"/>
          <MediaCard image="/muongthanh.jpg"/>
          <MediaCard image="/sonesea.jpg"/>
          <MediaCard image="/mongolia.jpg"/>
          <MediaCard image="/mongolia.jpg"/>
    
        </div>
    </TraiNghiemStyles>
  );
}
