import React, { useContext } from "react";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "./../context/Context";
import Loading from "./Loading";

const Home = () => {
  const navigate = useNavigate();
  const { products } = useContext(ProductContext);
  // console.log(products, "pro");
  return (
    <>
      <Nav />
      {products ? (
        <div className="overflow-x-hidden overflow-y-auto h-full flex flex-wrap gap-4 w-[80%] p-5">
          {products.map((product,index)=>
          (
            <div
              key={index}
              onClick={() => navigate(`/details/${product.id}`)}
              className="hover:translate-x-1 transition-none duration-300 hover:shadow-gray-500 hover-shadow card p-5 flex-col border shadow rounded sm:w-[40%] py-2 w-[45%] lg:w-[18%]"
            >
              <div
                className="w-full mb-3 bg-center h-[10vh] bg-no-repeat bg-contain"
                style={{
                  backgroundImage:
                    `url(${product.image})`,
                }}
              ></div>
              <h1 className="font-semibold hover:text-blue-700 hover:underline text-xs ">
                {product.title}
              </h1>
            </div>
          )
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
