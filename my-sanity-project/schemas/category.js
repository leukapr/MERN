export default {
  name: 'category',
  title: 'Catégorie',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description de la catégorie',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Titre H2', value: 'h2'},
            {title: 'Titre H3', value: 'h3'},
            {title: 'Titre H4', value: 'h4'},
            {title: 'Titre H5', value: 'h5'},
          ],
          lists: [{title: 'Bullet', value: 'bullet'}, {title: 'Numbered', value: 'number'}],
          marks: {
            decorators: [
              {title: 'Gras', value: 'strong'},
              {title: 'Italique', value: 'em'},
              {title: 'Souligné', value: 'underline'},
              {title: 'Barré', value: 'strike-through'},
              {title: 'Code', value: 'code'},
              {title: 'Surligné', value: 'highlight'},
            ],
            annotations: [
              {
                name: 'lien',
                title: 'Lien',
                type: 'object',
                fields: [
                  {
                    name: 'url',
                    title: 'URL',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
      ],
      description: 'Ajoutez une description détaillée pour cette catégorie. Utilisez les styles Titre H2, H3, H4 ou H5 pour ajouter des titres à votre description et les options de formatage pour personnaliser votre texte.',
    },
    {
      name: 'parent',
      title: 'Catégorie Parente',
      type: 'reference',
      to: [{type: 'category'}],
    },
  ],
}
