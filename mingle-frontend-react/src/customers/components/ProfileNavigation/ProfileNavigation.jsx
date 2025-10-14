import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // <-- added
import { useDispatch } from "react-redux";
import { logout } from "../../../State/Authentication/Action";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EventIcon from "@mui/icons-material/Event";

const menu = [
  { title: "My Info", icon: <AccountCircleIcon /> },
  { title: "Orders", icon: <ShoppingBagIcon /> },
  { title: "Favorites", icon: <FavoriteIcon /> },
  { title: "Address", icon: <HomeIcon /> },
  { title: "Payments", icon: <AccountBalanceWalletIcon /> },
  { title: "Notification", icon: <NotificationsIcon /> },
  { title: "Events", icon: <EventIcon /> },
  // { title: "Logout", icon: <LogoutIcon /> }, 
  // My Info already has a logout button now
];

const ProfileNavigation = ({ handleClose, open }) => {
  const isSmallScreen = useMediaQuery("(max-width:1080px)");
  const navigate = useNavigate();
  const location = useLocation(); // track current path
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleNavigate = (item) => {
    if (item.title === "Logout") {
      handleLogout();
    } else if (item.title === "My Info") {
      navigate("/my-profile"); 
    } else {
      navigate(`/my-profile/${item.title.toLowerCase()}`);
    }
  };

  const isActive = (item) => {
    if (item.title === "My Info") return location.pathname === "/my-profile";
    return location.pathname === `/my-profile/${item.title.toLowerCase()}`;
  };

  return (
    <React.Fragment>
      <Drawer
        sx={{ zIndex: 1 }}
        anchor={"left"}
        open={open}
        onClose={handleClose}
        variant={isSmallScreen ? "temporary" : "permanent"}
      >
        <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col text-xl pt-16">
          {menu.map((item, i) => (
            <React.Fragment key={i}>
              <div
                onClick={() => handleNavigate(item)}
                className={`w-full h-20 flex items-center px-5 space-x-5 cursor-pointer transition-all duration-200
                  ${isActive(item) ? "bg-gray-100 border-l-4 border-pink-500 font-semibold text-pink-600" : ""}`}
              >
                {React.cloneElement(item.icon, {
                  className: isActive(item) ? "text-pink-500" : "",
                  fontSize: "medium"
                })}
                <span>{item.title}</span>
              </div>
              {i !== menu.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default ProfileNavigation;
