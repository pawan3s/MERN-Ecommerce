import React from "react";
import { Button, Form } from "react-bootstrap";
const Footer = () => {
  const [email, setEmail] = React.useState("");
  return (
    <div className='bg-light footer'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h3>Sitemap</h3>
            <a href='/contact'>Contact</a>
            <br />
            <a href='/'>About Us</a>
            <br />
          </div>
          <div className='col'>
            <h3>Social Links</h3>
            <a href='/'>Instagram</a>
            <br />
            <a href='/'>Facebook</a>
            <br />
          </div>
          <div className='col'>
            <h3>Newsletter</h3>
            <Form
              className='newsletter__inputHolder'
              onSubmit={() => alert(`${email} has been subscribed!`)}
            >
              <Form.Control
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></Form.Control>
              <Button type='submit' className='signin-btn newsletter-btn'>
                SUbscribe
              </Button>
            </Form>
            <br />
          </div>
        </div>
        <br />
        <div style={{ marginTop: "1rem" }}>
          <div className='col'>
            <p className='text-center'>
              {" "}
              Copyright &copy; All Rights belongs to{" "}
              <a href='https://github.com/pawan3s' style={{ color: "red" }}>
                Pawan Subedi
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
