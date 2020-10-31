import React, { Component } from 'react';
import './../App.css';
import Header from "./Header";
import Search from "./Search";
import TableData from "./TableData";
import AddUser from "./AddUser";
import dataUser from "./Data.json";

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentStatus:true,
      data:[],
      textSearch:"",
      editUserStatus:true,
      userEditObject:{}
    }
  };
  componentWillMount(){
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData',JSON.stringify(dataUser));
    }
    else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      });
    }
  };
  
  isEditForm = ()=>{
    this.setState({
      editUserStatus:!this.state.editUserStatus
    })
  }
  componentDidMount = () => {
    this.setState({
      currentStatus:!this.state.currentStatus
    })
  };
  checkKey = (dl)=>{
      this.setState({
        textSearch:dl
      })
  }
  editData = (user)=>{
    this.setState({
      userEditObject:user
    })
  }
  getNewUserData = (name,tel,permission)=>{
    var item = {};
    item.id= "";
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    var items = this.state.data;
    this.setState({
      data:items
    })
    items.push(item)
    localStorage.setItem("userData",JSON.stringify(items))

  };
  getUserEditInfoApp = (info)=>{
    this.state.data.forEach((value,key)=>{
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
    this.state.data.push(info);
        localStorage.setItem("userData",JSON.stringify(this.state.data))

    
  }
  deleteUser = (idUser)=>{
    var tempData = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data:tempData
    })
    localStorage.setItem("userData",JSON.stringify(tempData))
  }
  render() {
    var result = []
    this.state.data.forEach((items)=>{
      if(items.name.indexOf((this.state.textSearch) !== -1 )){
        return result.push(items)
      }
    })
    return (
      <div className="App">
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search getUserEditInfoApp={(info)=>this.getUserEditInfoApp(info)} changeStatusButton={this.componentDidMount} currentStatus={this.state.currentStatus} getData={(dl)=>this.checkKey(dl)} editUserStatus={this.state.editUserStatus} isEditForm = {()=>this.isEditForm()} userEditObject={this.state.userEditObject}/>
              <TableData deleteUser={(idUser)=>this.deleteUser(idUser)} editFun = {(user)=>this.editData(user)} dataTable={result}  isEditForm = {()=>this.isEditForm()}/>
              <AddUser  currentStatus={this.state.currentStatus} add={(name,tel,permission)=>this.getNewUserData(name,tel,permission)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default componentName;