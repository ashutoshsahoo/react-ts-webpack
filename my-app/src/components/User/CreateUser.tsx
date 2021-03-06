import React from "react";

interface ICreateUserProps {
  onChangeForm: Function
  createUser: Function
}

const CreateUser = (props: ICreateUserProps) => {
  return (
      <div className="row">
        <div className="col-md-7 mrgnbtm">
          <h2>Create User</h2>
          <form>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="exampleInputEmail1">First Name</label>
                <input
                  type="text"
                  onChange={(e) => props.onChangeForm(e)}
                  className="form-control"
                  name="firstName"
                  id="firstname"
                  aria-describedby="emailHelp"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="exampleInputPassword1">Last Name</label>
                <input
                  type="text"
                  onChange={(e) => props.onChangeForm(e)}
                  className="form-control"
                  name="lastName"
                  id="lastname"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="text"
                  onChange={(e) => props.onChangeForm(e)}
                  className="form-control"
                  name="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => props.createUser()}
              className="btn btn-danger"
            >
              Create
            </button>
          </form>
        </div>
      </div>
  );
};

export default CreateUser;
