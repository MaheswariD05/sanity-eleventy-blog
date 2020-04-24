export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea2769e7961c5bd5c14103d',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-djx2tvwi',
                  apiId: '484c62a6-3904-409a-b62b-2298e87d4cf3'
                },
                {
                  buildHookId: '5ea2769e504e45b9e7d191ad',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-roo6tqcw',
                  apiId: 'ae81f785-cf1c-4337-8b27-8e554705d671'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MaheswariD05/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-roo6tqcw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
