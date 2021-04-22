import React from 'react'
import { Link } from 'react-router-dom'
//import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const options = {
  renderText: text => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
  /*renderMark: {
    [MARKS.BOLD]: text => <b>{text}</b>,
    [MARKS.ITALIC]: text => <i>{text}</i>,
    [MARKS.UNDERLINE]: text => <u>{text}</u>,
  },*/
  /*renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  },*/
};

function ContentItem({data}) {
  const updatedAtDate = new Date(data.sys.updatedAt);
  return (
    <div className='contentPost'>
      <div className='justify-content-center'>
        <div className='title align-items-center d-flex'>
          <div className='wrapper'>
            <span><Link className='contentLink' to={{pathname: `/content${data.fields.url}`, state: { data }}}>{data.fields.title}</Link></span>
          </div>
        </div>
      </div>
      <div className='subTitle text-left'>
        <span>{updatedAtDate.toLocaleString('default', { month: 'long' }) + ' ' + updatedAtDate.getDate() + ', ' + updatedAtDate.getFullYear()}</span>
      </div>
      <div className='content'>
        { documentToReactComponents(data.fields.entry, options) }
      </div>
    </div>
  );
}

export default ContentItem

// Embed a PDF in to the content post
// <iframe src={ data.fields.assets[1].fields.file.url} alt={ data.fields.assets[1].fields.title}/>