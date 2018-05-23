## React+Redux boilerplate

Implements DDD.

- TypeScript
- webpack
- BrowserSync

### Usage

```
$ yarn
$ cp .env.example .env
$ yarn start
```

### Directory

```
/assets -> Assets files(images, styles, fonts, etc.)
/public -> Public index.html
/src
  |
  | - actionTypes.ts -> Defines reducer action type constants.
  | - data.ts/ -> Defines props interface.
  | - index.tsx -> Root app file.
  | - actions/ -> Reducer actions.
  | - configs/ > App configurations.
  | - domain/ -> DDD Domain layer.
  | - infra/ -> DDD Infrastructure layer.
  | - reducers/ -> Reducers.
  | - route -> App routing.
  | - stores/ -> Reducer stores.
  | - view/
        |
	| - atoms/ -> Atomic design A layer.
	| - molecules/ -> Atomic design M layer.
	| - organisms/ -> Atomic design O layer.
	| - pages/ -> Containers.
```
