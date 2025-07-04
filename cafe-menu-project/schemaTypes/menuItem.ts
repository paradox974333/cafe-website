export default {
  name: 'menuItem',
  type: 'document',
  title: 'Menu Item',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Dish Name',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{ type: 'category' }],
    },
    {
      name: 'calories',
      type: 'number',
      title: 'Calories',
    },
    {
      name: 'popular',
      type: 'boolean',
      title: 'Popular',
    },
    {
      name: 'dietary',
      type: 'array',
      title: 'Dietary Tags',
      of: [{ type: 'string' }],
      options: {
        list: ['vegetarian', 'vegan', 'gluten-free'],
      },
    },
    {
      name: 'spicy',
      type: 'boolean',
      title: 'Spicy',
    },
  ],
}
