import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const clearFields = () => {
    setEmail('');
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to my Blog<br /> I read and summarize research papers for fun.</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <div id="mc_embed_shell">
              <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
              <style type="text/css">
                {`
                #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width: 100%;} /* Adjust width as needed */
                /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
                We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
                `}
              </style>
              <div id="mc_embed_signup">
                <form action="https://gmail.us8.list-manage.com/subscribe/post?u=fb63b2d0092cead21d069cf4a&amp;id=d8bffea45e&amp;f_id=00912be3f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                  <div id="mc_embed_signup_scroll">
                    <h2>Please type in your email-id below</h2>
                    <div className="mc-field-group">
                      <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                      <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div id="mce-responses" className="clear foot">
                      <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                      <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                    </div>
                    <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                      {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                      <input type="text" name="b_fb63b2d0092cead21d069cf4a_d8bffea45e" tabIndex="-1" value="" />
                    </div>
                    <div className="optionalParent">
                      <div className="clear foot">
                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
              <script type="text/javascript">{`
                (function($) {
                  window.fnames = new Array();
                  window.ftypes = new Array();
                  fnames[0]='EMAIL';
                  ftypes[0]='email';
                }(jQuery));
                var $mcj = jQuery.noConflict(true);
              `}</script>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
