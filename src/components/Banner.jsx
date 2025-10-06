import AllBooks from './AllBooks'

export default function Banner() {
  return (
    <>
    <div className='flex justify-evenly items-start max-w-[1200px] mx-auto'>
        <div className="content p-5 w-[80%] mx-auto flex flex-col justify-start items-start gap-4">
            <h1 className='text-5xl font-bold'>Books to freshen up <br /> your bookshelf</h1>
            <button className="btn btn-success">View The List</button>
        </div>
        <div className="image">
            <img src="pngwing 1.png" alt="" />
        </div>
    </div>
        <div className="all-books">
          <AllBooks/>
        </div>
    </>
  )
}
