import React from "react";
import Headroom from "react-headroom";
import { Link } from "gatsby";
import MailSignupForm from "../components/mail-signup-form";
import { FaAlignRight } from "react-icons/fa";

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
      let widthClass;
    if (this.props.fullWidth) {
        widthClass = "";
    } else {
        widthClass = "constrained-width";
    }

    return (
      <div className="layoutWrapper">
        <div className="content">
          <Headroom>
            <div style={{ maxWidth: 650, margin: "auto" }}>
              <Link
                to="/"
                style={{ textShadow: `none`, backgroundImage: `none` }}
              >
                <h3 className="title" style={{ display: `inline` }}>
                  Main Squeeze Dog Co.
                </h3>
              </Link>
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
            </div>
          </Headroom>
          <div className={widthClass}>{this.props.children}</div>
        </div>
        <footer className="footer">
          <MailSignupForm />
        </footer>
      </div>
    );
  }
}
