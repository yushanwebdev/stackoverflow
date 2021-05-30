import React, { useState } from "react";

export const AppSideNavFix = () => {
  const navDetails = [
    {
      navId: 1,
      navHead: "menu 1",
      subNavItems: ["submenu 1", "submenu 2"],
      to: "menu1",
    },
    {
      navId: 2,
      navHead: "menu 2",
      subNavItems: ["submenu 1", "submenu 2"],
      to: "menu2",
    },
  ];
  const [open, setOpen] = useState(false);

  const toggle = (id) => setOpen(open === id ? undefined : id);

  return (
    <div className="AppSideNavContentContainer">
      <div className="AppSideNavContentBody">
        <div className="SideAppNavBodySection">
          <div className="SideAppNavLinkWrapper">
            <ul className="SideNavHomeList">
              {navDetails.map((items, index) => (
                <div className="OverFlowHidden" key={index}>
                  <div className="SideNavLinkItemContainer">
                    <div
                      onClick={() => toggle(items.navId)} //add you click handler here
                      className="SideNavLinkItemContainerWrapper"
                    >
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
                      <span className="SideNavLinkText"> {items.navHead} </span>
                    </div>
                    {items.subNavItems.map((navSubMenu, index) => (
                      <div className="SideNavLinkSubItemsWrapper" key={index}>
                        <div className="SideNavLinkSubItemsWrapper">
                          <div
                            className={
                              open === items.navId
                                ? "SideNavLinkSubItemInner"
                                : "DisplayNone"
                            }
                          >
                            <span className="SideNavLinkSubItem">
                              {navSubMenu}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
