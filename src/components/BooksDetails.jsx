import { useLoaderData, useParams } from "react-router";

export default function BooksDetails() {
  const { id } = useParams();
  const dataId = parseInt(id);
  const data = useLoaderData();
  const singleData = data.find((item) => item.bookId === dataId);
  return (
    <>
      <div className="max-w-[1200px] mx-auto h-screen">
        <div className="img ">
          <img src={singleData.image} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <button className="btn">Read</button>
          <button className="btn">wish list</button>
        </div>
      </div>
    </>
  );
}
