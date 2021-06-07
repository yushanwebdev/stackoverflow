import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import userImage from "./logo.svg";
import { RiSettings2Line } from "react-icons/ri";

export const AppSideNav = () => {
  const [open, setOpen] = useState("networking");
  const navDetails = [
    {
      navId: 1,
      navHead: "Networking",
      subNavItems: ["item 1", "item 2"],
      navLink: "networking",
    },
    {
      navId: 2,
      navHead: "Trading",
      subNavItems: ["item 1", "item 2"],
      navLink: "trading",
    },
  ];

  const toggle = (id) => setOpen(open === id ? undefined : id);

  const subNavFunction = (navLink, subNavVal) => {
    return `/${navLink}/` + `${subNavVal.toLowerCase()}`;
  };

  return (
    <div className="AppSideNavContentContainer">
      <div className="AppSideNavContentTop">
        <div className="AppSideNavContentTopWrapper">
          <div className="AppSideNavUserPicContainer">
            <div className="AppSideNavUserPic">
              <img src={userImage} alt="user-avatar" className="UserAvatar" />
            </div>
          </div>
          <div className="AppSideNavUserNameContainer">
            <div className="AppSideNavUserName">
              <div className="AppSideNavUserNameText"> Username</div>
            </div>
            <div className="AppSideNavUserWalletId"> 0x99343</div>
          </div>
          <div className="AppSideNavUserDdIconContainer">
            <button className="AppSideNavUserDdIconContainerWrapper">
              <div className="AppSideNavUserDdIconInner">
                <RiSettings2Line />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="AppSideNavContentBody">
        <div className="SideAppNavBodySection">
          <div className="SideAppNavLinkWrapper">
            <ul className="SideNavHomeList">
              {navDetails.map((items) => (
                <NavLink
                  to={
                    items.navHead === "Networking"
                      ? "/networking"
                      : items.navHead === "Trading"
                      ? "/trading"
                      : items.navHead === "Staking & Mining"
                      ? "/staking"
                      : items.navHead === "Smart Wallet"
                      ? "/wallet"
                      : items.navHead === "IDO List"
                      ? "ido"
                      : ""
                  }
                  className="SideNavLinkContainer"
                >
                  <div
                    className="OverFlowHidden"
                    onClick={() => toggle(items.navId)}
                  >
                    <div className="SideNavLinkItemContainer">
                      <div className="SideNavLinkItemContainerWrapper">
                        <div className="SideNavLinkItemContainerInner">
                          <div className="SideNavLinkItemContainerInnerWrapper">
                            <span
                              className={
                                items.navHead === "Networking"
                                  ? "SideNavLinkIcon PortfolioIcon"
                                  : items.navHead === "Trading"
                                  ? "SideNavLinkIcon TradingIcon"
                                  : items.navHead === "Staking & Mining"
                                  ? "SideNavLinkIcon StakingIcon"
                                  : items.navHead === "Smart Wallet"
                                  ? "SideNavLinkIcon WalletIcon"
                                  : "SideNavLinkIcon LaunchIcon"
                              }
                            >
                              {" "}
                            </span>
                          </div>
                        </div>
                        <span className="SideNavLinkText">
                          {" "}
                          {items.navHead}{" "}
                        </span>
                      </div>
                      {open === items.navId && (
                        <div className="SideNavLinkSubItemsContainer">
                          <div className="SideNavLinkSubItemsWrapper">
                            <div>
                              <span className="SideNavLinkSubItem">
                                {" "}
                                {items.subNavItems.map((navItem) => (
                                  <NavLink
                                    to={subNavFunction(items.navLink, navItem)}
                                  >
                                    <div className="SideNavLinkSubItemInner">
                                      <span className="SideNavLinkSubItem">
                                        {" "}
                                        {navItem}
                                      </span>
                                    </div>
                                  </NavLink>
                                ))}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
