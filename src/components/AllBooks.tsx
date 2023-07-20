/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import GetAllBookList from './BookCard'
import { CreateBookFormValues } from './AddNewDialog'

import Loader from '../layouts/Spinner'
import { useSearchBooksQuery } from '../redux/features/Book/bookApiSlice'

export default function AllBooks({searchTerm}: any) {
  const { data: books, isLoading} = useSearchBooksQuery(searchTerm)

  // console.log(books?.data)

  if (isLoading) {
    return <Loader />
  }

  return (
    <section className='bookList'>
      <div className='books grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {books?.data &&
          books?.data?.map((book: CreateBookFormValues) => (
            <GetAllBookList key={book._id} book={book} />
          ))}
      </div>
    </section>
  )
}
