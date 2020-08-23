import React from "react"

export default function MailSignupForm() {
  // copied from the Mailchimp "embedded forms - horizontal" page, and then translated to JSX 😬
  // I probably should have used dangerouslySetInnerHTML instead
  return (
    <>
      {/*maybe this should move to the head*/}
      <link
        href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
        rel="stylesheet"
        type="text/css"
      />
      <div id="mc_embed_signup">
        <form
          action="https://dog.us5.list-manage.com/subscribe/post?u=69e6dfcf98b779919bf901b5a&amp;id=fbf946b3c1"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <label htmlFor="mce-EMAIL">Bark to Sign up!</label>
            <input
              type="email"
              defaultValue=""
              name="EMAIL"
              className="email"
              id="mce-EMAIL"
              placeholder="email address"
              required
            />
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_69e6dfcf98b779919bf901b5a_fbf946b3c1"
                tabIndex="-1"
                defaultValue=""
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                value="Woof!"
                defaultValue="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
