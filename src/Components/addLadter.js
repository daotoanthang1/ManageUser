  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentStatus: true,
  //     data: dataUser,
  //     searchText:""
      
  //   }
  // }
  // componentDidMount = () => {
  //   this.setState({
  //     currentStatus: !this.state.currentStatus
  //   })
  // };

  // getNewUserData = (name,tel,permission)=>{
  //   var item = {};
  //   item.id = ""
  //   item.name = name;
  //   item.tel = tel;
  //   item.permission = permission;
  //   var items = this.state.data
  //   items.push(item);  
  //   this.setState({
  //     data:items
  //   })
  //   console.log(this.state.data);
  // }
  // log=(dl)=>{
  //   this.setState({
  //     searchText:dl
  //   });
  // }

  --------------------------------
  //   var result = [];
  //       this.state.data.forEach((items)=>{
  //           if(items.name.indexOf(this.state.searchText) !==-1){
  //               result.push(items)
  //           }
  //       })
  //addLater:click={() => this.componentDidMount} currentStatus={this.state.currentStatus} searchKey={(dl)=>this.log(dl)}
  //         dataUserProps={result}
  //         add={(name,tel,permission)=>{this.getNewUserData(name,tel,permission)}} hienTrangThai={this.state.currentStatus}