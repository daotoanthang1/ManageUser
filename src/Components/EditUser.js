import React, { Component } from 'react';

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.userEditObject.id,
            name:this.props.userEditObject.name,
            tel:this.props.userEditObject.tel,
            permission:this.props.userEditObject.permission
        }
    }
    
    isChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value
        this.setState({
            [name]:value
        })
    }
    saveInfo = ()=>{
        var info = {};
        info.id=this.state.id;
        info.name=this.state.name;
        info.tel=this.state.tel;
        info.permission=this.state.permission;
        this.props.getUserEditInfo(info)
        this.props.isEditForm()
    }
    render() {
        return (
            
                <div className="row">
                    <div className="col-12">
                    <form method="post">
                        <div className="card">
                            <div className="card text-white bg-info mb-3">
                                <div className="card-header text-center">Thêm mới User</div>
                                <div className="card-body text-primary">
                                    <div className="form-group">
                                        <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.name} type="text" className="form-control" name="name" aria-describedby="helpId" placeholder="Tên User" />
                                    </div>
                                    <div className="form-group">
                                        <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.tel} type="password" className="form-control" name="tel" aria-describedby="helpId" placeholder="Điên thoại" />
                                    </div>
                                    <div className="form-group">
                                        <select className="custom-select" name="permission" required onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.permission}>
                                            <option value>Chọn quyền mặc định</option>
                                            <option value={1}>Admin</option>
                                            <option value={2}>Modrator</option>
                                            <option value={3}>Normal</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="button" className="btn btn-block btn-primary" value="Lưu" onClick = {()=>this.saveInfo()} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
