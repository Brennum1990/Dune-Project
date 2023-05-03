export default {
	title: 'On Screen',
	name: 'onscreen',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string'
		},
		{
			title: 'Release date',
			name: 'releaseDate',
			type: 'date',
			options: {
			  dateFormat: 'DD-MM-YYYY',
			}
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug'
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image'
		},
		{
			title: 'Text field',
			name: 'TextField',
			type: 'array',
			of: [{type: 'block'}]
		},
		{
			title: 'Category',
			name: 'category',
			type: 'reference',
			to: { type: 'category'}
		},
	]
}