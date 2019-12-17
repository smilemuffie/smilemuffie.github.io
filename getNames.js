const fs = require('fs');

const plugins = require('./plugin.js');

let str = `
序号 | 地址 | 描述
-|-|-|
`;
// plugins.map((item, index) => {
//     str += `${index+1} | \[${item.name}\]\(${item.link}\) | ${item.desc} \n`
// });



function test(n,j) {
    for (let i = n; i< n+j; i ++) {
        str += `${i+1-n} | \[${plugins[i].name}\]\(${plugins[i].link}\) | ${plugins[i].desc} \n`
        console.log(str)
    }

    str += `\n---\n##`
    fs.writeFileSync('plugins.md', str, (err) => {
        console.log('1111', str)
        if (err) throw err;
        console.log('写入目录成功！');
    })
}


test(234, 39)






