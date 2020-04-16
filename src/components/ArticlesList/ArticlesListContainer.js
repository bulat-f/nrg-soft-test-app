import { connect } from 'react-redux';
import { getArticles } from 'modules/articles';

import { ArticlesListView } from './ArticlesListView';

const mapStateToProps = (state) => ({ articles: getArticles(state) });
const mapDispatchToProps = null;

export const ArticlesListContainer = connect(mapStateToProps, mapDispatchToProps)(ArticlesListView);
