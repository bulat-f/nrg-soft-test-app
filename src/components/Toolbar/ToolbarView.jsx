import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

export const ToolbarView = ({ isUndoable, isRedoable, undo, redo }) => (
  <Button.Group>
    <Button icon="undo" content="Undo" disabled={!isUndoable} onClick={undo} />
    <Button icon="redo" content="Redo" disabled={!isRedoable} onClick={redo} />
  </Button.Group>
);

ToolbarView.propTypes = {
  isUndoable: PropTypes.bool.isRequired,
  isRedoable: PropTypes.bool.isRequired,
  undo: PropTypes.func.isRequired,
  redo: PropTypes.func.isRequired,
};
