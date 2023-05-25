export default {
	title: 'Books',
	name: 'books',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string'
		},
		{
			title: 'Author',
			name: 'author',
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
			type: 'slug',
			options:
			{
				source: 'title',
			}
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image'
		},
		{
			title: 'Text',
			name: 'text',
			type: 'text',
		},
		{
			title: 'Category',
			name: 'category',
			type: 'reference',
			to: { type: 'category'}
		},
	]
}