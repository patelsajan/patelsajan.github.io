/*object structure for menu_items
 *
 *<index>: {
 *		'name': '<name>',
 *		'path': '<path relative to root folder>', //this path will not be used if item has children.
 *		'children':[
 *			{
 *				'name': '<name>',
 *				'path: '<path relative to root folder>'
 *			},
 *			{
 *				'name': '<name>',
 *				'path': '<path relative to root folder>'
 *			}
 *		]
 *	}
 */

var menu_items = {
	1: {
		'name': 'Projects',
		'children':[
			{
			'name': 'test_name',
			'path':  './test.html'
			}
		]
	},
	2: {
		'name': 'About',
		'path': './test.html'
	}
}
