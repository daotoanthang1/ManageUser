import React, { Component } from 'react';
import EditUser from './EditUser'
export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: ""
        }
    }
    getUserEditInfo = (info)=>{
        this.setState({
            userObj:info
        })
        this.props.getUserEditInfoApp(info)
    }
    changeButton = () => {
        if (this.props.currentStatus === true) {
            return <div className="btn btn-block btn-outline-info" onClick={this.props.changeStatusButton}>Thêm mới</div>

        }
        else {
            return <div className="btn btn-block btn-outline-secondary" onClick={this.props.changeStatusButton}>Đóng lại</div>
        }

    }
    getTextSearch = (event) => {
        this.setState({
            temp: event.target.value
        })
        this.props.getData(this.state.temp)
    }
    isShowEditForm = ()=>{
        if(this.props.editUserStatus === true){
            return <EditUser getUserEditInfo={(info)=>this.getUserEditInfo(info)} userEditObject={this.props.userEditObject} isEditForm={()=>this.props.isEditForm()}/>
        }
        else{
            return;
        }
    }
    render() {
        return (
            <div className="col-12">
                {this.isShowEditForm()}
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" placeholder="Nhập tên cần tìm kiếm" onChange={(event) => this.getTextSearch(event)} />
                        <div className="btn btn-info" onClick={() => this.props.getData(this.state.temp)}>Tìm</div>
                    </div>
                    <div className="btn-group1">
                        {this.changeButton()}
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}
