import * as contentful from 'contentful';
import React from 'react';
import { withRouter } from 'react-router-dom'
import ContentItem from '../components/contentItem.js';
import Error404 from '../error404.js'

class Content extends React.Component {

//function Content() {
  state = {
    posts: []
  }
  
  client = contentful.createClient({
    space: '65qhu3hd5kiq',
    accessToken: '5o2CEEXjOouoqj1Uu1ISJSgrzc4lpontP5CWF7QAPD0'
  })

  currentPost = this.props;
  
  componentDidMount() {
    if (!this.currentPost.data) {
      this.fetchPosts().then(this.setPosts);
    }
    else {
      this.setState({
        posts: [JSON.parse(this.currentPost.data)],
        hasContent: true,
      });
    }
  }
  
  fetchPosts = () => {
    if (this.currentPost.location.pathname.endsWith('/content')) {
      return this.client.getEntries();
    }
    else {
      return this.client.getEntries(
      {
        content_type: 'blogPost',
        'fields.path':this.currentPost.location.pathname.replace('/content', '')
      });
    }
  }

  setPosts = response => {
    if (response.total > 0) {
      this.setState({
        posts: response.items,
        hasContent: true,
      });
    }
    else {
      this.setState({
        hasContent: true,
        isError: true,
      });
    }
  }

  render() {
    if (!this.state.hasContent) return null;
    if (this.state.isError) return <Error404/>;

    return (
      <div className="App">
        <div className='pageContent'>
          <h2>Content</h2>
          <br/>
          { this.state.posts.map(({fields}, i) =>
            <ContentItem key={i} data={this.state.posts[i]} />
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Content);
