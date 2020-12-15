import React from "react";
import Headroom from "react-headroom";
import { Link } from "gatsby";
import MailSignupForm from "../components/mail-signup-form";
import { FaAlignRight } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Script from 'react-script-tag';

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, marginBottom: 0 }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export class Layout extends React.Component {
  state = {
    toggle: false,
  }
  Toggle = () => {
      this.setState({ toggle: !this.state.toggle });
  }
  render() {
    return (
        <>
        <Helmet>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

            {/*Bootstrap CSS*/}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous"/>
        </Helmet>

      <div className="layoutWrapper">
        <div className="content">
          <Headroom>
            <Link to="/" className="w-100 d-flex">
              <img className="ms-logo mr-2 d-inline" src="/mainsqueeze_logo_temp_no_text.svg" alt="Main Squeeze logo"/>
              <h3 className="header-title d-inline mb-0">Main Squeeze Dog Co.</h3>
            </Link>
            <right-stuff >
              <button className="hamburger-icon" onClick={this.Toggle}>
                <FaAlignRight color="white" />
              </button>
              <ul
                className={
                  this.state.toggle ? "link-list show-nav" : "link-list"
                }
              >
                <ListLink to="/">Home</ListLink>
                <ListLink to="/blog">Blog</ListLink>
              </ul>
            </right-stuff>
          </Headroom>
          <div>{this.props.children}</div>
        </div>
        <footer className="footer">
          <MailSignupForm />
        </footer>
  </div>
            {/*bootstrap, this could be moved elsewhere, maybe to ssr file*/}
<Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></Script>
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossOrigin="anonymous"></Script>
            {/*end bootstrap imports*/}
            </>
    );
  }
}
