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
                  buildHookId: '62921e0428204378f2919e87',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-shtbo2ke',
                  apiId: '55428919-1d07-4269-9f81-2feba4ccf767'
                },
                {
                  buildHookId: '62921e0527be7e76b2f7a1b8',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-e57uzaff',
                  apiId: '94f3bc83-dbad-4621-b4ab-945636fe455b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/codemandy/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-e57uzaff.netlify.app', category: 'apps'}
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
