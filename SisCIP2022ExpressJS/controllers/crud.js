const dbConn=require('../lib/db');

//usuarios
exports.save=(req, rest)=>{
    const tra_nombre=req.body.tra_nombre;
    const tra_nro_documento=req.body.tra_nro_documento;
    const tra_ap_paterno=req.body.tra_ap_paterno;
    const tra_ap_materno=req.body.tra_ap_materno;
    const tra_direccion=req.body.tra_direccion;
    const tra_telefono=req.body.tra_telefono;
    const email=req.body.email;
    const password=req.body.password;
    /* console.log(tra_nombre +" - "+tra_nro_documento+" - "+tra_ap_paterno +" - "+tra_ap_materno +" - "+tra_direccion+" - "+tra_telefono+" - "+email+" - "+password); */
    dbConn.query('INSERT INTO trabajador SET ?' ,{tra_nombre:tra_nombre, tra_nro_documento:tra_nro_documento, tra_ap_paterno:tra_ap_paterno, tra_ap_materno:tra_ap_materno, tra_direccion:tra_direccion, tra_telefono:tra_telefono, email:email, password:password}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            rest.redirect('/usuarios');
        }
    }) 
}
exports.update = (req, res)=>{
    const id = req.body.id;
    const tra_nombre = req.body.tra_nombre;
    const tra_nro_documento = req.body.tra_nro_documento;
    const tra_ap_paterno = req.body.tra_ap_paterno;
    const tra_ap_materno = req.body.tra_ap_materno;
    const tra_direccion = req.body.tra_direccion;
    const tra_telefono = req.body.tra_telefono;
    const email = req.body.email;
    const password = req.body.password;
    dbConn.query('UPDATE trabajador SET ? WHERE id = ?',[{tra_nombre:tra_nombre, tra_nro_documento:tra_nro_documento, tra_ap_paterno:tra_ap_paterno, tra_ap_materno:tra_ap_materno, tra_direccion:tra_direccion, tra_telefono:tra_telefono, email:email, password:password}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/usuarios');
        }
    })
}





exports.savepro=(req, rest)=>{
    const prod_nombre=req.body.prod_nombre;
    const prod_codigo=req.body.prod_codigo;
    const prod_marca=req.body.prod_marca;
    const prod_stock=req.body.prod_stock;
    const prod_cat_id=req.body.prod_cat_id;
    /* console.log(tra_nombre +" - "+tra_nro_documento+" - "+tra_ap_paterno +" - "+tra_ap_materno +" - "+tra_direccion+" - "+tra_telefono+" - "+email+" - "+password); */
    dbConn.query('INSERT INTO productos SET ?' ,{prod_nombre:prod_nombre, prod_codigo:prod_codigo, prod_marca:prod_marca, prod_stock:prod_stock, prod_cat_id:prod_cat_id}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            rest.redirect('/productos');
        }
    }) 
}
exports.updatepro = (req, res)=>{
    const prod_id = req.body.prod_id;
    const prod_nombre=req.body.prod_nombre;
    const prod_codigo=req.body.prod_codigo;
    const prod_marca=req.body.prod_marca;
    const prod_stock=req.body.prod_stock;
    const prod_cat_id=req.body.prod_cat_id;
    dbConn.query('UPDATE productos SET ? WHERE prod_id = ?',[{prod_nombre:prod_nombre, prod_codigo:prod_codigo, prod_marca:prod_marca, prod_stock:prod_stock, prod_cat_id:prod_cat_id}, prod_id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/productos');
        }
    })
}


exports.saveevent=(req, rest)=>{
    const evento_nombre=req.body.evento_nombre;
    const evento_descripcion=req.body.evento_descripcion;
    const evento_fechai=req.body.evento_fechai;
    const evento_fechaf=req.body.evento_fechaf;
    /* console.log(tra_nombre +" - "+tra_nro_documento+" - "+tra_ap_paterno +" - "+tra_ap_materno +" - "+tra_direccion+" - "+tra_telefono+" - "+email+" - "+password); */
    dbConn.query('INSERT INTO evento SET ?' ,{evento_nombre:evento_nombre, evento_descripcion:evento_descripcion, evento_fechai:evento_fechai, evento_fechaf:evento_fechaf}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            rest.redirect('/evento');
        }
    }) 
}
exports.updateevent = (req, res)=>{
    const evento_id = req.body.evento_id;
    const evento_nombre=req.body.evento_nombre;
    const evento_descripcion=req.body.evento_descripcion;
    const evento_fechai=req.body.evento_fechai;
    const evento_fechaf=req.body.evento_fechaf;
    dbConn.query('UPDATE evento SET ? WHERE evento_id = ?',[{evento_nombre:evento_nombre, evento_descripcion:evento_descripcion, evento_fechai:evento_fechai, evento_fechaf:evento_fechaf}, evento_id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/evento');
        }
    })
}