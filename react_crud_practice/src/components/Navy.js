import React, { Component } from 'react';

class Navy extends Component {
  render() {
    console.log('Navy render');
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            //data-id={data[i].id}
            onClick={function (id, test, e) {
              e.preventDefault();
              this.props.onChangePage(
                //e.target.dataset.id
                id
              );
            }.bind(this, data[i].id, 'test')}   //this 뒤에 들어오는 인자들은 해당 함수의 맨 앞 파라미터값으로 가게된다.
          >{data[i].title}
          </a>
        </li>)
      i += 1;
    }
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default Navy;