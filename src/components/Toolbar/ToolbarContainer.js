import { connect } from 'react-redux';
import { getIsUndoable, getIsRedoable } from 'modules/posts';
import { ActionCreators } from 'redux-undo';
import { ToolbarView } from './ToolbarView';

const mapStateToProps = (state) => ({
  isUndoable: getIsUndoable(state),
  isRedoable: getIsRedoable(state),
});

const mapDispatchToProps = (dispatch) => ({
  undo: () => dispatch(ActionCreators.undo()),
  redo: () => dispatch(ActionCreators.redo()),
});

export const ToolbarContainer = connect(mapStateToProps, mapDispatchToProps)(ToolbarView);
