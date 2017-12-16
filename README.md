```shell
$ npm run build

> babel-prop-plugin-bug@1.0.0 build /home/michael/workspace_my/babel-prop-plugin-bug
> babel index.jsx

Error: No substitution given for "NODE_ENV"
    at /home/michael/workspace_my/babel-prop-plugin-bug/node_modules/@babel/template/lib/populate.js:16:15
    at Array.forEach (<anonymous>)
    at populatePlaceholders (/home/michael/workspace_my/babel-prop-plugin-bug/node_modules/@babel/template/lib/populate.js:14:27)
    at /home/michael/workspace_my/babel-prop-plugin-bug/node_modules/@babel/template/lib/string.js:20:51
    at /home/michael/workspace_my/babel-prop-plugin-bug/node_modules/@babel/template/lib/builder.js:83:14
    at remove (/home/michael/workspace_my/babel-prop-plugin-bug/node_modules/babel-plugin-transform-react-remove-prop-types/lib/remove.js:92:28)
    at AssignmentExpression (/home/michael/workspace_my/babel-prop-plugin-bug/node_modules/babel-plugin-transform-react-remove-prop-types/lib/index.js:184:35)
    at NodePath._call (/home/michael/workspace_my/babel-prop-plugin-bug/node_modules/@babel/traverse/lib/path/context.js:64:19)
    at NodePath.call (/home/michael/workspace_my/babel-prop-plugin-bug/node_modules/@babel/traverse/lib/path/context.js:38:17)
    at NodePath.visit (/home/michael/workspace_my/babel-prop-plugin-bug/node_modules/@babel/traverse/lib/path/context.js:99:12)
    =============
    at PluginPass.Program (/home/michael/workspace_my/babel-prop-plugin-bug/node_modules/babel-plugin-transform-react-remove-prop-types/lib/index.js:78:25)
    at newFn (/home/michael/workspace_my/babel-prop-plugin-bug/node_modules/@babel/traverse/lib/visitors.js:223:21)
    at NodePath._call (/home/michael/workspace_my/babel-prop-plugin-bug/node_modules/@babel/traverse/lib/path/context.js:64:19)
    at NodePath.call (/home/michael/workspace_my/babel-prop-plugin-bug/node_modules/@babel/traverse/lib/path/context.js:38:17)
    at NodePath.visit (/home/michael/workspace_my/babel-prop-plugin-bug/node_modules/@babel/traverse/lib/path/context.js:99:12)
    at TraversalContext.visitQueue (/home/michael/workspace_my/babel-prop-plugin-bug/node_modules/@babel/traverse/lib/context.js:139:18)
    at TraversalContext.visitSingle (/home/michael/workspace_my/babel-prop-plugin-bug/node_modules/@babel/traverse/lib/context.js:98:19)
    at TraversalContext.visit (/home/michael/workspace_my/babel-prop-plugin-bug/node_modules/@babel/traverse/lib/context.js:180:19)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! babel-prop-plugin-bug@1.0.0 build: `babel index.jsx`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the babel-prop-plugin-bug@1.0.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/michael/.npm/_logs/2017-12-16T12_28_09_898Z-debug.log
```
