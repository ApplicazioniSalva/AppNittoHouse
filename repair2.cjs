const fs = require('fs');
let code = fs.readFileSync('App.tsx', 'utf8');

// Fix the wificopied casing
code = code.replace(/wificopied/g, 'wifiCopied');
code = code.replace(/checkliststate/g, 'checklistState');
code = code.replace(/colorclass/g, 'colorClass');
code = code.replace(/iconcolor/g, 'iconColor');
code = code.replace(/isexpanded/g, 'isExpanded');
code = code.replace(/addresscopied/g, 'addressCopied');
code = code.replace(/isairport/g, 'isAirport');

// Fix the `=""` added randomly inside tags or template strings
// We'll replace `=""` with empty string globally, but we should be careful not to break valid things.
// In React, empty attributes like `allowFullScreen` usually don't have `=""`.
code = code.replace(/=""/g, '');

// Now fix ` className="{`something"} ` which became `className="{`something" ` due to quotes mismatch?
// Actually removing `=""` will make `className="{`flex" items-center gap-4 p-4 rounded-2xl border ${colorClass}`} ">` 
// We want to turn `className="{` ... `}"` into `className={` ... `}`
code = code.replace(/className="\{`/g, 'className={`');
code = code.replace(/`\}"/g, '`}');
code = code.replace(/`\}"/g, '`}');

// A big issue is that previously there were double quotes injected in the middle of template strings:
// className={`flex" items-center gap-4 p-4 rounded-2xl border ${colorClass}`}
// We need to remove the stray double quote right after the first word in the template string
// e.g. `flex" -> `flex
code = code.replace(/className=\{`([^"`]+)" /g, 'className={`$1 ');
code = code.replace(/className=\{`w-5" h-5/g, 'className={`w-5 h-5');
code = code.replace(/className=\{`p-2\.5" rounded-xl/g, 'className={`p-2.5 rounded-xl');

// phone fix:
code = code.replace(/href="\{`tel:\$\{part\.replace\(\/\\s\+\/g, ''\)\}`\}"/g, 'href={`tel:${part.replace(/\\s+/g, \'\')}`}');
code = code.replace(/href=\{`tel:\$\{part\.replace\(\/\\s\+\/g, ''\)\}`\}/g, 'href={`tel:${part.replace(/\\s+/g, \'\')}`}');

// href="{url}" -> href={url}
code = code.replace(/href="\{([^}]+)\}"/g, 'href={$1}');
code = code.replace(/src="\{([^}]+)\}"/g, 'src={$1}');

// fix toggleChecklistItem
code = code.replace(/ onClick=\{([^}]+)\} \}/g, ' onClick={$1}');

fs.writeFileSync('App.tsx', code);
console.log('Fixed');
