import React, { Component } from 'react';
import './App.css';
import Subject from './components/Subject';
import Navy from './components/Navy';
import Control from './components/Control';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      selected_content_id: 2,
      Subject: { title: 'WEB', sub: 'World Wide Web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      Contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information...' },
        { id: 2, title: 'CSS', desc: 'CSS is for design...' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is interactice...' }
      ]
    }
    //max_content_id는 ui에 어떤 영향도 주지 않기 때문에 불필요한 렌더링을 줄이기 위해 state밖에서 선언.
    this.max_content_id = this.state.Contents.length;
  }
  getReadContent() {
    for (var i = 0; i < this.state.Contents.length; i++) {
      var data = this.state.Contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
        break;
      }
    }
  }
  getContent() {
    var _title, _desc, _article, _contents = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if (this.state.mode === 'read') {
      _contents = this.getReadContent();
      _article = <ReadContent title={_contents.title} desc={_contents.desc}></ReadContent>
    }
    else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function (_title, _desc) {
        this.max_content_id += 1;
        //state에 데이터를 추가할 때에는 concat을 써야한다.
        //push는 원본자체를 바꾸기 때문!(꼭 push쓰고싶으면 Array.from으로 기존값을 가진 배열을 새롭게 만든 후 쓰면된다.)
        //concat을 사용함으로써 shouldComponentUpdate함수를 사용할 수 있게 된다.
        //여기서 shouldComponentUpdate는 render 내부의 변화가 없을 때 불필요하게 render를
        //호출하지 않도록 막아주는 함수이다.
        //객체의 경우 Object.assign()으로 복제하여 사용하면 된다.

        var _contents = this.state.Contents.concat(
          { id: this.max_content_id, title: _title, desc: _desc }
        )
        this.setState({
          Contents: _contents,
          mode: 'read',
          selected_content_id: this.max_content_id
        })
      }.bind(this)}></CreateContent>
    }
    else if (this.state.mode === 'update') {
      _contents = this.getReadContent();
      _article = <UpdateContent
        data={_contents}
        onSubmit={function (_id, _title, _desc) {
          var _contents = Array.from(this.state.Contents);
          for (var i = 0; i < _contents.length; i++) {
            if (_contents[i].id === _id) {
              _contents[i] = { id: _id, title: _title, desc: _desc };
              break;
            }
          }
          this.setState({
            Contents: _contents,
            mode: 'read'
          })
        }.bind(this)}
      >
      </UpdateContent>
    }
    return _article;
  }
  render() {
    console.log('App render');
    return (
      <div className="App">
        <Subject
          title={this.state.Subject.title}
          sub={this.state.Subject.sub}
          onChangePage={function () {
            this.setState({
              mode: 'welcome'
            });
          }.bind(this)}
        >
        </Subject>
        <Navy
          onChangePage={function (id) {
            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            });
          }.bind(this)}
          data={this.state.Contents}
        ></Navy>
        <Control onChangeMode={function (_mode) {
          if (_mode === 'delete') {
            var _contents = Array.from(this.state.Contents);
            if(window.confirm('really delete?')){
              for(var i= 0; i < this.state.Contents.length; i++){
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i, 1);
                  break;
                }
              }
              this.setState({
                mode: 'welcome',
                Contents: _contents
              });
              alert('deleted');
            }
          } else {
            this.setState({
              mode: _mode
            });
          }
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;