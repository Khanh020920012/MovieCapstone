import React, { useEffect, useState } from "react";
import { quanLyPhimServ } from "../../services/quanLyPhim";
import "./List.scss";
import { Carousel } from "antd";
import ReactPlayer from "react-player";
export default function ListMovie() {
  let [arrMovie, setArrMovie] = useState([]);
  const [trailerMovie, setTrailerMovie] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [currentBannerId, setCurrentBannerId] = useState(null);
  useEffect(() => {
    quanLyPhimServ
      .getAllMovie()
      .then((res) => {
        const movies = res.data.content;
        const chunks = [];
        for (let i = 0; i < movies.length; i += 5) {
          chunks.push(movies.slice(i, i + 5));
        }
        setArrMovie(chunks);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleOpen = (idBanner) => {
    setCurrentBannerId(idBanner);
    if (idBanner === 1) {
      setTrailerMovie("https://www.youtube.com/watch?v=uqJ9u7GSaYM");
    } else if (idBanner === 2) {
      setTrailerMovie("https://www.youtube.com/watch?v=QnrHVynRwTM");
    } else if (idBanner === 3) {
      setTrailerMovie("https://www.youtube.com/watch?v=3JPgwgMoMZE");
    }
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentBannerId(null);
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div>
      <div className="listMovie">
        <Carousel
          arrows={true}
          afterChange={onChange}
          nextArrow={
            <div className="">
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          }
          prevArrow={
            <div>
              <i class="fa-solid fa-chevron-left"></i>
            </div>
          }
        >
          {arrMovie.map((chunk, index) => (
            <div className="listMovie">
              <div key={index}>
                <div className="grid grid-cols-4 gap-10">
                  {chunk.map((movie) => (
                    <div className="carousel_banner" key={movie.maPhim}>
                      <div className="movie_item space-y-4">
                        <img
                          className="w-full h-96 object-cover rounded"
                          src={movie.hinhAnh}
                          alt=""
                        />
                        <div className=" absolute inset-0 flex items-center justify-center">
                          <div className="button_item">
                            <button
                              className="play-button"
                              onClick={() => handleOpen(movie.maBanner)}
                            >
                              <div className="icon_item">
                                <i class="fa-light fa-play icon_content"></i>
                              </div>
                            </button>
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-3">
                            <span className="bg-orange-600 text-white rounded py-1 px-2 text-lg font-semibold mr-3">
                              C18
                            </span>
                            <span className="text-xl font-semibold">
                              {movie.tenPhim}
                            </span>
                          </h3>
                          <p className="line-clamp-2">{movie.moTa}</p>
                        </div>
                        <div className="btn_button">
                          <button>Mua Vé</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      {currentBannerId && (
        <div className="overlay active">
          {" "}
          {/* Thêm lớp overlay khi trailer được mở */}
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="relative modal-content">
              <div className="video_item mb-10">
                <ReactPlayer
                  url={trailerMovie}
                  playing
                  controls
                  width="800px"
                  height="450px"
                />
                <button
                  className="absolute top-2 right-2 text-white"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
