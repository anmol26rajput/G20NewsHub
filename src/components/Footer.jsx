import React from 'react';

export default function Footer(props) {
  return (
    <section className="pt-0 w-100">
      <div className={`d-flex align-items-center bg-${props.mode}`}>
        <div className="col-md-7 col-lg-8 text-center text-md-start">

          <div className="p-3">
            © 2023 Copyright: {" "}
            <a className={`text-${props.mode === "light" ? "dark" : "light"}`} href="https://mdbootstrap.com/"
            >MDBootstrap.com</a
            >
          </div>

        </div>
        <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end p-3">

          <a href="https://www.linkedin.com/in/pruthimayank/" target="_blank" ><img className="m-2" src="https://media.licdn.com/dms/image/D5603AQE0auN2K_bpAQ/profile-displayphoto-shrink_800_800/0/1678854276203?e=2147483647&v=beta&t=CF0wW6y-K3rmts8IkK1GmPVphRF890l2BtH1M2QieQs" style={{ width: "50px", borderRadius: "5rem" }} /></a>
          <a href="https://www.linkedin.com/in/satyakant-mishra-958847203/" target="_blank" ><img className="m-2" src="https://media.licdn.com/dms/image/D4D03AQHOdrEZjAXdjQ/profile-displayphoto-shrink_800_800/0/1674058965777?e=2147483647&v=beta&t=6zqRs4UQY39SDdLkOqCyuo_lAqv2eTmCfCcZOqRNuZA" style={{ width: "50px", borderRadius: "5rem" }} /></a>
          <a href="https://www.linkedin.com/in/mehul-anand-448400223/" target="_blank" ><img className="m-2" src="https://media.licdn.com/dms/image/D4D03AQFyJIGUfyWN2g/profile-displayphoto-shrink_200_200/0/1681498728429?e=1686787200&v=beta&t=nqBPshRBKQZyxHv3Hwjt7TNe8FHki9JJ9TVgbbq-R6I" style={{ width: "50px", borderRadius: "5rem" }} /></a>
          <a href="https://www.linkedin.com/in/anmol-rajput-b31061229/" target="_blank" ><img className="m-2" src="https://media.licdn.com/dms/image/D4D03AQHioLUhrPI8uw/profile-displayphoto-shrink_800_800/0/1674642907116?e=1686787200&v=beta&t=SVzpp-Ke9l7KIOggau0DviSgWpMCDe8oBiK2JlUFd5g" style={{ width: "50px", borderRadius: "5rem" }} /></a>
        </div>

      </div>
    </section>
  )
}