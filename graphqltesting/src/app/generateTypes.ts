const { generateNamespace, generateSchema } = require('graphql-zeus');
const fs = require('fs');

const schema = fs.readFileSync('schema.graphql', 'utf-8');

const generatedTypes = generateSchema(schema);
const generatedNamespace = generateNamespace(generatedTypes);

fs.writeFileSync('types.ts', generatedNamespace);
