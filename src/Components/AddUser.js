import React, { Component } from 'react';
import * as constant from "./../actions/index";

import {connect} from "react-redux"
class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      tel: "",
      permission: ""
    }
  }
  getNewUser = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }
  AddUserStatus = () => {
    if (this.props.changeStatus === false) {
      return (
        <div className="col-3">
          <form>
            <div className="card">
              <div className="card border-primary mb-3">
                <div className="card-header">Thêm mới User</div>
                <div className="card-body text-primary">
                  <div className="form-group">
                    <input type="text" className="form-control" name="name" aria-describedby="helpId" placeholder="Tên User" onChange={(event) => this.getNewUser(event)} />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" name="tel" aria-describedby="helpId" placeholder="Điên thoại" onChange={(event) => this.getNewUser(event)} />
                  </div>
                  <div className="form-group">
                    <select className="custom-select" name="permission" required onChange={(event) => this.getNewUser(event)}>
                      <option value>Chọn quyền mặc định</option>
                      <option value={1}>Admin</option>
                      <option value={2}>Modrator</option>
                      <option value={3}>Normal</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input type="reset" className="btn btn-block btn-primary" onClick={(name, tel, permission) => this.props.add(this.state.name, this.state.tel, this.state.permission)} value="Thêm mới" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      )
    }
  }
  render() {
    return (
      <>
        {this.AddUserStatus()}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      statusBoard: state.statusBoard
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      changeStatus: () => {
          dispatch(constant.addNewInfo())
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Component)
