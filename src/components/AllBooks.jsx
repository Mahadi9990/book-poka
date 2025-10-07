import { Suspense } from 'react'
import Book from './Book';

export default function AllBooks({alBooks}) {

    // const [books, setbooks] = useState([]);
    // useEffect(()=>{
    //     fetch('/booksData.json').then((res)=>res.json()).then((data)=>setbooks(data))
    // },[])
  // const albooks = fetch('./booksData.json').then((res)=>res.json())
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5'>
      <Suspense fallback={<p>loading...</p>}>
        <Book albooks={alBooks}/>
      </Suspense>
    </div>
  )
}
