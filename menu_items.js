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
				"name": "wave function collapse",
				"path": "https://github.com/patelsajan/wave_function_collapse_js_canvas"
			},
			{
				'name': 'wordle_clone',
				'path': 'https://github.com/patelsajan/wordle_clone' 
			},
			{
				"name": "2048",
				"path": "https://github.com/patelsajan/2048"
			},
			{
				"name": "test_file",
				"path": "https://patelsajan.github.io/test.html"
			}
		]
	},
	2: {
		'name': 'About',
		'path': './test.html'
	}
}
