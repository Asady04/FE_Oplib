import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare, faBook, faBookJournalWhills, faCalendarPlus } from "@fortawesome/free-solid-svg-icons";

export const ContentCatalog = () => {
    return (
      <div>
        {/* content recent news*/}
        <div className="mt-11 mb-5">
            <div className="flex">
                <h2 className="flex text-maroon font-semibold text-2xl underline decoration-maroon underline-offset-2 gap-2">
                    <FontAwesomeIcon icon={faCalendarPlus} className='w-[25px]'/>New Releases</h2>
            </div>
            <div className="grid grid-cols-9 bg-white-pucat rounded-md mt-4 p-3 gap-5 shadow-lg">
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 1" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku2.svg" 
                    alt="cover buku 2" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 1" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 1" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku2.svg" 
                    alt="cover buku 2" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku3.svg" 
                    alt="cover buku 3" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku.svg" 
                    alt="cover buku 1" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 1" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku3.svg" 
                    alt="cover buku 3" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
            </div>
        </div>

        {/* content book */}
        <div className="mt-8 mb-5">
            <div className="flex justify-between">
                <h2 className="flex text-maroon font-semibold text-2xl underline decoration-maroon underline-offset-2 gap-2">
                    <FontAwesomeIcon icon={faBook} className='w-[25px]' />Books</h2>
                <NextLink href="/landing/catalog/books" className="text-dark-red hover:text-maroon hover:underline hover:decoration-maroon hover:underline-offset-2 font-semibold text-md -mb-7">
                    show all
                </NextLink>
            </div>
            <div className="grid grid-cols-9 bg-white-pucat rounded-md mt-4 p-3 gap-5 shadow-lg">
                <img 
                    src="/assets/image/cover buku.svg" 
                    alt="cover buku 1" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku2.svg" 
                    alt="cover buku 2" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku3.svg" 
                    alt="cover buku 3" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku.svg" 
                    alt="cover buku 1" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku2.svg" 
                    alt="cover buku 2" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku3.svg" 
                    alt="cover buku 3" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku.svg" 
                    alt="cover buku 1" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku2.svg" 
                    alt="cover buku 2" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku3.svg" 
                    alt="cover buku 3" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
            </div>
        </div>

        {/* content karya ilmiah */}
        <div className="mt-8 mb-12">
            <div className="flex justify-between">
                <h2 className="flex text-maroon font-semibold text-2xl underline decoration-maroon underline-offset-2 gap-2">
                    <FontAwesomeIcon icon={faBookJournalWhills} className="w-[25px]"/>Journals</h2>
                <NextLink href="/landing/catalog/journals" className="text-dark-red hover:text-maroon hover:underline hover:decoration-maroon hover:underline-offset-2 font-semibold text-md -mb-7">
                    show all
                </NextLink>
            </div>
            <div className="grid grid-cols-9 bg-white-pucat rounded-md mt-4 p-3 gap-5 shadow-lg">
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 1" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 2" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 3" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 1" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 2" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 3" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 1" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 2" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 3" 
                    className="h-[160px] transition-transform duration-300 hover:scale-110"
                />
            </div>
        </div>

      </div>
    );
  };
  