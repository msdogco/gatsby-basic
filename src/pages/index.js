import React from "react"
import { Layout } from "../components/layout"
import MailSignupForm from "../components/mail-signup-form"

export default function Home({ data }) {
  return (
    <Layout fullWidth={true}>
      <div className="container">
          <h1 className="page-title">The Original Treat Tube</h1>
          <p>
            Are you embarrassed by your excitable, impulsive, or reactive dog?
          </p>
          <p>
            Does his barking and lunging at dogs and people on walks make you
            cringe?
          </p>
          <p>You’re not alone.</p>
          <h2 className="section-title">Main Squeeze was made for you!</h2>
          <p>
            Main Squeeze lets you use trainer-tested techniques to conquer the
            fear that drives his bad behavior.
          </p>
          <p>
            Use Main Squeeze to help your dog be the good dog you know she is
            inside.
          </p>
          </div>
        <div className="container-fluid tube-in-use-wrapper">
          <img
            className="tube-in-use-image"
            src="/tubeInUse.svg"
            alt="illustration of tube in use"
          />
          <div className="tube-in-use-bullets">
            <h4>Compared to store-bought training treats, Main Squeeze:</h4>
            <ul>
              <li>is easy to prepare - no more cutting up bite-sized treats</li>
              <li>
                quickly reinforces good behavior - no more fumbling in your
                pocket for a treat
              </li>
              <li>
                lets you choose the filling - use your dog's favorite high-value
                treat
              </li>
              <li>works with gloves - makes winter training easy</li>
            </ul>
          </div>
          <div className="tube-in-use-image" />
        </div>
      <div className="container-fluid section-dark">
      <div className="container">
        <MailSignupForm />
      </div>
      </div>
      <div className="container">
        <div>
          <h2 className="section-title">Working Towards a Better Future</h2>
          <p>
            Main Squeeze is a flexible product: it works just as well for a
            puppy learning her way in the world as it does for a troubled rescue
            crippled by anxiety when meeting other dogs. Regardless of your dogs
            story, Main Squeeze shares an optimistic vision about what your
            dog's future might bring.
          </p>
          <p>
            Caring for a traumatized or reactive dog can be immensely difficult:
            your dog doesn't have anyone but you, and your dog might make your
            life hard with constant barking, growling and lunging. You love your
            dog, but your life would be easier without him. To get rid of him
            would be a death sentence, so you're stuck with an
            almost-intolerable roommate.
          </p>
          <p>
            This is an early ad concept we decided not to produce for Main
            Squeeze:
          </p>
          <div className="center-image">
            <div />
            <img
              className="calm-and-easy"
              src="/calmAndEasy.svg"
              alt="a calm and easy dog life"
            />
            <div />
          </div>
          <p>
            Even if it's not very polished, and it doesn't warrant promotion,
            this is a vision of why we persevere with our sometimes aggravating
            dogs. The founding motivation of Main Squeeze is to help reactive
            dogs recover through counter-conditioning, and to help
            puppy-training go as smoothly as possible. We may not all reach a
            point of having a "calm and easy dog life," but we can work to get a
            little closer to achieving that dream.
          </p>
        </div>
      </div>
    </Layout>
  )
}
