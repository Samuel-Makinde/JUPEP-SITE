import { Card } from "flowbite-react";
import StatTopBigIcon from "../../../components/Stat/StatTopBigIcon";
import { GiTeacher } from "react-icons/gi";

const AcademyStats = () => {
  return (
    <section className="pb-32 px-4 pt-32   xl:px-20 font-roboto text-secH bg-primary4 dark:text-lightGray dark:bg-darkGray font-medium">
      <div className="container mx-auto border-sec6 border-t-[1px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <Card className="border-t text-secH dark:text-lightGray md:border-b lg:border-r">
            <StatTopBigIcon
              title="Qualified Instructor"
              value="10+"
              iconName="<GiTeacher />"
              colorVariant="info"
            />
          </Card>
          <Card className="border-t md:border-b lg:border-r">
            <StatTopBigIcon
              title="Video enrolments"
              value="1000+"
              iconName="users"
              colorVariant="warning"
            />
          </Card>
          <Card className="border-t lg:border-b md:border-r">
            <StatTopBigIcon
              title="15 point target"
              value="500+"
              iconName="tv"
              colorVariant="primary"
            />
          </Card>
          <Card className="border-t lg:border-b">
            <StatTopBigIcon
              title="Availale Videos"
              value="40+"
              iconName="film"
              colorVariant="success"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AcademyStats;
