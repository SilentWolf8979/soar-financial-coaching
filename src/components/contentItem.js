import React from 'react'
import { Link } from 'react-router-dom'
import { BLOCKS } from '@contentful/rich-text-types';
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
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      var assetTagStyles = '';

      for(var i = 0; i < node.data.target.metadata.tags.length; i++) {
        if (node.data.target.metadata.tags[i].sys.id === 'bookCover') {
          assetTagStyles += 'bookCover';
        }
      }

      return (
        <img className={`embeddedAsset ${assetTagStyles}`}
          src={`${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.description}
        />
      );
    },
  },
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