import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect"; 
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from "./collection-overview.component";
import {compose} from 'redux';

const mapStatesToProps = createStructuredSelector({
  isLoading:selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStatesToProps),
  WithSpinner
)
(CollectionsOverview);

export default CollectionOverviewContainer;
