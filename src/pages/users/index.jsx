import UserFilter from "../../component/forms/UserFilter";
import UsersList from "../../component/user/UsersList";
import RightSidebar from "../../component/user/RightSidebar";

function Users() {
  return (
    <main className="w-full xl:px-[48px] px-6 pb-6 xl:pb-[48px] sm:pt-[156px] pt-[100px] dark:bg-darkblack-700 ">
      <div className="">
        <div className=" xl:grid gap-[4rem] grid-cols-6">
          <div className="col-span-3">
            <UserFilter />
          </div>
          <div className="col-span-6">
            <UsersList />
          </div>
          <div className="col-span-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Users;