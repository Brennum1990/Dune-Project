export default Structure => {
	const {divider, editor, list, listItem, documentTypeList, documentTypeListItem} = Structure;

	return list()
		.title('Dune content')
			.showIcons(false)
			.items([
				documentTypeListItem('books'),
				documentTypeListItem('characters'),
				documentTypeListItem('organization'),
				documentTypeListItem('houses'),
				documentTypeListItem('onscreen'),
				documentTypeListItem('planets'),

				divider(),

				documentTypeListItem('category'),
				documentTypeListItem('settings'),
			])
}