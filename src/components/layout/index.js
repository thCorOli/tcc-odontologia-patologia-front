import React from "react";
import { H1sistem } from "../texts/index";
import { MakeSide, Content } from "./style";
import SideMenu from "../sideMenus/index";
import SideMenuLaboratory from "../sideMenuDoctor/index";
import { isAuthenticated } from "../../services/general/auth/index";
import { useHistory } from "react-router-dom";

const Layout = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const laboratory = JSON.parse(localStorage.getItem("laboratory"));
  const history = useHistory();

  if (isAuthenticated()) {
    if(user){
        return (
          <React.Fragment>
          <div>
            <MakeSide>
              <SideMenu />
              <H1sistem>{props.titlePage}</H1sistem>
            </MakeSide>
            <Content>{props.children} </Content>
          </div>
        </React.Fragment>
      );
    } else if(laboratory){
      return (
          <React.Fragment>
          <div>
            <MakeSide>
              <SideMenuLaboratory />
              <H1sistem>{props.titlePage}</H1sistem>
            </MakeSide>
            <Content>{props.children} </Content>
          </div>
        </React.Fragment>
      );
    }
  } else {
    history.push("/NotFound")
  }
};

export default Layout;
