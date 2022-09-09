import { Image } from 'react-datocms'
import Link from 'next/link'

const ArticleCard = ({ articleImage, date, title, slug }) => {
  return (
    <>
      <Link href={slug}>
        <a className='hover:shadow-md'>
          <div className="card">
            <Image data={articleImage} />
            <h3>{title}</h3>
            <small>{date}</small>
          </div>
        </a>
      </Link>

    </>
  );
}

export default ArticleCard;
