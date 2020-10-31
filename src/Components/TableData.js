import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

export default class componentName extends Component {
  deleteButtonClick = (idUser)=>{
    this.props.deleteUser(idUser)
  }
  mappingDataUser = ()=>(
    this.props.dataTable.map((value,key)=>{
      return <TableDataRow deleteButtonClick = {(idUser)=>this.deleteButtonClick(idUser)} editFunClick = {(user)=>this.props.editFun(value)} isEditForm = {()=>this.props.isEditForm()} idUser = {value.id} nameUser = {value.name} telUser={value.tel} permissionUser = {value.permission} key={key}/>
    })
  )
  render() {
    return (
        <div className="col">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Điện thoại</th>
              <th>Quyền</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {this.mappingDataUser()}
          </tbody>
        </table>
      </div>      
    );
  }
}
