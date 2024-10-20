import BestCard from "./BestCard";

const BestCardContainer = () => {
  return (
    <div className="grid gap-6 lg:gap-y-8 xl:gap-x-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <BestCard />
      <BestCard />
      <BestCard />
      <BestCard />
      <BestCard />
      <BestCard />
    </div>
  );
};

export default BestCardContainer;
