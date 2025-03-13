import CustomButton from './CustomButton';

type CTAProps = {
  imgUrl: string;
  title: string;
  text: string;
  buttonName: string;
};

const CallToActionCard = ({ imgUrl, title, text, buttonName }: CTAProps) => {
  return (
    <div className="flex w-full max-w-[25rem] flex-col items-center justify-center rounded-3xl bg-white p-6 md:h-[32rem]">
      <div className="mb-4 flex max-h-48 max-w-48 items-center justify-center">
        <img
          src={imgUrl || ''}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="text-center">
        <p className="text-xl font-bold md:text-2xl">{title}</p>
        <p className="text-base font-normal">{text}</p>
      </div>

      <div className="mt-8">
        <CustomButton
          text={buttonName}
          className="!px-auto !rounded-2xl py-2 !text-sm font-bold md:text-base"
        />
      </div>
    </div>
  );
};

export default CallToActionCard;
