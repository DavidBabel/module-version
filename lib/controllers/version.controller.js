/* @flow */
import {Router} from 'express';
import path from 'path';
import appRoot from 'app-root-path';

const router = Router();
export {router as default};

router.get('/', async (req, res) => {
  const versionInfos = require(path.join(appRoot, 'version.json'));
  res.json(versionInfos);
});
