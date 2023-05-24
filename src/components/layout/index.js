import React from "react";
import { H1sistem } from "../texts/index";
import { MakeSide, Content } from "./style";
import SideMenu from "../sideMenus/index";
import SideMenuAdmin from "../sideMenuAdmin/index";
import SideMenuDoctor from "../sideMenuDoctor/index";
import jwt_decode from "jwt-decode";
import { logout } from "../../services/index";
import { useHistory } from "react-router-dom";
import SemAcesso from '../../pages/sistema/semAcesso/index';

const Layout = (props) => {

  const user = JSON.parse(localStorage.getItem("user"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  const history = useHistory();

  if (user || admin) {

    function TokenVerify() {

      let token;
      if(user) token = user.token;
      else if(admin) token = admin.token;
      if (jwt_decode(token).exp < Date.now() / 1000) {
        logout();
        history.push("/");
      }
    }

    TokenVerify();

    return (
      <React.Fragment>
        <div>
          <MakeSide>
            {admin.admin ? (
              <SideMenuAdmin />
            ) : user.doctor ? (
              <SideMenuDoctor />
            ) : (
                  <SideMenu />
                )}
            <H1sistem>{props.titlePage}</H1sistem>
          </MakeSide>
          <Content>{props.children} </Content>
        </div>
      </React.Fragment>
    );
  }
  else return <SemAcesso />;
};

export default Layout;
