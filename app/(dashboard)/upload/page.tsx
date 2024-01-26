import DataTable from "@/components/upload/DataTable";
import Header from "@/components/upload/Header";
import UploaderContainer from "@/components/upload/UploaderContainer";

const page = () => {
  return (
    <section className=" w-full  min-h-screen overflow-y-auto p-5">
      <Header className="sm:hidden" />
      <UploaderContainer />
      <DataTable />
    </section>
  );
};

export default page;
