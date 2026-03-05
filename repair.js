const fs = require('fs');

let content = fs.readFileSync('App.tsx', 'utf8');

// Fix components
const components = [
    'Globe', 'MapPin', 'Wifi', 'Phone', 'MessageCircle', 'Settings', 'Save', 'Check', 'Info', 'Navigation', 'Key', 'ClipboardList', 'Utensils', 'Camera', 'Bus', 'ExternalLink', 'ChevronDown', 'Lock', 'Umbrella', 'CircleArrowDown', 'CircleArrowUp', 'Clock', 'Pill', 'Siren', 'Plane', 'TrainFront', 'Copy', 'Car', 'Square', 'CheckSquare', 'ShoppingCart', 'Briefcase', 'Star', 'Calendar', 'Trash2', 'CircleParking', 'Youtube', 'Play', 'WashingMachine', 'Ticket'
];

components.forEach(cmp => {
    const lower = cmp.toLowerCase();
    content = content.replace(new RegExp('<' + lower + ' ', 'g'), '<' + cmp + ' ');
    content = content.replace(new RegExp('<' + lower + '/>', 'g'), '<' + cmp + '/>');
    content = content.replace(new RegExp('<' + lower + '>', 'g'), '<' + cmp + '>');
});

// Fix attributes
content = content.replace(/classname=/g, 'className=');
content = content.replace(/onclick=/g, 'onClick=');
content = content.replace(/allowfullscreen=""/g, 'allowFullScreen');

// Fix stringified braces
content = content.replace(/key="\{([^}]+)\}"/g, 'key={$1}');
content = content.replace(/href="\{([^}]+)\}"/g, 'href={$1}');
content = content.replace(/src="\{([^}]+)\}"/g, 'src={$1}');
content = content.replace(/title="\{([^}]+)\}"/g, 'title={$1}');
content = content.replace(/size="\{([^}]+)\}"/g, 'size={$1}');

// Fix onClick
content = content.replace(/onClick="\{\(\)" ==""> ([^}]+)\}/g, 'onClick={() => $1}');

// Fix template literal href
content = content.replace(/href="\{`tel:\$\{part\.replace\(\/\\s\+\/g," ''\)\}`\}"=""/g, 'href={`tel:${part.replace(/\\s+/g, "")}`}');

// Fix classnames with template literals
content = content.replace(/className="\{`([^"]+)`\}"=""/g, 'className={`$1`}');
content = content.replace(/className="\{`([^"]+)`\}"/g, 'className={`$1`}');
content = content.replace(/className="(w-5 h-5 rounded border-2 flex items-center justify-center transition-all \$\{ checklistState\[key\] \? 'bg-rose-500 border-rose-500' : 'border-rose-200 bg-white group-hover:border-rose-300' \})"/g, 'className={`$1`}');

// A few more fixes
content = content.replace(/\{`([^"]+)`\}/g, (match) => {
    // It's already fine if it's inside className={}
    return match;
});

content = content.replace(/className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all \$\{ checklistState\[key\] \? 'bg-rose-500 border-rose-500' : 'border-rose-200 bg-white group-hover:border-rose-300' \}"=""/g, "className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${ checklistState[key] ? 'bg-rose-500 border-rose-500' : 'border-rose-200 bg-white group-hover:border-rose-300' }`}");

content = content.replace(/className="\{`([^`]+)`\}"=""/g, 'className={`$1`}');
content = content.replace(/className="(p-2\.5 rounded-xl transition-all duration-300 border \$\{ wifiCopied\.name \? 'bg-emerald-100 border-emerald-200 text-emerald-600 scale-110' : 'bg-white border-stone-200 text-stone-400 group-hover\/item:border-amber-200 group-hover\/item:text-amber-600' \})"/g, 'className={`$1`}');

content = content.replace(/className="(p-2\.5 rounded-xl transition-all duration-300 border \$\{ wifiCopied\.pass \? 'bg-emerald-100 border-emerald-200 text-emerald-600 scale-110' : 'bg-white border-stone-200 text-stone-400 group-hover\/item:border-amber-200 group-hover\/item:text-amber-600' \})"/g, 'className={`$1`}');

fs.writeFileSync('App.tsx', content);
console.log('Repairs complete!');
