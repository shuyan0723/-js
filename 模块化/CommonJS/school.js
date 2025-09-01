const school='东华理工大学';
const slogan='敦本务实，崇义奉公';

function tel(){
    return '0532-86222222';
}
function address(){
    return ['抚州市','南昌市'];
}
// this.e='123';
// exports={a:1};
// exports.b=2;
// module.exports.c=3
// module.exports={d:4};
// module.exports={f:5};
// module.exports的结果是最终值

// console.log(this);
// console.log(exports);
// console.log(module.exports);
// console.log(this===exports&&exports===module.exports);

// exports.school=school;
// exports.slogan=slogan;
// exports.tel=tel;

module.exports={school,slogan,tel,address};