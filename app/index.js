'use strict';
const Generator = require('yeoman-generator');
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log('Initializing...');
  }
  start() {
    this.prompt([
        {
          type    : 'input',
          name    : 'name',
          message : 'Project Name: '
        },
        {
            type    : 'input',
            name    : 'description',
            message : 'Description: '
          }
      ]).then( (answers) => {
        this.fs.copyTpl(
            this.templatePath('angular'),
            this.destinationPath(answers.name),
            {
                projectName: answers.name,
                description: answers.description
            },
            null,
            {
              globOptions: {dot: true}
            }
          );
      });
  }
};