const fs = require('fs');

['types.ts', 'data.ts', 'App.tsx'].forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // fix record values
    content = content.replace(/Record<language, string="">/g, 'Record<Language, string>');
    content = content.replace(/Record<Language, string="">/g, 'Record<Language, string>');
    content = content.replace(/Record<string, string="">/g, 'Record<string, string>');
    content = content.replace(/Record<string, any="">/g, 'Record<string, any>');

    // Specific fixes
    content = content.replace(/<language,/g, '<Language,');
    content = content.replace(/: language/g, ': Language');
    content = content.replace(/guidedata/g, 'GuideData');

    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log(`Fixed ${file}`);
    }
});
