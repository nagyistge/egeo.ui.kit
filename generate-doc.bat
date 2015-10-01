rm -R dist/styleguide
.\node_modules\.bin\kss-node --source src --source node_modules/egeo.ui.base/dist --destination dist/styleguide --template vendors/kss-template --homepage readme.md --css ../styleguide.css
pause
 