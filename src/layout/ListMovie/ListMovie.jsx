import React, { useEffect, useState } from "react";
import { quanLyPhimServ } from "../../services/quanLyPhim";
import "./List.scss";
import { Carousel } from "antd";
export default function ListMovie() {
  let [arrMovie, setArrMovie] = useState([]);
  useEffect(() => {
    quanLyPhimServ
      .getAllMovie()
      .then(function (res) {
        setArrMovie(res.data.content);
      })
      .catch(function (err) {
        console.log(err);
      });
  });
  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className="grid grid-cols-5 gap-10 ">
      {arrMovie.map((movie, index) => {
        return (
          <Carousel dots={true} afterChange={onChange}>
            <div className="movie_item space-y-4">
              <div className="movie_content">
                <div>
                  <img
                    className=" img_content w-full h-96 object-cover rounded mt-3 mb-5 "
                    src={movie.hinhAnh}
                    alt=""
                  />
                  <div>
                    <span></span>
                  </div>
                </div>
                <h3>
                  <span className="bg-orange-500 text-white rounded py-1 px-2 text-lg font-semibold mr-3">
                    C18
                  </span>
                  <span className="text-xl font-semibold">{movie.tenPhim}</span>
                </h3>
                <p className="line-clamp-2">{movie.moTa}</p>
              </div>
              <div className="btn_button">
                <button>Mua Vé</button>
              </div>
            </div>
          </Carousel>
        );
      })}
      <div>
        
      </div>
    </div>
  );
}
