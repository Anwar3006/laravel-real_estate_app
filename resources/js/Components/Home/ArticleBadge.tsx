const ArticleBadge = ({ text }: { text: string }) => {
  return (
    <div className="absolute left-3 top-3">
      <div className="flex items-center justify-center rounded-xl bg-sky-400 px-2 py-0.5">
        <p className="text-xs font-semibold text-white">{text}</p>
      </div>
    </div>
  );
};

export default ArticleBadge;
