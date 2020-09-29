import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import collectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state), // takes by default the state, this is a way to negate the return value
});

const CollectionPageContainer = compose(connect(mapStateToProps), WithSpinner)(collectionPage);

export default CollectionPageContainer;
