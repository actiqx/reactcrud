import React, {Component} from 'react';

import './App.css';
import {connect} from 'react-redux';
import * as actions from './store/actions/post_actions';

export class App extends Component {
  state = {
    isEditable: false,
    post: { userId:'',
    body:'',
    title:''},
   
  };
  onClickHandler = ($event, post) => {
    console.log ($event.target.value);
    switch ($event.target.value) {
      case 'edit':
        this.setState ({isEditable: true, post: post});
        break;
      case 'cancel':
        this.setState ({isEditable: false, post: post.id});
        break;
        case 'save':
          this.props.editPostList(post);
          this.setState ({isEditable: false, post: post.id});
          break;
          case 'delete':
              this.props.delPostList(post);
              this.setState ({isEditable: false, post: post.id});
            break
      default:
        break;
    }
  };
  generateBody = () => {
    const data = this.props.posts;
    return data.map (post => {
      return (
        <tr key={post.id}>
          <td>{post.title}</td>
          <td>{post.body}</td>
          <td>{post.userId}</td>
          <td>
            {!this.state.isEditable || !(this.state.post === post.id)
              ? <div className="row">
                  <input
                    type="button"
                    value="edit"
                    onClick={event => this.onClickHandler (event, post)}
                    className="btn btn-link "
                  />
                  <input
                    type="button"
                    value="delete"
                    className="btn btn-link "
                    onClick={event => this.onClickHandler (event, post)}
                  />
                </div>
              : null}
          </td>
        </tr>
      );
    });
  };
  onTextChangeHandler = e => {
    this.setState ({post: {...this.state.post,[e.target.name]: e.target.value}});
  };
  componentDidMount () {
    this.props.getPostList ();
  }
  render () {
    return (
      <div className="container">
        {this.state.isEditable
          ? <div>
              <div className="row">
               
                <div className="col-md-4">
                  {' '}
                  <input
                    type="text"
                    name="body"
                    value={this.state.post.body}
                    onChange={this.onTextChangeHandler}
                    className="form-control"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    name="title"
                    value={this.state.post.title}
                    onChange={this.onTextChangeHandler}
                    className="form-control"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    name="userId"
                    value={this.state.post.userId}
                    onChange={this.onTextChangeHandler}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <input
                  type="button"
                  value="save"
                  className="btn btn-link "
                  onClick={event =>
                    this.onClickHandler (event, this.state.post)}
                />
                <input
                  type="button"
                  value="cancel"
                  className="btn btn-link "
                  onClick={event =>
                    this.onClickHandler (event, this.state.post)}
                />
              </div>
            </div>
          : ''}
        <table className="table table-responsive bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Title</th>
              <th>UserId</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.generateBody ()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {posts: state.posts.postList};
};

const mapDispatchToProps = dispatch => {
  return {
    getPostList: () => dispatch (actions.getPostList ()),
    editPostList: (post) => dispatch (actions.editPostList (post)),
    delPostList: (post) => dispatch (actions.delPostList (post)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (App);
