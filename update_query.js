function update_query(data, tableName, condition) {
    let datas = "", condn = "";
    let key, keys;
    for (key in data) {
        if (typeof data[key] === 'number') {
            datas += `${key} = ${data[key]},`;
        }
        else if (typeof data[key] === 'string') {
            datas += `${key} ='${data[key]}',`;
        }
        else {
            console.log('enter valid data');
        }
    }
    for (keys in condition) {
        if (typeof condition[keys] === 'number') {
            condn += `${keys} = ${condition[keys]},`;
        }
        else if (typeof condition[keys] === 'string') {
            condn += `${kkeys} = '${condition[keys]}',`;
        }
        else {
            console.log('enter valid data');
}
    }
    datas = datas.slice(0, -1);
    condn = condn.slice(0, -1);
    let qry = `UPDATE ${tableName} SET  ${datas} WHERE ${condn} ;`;
    console.log(qry);
}
update_query({ "id": 4567, name: "node", mobile: 122345677, email: "princenode@isu.in" }, "crud_operation", { name: "prince", mobile: 980765431 })

