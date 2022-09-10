import Link from "next/link";


const Footer = ({ articles }) => {
  return (
    <div className='bg-black text-white pb-16 mt-16'>
      <div className='container mx-auto py-10 flex flex-col md:flex-row justify-between'>

        <div className="p-3">
          <h3 className="font-bold my-3">Blog Posts</h3 >
          <ul className="leading-8">
            {articles.map((article) => (
              <li key={article.title} className="text-gray-100 hover:underline hover:text-white">
                <Link href={`/posts/${article.slug}`}>
                  <a>{article.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="m-3 pr-10">
          <h2 className="m-0 mb-4">Footer</h2>
          <span>Ikius recruitment task</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
