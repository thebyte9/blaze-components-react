const path = require('path');
const fs = require('fs-extra')

const root_folder = path.resolve(__dirname);
const components_src = `${root_folder}/src/`;

const component_flag = 'component=';
const component_name = _getComponentName(process.argv[2]) || false;
const component_path = `${components_src}${component_name}`;

// Boilerplate files
const test_file = `${component_path}/__tests__/${component_name}.test.js`;
const stories_file = `${component_path}/stories/${component_name}.stories.js`;
const component_file = `${component_path}/${component_name}.js`;
const export_file = `${component_path}/index.js`;

if (component_name) {
    return _createFiles()
        .then(() => _writeFiles())
        .then(() => console.log('\x1b[33m%s\x1b[0m', `Boilerplate success for ${component_name} component!`))
        .catch(() => console.log(`Something went wrong!`));
}

return console.log('\x1b[31m%s\x1b[0m', 'You need to specify a component for boilerplate');

// Helpers
async function _createFiles() {
    await _createFile(test_file)
            .then(() => _createFile(stories_file))
            .then(() => _createFile(component_file))
            .then(() => _createFile(export_file))
}

function _createFile(path) {
    return fs.ensureFile(path);
}

function _writeFiles() {
    fs.writeFile(export_file, `import ${component_name} from './${component_name}';\n\nexport default ${component_name};`);
}

function _getComponentName(arg) {
    const isValidArg = _isValidArg(arg);

    if (!isValidArg) return false;

    return arg.split(component_flag)[1];
}

function _isValidArg(arg) {
    if (!arg) return false;
    
    return arg.includes(component_flag);
}






