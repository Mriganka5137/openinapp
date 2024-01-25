import Header from "@/components/upload/Header";
import MobileNav from "@/components/upload/MobileNav";
import MobileSidebar from "@/components/upload/MobileSidebar";
import ProfileIcon from "@/components/upload/ProfileIcon";

const page = () => {
  return (
    <div className="min-h-screen bg-color-upload-background w-full relative">
      {/* Mobile Nav */}
      <div className=" w-full flex justify-between px-[30px] pt-12 max-sm:hidden">
        <Header />
        <ProfileIcon />
      </div>
      <MobileNav />
      <MobileSidebar />
    </div>
  );
};

export default page;
