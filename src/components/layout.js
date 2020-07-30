import React from "react"
import Headroom from "react-headroom"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, marginBottom: 0}}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children, fullWidth }) {
  let widthClass;
  if(fullWidth){
    widthClass = "";
    } else {
    widthClass = "constrained-width";
    }
  return (
    <div>
      <Headroom>
        <div style={{maxWidth: 650, margin: "auto"}} >
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 class="title" style={{ display: `inline` }}>Main Squeeze Dog Co.</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right`, margin: 0 }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/blog">Blog</ListLink>
        </ul>
        </div>
      </Headroom>
      <div class={widthClass}>
      {children}
      </div>
    </div>
  )
}