import resolveResponse from 'contentful-resolve-response';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import ContentItem from '../components/contentItem.js';
import Error404 from '../error404.js';

let skip = 0;
let limit = 3;
let currentPage = 0;
let totalPosts = 0;
let contentRoot = false;
let isError = false;

// Test Account
//let space = '65qhu3hd5kiq';
//let accessToken = '5o2CEEXjOouoqj1Uu1ISJSgrzc4lpontP5CWF7QAPD0';

// Production Account
let space = 'ylqs5n9lhjzz';
let accessToken = 'VLphswuSvcU-r0lfaeZ9doH_AJqz6NarJEtsR8vuUoU';



function Content() {
  let postId = useParams();

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let query = {};

    if (postId.postId === undefined || (!isNaN(postId.postId) && !isNaN(parseInt(postId.postId)))) {
      if (postId.postId !== undefined) {
        currentPage = parseInt(postId.postId);
        skip = limit * currentPage;
      }

      contentRoot = true;

      query = `entries?access_token=${accessToken}&include=10&skip=${skip}&limit=${limit}`;
    }
    else {
      query = `entries?access_token=${accessToken}&include=10&content_type=blogPost&fields.url=/${postId.postId}`;
    }

    window
      .fetch(`https://cdn.contentful.com/spaces/${space}/${query}`, {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((data) => {
        totalPosts = data.total;

        setPosts(resolveResponse(data));
      })
      .catch((e) => {
        isError = true;
      });
    },
  [postId.postId]);



  if (!posts) {
    return "Loading...";
  }

  if (isError || totalPosts === 0) {
    return <Error404 />
  }



  return (
    <div className="App">
      <Helmet>
        <title>Soar Financial Coaching - Content</title>
      </Helmet>
      <div className={ `pageContent ${ !contentRoot ? "noTop" : null }`}>
        { contentRoot ? <><h2>Content</h2><br/></> : null }
        
        { posts.map(({fields}, i) =>
          <ContentItem key={i} data={posts[i]} />
        )}

        { skip > 0 ? <><a href={currentPage - 1 > 0 ? `/content/${currentPage - 1}` : '/content' } className='btnContent float-end'>Newer Posts &gt;&gt;</a></> : null }
        { skip + limit < totalPosts ? <><a href={`/content/${currentPage + 1}`} className='btnContent float-start'>&lt;&lt; Older Posts</a></> : null }
      </div>
    </div>
  );
}

export default Content;
