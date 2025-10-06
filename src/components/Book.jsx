import { use } from "react"

export default function Book({allBooks}) {
    const books = use(allBooks)
    console.log(books)
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {books.map((item=>
            <div className="p-3">
            <img src={item.image} alt="" />
            <h1>{item.bookName}</h1>
        </div>
        ))}
    </div>
    </div>
  )
}
