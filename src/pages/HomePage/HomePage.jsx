import React from "react";
import Header from "../../layout/Header/Header";
import Banner from "../../layout/Banner/Banner";
import ListMovie from "../../layout/ListMovie/ListMovie";

export default function HomePage() {
  return (
    <div>
      {/* header */}
      <Header />
      <Banner />
      <div className="container">
        <ListMovie />
      </div>
      {/* banner */}
      {/* list movie */}
      {/* footer */}
    </div>
  );
}
