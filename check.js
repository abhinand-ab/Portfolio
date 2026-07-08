const fs = require('fs');
const lucide = require('lucide-react');

let log = '';
function print(...args) {
    log += args.join(' ') + '\n';
}

print("lucide keys count:", Object.keys(lucide).length);
print("Github in lucide:", 'Github' in lucide);
print("GithubIcon in lucide:", 'GithubIcon' in lucide);
print("GitHub in lucide:", 'GitHub' in lucide);
print("GitBranch in lucide:", 'GitBranch' in lucide);

const gitKeys = Object.keys(lucide).filter(k => k.toLowerCase().includes('git'));
print("Git keys:", JSON.stringify(gitKeys));

fs.writeFileSync('check_output.txt', log);
