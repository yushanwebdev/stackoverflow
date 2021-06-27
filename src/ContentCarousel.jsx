import { useState } from "react";
import Slider from "react-slick";
import "./contentcarousel.scss";

const ContentCarousel = (props) => {
  const img1 = "https://via.placeholder.com/200x300";
  const img2 = "https://via.placeholder.com/200x300";
  const [slides, setSlides] = useState([1, 2]);
  const [data, setData] = useState([
    [
      "Step 1",
      "On your Home tab, Check In as you click on the coin available that day.",
      img1
    ],
    [
      "Step 2",
      "Your Check In is Successful! Come back tomorrow for more reward points.",
      img2
    ]
  ]);
  const [button, setButton] = useState("left");

  const create = () => {
    setSlides([1, 2]);
    setData([
      [
        "Step 1",
        "On your Home tab, Check In as you click on the coin available that day.",
        img1
      ],
      [
        "Step 2",
        "Your Check In is Successful! Come back tomorrow for more reward points.",
        img2
      ]
    ]);
    setButton("left");
  };
  const pause = () => {
    setSlides([1, 2]);
    setData([
      ["Step 1", "On your Reward tab, Select Mission.", img1],
      [
        "Step 2",
        "Select on Weekly, Biweekly, or Monthly to see the missions and its Progress. When the mission is accomplished, you can Collect Point.",
        img2
      ]
    ]);
    setButton("middle");
  };
  const stop = () => {
    setSlides([1, 2]);
    setData([
      ["Step 1", "On your Reward tab, Select Redeem Point.", img1],
      ["Step 2", "Claim the vouchers that you want.", img2]
    ]);
    setButton("right");
  };
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        style={{
          left: "10px",
          width: "10px",
          height: "10px",
          borderRadius: "20px",
          backgroundColor: "#c4c4c4"
        }}
      ></div>
    )
  };
  return (
    <div className="content-carousel p-5">
      <div className="mb-4 slick-controls">
        {button === "left" ? (
          <button
            className="px-3 py-1 btn-carousel-left btn-carousel-active"
            onClick={create}
          >
            Create
          </button>
        ) : (
          <button className="px-3 py-1 btn-carousel-left " onClick={create}>
            Create
          </button>
        )}
        {button === "middle" ? (
          <button
            className="px-3 py-1 btn-carousel-middle btn-carousel-active"
            onClick={pause}
          >
            Pause
          </button>
        ) : (
          <button className="px-3 py-1 btn-carousel-middle" onClick={pause}>
            Pause
          </button>
        )}
        {button === "right" ? (
          <button
            className="px-3 py-1 btn-carousel-right btn-carousel-active"
            onClick={stop}
          >
            Stop
          </button>
        ) : (
          <button className="px-3 py-1 btn-carousel-right" onClick={stop}>
            Stop
          </button>
        )}
      </div>

      <Slider {...settings}>
        {slides.map(function (slide) {
          return (
            <div className="content-carousel-card p-5" key={slide}>
              <div className="card-content-wrapper">
                {" "}
                {/* Add this wrapper to handle the style of the item */}
                <div className="text-box p-5">
                  <h3 style={{ fontSize: "20px" }}>{data[slide - 1][0]}</h3>
                  <h3 style={{ fontSize: "20px" }} className="b-700">
                    {data[slide - 1][1]}
                  </h3>
                </div>
                <div className="img-box">
                  <img
                    src={data[slide - 1][2]}
                    alt=""
                    width="200"
                    height="300"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ContentCarousel;
