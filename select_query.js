function select_query(data, tableName, cond) {
    let tablekeys = "",
    conds = "";
    let keys, key, i = 0;
    tablekeys = data.join(',');
   for (key in cond) {
        if (typeof cond[key] === 'number') {
            conds += `${key} = ${cond[key]},`;
        }
        else if (typeof cond[key] === 'string') {
            conds += `${key} = '${cond[key]}',`;
        }
        else {
            conds += `${key} = '${cond[key]}',`;
        }
    }
    conds = conds.slice(0, -1);
    let query = `select ${tablekeys} from  ${tableName} where ${conds}   ;`
    console.log(query);
}
select_query(['id', 'name', 'mobile', 'email'], "curd_operation", { id: 890, name: "prince", mobile: 983039 })

