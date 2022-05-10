function Insert_query(colmn, table_name,data) {
    let Keys = "";
   let cols = "";
      let   i = 0;
        let Values = "";
        cols = colmn.join(',');
    for (let key in data) {
        if (typeof data[key] === 'number')
         {
            Values +=  `${data[key]},`;
        }
        else if (typeof data[key] === 'string') {
            Values += `'${data[key]}',`;
        }
        else {
            Values += `'${data[key]}',`;
        }
    }
    Values = Values.slice(0, -1);
    let qry = `INSERT INTO ${table_name} ( ${cols} ) VALUES (  ${Values} ) ;`;
    console.log(qry);
}
Insert_query(['id','name','mobile','email'],"crud_operation",{ id: 20004, name: "Prince", mobile: 7873789119, email: "prince@gmialcom" })

