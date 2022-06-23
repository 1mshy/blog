import { valueToPercent } from "@mui/base";
import React from "react";
import "../css/App.css";
import "../css/SideBar.css";
import {SidebarData} from "./SidebarData";

function Sidebar() {
    return (
        <div class="Sidebar">
            <ul className = "SidebarList">
                {SidebarData.map((item, index) => {
                    return (
                        <li key={item} onClick={() => window.location.pathname = item.link} className='row'> 
                            <div id='icon'>
                                {item.icon}
                            </div> 
                            {/* Adds a space between the icon and title*/}
                            {/* {" "} */}
                            <div id='title'>
                                {/* Adds a space that formats the icons how I want it*/}
                                {/* {" "} */}
                                
                                {/* {item.title} */}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sidebar;