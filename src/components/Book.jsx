// import { use } from "react";
import { RiStarSLine } from "react-icons/ri";
import { Link } from "react-router";

export default function Book({ albooks }) {
  // const books = use(albooks)
  // console.log(books);
  return (
    <>
      {albooks.map((item) => (
        <Link key={item.bookId} to={`/bookDetails/${item.bookId}`}>          <div className="p-3 border-2" key={item.bookId}>
            <div className="h-[60%] w-[30%] mx-auto">
              <img src={item.image} alt="" className="h-full w-full" />
            </div>
            <h1>
              {" "}
              <RiStarSLine /> {item.bookName}
            </h1>
            {item.tags.map((item, index) => (
              <button className="pr-5 btn m-5" key={index}>
                {item}
              </button>
            ))}
          </div>
        </Link>
      ))}
    </>
  );
}
