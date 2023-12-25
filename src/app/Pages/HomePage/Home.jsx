import React, { Fragment } from "react";
import TopNavbar from "../../Coponents/Header/TopNavbar";
import LatestProducts from "../../Coponents/Product/LatestProducts";
function Home() {
  return (
    <Fragment>
      <TopNavbar />
      <LatestProducts />
    </Fragment>
  );
}

export default Home;
