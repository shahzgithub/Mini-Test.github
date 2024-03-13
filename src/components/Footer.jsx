import { TextField } from "@mui/material";
import "./components.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="footer-col col-md-3">
              <b style={{ fontSize: "70px", fontFamily: "initial" }}>Blood Donate</b>
            </div>
            <div className="footer-col col-md-3">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">
                    <i className="fas fa-angle-right" /> <strong>my account</strong>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-angle-right" /> <strong>my order</strong>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-angle-right" /> <strong>my wishlist</strong>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-angle-right" /> <strong>terms of use</strong>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-angle-right" /> <strong>privacy policy</strong>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col col-md-3">
              <h4>follow us</h4>
              <ul>
                <li>
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook" /> <strong>facebook</strong>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/?lang=en">
                    <i className="fab fa-twitter" /> <strong>twitter</strong>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/accounts/login/">
                    <i className="fab fa-instagram" /> <strong>instagram</strong>
                  </a>
                </li>
                <li>
                  <a href="https://pk.linkedin.com/">
                    <i className="fab fa-linkedin" /> <strong>linkedin</strong>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-github" /> <strong>github</strong>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col col-md-3">
              <h4>newsletter</h4>
              {/* <form action>
                <input type="text" placeholder="Your Name" className="inputName" />
                                <input type="email" placeholder="email@example.com" className="inputEmail" />
                                <input type="submit" defaultValue="Subscribe" name className="inputSubmit" />

                              </form> */}
              <TextField id="filled-basic" label="Filled" variant="filled" />
            </div>
          </div>
          <div className="row" id="credit">
            <div className="col">
              <p>
                <strong>Created By</strong> <a href="https://github.com/shahzgithub?tab=repositories"><strong>Syed Shahzaib</strong></a> <strong>©2024 |</strong>
                <strong>All Rights Reserved</strong>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export { Footer };
