import * as contentful from 'contentful';
import React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import ContentItem from '../components/contentItem.js';
import Error404 from '../error404.js';

class Content extends React.Component {

  skip = 0;
  limit = 3;
  currentPage = 0;
  totalPosts = 0;

  state = {
    posts: []
  }
  
  // Test Account
  //client = contentful.createClient({
  //  space: '65qhu3hd5kiq',
  //  accessToken: '5o2CEEXjOouoqj1Uu1ISJSgrzc4lpontP5CWF7QAPD0'
  //})

  // Production Account
  client = contentful.createClient({
    space: 'ylqs5n9lhjzz',
    accessToken: 'VLphswuSvcU-r0lfaeZ9doH_AJqz6NarJEtsR8vuUoU'
  })

  currentPost = this.props;
  contentRoot = false;
  
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
    var regex = new RegExp('(\\/content)((?!\\/+\\w)|(\\/\\d$))');

    var result = regex.exec(this.currentPost.location.pathname)

    //if (this.currentPost.location.pathname.endsWith('/content')) {
    if (result) {
      if (result[2].substring(1)) {
        this.currentPage = parseInt(result[2].substring(1));
        this.skip = this.limit * this.currentPage;
      }

      this.contentRoot = true;
      return this.client.getEntries(
      {
        'skip': this.skip,
        'limit': this.limit
      });
    }
    else {
      return this.client.getEntries(
      {
        content_type: 'blogPost',
        'fields.url': this.currentPost.location.pathname.replace('/content', '')
      });
    }
  }

  setPosts = response => {
    if (response.total > 0) {
      this.totalPosts = response.total;
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
        <Helmet>
          <title>Soar Financial Coaching - Content</title>
        </Helmet>
        <div className={ `pageContent ${ !this.contentRoot ? "noTop" : null }`}>
          { this.contentRoot ? <><h2>Content</h2><br/></> : null }
          
          { this.state.posts.map(({fields}, i) =>
            <ContentItem key={i} data={this.state.posts[i]} />
          )}

          { this.skip > 0 ? <><a href={this.currentPage - 1 > 0 ? `/content/${this.currentPage - 1}` : '/content' } className='btnContent float-right'>Newer Posts &gt;&gt;</a></> : null }
          { this.skip + this.limit < this.totalPosts ? <><a href={`/content/${this.currentPage + 1}`} className='btnContent float-left'>&lt;&lt; Older Posts</a></> : null }
        </div>
      </div>
    );
  }
}

export default withRouter(Content);
