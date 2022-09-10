import ArticleCard from '@/components/ArticleCard';


const ArticlesList = ({ articleListData, sectionHeader }) => {
  return (
    <section className='mt-12'>
      <hr />
      <h2 className='text-left'>{ sectionHeader }</h2>
      <div className='grid gap-3 grid-cols-1 md:grid-cols-3 py-4'>
        {articleListData.map((article) => (
          <ArticleCard
            key={article.title}
            title={article.title}
            articleImage={article.articleImage.responsiveImage}
            date={article.date}
            slug={`posts/${article.slug}`} />
        ))}
      </div>
    </section>
  );
}




export default ArticlesList;
