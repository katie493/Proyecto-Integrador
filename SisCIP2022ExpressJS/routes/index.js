var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/products', function(req, res, next) {
  res.render('products');
});

router.get('/Nosotros', function(req, res, next) {
  res.render('nosotros');
});

router.get('/Contact', function(req, res, next) {
  res.render('Contactos');
});
router.get('/login', function(req, res, next) {
  res.render('login');
});


router.post('/dashboard', function(req, res, next) {
  email=req.body.email;
  password=req.body.password;
  console.log(email);
  dbConn.query("SELECT * FROM trabajador WHERE email='"+email+"' AND password='"+password+"'",function(err,rows){
    if(err){
      req.flash('error',err);
      console.log(err);
    }else{
      if(rows.length){
        console.log(rows);
        req.session.id=rows[0]["id"];
        req.session.email=rows[0]["email"];
        req.session.loggedin = true;
        res.redirect('/main');
      }else{
        req.flash('error','El usuario no existe...');
        res.redirect('/login');
      }
    }
  });
});

router.get('/main', function(req, res, next) {
  res.render('dashboard');
});



router.get('/logout', function (req, res) {
  req.session.destroy();
  res.redirect("/");
});


router.get('/productos', (req, res)=>{
  dbConn.query('SELECT * FROM productos', (error, results)=>{
     if(error){
         throw error;
     }else{
         res.render('productos/listpro', {results:results});
     }
  })
})

router.get('/clientes', (req, res)=>{
  dbConn.query('SELECT * FROM clientes', (error, results)=>{
     if(error){
         throw error;
     }else{
         res.render('clientes/list', {results:results});
     }
  })
})









router.get('/usuarios', (req, res)=>{
  dbConn.query('SELECT * FROM trabajador', (error, results)=>{
     if(error){
         throw error;
     }else{
         res.render('usuario/usuario', {results:results});
     }
  })
})

// crear registros de USUARIO
router.get('/create', (req, res)=>{
  res.render('usuario/create');
})

// editar registros
router.get('/editar/:id', (req, res)=>{
  const id = req.params.id;
  dbConn.query('SELECT * FROM trabajador WHERE id = ?',[id], (error, results)=>{
    if(error){
      throw error;
  }else{
      res.render('usuario/editar', {user:results[0]});
  }
  })

});

router.get('/delete/:id',(req, res)=>{
  const id = req.params.id;
  dbConn.query('DELETE FROM trabajador WHERE id = ?'[id], (error, results)=>{
    if(error){
      throw error;
  }else{
      res.render('usuario/usuario');
  }
  })
});



router.get('/evento', (req, res)=>{
  dbConn.query('SELECT * FROM evento', (error, results)=>{
     if(error){
         throw error;
     }else{
         res.render('evento/event', {results:results});
     }
  })
})
router.get('/creaevento', (req, res)=>{
  res.render('evento/creaevent');
})
router.get('/editevento/:evento_id', (req, res)=>{
  const evento_id = req.params.evento_id;
  dbConn.query('SELECT * FROM evento WHERE evento_id = ?',[evento_id], (error, results)=>{
    if(error){
      throw error;
  }else{
      res.render('evento/editarevent', {userevento:results[0]});
  }
  })
});


router.get('/reporte', (req, res)=>{
  res.render('reporte/reportes');
})
router.get('/repevento', (req, res)=>{
  res.render('reporte/repevento');
})
router.get('/reppaciente', (req, res)=>{
  res.render('reporte/reppaciente');
})
router.get('/repmedi', (req, res)=>{
  res.render('reporte/repmedi');
})

const crud = require('../controllers/crud');
router.post('/save', crud.save)
router.post('/saveevent', crud.saveevent)
router.post('/update', crud.update)
router.post('/updateevent', crud.updateevent)

module.exports = router;

module.exports = router;

