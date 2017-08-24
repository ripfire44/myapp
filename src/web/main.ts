interface MyObj {
    id: number;
    name: string;
}

function echo(myObj: MyObj) {
    return `${myObj.id}) ${myObj.name}`;
}

var o = {
    id: 1,
    name: 'Alan Santos',
};

console.log(echo(o));