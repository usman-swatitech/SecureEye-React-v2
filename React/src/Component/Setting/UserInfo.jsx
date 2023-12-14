import React from "react";
import Avatar from "../Common/Avatar";
import Profile from "../../assets/images/avatar.png";
import Button from "../Common/ButtonShap";
const UserInfo = () => {
  return (
    <div className="userInfo">
      <div className="pb-2">
        <Avatar image={Profile} height={50} width={50} upload={true} />
      </div>
      <h6 className="text-white username">John Doe</h6>
      <span class="badge rounded-pill">Admin</span>
      <h6 className="visitDate">last visit 02/03/2023</h6>
      <div className="w-75">
        <Button name="  Logout " />
      </div>
    </div>
  );
};

export default UserInfo;
