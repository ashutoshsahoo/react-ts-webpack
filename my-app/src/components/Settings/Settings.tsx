import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import "./Settings.scss";

export const Settings = () => {
  return (
    <div className="container light-style flex-grow-1 container-p-y">
      <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>
      <Tab.Container defaultActiveKey="account-general" >
      <div className="card overflow-hidden">
        <Row className="no-gutters row-bordered row-border-light">
          <Col className="col-md-3 pt-0">
          <Nav className="list-group list-group-flush account-settings-links">
            <Nav.Item>
            <Nav.Link eventKey="account-general" className="list-group-item list-group-item-action">General</Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link eventKey="account-change-password" className="list-group-item list-group-item-action">Change password</Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link eventKey="account-info" className="list-group-item list-group-item-action">Info</Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link eventKey="account-social-links" className="list-group-item list-group-item-action">Social links</Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link eventKey="account-connections" className="list-group-item list-group-item-action">Connections</Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link eventKey="account-notifications" className="list-group-item list-group-item-action">Notifications</Nav.Link>
            </Nav.Item>
          </Nav>
          </Col>
          <Col className="col-md-9">
               <Tab.Content>
               <Tab.Pane eventKey="account-general">
                <div className="card-body media align-items-center">
                  <img
                    src="assets/img/avatar1.png"
                    alt="avatar"
                    className="d-block ui-w-80"
                  />
                  <div className="media-body ml-4">
                    <label className="btn btn-outline-primary">
                      Upload new photo
                      <input
                        type="file"
                        className="account-settings-fileinput"
                      />
                    </label>{" "}
                    &nbsp;
                    <button
                      type="button"
                      className="btn btn-default md-btn-flat"
                    >
                      Reset
                    </button>
                    <div className="text-light small mt-1">
                      Allowed JPG, GIF or PNG. Max size of 800K
                    </div>
                  </div>
                </div>
                <hr className="border-light m-0" />

                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control mb-1"
                      value="nmaxwell"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value="Nelle Maxwell"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">E-mail</label>
                    <input
                      type="text"
                      className="form-control mb-1"
                      value="nmaxwell@mail.com"
                    />
                    <div className="alert alert-warning mt-3">
                      Your email is not confirmed. Please check your inbox.
                      <br />
                      <a href="#">Resend confirmation</a>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company</label>
                    <input
                      type="text"
                      className="form-control"
                      value="Company Ltd."
                    />
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="account-change-password">
                <div className="card-body pb-2">
                  <div className="form-group">
                    <label className="form-label">Current password</label>
                    <input type="password" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">New password</label>
                    <input type="password" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Repeat new password</label>
                    <input type="password" className="form-control" />
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="account-info">
                <div className="card-body pb-2">
                  <div className="form-group">
                    <label className="form-label">Bio</label>
                    <textarea className="form-control" rows={5}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris nunc arcu, dignissim sit amet sollicitudin iaculis,
                      vehicula id urna. Sed luctus urna nunc. Donec fermentum,
                      magna sit amet rutrum pretium, turpis dolor molestie diam,
                      ut lacinia diam risus eleifend sapien. Curabitur ac nibh
                      nulla. Maecenas nec augue placerat, viverra tellus non,
                      pulvinar risus.
                    </textarea>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Birthday</label>
                    <input
                      type="text"
                      className="form-control"
                      value="May 3, 1995"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Country</label>
                    <select className="custom-select">
                      <option>USA</option>
                      <option selected>Canada</option>
                      <option>UK</option>
                      <option>Germany</option>
                      <option>France</option>
                    </select>
                  </div>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body pb-2">
                  <h6 className="mb-4">Contacts</h6>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      value="+0 (123) 456 7891"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Website</label>
                    <input type="text" className="form-control" value="" />
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="account-social-links">
                <div className="card-body pb-2">
                  <div className="form-group">
                    <label className="form-label">Twitter</label>
                    <input
                      type="text"
                      className="form-control"
                      value="https://twitter.com/user"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Facebook</label>
                    <input
                      type="text"
                      className="form-control"
                      value="https://www.facebook.com/user"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Google+</label>
                    <input type="text" className="form-control" value="" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">LinkedIn</label>
                    <input type="text" className="form-control" value="" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Instagram</label>
                    <input
                      type="text"
                      className="form-control"
                      value="https://www.instagram.com/user"
                    />
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="account-connections">
                <div className="card-body">
                  <button type="button" className="btn btn-twitter">
                    Connect to <strong>Twitter</strong>
                  </button>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body">
                  <h5 className="mb-2">
                    <a
                      href="javascript:void(0)"
                      className="float-right text-muted text-tiny"
                    >
                      <i className="ion ion-md-close"></i> Remove
                    </a>
                    <i className="ion ion-logo-google text-google"></i>
                    You are connected to Google:
                  </h5>
                  nmaxwell@mail.com
                </div>
                <hr className="border-light m-0" />
                <div className="card-body">
                  <button type="button" className="btn btn-facebook">
                    Connect to <strong>Facebook</strong>
                  </button>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body">
                  <button type="button" className="btn btn-instagram">
                    Connect to <strong>Instagram</strong>
                  </button>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="account-notifications">
                <div className="card-body pb-2">
                  <h6 className="mb-4">Activity</h6>

                  <div className="form-group">
                    <label className="switcher">
                      <input
                        type="checkbox"
                        className="switcher-input mr-1"
                        checked
                      />
                      <span className="switcher-indicator">
                        <span className="switcher-yes"></span>
                        <span className="switcher-no"></span>
                      </span>
                      <span className="switcher-label">
                        Email me when someone comments on my article
                      </span>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="switcher">
                      <input
                        type="checkbox"
                        className="switcher-input mr-1"
                        checked
                      />
                      <span className="switcher-indicator">
                        <span className="switcher-yes"></span>
                        <span className="switcher-no"></span>
                      </span>
                      <span className="switcher-label">
                        Email me when someone answers on my forum thread
                      </span>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="switcher">
                      <input type="checkbox" className="switcher-input mr-1" />
                      <span className="switcher-indicator">
                        <span className="switcher-yes"></span>
                        <span className="switcher-no"></span>
                      </span>
                      <span className="switcher-label">
                        Email me when someone follows me
                      </span>
                    </label>
                  </div>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body pb-2">
                  <h6 className="mb-4">Application</h6>

                  <div className="form-group">
                    <label className="switcher">
                      <input
                        type="checkbox"
                        className="switcher-input mr-1"
                        checked
                      />
                      <span className="switcher-indicator">
                        <span className="switcher-yes"></span>
                        <span className="switcher-no"></span>
                      </span>
                      <span className="switcher-label">
                        News and announcements
                      </span>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="switcher">
                      <input type="checkbox" className="switcher-input mr-1" />
                      <span className="switcher-indicator">
                        <span className="switcher-yes"></span>
                        <span className="switcher-no"></span>
                      </span>
                      <span className="switcher-label">
                        Weekly product updates
                      </span>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="switcher">
                      <input
                        type="checkbox"
                        className="switcher-input mr-1"
                        checked
                      />
                      <span className="switcher-indicator">
                        <span className="switcher-yes"></span>
                        <span className="switcher-no"></span>
                      </span>
                      <span className="switcher-label">Weekly blog digest</span>
                    </label>
                  </div>
                </div>
                </Tab.Pane>
                </Tab.Content>
          </Col>
        </Row>
        </div>
       </Tab.Container>

      <div className="text-right mt-3">
        <button type="button" className="btn btn-primary">
          Save changes
        </button>
        &nbsp;
        <button type="button" className="btn btn-default">
          Cancel
        </button>
      </div>
    </div>
  );
};
