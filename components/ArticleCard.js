import { Image } from 'react-datocms'
import Link from 'next/link'
const { DateTime } = require("luxon");

const ArticleCard = ({ articleImage, date, title, slug }) => {

  const formattedDate = DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL)

  return (
    <>
      <Link href={slug}>
        <a className='overflow-hidden shadow-article-card rounded-xl'>
          <div className='flex md:flex-col'>
            <Image data={articleImage} />
            <div className='p-2 md:p-4  min-h-[100px] min-w-[70%] h-full flex justify-between flex-col'>
              <h4>{title}</h4>
              <div className='text-right text-gray-500 '>{formattedDate}</div>
            </div>
          </div>
        </a>
      </Link>

    </>
  );
}

export default ArticleCard;
