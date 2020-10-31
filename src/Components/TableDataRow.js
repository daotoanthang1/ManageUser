import React, { Component } from 'react';

class TableDataRow extends Component {
    userPosition = ()=>{
        if(this.props.permissionUser === 1){
            return "Admin"
        }
        else if(this.props.permissionUser===2){
            return "Moderator"
        }
        else{
            return "Normal User"
        }
    }
    editClick = ()=>{
        this.props.editFunClick();
        this.props.isEditForm()
    }
    deleteButtonClick = (idUser)=>{
        this.props.deleteButtonClick(idUser)
    }
    render() {
        return (
            <tr>
                <td>{this.props.idUser}</td>
                <td>{this.props.nameUser}</td>
                <td>{this.props.telUser}</td>
                <td>
                    {this.userPosition()}
                </td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua" onClick={()=>this.editClick()} ><i className="fa fa-edit">Sửa</i></div>
                        <div className="btn btn-danger xoa" onClick={(idUser)=>this.deleteButtonClick(this.props.idUser)}><i className="fa fa-delete">Xóa</i></div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;
