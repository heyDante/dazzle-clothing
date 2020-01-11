import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop-selector';
import CollectionItem from '../../components/collection-item/CollectionItem';


import './CollectionPage.scss';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  console.log(collection);
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => 
          <CollectionItem key={item.id} item={item}/>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state) // Don't forget to pass the original state
  };
};

export default connect(mapStateToProps)(CollectionPage);