const fs = require('fs');
let code = fs.readFileSync('App.tsx', 'utf8');

code = code.replace(/href="\{`/g, 'href={`');
code = code.replace(/className="\{`/g, 'className={`');
code = code.replace(/href="\{([^}]+)\}"/g, 'href={$1}');
code = code.replace(/src="\{([^}]+)\}"/g, 'src={$1}');

fs.writeFileSync('App.tsx', code);
console.log('Fixed quotes');
