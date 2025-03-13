import ArticleBadge from './ArticleBadge';

type BlogArticleCardProps = {
  imgUrl: string;
  title: string;
  tag: string;
};

const BlogArticleCard = ({ imgUrl, tag, title }: BlogArticleCardProps) => {
  return (
    <div className="flex h-auto w-full max-w-64 flex-col items-center justify-center rounded-3xl bg-[#e5e5e5] shadow-xl">
      <div className="relative h-48 w-full rounded-t-3xl bg-[#d9d9d9]">
        <ArticleBadge text={tag || 'Trends'} />
        <img
          src={imgUrl || ''}
          alt={title}
          className="h-full w-full rounded-t-3xl object-cover object-center"
        />
      </div>
      <div className="mt-2 px-5 py-1 text-center">
        <p className="text-[13px] font-normal">
          {title || 'Top 10 Most Popular Neighborhoods in America'}
        </p>
      </div>
    </div>
  );
};

export default BlogArticleCard;
