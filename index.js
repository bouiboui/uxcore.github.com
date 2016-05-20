window.UXCORE = {
	'uxcore-calendar': require('uxcore-calendar'),
	'uxcore-button': require('uxcore-button'),
	'uxcore-dialog': require('uxcore-dialog'),
	'uxcore-select2': require('uxcore-select2'),
	'uxcore-pagination': require('uxcore-pagination'),
	'uxcore-tooltip': require('uxcore-tooltip'),
	'uxcore-tabs': require('uxcore-tabs'),
	'uxcore-form': require('uxcore-form'),
	'uxcore-grid': require('uxcore-grid'),
	'uxcore-table': require('uxcore-table'),
	'uxcore-dropdown': require('uxcore-dropdown'),
	'uxcore-mention': require('uxcore-mention'),
	'uxcore-tree': require('uxcore-tree'),
	'uxcore-transfer': require('uxcore-transfer'),
	'uxcore-popover': require('uxcore-popover'),
	'uxcore-collapse': require('uxcore-collapse'),
	'uxcore-progress': require('uxcore-progress'),
	'uxcore-steps': require('uxcore-steps'),
	'uxcore-uploader': require('uxcore-uploader'),
	'uxcore-menu': require('uxcore-menu'),
	'uxcore-layout': require('uxcore-layout'),
	'uxcore-crumb': require('uxcore-crumb'),
	'uxcore-totop': require('uxcore-totop'),
	'uxcore-checkbox-group': require('uxcore-checkbox-group'),
	'uxcore-radiogroup': require('uxcore-radiogroup'),
	'uxcore-alert': require('uxcore-alert'),
	'uxcore-message': require('uxcore-message'),
	'uxcore-validator': require('uxcore-validator'),
	'uxcore-pickable': require('uxcore-pickable'),
	'uxcore-rate': require('uxcore-rate'),
	'uxcore-switch': require('uxcore-switch'),
	'uxcore-badge': require('uxcore-badge'),
	'classnames': require('classnames'),
	'object-assign': require('object-assign')
};

/*
 * init code highlighter
 */
$(function(){
	require('./theme/js/navigation');
	require('./theme/js/setting');
	// require('./theme/js/home.canvas');
	require('./theme/js/canvas');
	require('./theme/js/doc');
});