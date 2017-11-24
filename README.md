# Module Version

Allow you to add :

- a version.json builder
- an express controller to return the version.json

## Install

To install it in your project, think to fix the version using this kind of command :

```
yarn add Ogury/module-version#v1.X.X
```

## Requirements

Update your .travis.yml by adding in "" :

```yaml
script:
  - npm build-version
  # or
  - yarn build-version
```

## Usage

How to use the Metric Handler. You can enable it for the endpoint you want

```javascript
import {versionControler} from 'module-version';

const app = express();

app.use('/version', versionControler);
app.use('/', controllers);

app.listen(3000);
```

# Work on it

## Quickstart

```
yarn install
yarn build
```

## Tests

```
yarn test
```