import React from 'react'
import Container from '../component/Container'
import { Link, useParams } from 'react-router-dom';
import { useProductDetails } from '../context/ProductContext';
import Loader from "../component/Loader";
import { IoIosPricetag } from "react-icons/io";
import { TbCategory2 } from "react-icons/tb";



function DetailsPage() {
  const { id } = useParams()
  const productDetail = useProductDetails(+id)

  if (!productDetail) return <Loader />;
  

  const truncateTitle = (text, wordLimit) => {
    return (
      text.split(" ").slice(0, wordLimit).join(" ") +
      (text.split(" ").length > wordLimit ? "" : "")
    );
  };

  return (
    <Container>
      <div className=" flex justify-between items-center">
        <img
          src={productDetail.image}
          alt={productDetail.title}
          className="w-60 h-60 rounded-xl object-contain border-2 border-red-400 border-dashed p-2"
        />
        <div className="border-2 border-red-400 border-dashed p-2 rounded-xl w-2/3 px-4">
          <h2 className="text-2xl text-red-400 mb-5 font-bold">
            {truncateTitle(productDetail.title, 3)}
          </h2>
          <p className="w-[500px]">{productDetail.description}</p>
          <p className="flex items-center mt-5 font-bold">
            <TbCategory2 className="mr-2" />
            {productDetail.category}
          </p>
          <div className="flex justify-between mx-3 mt-5 items-center">
            <span className="flex items-center cursor-pointer font-bold">
              <IoIosPricetag className=" mr-2" />
              {productDetail.price} ${" "}
            </span>
            <Link
              to="/products"
              className="bg-red-500 text-black hover:text-white p-3 rounded-xl shadow-xl transition-all"
            >
              back to Shop
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default DetailsPage