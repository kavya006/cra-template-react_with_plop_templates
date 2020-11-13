module.exports = plop => {
    plop.setGenerator('component', {
        description: 'Create a reusable component for your application', 
        prompts : [
            {
                type: 'input', 
                name: 'name',
                message: 'Name your component?'
            }
        ],
        actions : [
            {
                type: 'add', 
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.js',
                templateFile: 'plop-templates/Component/Component.js.hbs'
            }, 
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.js',
                templateFile: 'plop-templates/Component/Component.test.js.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}_css.js',
                templateFile: 'plop-templates/Component/Component_css.js.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/index.js', 
                templateFile: 'plop-templates/Component/index.js.hbs',
            },
            {
                type: 'add',
                path: 'src/components/index.js', 
                templateFile: 'plop-templates/injectable-index.js.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/components/index.js',
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{pascalCase name}} from './{{pascalCase name}}';`
            },
            {
                type: 'append',
                path: 'src/components/index.js',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `\t{{pascalCase name}},`
            }
        ]
    });

    plop.setGenerator('page', {
        description: 'Create a page in the router setup',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Name the page in your setup?'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.js',
                templateFile: 'plop-templates/Page/Page.js.hbs'
            },
            {
                type: 'add',
                path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.test.js',
                templateFile: 'plop-templates/Page/Page.test.js.hbs'
            },
            {
                type: 'add',
                path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}_css.js',
                templateFile: 'plop-templates/Page/Page_css.js.hbs'
            },
            {
                type: 'add',
                path: 'src/pages/{{pascalCase name}}/index.js', 
                templateFile: 'plop-templates/Page/index.js.hbs',
            },
            {
                type: 'add',
                path: 'src/pages/index.js', 
                templateFile: 'plop-templates/injectable-index.js.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/pages/index.js',
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{pascalCase name}} from './{{pascalCase name}}';`
            },
            {
                type: 'append',
                path: 'src/pages/index.js',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `\t{{pascalCase name}},`
            }
        ]
    });

    plop.setGenerator('service', {
        description: 'Create a service ??',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Name the service you want to setup?'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'src/services/{{camelCase name}}.js',
                templateFile: 'plop-templates/service.js.hbs'
            },
            {
                type: 'add',
                path: 'src/services/index.js',
                templateFile: 'plop-templates/injectable-index.js.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/services/index.js',
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{camelCase name}} from './{{camelCase name}}';`
            },
            {
                type: 'append',
                path: 'src/services/index.js',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `\t{{camelCase name}},`
            }
        ]
    });

    plop.setGenerator('hook', {
        description: 'Create a custom hook ??',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Name the hook in your app?'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'src/hooks/{{camelCase name}}.js',
                templateFile: 'plop-templates/hook.js.hbs'
            },
            {
                type: 'add',
                path: 'src/hooks/index.js',
                templateFile: 'plop-templates/injectable-index.js.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/hooks/index.js',
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{camelCase name}} from './{{camelCase name}}';`
            },
            {
                type: 'append',
                path: 'src/hooks/index.js',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `\t{{camelCase name}},`
            }
        ]
    });

    plop.setGenerator('container', {
        description: 'Create a container which will manage state in the application', 
        prompts : [
            {
                type: 'input', 
                name: 'name',
                message: 'Name your container?'
            }
        ],
        actions : [
            {
                type: 'add', 
                path: 'src/containers/{{pascalCase name}}/{{pascalCase name}}.js',
                templateFile: 'plop-templates/Container/Container.js.hbs'
            }, 
            {
                type: 'add',
                path: 'src/containers/{{pascalCase name}}/{{pascalCase name}}.test.js',
                templateFile: 'plop-templates/Container/Container.test.js.hbs'
            },
            {
                type: 'add',
                path: 'src/containers/{{pascalCase name}}/{{pascalCase name}}_css.js',
                templateFile: 'plop-templates/Container/Container_css.js.hbs'
            },
            {
                type: 'add',
                path: 'src/containers/{{pascalCase name}}/index.js', 
                templateFile: 'plop-templates/Container/index.js.hbs',
            },
            {
                type: 'add',
                path: 'src/containers/index.js', 
                templateFile: 'plop-templates/injectable-index.js.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/containers/index.js',
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{pascalCase name}} from './{{pascalCase name}}';`
            },
            {
                type: 'append',
                path: 'src/containers/index.js',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `\t{{pascalCase name}},`
            }
        ]
    });
}