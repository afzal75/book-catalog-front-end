/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import BookCard from './BookCard'
import { CreateBookFormValues } from './AddNewDialog'
import Loader from '../layouts/Spinner';
import { useSearchBooksQuery } from '../redux/features/Book/bookApiSlice';

export default function BookList({ searchTerm }: any) {
  
  const { data: books, isLoading, isError  } = useSearchBooksQuery(searchTerm, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 500,
  }); 

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <p>Error occurred while fetching books.</p>
  }

  return (
    <section className='bookList'>
      <h2 className='text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 py-5'>
        Recently Added Books
      </h2>
      <div className='books grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {books?.data &&
          books?.data
            ?.slice(0, 10)
            .map((book: CreateBookFormValues) => (
              <BookCard key={book._id} book={book} />
            ))}
      </div>
    </section>
  )
}
