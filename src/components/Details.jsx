import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "./../context/Context";
import Loading from "./Loading";

const Details = () => {
  const { products } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (products) {
      const data = products.find((product) => product.id === Number(id));
      setProduct(data);
    }
  }, [products, id]);

  console.log(product);
  return (
    <>
      {product ? <div className="w-[100%] flex items-center gap-7 justify-center h-full  m-auto p-[10%]">
        <img
          className="fit-contain h-[60%] w-[60%] lg:w-[20%]"
          src={product.image}
          alt=""
        />

        <div className="content w-[50%]">
          <h1 className="text-2xl font-semibold">
            {product.title}
          </h1>
          <h3>{product.category}</h3>
          <h2 className="text-bold text-pink-700">{product.price}</h2>
          <p className="mb-7 mt-2 w-[70%] text-gray-600">
            {product.description}
          </p>
          <Link className="btn mr-3">Edit</Link>
          <Link className="btn">Delete</Link>
        </div>
      </div> : <Loading />}
      
    </>
  );
};

export default Details;
