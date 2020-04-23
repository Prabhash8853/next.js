import * as React from "react";
import Main from "../Main/Main";
import Media from "react-media";

// import MobileLayout from "../../../MobileView/MobileContainer/MobileLayout/MobileLayout";
import Navbar from "../../components/Navbar/Navbar";
import MobileLayout from "../Mobile/MobileLayout/MobileLayout";

class Layout extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Navbar isAuthenticate={this.props.isAuthenticate} />
        <Main />
      </React.Fragment>
      // <Media query="(max-width: 968px)">
      //   {(matches) =>
      //     matches ? (
      //       <MobileLayout {...this.props} />
      //     ) : (

      //     )
      //   }
      // </Media>
    );
  }
}

export default Layout;
