# `graphql-code-generator` issue with "use client" directives

This repository demonstrates a minimal reproduction when using `@graphql-codegen/client-preset-swc-plugin` together with Next.js client components with a `"use client";` directive at the top of the file.

If you try to build this repository, the Next.js compilation will fail with the following message:

```shell
$ npm run dev

> graphql-codegen-issue-template@1.0.0 dev
> next dev

- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- warn You have enabled experimental feature (swcPlugins) in next.config.js.
- warn Experimental features are not covered by semver, and may cause unexpected or broken application behavior. Use at your own risk.

- event compiled client and server successfully in 638 ms (311 modules)
- wait compiling...
- wait compiling /_error (client and server)...
- event compiled client and server successfully in 227 ms (312 modules)
- warn Fast Refresh had to perform a full reload due to a runtime error.
- warn Fast Refresh had to perform a full reload due to a runtime error.
- wait compiling /page (client and server)...
- warn Fast Refresh had to perform a full reload due to a runtime error.
- error ./app/QueryComponent.tsx
ReactServerComponentsError:

The "use client" directive must be placed before other expressions. Move it to the top of the file to resolve this issue.

   ,-[/graphql-code-generator-swc-app-dir/app/QueryComponent.tsx:1:1]
 1 | 'use client';
   : ^^^^^^^^^^^^^
 2 |
 3 | import { useQuery } from '@apollo/client';
 4 | import { graphql } from '../gql';
   `----

Import path:
  ./app/QueryComponent.tsx
  ./app/page.tsx
```

This is because the SWC plugin inserts imports at the top of [`app/QueryComponent.tsx`](./app/QueryComponent.tsx), before the "use client" directive.

A workaround is to move queries to separate files, that don't require `"use client"`, and import them into your client components.

Note: As of May 20, 2023, the latest version of Next.js is 13.4.3. However, this version panics when building with the SWC plugin. I've therefore intentionally locked version 13.4.2 to reproduce the issue.
