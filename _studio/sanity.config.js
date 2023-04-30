import { deskTool } from 'sanity/desk';
import schemas from './schemas/schemas.js';

/**
 *  her har vi bare brukt sanitys «movie schema»
 **/

export default {
  title: 'Dune-Project',

  projectId: 'xihmigwe',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemas,
  },
};
