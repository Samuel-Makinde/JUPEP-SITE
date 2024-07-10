export const StatTopBigIcon = (props) => {
  const { value, title, iconName, colorVariant } = props;

  return (
    <div className="py-7 text-center text-secH dark:text-lightGray dark:bg-darkBlue font-medium">
      <div className="mb-3">
        <i className={`fe fe-${iconName} text-2xl text-${colorVariant}`}></i>
        {iconName}
      </div>
      <div className="leading-tight">
        <h2 className="mb-1 text-2xl font-bold">{value}</h2>
        <span className="">{title}</span>
      </div>
    </div>
  );
};

export default StatTopBigIcon;
