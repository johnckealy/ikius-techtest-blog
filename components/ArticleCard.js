import { Image } from 'react-datocms'
import Link from 'next/link'

const ArticleCard = ({ articleImage, date, title, slug }) => {
  return (
    <>
      <Link href={slug}>
        <a className='overflow-hidden shadow-article-card rounded-xl'>
          <div className='flex md:flex-col'>
            <Image data={articleImage} />
            <div className='p-2 md:p-4  min-h-[100px] min-w-[70%] h-full flex justify-between flex-col'>
              <h4>{title}</h4>
              <div className='text-right text-gray-500 '>{date}</div>
            </div>
          </div>
        </a>
      </Link>

    </>
  );
}

export default ArticleCard;
