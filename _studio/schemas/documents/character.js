export default {
	title: 'Characters',
	name: 'characters',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string'
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
			title: 'Text field',
			name: 'TextField',
			type: 'array',
			of: [{type: 'block'}]
		},
		{
			title: 'Text',
			name: 'text',
			type: 'text',
		},
		{
			title: 'Category',
			name: 'category',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'category'}]
				}
			]
		},
	]
}