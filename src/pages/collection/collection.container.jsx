import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect"; 
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from "./collection.component";
import {compose} from 'redux';

const mapStatesToProps = createStructuredSelector({
  isLoading:(state) => !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStatesToProps),
  WithSpinner
)
(CollectionPage);

export default CollectionPageContainer;
