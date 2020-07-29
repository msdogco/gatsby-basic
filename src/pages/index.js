import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
  <div
  css={css`
    background-image: url("/tubeInUse.svg");
    background-repeat: no-repeat;
    background-position: right;
  `}
  >
    <Layout>
      <h1>The Original Treat Tube</h1>
      <p>Are you embarrassed by your excitable, impulsive, or reactive dog?</p>
      <p>Does his barking and lunging at dogs and people on walks make you cringe?</p>
      <p>You’re not alone.</p>
      <h3>Main Squeeze was made for you!</h3>
      <p>Main Squeeze lets you use trainer-tested techniques to conquer the fear that drives his bad behavior.</p>
      <p>Use Main Squeeze to help your dog be the good dog you know she is inside.</p>
      <h4>Compared to store-bought training treats, Main Squeeze:</h4>
      <ul>
      <li>is easy to prepare - no more cutting up bite-sized treats</li>
      <li>quickly reinforces good behavior - no more fumbling in your pocket for a treat</li>
      <li>lets you choose the filling - use your dog's favorite high-value treat</li>
      <li>works with gloves - makes winter training easy</li>
      </ul>
    </Layout>
    </div>
  )
}

