import { Image } from 'react-datocms'
import Link from 'next/link'
import { DateTime } from "luxon";


const ArticleCard = ({ articleImage, date, title, slug }) => {

  const formattedDate = DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL)

  return (
    <>
      <div className='overflow-hidden shadow-article-card hover:shadow-2xl rounded-xl transition hover:-translate-y-1'>
        <Link href={`/blog/${slug}`}>
          <a className=''>
            <div className='flex md:flex-col'>
              <Image data={articleImage} />
              <div className='text-md md:text-lg p-2 md:p-4 min-h-[100px] md:min-h-[200px] min-w-[70%] h-full flex justify-between flex-col'>
                <h4>{title}</h4>
                <div className='text-right text-gray-500 '>{formattedDate}</div>
              </div>
            </div>
          </a>
        </Link>
      </div>

    </>
  );
}

export default ArticleCard;
