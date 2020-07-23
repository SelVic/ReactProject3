import React from 'react';

const ProgressBar = props => props.isLoading ? <span className="progress"><i className="fas fa-compact-disc fa-spin"/></span> : null;

export {ProgressBar}