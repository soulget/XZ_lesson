import React, { Component } from 'react';
let generateID = 0;
class DynamicField extends Component {
  state = { 
    data: [
      {name:'name1',age:18, id:0}
    ]
   }
   handleValueChange = (key, value, id) => {
    //  不可变数据
    let data = this.state.data.slice(0);
    let index = data.findIndex((item) =>item.id === id);
    data[index][key] = value;
    this.setState({
      data
    })
   }
   handleDelete = (id) => {
    let data = this.state.data.slice(0);
    let index = data.findIndex((item) =>item.id === id);
    data.splice(index, 1);
    this.setState({
      data
    })
   }
   handleAdd = () => {
    let data = this.state.data.slice(0);
    generateID++
    data.push({
      name: '',
      age: 0,
      id: generateID
    })
    // push 返回一个数组的长度
    this.setState({
      data
    })
   }
  render() { 
    const { data } = this.state
    return ( 
        <>
        { data.map((filedDate, i) => {
            return (
              <Filed key={filedDate.id} filedDate={filedDate} onFieldValueChange={this.handleValueChange} onFieldDelete = {this.handleDelete} />
            )
        }) }
        <br/>
        <button onClick={this.handleAdd}>添加</button>
        <br/>
        <button>提交</button>
        </>
     );
  }
}

class Filed extends Component {
  state = {  }
  handleFiledChangeName = (e) => {
    // console.log(e)
    const name = e.target.value;
    const id = parseInt(e.target.dataset.id) ;
    const { onFieldValueChange } = this.props;
    onFieldValueChange('name',name,id);
  }
  handleFiledChangeAge = (e) => {
    const age = e.target.value;
    const id = parseInt(e.target.dataset.id) ;
    const { onFieldValueChange } = this.props;
    onFieldValueChange('age',age,id);
  }
  handleDelete= (e) => {
    const id = parseInt(e.target.dataset.id);
    const { onFieldDelete } = this.props;
    onFieldDelete(id);
  }
  render() { 
    const { filedDate } = this.props;
    const { name, age } = filedDate;
    return ( 
      <div>
        姓名:<input type="text" value={name} data-id={filedDate.id} onChange={this.handleFiledChangeName} />
        年龄:<input type="number" value={age} data-id={filedDate.id} onChange={this.handleFiledChangeAge} />
        <button data-id={filedDate.id} onClick={this.handleDelete}>删除</button>
      </div>
     );
  }
}

 
export default DynamicField;