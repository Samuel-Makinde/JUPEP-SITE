import LoadingSpinnerSmall from "../LoadingSpinner";

export const SmallBox = ({ title, totalAmount, monthAmount }) => {
  return (
    <div className="w-full mt-8 lg:mt-0 lg:w-[24%] h-40 2xl:h-52 flex flex-col text-primary3 dark:text-lightGray  bg-primary1   dark:bg-primary3 rounded-[10px] shadow-2xl py-4 px-4">
      <p className=" dark:text text-xl  font-semibold">{title}</p>
      <div className="w-full  mt-5">
        <p className="font-extrabold text-secH dark:text-secLB text-xl ">
          {totalAmount ? totalAmount : <LoadingSpinnerSmall />} <br />
        </p>
        <div className="w-full flex justify-between mt-5 text-lg">
          <p>Month</p>
          <p className="dark:text-secLB">
            {monthAmount ? monthAmount : <LoadingSpinnerSmall />}
          </p>
        </div>
      </div>
    </div>
  );
};

export const SmallBox2 = ({ title, number }) => {
  return (
    <div className="w-full mt-8 lg:mt-0 lg:w-[32%] h-40 2xl:h-52 flex flex-col text-primary3 dark:text-lightGray  bg-primary1   dark:bg-primary3 rounded-[10px] shadow-2xl py-4 px-4">
      <p className=" dark:text text-xl  font-semibold">{title}</p>
      <div className="w-full  mt-5">
        <p
          className={`font-extrabold bg-sec7 rounded-md  p-4 text-secH dark:text-secLB text-xl `}
        >
          {number ? number : <LoadingSpinnerSmall />} <br />
        </p>
      </div>
    </div>
  );
};
