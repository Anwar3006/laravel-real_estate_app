import CustomButton from './CustomButton';

const CallToActionCard = () => {
  return (
    <div className="flex flex-col bg-white">
      <div>SVG</div>
      <div className="">
        <p className="text-2xl font-bold">Buy a home</p>
        <p className="text-lg font-normal">
          A real estate agent can provide you with a clear breakdown of costs so
          that you can avoid surprise expenses.
        </p>
      </div>

      <div>
        <CustomButton text="Find a Local Agent" />
      </div>
    </div>
  );
};

export default CallToActionCard;
