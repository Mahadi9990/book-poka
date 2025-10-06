import Book from './Book'

export default function AllBooks() {
    // const [books, setbooks] = useState([]);
    // useEffect(()=>{
    //     fetch('/booksData.json').then((res)=>res.json()).then((data)=>setbooks(data))
    // },[])
    const allBooks =fetch('./booksData.json').then((res)=>res.json())
  return (
    <Book allBooks={allBooks}/>
  )
}
