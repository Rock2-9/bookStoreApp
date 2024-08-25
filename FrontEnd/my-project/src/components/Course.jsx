import React, { useEffect, useState } from "react";
import Cards from "./Cards";

import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            {" "}
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>{" "}
          </h1>
          <p className="mt-12 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maxime
            ipsam, cum in soluta maiores iste totam. Nihil cumque mollitia dicta
            minima assumenda quisquam nobis, minus quasi in dolore non fugiat.
            Reprehenderit fugit, autem corporis reiciendis exercitationem
            delectus quae non dolores quod, eum deleniti debitis laborum totam
            porro minima dolorem.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 rounded-md text-white px-4 py-2  hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
