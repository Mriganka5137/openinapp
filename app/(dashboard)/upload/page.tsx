import DataTable from "@/components/upload/DataTable";
import Header from "@/components/upload/Header";
import UploaderContainer from "@/components/upload/UploaderContainer";

const page = () => {
  return (
    <section className=" w-full  min-h-screen overflow-x-hidden p-5 ">
      <Header className="lg:hidden" />
      <UploaderContainer />
      <DataTable />
    </section>
  );
};

export default page;
