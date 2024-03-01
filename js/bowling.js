let camera, scene, rendu, controls, mesh, stats;// declaration des variables

function latheBez3(nbePtCbe,nbePtRot,P0,P1,P2,P3,coul,opacite,bolTranspa){
  let p0= new THREE.Vector2(P0.x,P0.y);
  let p1= new THREE.Vector2(P1.x,P1.y);
  let p2= new THREE.Vector2(P2.x,P2.y);
  let p3= new THREE.Vector2(P3.x,P3.y);
  let tabp= new Array(4);
  for (let j=0;j<tabp.length;j++)
    tabp[j]= new THREE.Vector2(0,0);
  tabp[0].copy(p0);tabp[1].copy(p1);
  tabp[2].copy(p2);tabp[3].copy(p3); 
  // points de la courbe de Bezier
  let points = new Array(nbePtCbe+1);
  for(let k=0;k<=(nbePtCbe+1);k++){
    let t2=k/nbePtCbe; 
    t2=t2.toPrecision(PrecisionArrondi);
    let v0= new THREE.Vector2(0,0);
    v0.addScaledVector(tabp[0],Ber(t2,0,tabp.length-1));
    for(let j=1;j<tabp.length;j++){
      let v1= new THREE.Vector2(0,0);
      v1.addScaledVector(tabp[j],Ber(t2,j,tabp.length-1));
      v0.add(v1);
    }
    points[k] = new THREE.Vector2(v0.x,v0.y);
  }
  let latheGeometry = new THREE.LatheGeometry(points,nbePtRot,0,2*Math.PI); 
  let lathe = surfPhong(latheGeometry,coul,opacite,bolTranspa,"#223322");
  return lathe;
}// fin latheBez3


function init(){
 stats = initStats();
 rendu = new THREE.WebGLRenderer({ antialias: true });
 rendu.shadowMap.enabled = true;
 scene = new THREE.Scene();   
 scene.add(new THREE.HemisphereLight(0xffffcc, 0x19bbdc, 1));
 camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000.0);
 rendu.setClearColor(new THREE.Color(0xFFFFFF));
 rendu.setSize(window.innerWidth, window.innerHeight);
 document.body.appendChild(rendu.domElement);
 controls = new THREE.OrbitControls(camera, rendu.domElement); // on implemente l'orbit control 
 cameraLumiere(scene,camera)
 camera.lookAt(17,0,0)
 lumiere(scene);

 //********************************************************
 //
 //  D E B U T     D & C O 
 //
 //********************************************************

  let mat1=new THREE.MeshPhongMaterial({ // declarations de 3 materiaux (couleurs ) pour les planches du sol
    color:"#C07F4D",
    emissive: "rgb(0,0,0)", 
    specular:"rgb(150,150,150)", 
    flatShading: true,
    shininess:5,
    side: THREE.DoubleSide,
  })

  let mat2=new THREE.MeshPhongMaterial({
    color:"#CC8A57",
    emissive: "rgb(0,0,0)", 
    specular:"rgb(150,150,150)", 
    flatShading: true,
    shininess:5,
    side: THREE.DoubleSide,
  })

  let mat3=new THREE.MeshPhongMaterial({
    color:"#D99562",
    emissive: "rgb(0,0,0)", 
    specular:"rgb(150,150,150)", 
    flatShading: true,
    shininess:5,
    side: THREE.DoubleSide,
  })

  let planche1=new THREE.Mesh(new THREE.PlaneGeometry(1.5,250),mat1); // creation de toute les planches
  planche1.rotateX(Math.PI/2).position.set(-4.5,-8.1,95)
  scene.add(planche1)

  let planche2=new THREE.Mesh(new THREE.PlaneGeometry(2.375,250),mat2);
  planche2.rotateX(Math.PI/2).position.set(-2.5625,-8.1,95)
  scene.add(planche2)

  let planche3=new THREE.Mesh(new THREE.PlaneGeometry(2.375,250),mat3);
  planche3.rotateX(Math.PI/2).position.set(-0.1875,-8.1,95)
  scene.add(planche3)

  let planche4=new THREE.Mesh(new THREE.PlaneGeometry(1.5,250),mat1);
  planche4.rotateX(Math.PI/2).position.set(1.75,-8.1,95)
  scene.add(planche4)

  let planche5=new THREE.Mesh(new THREE.PlaneGeometry(2.375,250),mat3);
  planche5.rotateX(Math.PI/2).position.set(3.6875,-8.1,95)
  scene.add(planche5)

  let planche6=new THREE.Mesh(new THREE.PlaneGeometry(2.375,250),mat1);
  planche6.rotateX(Math.PI/2).position.set(6.0625,-8.1,95)
  scene.add(planche6)

  let planche7=new THREE.Mesh(new THREE.PlaneGeometry(3,250),mat2);
  planche7.rotateX(Math.PI/2).position.set(8.75,-8.1,95)
  scene.add(planche7)

  let planche8=new THREE.Mesh(new THREE.PlaneGeometry(2.375,250),mat3);
  planche8.rotateX(Math.PI/2).position.set(11.4375,-8.1,95)
  scene.add(planche8)

  let planche9=new THREE.Mesh(new THREE.PlaneGeometry(2.375,250),mat1);
  planche9.rotateX(Math.PI/2).position.set(13.8125,-8.1,95)
  scene.add(planche9)

  let planche10=new THREE.Mesh(new THREE.PlaneGeometry(1.5,250),mat3);
  planche10.rotateX(Math.PI/2).position.set(15.75,-8.1,95)
  scene.add(planche10)

  let planche11=new THREE.Mesh(new THREE.PlaneGeometry(2.375,250),mat1);
  planche11.rotateX(Math.PI/2).position.set(17.6875,-8.1,95)
  scene.add(planche11)

  let planche12=new THREE.Mesh(new THREE.PlaneGeometry(3,250),mat2);
  planche12.rotateX(Math.PI/2).position.set(20.375,-8.1,95)
  scene.add(planche12)

  let planche13=new THREE.Mesh(new THREE.PlaneGeometry(2.375,250),mat3);
  planche13.rotateX(Math.PI/2).position.set(23.0625,-8.1,95)
  scene.add(planche13)

  let planche14=new THREE.Mesh(new THREE.PlaneGeometry(1.5,250),mat1);
  planche14.rotateX(Math.PI/2).position.set(25,-8.1,95)
  scene.add(planche14)

  let planche15=new THREE.Mesh(new THREE.PlaneGeometry(2.375,250),mat3);
  planche15.rotateX(Math.PI/2).position.set(26.9375,-8.1,95)
  scene.add(planche15)

  let planche16=new THREE.Mesh(new THREE.PlaneGeometry(3,250),mat1);
  planche16.rotateX(Math.PI/2).position.set(29.65,-8.1,95)
  scene.add(planche16)

  let planche17=new THREE.Mesh(new THREE.PlaneGeometry(2.375,250),mat2);
  planche17.rotateX(Math.PI/2).position.set(32.3375,-8.1,95)
  scene.add(planche17)

  let planche18=new THREE.Mesh(new THREE.PlaneGeometry(2.375,250),mat3);
  planche18.rotateX(Math.PI/2).position.set(34.7125,-8.1,95)
  scene.add(planche18)

  let planche19=new THREE.Mesh(new THREE.PlaneGeometry(1.5,250),mat1);
  planche19.rotateX(Math.PI/2).position.set(36.65,-8.1,95)
  scene.add(planche19)
  
  let planche20=new THREE.Mesh(new THREE.PlaneGeometry(2.375,250),mat3);
  planche20.rotateX(Math.PI/2).position.set(38.5875,-8.1,95)
  scene.add(planche20)
  
  let cylGeo1 = new THREE.CylinderGeometry(5.5,5.5,250, 8, 1, true, 0, Math.PI); // creation des rigoles
  let materialR1 = new THREE.MeshPhongMaterial({color:"rgb(0,0,0)",side: THREE.DoubleSide});
  let rigole1 = new THREE.Mesh( cylGeo1, materialR1);
  rigole1.position.set(45.25,-8,95)
  rigole1.rotateX(Math.PI/2)
  rigole1.rotateY(-Math.PI/2)
  scene.add(rigole1);

  let cylGeo2 = new THREE.CylinderGeometry(5.5,5.5,250, 8, 1, true, 0, Math.PI);
  let materialR2 = new THREE.MeshPhongMaterial({color:"rgb(0,0,0)",side: THREE.DoubleSide});
  let rigole2 = new THREE.Mesh( cylGeo2, materialR2);
  rigole2.position.set(-10.75,-8,95)
  rigole2.rotateX(Math.PI/2)
  rigole2.rotateY(-Math.PI/2)
  scene.add(rigole2);



 //********************************************************
 //
 //  F I N     D & C O 
 //
 //********************************************************

 //********************************************************
 //
 //  D E B U T     Q U I L L E S 
 //
 //********************************************************

 let coef = 1;// pour la jointure G1
 let P0 = new THREE.Vector3(0,4.5,0);// creation des points utilisé pour les courbes de bézier pour les lahtes
 let P1 = new THREE.Vector3(3,3,0);
 let P2 = new THREE.Vector3(2,1,0);
 let P3 = new THREE.Vector3(1.5,0,0);
 let M0 = new THREE.Vector3(P3.x,P3.y,0);
 let M1 = new THREE.Vector3(1,0,0);
 let M2 = new THREE.Vector3(2.25,-2,0);
 let M3 = new THREE.Vector3(2.25,-3,0);
 let R0 = new THREE.Vector3(M3.x,M3.y,0);
 let R1 = new THREE.Vector3(2.25,-8,0);
 let R2 = new THREE.Vector3(1.75,-10.5,0);
 let R3 = new THREE.Vector3(0,-10,0);
 
 
 let vP2P3 = new THREE.Vector3(0,0,0);
 let vTan2 = new THREE.Vector3(0,0,0);
 vP2P3.subVectors(P3,P2);//P3-P2
 vTan2.addScaledVector(vP2P3,coef);
 M1.addVectors(M0,vTan2);
 let nb=100;//nmbre de pts par courbe
 let epai=2;//epaisseur de la courbe
 let nbPtCB=50;//nombre de points sur la courbe de Bezier
 let nbePtRot=150;// nbe de points sur les cercles
 let nbPts = 100;//nbe de pts de la courbe de Bezier
 let epaiB = 5;//epaisseur de la courbe de Bezier
 let cbeBez1 = TraceBezierCubique(P0, P1, P2, P3,nbPts,"#FF00FF",epaiB);
 let cbeBez2 = TraceBezierCubique(M0, M1, M2, M3,nbPts,"#0000FF",epaiB);
 let cbeBez3 = TraceBezierCubique(R0, R1, R2, R3,nbPts,"#FFFF00",epaiB);
 //scene.add(cbeBez1);
 //scene.add(cbeBez2);
 //scene.add(cbeBez3);

  let lathe01 = latheBez3(nbPtCB,nbePtRot,P0,P1,P2,P3,"#AAAAAA",0.5,false); // creation des lathe puis placement au bon endroit
  let lathe02 = latheBez3(nbPtCB,nbePtRot,M0,M1,M2,M3,"#000000",0.5,false);
  let lathe03 = latheBez3(nbPtCB,nbePtRot,R0,R1,R2,R3,"#AAAAAA",0.5,false);
  lathe01.position.set(0,2,0);
  lathe02.position.set(0,2,0);
  lathe03.position.set(0,2,0);
  scene.add(lathe01);
  scene.add(lathe02);
  scene.add(lathe03);


  let lathe11=lathe01.clone(false).translateX(11);
  let lathe12=lathe02.clone(false).translateX(11);
  let lathe13=lathe03.clone(false).translateX(11);
  scene.add(lathe11);
  scene.add(lathe12);
  scene.add(lathe13);

  let lathe21=lathe01.clone(false).translateX(22);
  let lathe22=lathe02.clone(false).translateX(22);
  let lathe23=lathe03.clone(false).translateX(22);
  scene.add(lathe21);
  scene.add(lathe22);
  scene.add(lathe23);

  let lathe31=lathe01.clone(false).translateX(33);
  let lathe32=lathe02.clone(false).translateX(33);
  let lathe33=lathe03.clone(false).translateX(33);
  scene.add(lathe31);
  scene.add(lathe32);
  scene.add(lathe33);

//===========================================================

  let lathe41=lathe01.clone(false).translateX(5.5).translateZ(11);
  let lathe42=lathe02.clone(false).translateX(5.5).translateZ(11);
  let lathe43=lathe03.clone(false).translateX(5.5).translateZ(11);
  scene.add(lathe41);
  scene.add(lathe42);
  scene.add(lathe43);

  let lathe51=lathe01.clone(false).translateX(16.5).translateZ(11);
  let lathe52=lathe02.clone(false).translateX(16.5).translateZ(11);
  let lathe53=lathe03.clone(false).translateX(16.5).translateZ(11);
  scene.add(lathe51);
  scene.add(lathe52);
  scene.add(lathe53);

  let lathe61=lathe01.clone(false).translateX(27.5).translateZ(11);
  let lathe62=lathe02.clone(false).translateX(27.5).translateZ(11);
  let lathe63=lathe03.clone(false).translateX(27.5).translateZ(11);
  scene.add(lathe61);
  scene.add(lathe62);
  scene.add(lathe63);

  //===========================================================

  let lathe71=lathe01.clone(false).translateX(11).translateZ(22);
  let lathe72=lathe02.clone(false).translateX(11).translateZ(22);
  let lathe73=lathe03.clone(false).translateX(11).translateZ(22);
  scene.add(lathe71);
  scene.add(lathe72);
  scene.add(lathe73);

  let lathe81=lathe01.clone(false).translateX(22).translateZ(22);
  let lathe82=lathe02.clone(false).translateX(22).translateZ(22);
  let lathe83=lathe03.clone(false).translateX(22).translateZ(22);
  scene.add(lathe81);
  scene.add(lathe82);
  scene.add(lathe83);

  //==========================================================

  let lathe91=lathe01.clone(false).translateX(16.5).translateZ(33);
  let lathe92=lathe02.clone(false).translateX(16.5).translateZ(33);
  let lathe93=lathe03.clone(false).translateX(16.5).translateZ(33);
  scene.add(lathe91);
  scene.add(lathe92);
  scene.add(lathe93);


  let tabpos=new Array(); // tableau des positions des différentes quilles  
  tabpos=[new THREE.Vector3(0,2,0), 
          new THREE.Vector3(11,2,0), 
          new THREE.Vector3(22,2,0), 
          new THREE.Vector3(33,2,0), 
          new THREE.Vector3(5.5,2,11), 
          new THREE.Vector3(16.5,2,11), 
          new THREE.Vector3(27.5,2,11), 
          new THREE.Vector3(11,2,22), 
          new THREE.Vector3(22,2,22), 
          new THREE.Vector3(16.5,2,33)];

  function resetQuille(){
    for(f=0;f<tabpos.length;f++){
      tablathe1[f].position.set(tabpos[f].x,tabpos[f].y,tabpos[f].z);
      tablathe2[f].position.set(tabpos[f].x,tabpos[f].y,tabpos[f].z);
      tablathe3[f].position.set(tabpos[f].x,tabpos[f].y,tabpos[f].z);
    }
    tabLatheTouche=[];
    tabcourbeColli=[];
    cpt=0;
  }

 //********************************************************
 //
 //  F I N     Q U I L L E S 
 //
 //********************************************************

 //********************************************************
 //
 //  D E B U T     S P H E R E 
 //
 //********************************************************
  let nbeParallel = 100;
  let nbeMeridien = 60 ;
  let R=3.85;//rayon de la boule 
  let sphereGeom = new THREE.SphereGeometry (R, nbeParallel, nbeMeridien);// creation de la boule 

  let MaterialPhong1= new THREE.MeshPhongMaterial({//creation de la texture 
    color: "rgb(0,0,255)", 
    opacity: 1,
    transparent: true,
    emissive: "rgb(0,0,0)", 
    specular:"rgb(255,255,255)", 
    flatShading: true,
    shininess:30,
    side: THREE.DoubleSide,
  });

  let boule = new THREE.Mesh(sphereGeom,MaterialPhong1);// ajout de la texture a la boule et placement de la boule 
  boule.position.set(16.5,-4.15,220);
  boule.castShadow = true;
  boule.receiveShadow = true;
  scene.add(boule);   
  let pointCbeBoule = new Array(nb+1); // creation de la courbe sur la boule
  for(var k=0;k<=nb;k++){
    let t2=k/nb*2*Math.PI;
    let a = 0.75 * R;
    let b = R-a;
    let x0,y0,z0;
    x0=a*Math.cos(t2)+b*Math.cos(3.*t2);
    y0=a*Math.sin(t2)-b*Math.sin(3.*t2);
    z0=2.*Math.sqrt(a*b)*Math.sin(2.*t2);
   pointCbeBoule[k] = new THREE.Vector3(x0,y0,z0);
  }
  let geoCbeCourbe = new THREE.BufferGeometry().setFromPoints(pointCbeBoule);
  let matCbeCourbe = new THREE.LineBasicMaterial( {color:"rgb(255,0,0)"});
  let CbeBoule = new THREE.Line( geoCbeCourbe, matCbeCourbe );
  CbeBoule.position.set(16.5,-4.15,220);
  scene.add(CbeBoule);
 //********************************************************
 //
 //  F I N     S P H E R E 
 //
 //********************************************************

 //********************************************************
 //
 //  D E B U T     C O L L I S I O N
 //
 //********************************************************
 let d=R+2.5; //rayon de la boule plus rayon d'une quille
 let d2=5;    // deux fois le rayon de la quille 
 let tabtemoin = new Array();
 let tablathe1=new Array();
 let tablathe2=new Array();
 let tablathe3=new Array();
 tablathe1=[lathe01,lathe11,lathe21,lathe31,lathe41,lathe51,lathe61,lathe71,lathe81,lathe91,boule];
 tablathe2=[lathe02,lathe12,lathe22,lathe32,lathe42,lathe52,lathe62,lathe72,lathe82,lathe92];
 tablathe3=[lathe03,lathe13,lathe23,lathe33,lathe43,lathe53,lathe63,lathe73,lathe83,lathe93];
 tabtemoin=[
  [0,0,0,0,0,0,0,0,0,0,0], // en colone dans  l'ordre lathe 01 ==> lathe 91 puis boule
  [0,0,0,0,0,0,0,0,0,0,0],  // en lignes lathe 01 ==> lathe 91
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],  //10 lignes   11 colonnes
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0], 
  [0,0,0,0,0,0,0,0,0,0,0]
];

let tabcourbeColli=new Array();
let tabLatheTouche=new Array();



 function collib(b,l1,i,j){ //fonction detectant la collision entre la boule et une quille
  let xa=b.position.x;
  let xb=l1.position.x;
  let za=b.position.z;
  let zb=l1.position.z;
  let t2=Math.sqrt((xb-xa)*(xb-xa)+(zb-za)*(zb-za));
  
  if (t2<=d){
    droitecolli(b,l1);
    tabtemoin[j][i]=1;
 }
}  

 function colliq(l1,l2,i,j){ //fonction detectant la collision entre deux quilles 

  let xa=l1.position.x;
  let xb=l2.position.x;
  let za=l1.position.z;
  let zb=l2.position.z;
  let t2=Math.sqrt((xb-xa)*(xb-xa)+(zb-za)*(zb-za));
  if (l1!=tablathe1[10]&&l2!=tablathe1[10])
    if (t2<=d2){
      droitecolli(l1,l2);
      tabtemoin[i][j]=1;
    }
  }

 function droitecolli(l1,l2){//fonction definissant la courbe qui relie le centre de la boule celui de la quille et un point pour former une droite
  let dedans=false;
  let xa=l1.position.x;
  let xb=l2.position.x;
  let za=l1.position.z;
  let zb=l2.position.z;
  let xz=((-30)*xa-(-30)*xb+(za*xb)-(xa*zb))/(za-zb);

  let pt1=new THREE.Vector3( xa, 0, za );
  let pt2=new THREE.Vector3( xb, 0, zb );
  let pt3=new THREE.Vector3( xz, 0, -30 );
  let courbeQ=new THREE.QuadraticBezierCurve3(pt1,pt2,pt3);

  if(tabLatheTouche.length==0){//ajout de la quille concernée et de la courbe dans leur tableau si elles y sont pas deja 
    tabcourbeColli.push(courbeQ);
    tabLatheTouche.push(l2);
  }else{
    dedans=false;
    for(w=0;w<tabLatheTouche.length;w++){
      if(tabLatheTouche[w]==l2){
        dedans=true;
      }      
    }
    if(!dedans){
    tabcourbeColli.push(courbeQ);
    tabLatheTouche.push(l2);
    }
  }  
  rendu.render( scene, camera );
 }

 //********************************************************
 //
 //  F I N         C O L L I S I O N
 //
 //******************************************************** 

 //********************************************************
 //
 //  D E B U T     A N I M A T I O N     
 //
 //********************************************************

 document.body.appendChild(rendu.domElement);
 rendu.setSize(window.innerWidth, window.innerHeight);

 let pl1=new THREE.Vector3( 16.5,-4.15,220);//déclaration des points des courbes de tir
 let pl2=new THREE.Vector3(pl1.x,pl1.y,pl1.z);
 let pl3=new THREE.Vector3( 16.5,-4.15,-30); 

 let pc1=new THREE.Vector3(16.5,-4.15,220);
 let pc2=new THREE.Vector3(16.5,-4.15,157.5);
 let pc3=new THREE.Vector3(16.5,-4.15,95);
 let pc4=new THREE.Vector3(16.5,-4.15,32.5);
 let pc5=new THREE.Vector3(16.5,-4.15,-30);

 let courbe=new THREE.QuadraticBezierCurve3(pl1,pl2,pl3);
 let points=courbe.getPoints(40);
 let geometry=new THREE.BufferGeometry().setFromPoints(points);
 let material = new THREE.LineDashedMaterial({color:"rgb(0,0,0)"});
 let courbeLance = new THREE.Line(geometry, material);
 scene.add(courbeLance);

 let courbe1 = new THREE.QuadraticBezierCurve3(pc1, pc2, pc3);
 let courbe2 = new THREE.QuadraticBezierCurve3(pc3, pc4, pc5);
 let points1 = courbe1.getPoints(40);
 let geometry1 = new THREE.BufferGeometry().setFromPoints(points1);
 let material1 = new THREE.LineBasicMaterial({color:"rgb(0,0,0)"});
 let courbeLanceC = new THREE.Line(geometry1, material1);
 

 let DouC=false;// true: tir courbe          false: tir droit


 let i=0;//initialisation des différents compteurs utilisés dans la partie animation
 let t=0;
 let m=0
 let cpt=0
 let o=10;
 let maxi=0
 let max=200;
 let max1=max/2;

 function animate() {//fonction qui anime le mouvement de la boule 
  if(i<max){
    let points=new Array(4);
    if(boule.position.x<-5.25||boule.position.x>39.75){//si le centre de la boule arrive a une extremite de la piste, tombe dans la rigole
      if(maxi==0){
        maxi=max-i;
      }
      let Z=boule.position.z;
      let r1=new THREE.Vector3(0,0,0);
      let r2=new THREE.Vector3(0,0,0);
      let r3=new THREE.Vector3(0,0,0);
      if(boule.position.x<-5.25){
        r1=new THREE.Vector3(-10.75,-8,Z);
        r2=new THREE.Vector3(-10.75,-8,Z);
        r3=new THREE.Vector3(-10.75,-8,-30);
      }else{
        r1=new THREE.Vector3(45.25,-8,Z);
        r2=new THREE.Vector3(45.25,-8,Z);
        r3=new THREE.Vector3(45.25,-8,-30);
      }
      let c=new THREE.QuadraticBezierCurve3(r1,r2,r3);
      points=c.getPoints(maxi);
      boule.position.set(points[t].x,points[t].y,points[t].z);
      CbeBoule.position.set(points[t].x,points[t].y,points[t].z);
      t+=1
    }else{
      if(DouC){//déplace la quille suivant si le tir est courbé ou droit
        if(i<max1){
          points=courbe1.getPoints(max1);
          boule.position.set(points[i].x,points[i].y,points[i].z);
          CbeBoule.position.set(points[i].x,points[i].y,points[i].z);
        }else{
          points=courbe2.getPoints(max1);
          boule.position.set(points[i-max1].x,points[i-max1].y,points[i-max1].z);
          CbeBoule.position.set(points[i-max1].x,points[i-max1].y,points[i-max1].z);
        }
      }else{
        points=courbe.getPoints(max);
        boule.position.set(points[i].x,points[i].y,points[i].z);
        CbeBoule.position.set(points[i].x,points[i].y,points[i].z);
      }
    }
    for (k=10;k>=0;k--){ // On teste toutes les posssibilitées de collisions entre boule et quilles puis entre les quilles 
      for (j=0;j<tablathe1.length-1;j++){
        if (j!=k){
          if(k==10){
            if (tabtemoin[j][k]==0){
              collib(tablathe1[k],tablathe1[j],k,j);
            }  
          }else
            if (tabtemoin[k][j]==0){
              colliq(tablathe1[k],tablathe1[j],k,j);
            }
        }
      }
    }
    if(tabLatheTouche.length>=1){//si au moins une quille a été touchée, appelle la fonction animateQuille
      if(m==0)
        m=max-i;
      animateQuille()
    }
    scene.remove(CbeBoule);
    CbeBoule.rotateX(-Math.PI/12);
    scene.add(CbeBoule);
    i+=1;
    rendu.render(scene, camera);
    requestAnimationFrame(animate);
    
  }else{//réinitialise les positions des différents objets qui ont été modifiés (boules et courbes)
      dat.GUI.toggleHide();
      boule.position.set(16.5,-4.15,220);
      CbeBoule.position.set(16.5,-4.15,220);
      pl1.x=16.5;
      pl2.x=16.5;
      pl3.x=16.5;
  
      pc1.x=16.5;
      pc2.x=16.5;
      pc3.x=16.5;
      pc4.x=16.5;
      pc5.x=16.5;
  
      pl1.y=-4.15;
      pl3.y=-4.15;
  
      pc1.y=-4.15;
      pc2.y=-4.15;
      pc3.y=-4.15;
      pc4.y=-4.15;
      pc5.y=-4.15;
  
      pl1.z=220;
      pl3.z=-30;
  
      pc1.z=220;
      pc2.z=157.5;
      pc3.z=95;
      pc4.z=32.5;
      pc5.z=-30;
  
      if(DouC)
        trajectoireLanceCourbe(pc1,pc2,pc3,pc4,pc5);
      else
        trajectoireLanceDroit(pl1, pl2, pl3);

      score()
        if(tourE>8){
        let gagne=document.getElementById('win');
        if(score1>score2){
          gagne.innerHTML="Le vainqueur est l'Equipe 1 !"
          gagne.style.color=menuGUI.coulE1;
        }else{
          if(score1==score2){
            gagne.innerHTML="Il n'y a pas de vainqueur, ex-aequo !"
          }else{
            gagne.innerHTML="Le vainqueur est l'Equipe 2 !"
            gagne.style.color=menuGUI.coulE2;
          }
        }
      }
      renduAnim();
      return;
    }
 }


 function trajectoireLanceDroit(pl1, pl2,pl3){//enlève les courbes affichées, créé une autre droite avec les nouvelles positions et l'affiche
  if(courbeLance)
    scene.remove(courbeLance);
  if(courbeLanceC)
    scene.remove(courbeLanceC);
  let courbe=new THREE.QuadraticBezierCurve3(pl1,pl2,pl3);
  let points=courbe.getPoints(40);
  let geometry=new THREE.BufferGeometry().setFromPoints(points);
  let material = new THREE.LineDashedMaterial({color:"rgb(0,0,0)"});
  courbeLance = new THREE.Line(geometry, material);
  scene.add(courbeLance);
 }

 function trajectoireLanceCourbe(pc1,pc2,pc3,pc4,pc5){//enlève les courbes affichées, créé une autre courbe avec les nouvelles positions et l'affiche
  if(courbeLance)
    scene.remove(courbeLance);
  if(courbeLanceC)
    scene.remove(courbeLanceC);
  let courbe1 = new THREE.QuadraticBezierCurve3(pc1, pc2, pc3);
  let points1 = courbe1.getPoints(40);
  let geometry1 = new THREE.BufferGeometry().setFromPoints(points1);
  let material1 = new THREE.LineBasicMaterial({color:"rgb(0,0,0)"});
  courbeLance = new THREE.Line(geometry1, material1);
  scene.add(courbeLance);
  let courbe2 = new THREE.QuadraticBezierCurve3(pc3, pc4, pc5);
  let points2 = courbe2.getPoints(40);
  let geometry2 = new THREE.BufferGeometry().setFromPoints(points2);
  let material2 = new THREE.LineBasicMaterial({color:"rgb(0,0,0)"});
  courbeLanceC = new THREE.Line(geometry2, material2);
  scene.add(courbeLanceC);
 }

 function animateQuille(){//anime les quilles après leur collision entre elles ou avec la boule
  if(cpt<tabLatheTouche.length){
    let l01=tabLatheTouche[cpt];
    let courbeQ=tabcourbeColli[cpt];
    let pointsCbeQ=new Array();
    pointsCbeQ=courbeQ.getPoints(m)
    if(o<m){
        let l02=trouveLathe2(l01)
        let l03=trouveLathe3(l01)
        l01.position.set(pointsCbeQ[o].x,2,pointsCbeQ[o].z)
        l02.position.set(pointsCbeQ[o].x,2,pointsCbeQ[o].z)
        l03.position.set(pointsCbeQ[o].x,2,pointsCbeQ[o].z)
        if(cpt+1<tabLatheTouche.length){//possibilité de faire bouger 1 quille ou plus suivant le nombre de quilles touchées
          let l11=tabLatheTouche[cpt+1];
          let l12=trouveLathe2(l11);
          let l13=trouveLathe3(l11);
          let courbeQ2=tabcourbeColli[cpt+1];
          let pointsCbeQ2=new Array();
          pointsCbeQ2=courbeQ2.getPoints(m)
          l11.position.set(pointsCbeQ2[o].x,2,pointsCbeQ2[o].z)
          l12.position.set(pointsCbeQ2[o].x,2,pointsCbeQ2[o].z)
          l13.position.set(pointsCbeQ2[o].x,2,pointsCbeQ2[o].z)
        }
        if(cpt+2<tabLatheTouche.length){
          let l21=tabLatheTouche[cpt+2];
          let l22=trouveLathe2(l21);
          let l23=trouveLathe3(l21);
          let courbeQ2=tabcourbeColli[cpt+2];
          let pointsCbeQ2=new Array();
          pointsCbeQ2=courbeQ2.getPoints(m)
          l21.position.set(pointsCbeQ2[o].x,2,pointsCbeQ2[o].z)
          l22.position.set(pointsCbeQ2[o].x,2,pointsCbeQ2[o].z)
          l23.position.set(pointsCbeQ2[o].x,2,pointsCbeQ2[o].z)
        }
        if(cpt+3<tabLatheTouche.length){
          let l31=tabLatheTouche[cpt+3];
          let l32=trouveLathe2(l31);
          let l33=trouveLathe3(l31);
          let courbeQ2=tabcourbeColli[cpt+3];
          let pointsCbeQ2=new Array();
          pointsCbeQ2=courbeQ2.getPoints(m)
          l31.position.set(pointsCbeQ2[o].x,2,pointsCbeQ2[o].z)
          l32.position.set(pointsCbeQ2[o].x,2,pointsCbeQ2[o].z)
          l33.position.set(pointsCbeQ2[o].x,2,pointsCbeQ2[o].z)
        }
        if(cpt+4<tabLatheTouche.length){
          let l41=tabLatheTouche[cpt+4];
          let l42=trouveLathe2(l41);
          let l43=trouveLathe3(l41);
          let courbeQ2=tabcourbeColli[cpt+4];
          let pointsCbeQ2=new Array();
          pointsCbeQ2=courbeQ2.getPoints(m)
          l41.position.set(pointsCbeQ2[o].x,2,pointsCbeQ2[o].z)
          l42.position.set(pointsCbeQ2[o].x,2,pointsCbeQ2[o].z)
          l43.position.set(pointsCbeQ2[o].x,2,pointsCbeQ2[o].z)
        }
        if(cpt+5<tabLatheTouche.length){
          let l51=tabLatheTouche[cpt+5];
          let l52=trouveLathe2(l51);
          let l53=trouveLathe3(l51);
          let courbeQ2=tabcourbeColli[cpt+5];
          let pointsCbeQ2=new Array();
          pointsCbeQ2=courbeQ2.getPoints(m)
          l51.position.set(pointsCbeQ2[o].x,2,pointsCbeQ2[o].z)
          l52.position.set(pointsCbeQ2[o].x,2,pointsCbeQ2[o].z)
          l53.position.set(pointsCbeQ2[o].x,2,pointsCbeQ2[o].z)
        }
        o+=1
        requestAnimationFrame(animateQuille,100)
        rendu.render(scene,camera)
    }else{
      o=0
      m=0;
      cpt+=1;
      if(cpt+1<tabLatheTouche.length)
        cpt+=1
      if(cpt+2<tabLatheTouche.length)
        cpt+=1
      if(cpt+3<tabLatheTouche.length)
        cpt+=1
      if(cpt+4<tabLatheTouche.length)
        cpt+=1
      if(cpt+5<tabLatheTouche.length)
        cpt+=1        
    } 
   
  }
 }

 function trouveLathe2(l){//fonction qui trouve les lathes de la même quille que la lathe en paramètre 
  for(h=0;h<(tablathe1.length)-1;h++){
    if(l===tablathe1[h]){
      return tablathe2[h]
    }
  }
}

 function trouveLathe3(l){
  for(n=0;n<tablathe1.length-1;n++){
    if(l===tablathe1[n])
      return tablathe3[n]
  }
 }
 
 //********************************************************
 //
 //  F I N     A N I M A T I O N
 //
 //********************************************************

 //********************************************************
 //
 //  D E B U T     M E N U     G U I
 //
 //********************************************************
 let gui = new dat.GUI();
 let menuGUI = new function () {//initialise les différentes utilitées du menu GUI
   this.Tir="Droit";

   this.Lance=function (){//fonction appelée lors du clic sur le bouton Lance
    if(tourE<=8){
    i=0;
      t=0;
      maxi=0;
      for(test=0;test<tabtemoin.length;test++){
        for(j=0;j<11;j++)
          tabtemoin[test][j]=0;
      }
      animate();
      dat.GUI.toggleHide();
    }
   }


   this.directionD=16.5;

   this.directionC=16.5;
   this.courburex=0;
   this.courburez=0;
   this.G1=16.5;
   this.depart=16.5;
  

   this.coulE1="rgb(0,0,255)";
   this.coulE2="rgb(255,0,0)";
   this.pret=function(){
      hide(equip);
      show(traj);
      scene.remove(boule);
      scene.remove(CbeBoule);
      MaterialPhong1.color.set(menuGUI.coulE1);
      matCbeCourbe.color.set(menuGUI.coulE2);
      scene.add(boule);
      scene.add(CbeBoule);
   }
   this.reset=function(){
    location.reload();
   }
 }; 

 let traj =gui.addFolder("Trajectoire");//creer un dossier dans gui
 hide(traj)
 traj.open();
 traj.add(menuGUI,"Lance");//ajout du bouton lance au dossier traj
 
 traj.add(menuGUI,"Tir",["Droit","Courbé"]).onChange(function(){//ajout d'un menu déroulant à traj qui défini l'allure de la courbe
  if(menuGUI.Tir==="Droit"){
   show(trajDroit);
   hide(trajCourbe);
   DouC=false;
   trajectoireLanceDroit(pl1,pl2, pl3);
  }else{
    hide(trajDroit);
    show(trajCourbe);
    DouC=true;
    trajectoireLanceCourbe(pc1,pc2,pc3,pc4,pc5);
  }
 });

 let trajDroit=traj.addFolder("Droit");// ajout d'un dossier à traj contenant la jauge de direction du tir droit
 trajDroit.open();
 trajDroit.add(menuGUI,"directionD",-200,200).onChange(function (){
  pl3.x=menuGUI.directionD;
  trajectoireLanceDroit(pl1,pl2,pl3);
 });


 let trajCourbe=traj.addFolder("Courbe");//ajout d'un dossier à traj contenant les différentes options pour modifier le tir courbe 
 trajCourbe.open();
 hide(trajCourbe);
 trajCourbe.add(menuGUI,"directionC",-200,200).onChange(function(){//permet de modifier la destination de la courbe 
  pc5.x=menuGUI.directionC;
  trajectoireLanceCourbe(pc1,pc2,pc3,pc4,pc5);
 });
 trajCourbe.add(menuGUI,"courburex",-200,200).onChange(function(){//permet le changement de la courbure de la courbe en X
  pc2.x=16.5+menuGUI.courburex;
  pc4.x=16.5-menuGUI.courburex;
  trajectoireLanceCourbe(pc1,pc2,pc3,pc4,pc5);
 });
 trajCourbe.add(menuGUI,"courburez",-110,110).onChange(function(){//permet le changement de la courbure de la courbe en Y
  if(157.5+menuGUI.courburez>=220)
    pc2.z=219;
  else
    if(157.5+menuGUI.courburez<=95)
      pc2.z=96;
    else
      pc2.z=157.5+menuGUI.courburez;

  if(32.5-menuGUI.courburez>=95)
    pc4.z=94;
  else
    if(32.5-menuGUI.courburez<=-30)
      pc4.z=-29
    else
      pc4.z=32.5-menuGUI.courburez;
  trajectoireLanceCourbe(pc1,pc2,pc3,pc4,pc5);
 })
 trajCourbe.add(menuGUI,"G1",-200,200).onChange(function(){//permet de déplacer la jonction entre les deux courbes utilisées 
  pc3.x=16.5+menuGUI.G1;
  pc2.x=16.5+menuGUI.courburex+menuGUI.G1;
  pc4.x=16.5-menuGUI.courburex+menuGUI.G1;
  trajectoireLanceCourbe(pc1,pc2,pc3,pc4,pc5);
 });

 traj.add(menuGUI,"depart",-5,38).onChange(function(){//permet de modifier la position de départ de la courbe et de la boule
  pc1.x=menuGUI.depart;
  pl1.x=menuGUI.depart;
  pl2.x=menuGUI.depart;
  boule.position.set(menuGUI.départ,-3,220);
  CbeBoule.position.set(menuGUI.départ,-3,220);
  if (DouC)
    trajectoireLanceCourbe(pc1,pc2,pc3,pc4,pc5);
  else
    trajectoireLanceDroit(pl1,pl2,pl3);
 });

 let tabe1=new Array();
 tabe1=document.getElementsByClassName("E1");
 let tabe2=new Array();
 tabe2=document.getElementsByClassName("E2");

 let equip=gui.addFolder("Equipe");
 equip.open()
 equip.addColor(menuGUI,"coulE1").onChange(function(){//couleur equipe 1
  for(i=0;i<tabe1.length;i++){
    tabe2[i].style.borderColor=menuGUI.coulE1;
    tabe1[i].style.color=menuGUI.coulE1;
  }
 });
 equip.addColor(menuGUI,"coulE2").onChange(function(){// couleur equipe 2
  for(i=0;i<tabe2.length;i++){
    tabe1[i].style.borderColor=menuGUI.coulE2;
    tabe2[i].style.color=menuGUI.coulE2;
  }
 });
 equip.add(menuGUI,"pret");

 gui.add(menuGUI,"reset");


 function hide(object) {//fonction pour cacher ou non un dossier
  object.domElement.style.display = 'none';
}

function show(object) {
  object.domElement.style.display = '';
}


 //********************************************************
 //
 //  F I N     M E N U     G U I
 //
 //********************************************************

 //********************************************************
 //
 //  D E B U T     P A R T I E
 //
 //********************************************************

  let score1=0; //score de l'équipe une 
  let score2=0; //score de l'équipe deux
  let tourE=1;//E1: 1 2    5 6  |   E2: 3 4   7 8
  let equipe=true;//si true E1 sinon E2
  // on recupere les cases de notre tableau d'affichage html
  let C1T1E1=document.getElementById('C1T1E1');
  let C2T1E1=document.getElementById('C2T1E1');
  let C3T1E1=document.getElementById('C3T1E1');
  let C1T2E1=document.getElementById('C1T2E1');
  let C2T2E1=document.getElementById('C2T2E1');
  let C3T2E1=document.getElementById('C3T2E1');

  let C1T1E2=document.getElementById('C1T1E2');
  let C2T1E2=document.getElementById('C2T1E2');
  let C3T1E2=document.getElementById('C3T1E2');
  let C1T2E2=document.getElementById('C1T2E2');
  let C2T2E2=document.getElementById('C2T2E2');
  let C3T2E2=document.getElementById('C3T2E2');

  let Total1=document.getElementById('Total1');
  let Total2=document.getElementById('Total2');


  function score(){//fonction qui calcule le score après chaque lancé et l'affiche dans le tableau 
    if(equipe){
      if(cpt==10){
        if((tourE==1||tourE==5)){
          score1+=30;
          if(tourE==1){
            C1T1E1.innerHTML=" X ";
            C2T1E1.innerHTML=" - ";
            C3T1E1.innerHTML="30";
          }else{
            C1T2E1.innerHTML=" X ";
            C2T2E1.innerHTML=" - ";
            C3T2E1.innerHTML="30";
          }
          tourE+=1;
        }else{
          score1+=15;
          if(tourE==2){
            C2T1E1.innerHTML=" / ";
            C3T1E1.innerHTML="15";
          }else{
            if(tourE==6){
              C2T2E1.innerHTML=" / ";
              C3T2E1.innerHTML="15";
            }
          }
        }
        equipe=false;
        scene.remove(boule);
        scene.remove(CbeBoule);
        MaterialPhong1.color.set(menuGUI.coulE2);
        matCbeCourbe.color.set(menuGUI.coulE1);
        scene.add(boule);
        scene.add(CbeBoule);
        resetQuille();
      }else{
        if((tourE==1||tourE==5)){
          if(tourE==1){
            C1T1E1.innerHTML=" "+cpt+" ";
          }else{
            C1T2E1.innerHTML=" "+cpt+" ";
          }
        }else{
          score1+=cpt;
          if(tourE==2){
            let x=parseInt(C1T1E1.innerHTML);
            C2T1E1.innerHTML=" "+cpt-x+" ";
            C3T1E1.innerHTML=" "+cpt+" ";
          }else{
            if(tourE==6){
              let x=parseInt(C1T2E1.innerHTML);
              C2T2E1.innerHTML=" "+cpt-x+" ";
              C3T2E1.innerHTML=" "+cpt+" ";
            }
          }
          equipe=false;
          scene.remove(boule);
          scene.remove(CbeBoule);
          MaterialPhong1.color.set(menuGUI.coulE2);
          matCbeCourbe.color.set(menuGUI.coulE1);
          scene.add(boule);
          scene.add(CbeBoule);
          resetQuille();
        }
      }
    Total1.innerHTML=score1;

    }else{
      if(cpt==10){
        if((tourE==3||tourE==7)){
          score2+=30;
          if(tourE==3){
            C1T1E2.innerHTML=" X ";
            C2T1E2.innerHTML=" - ";
            C3T1E2.innerHTML="30";
          }else{
            C1T2E2.innerHTML=" X ";
            C2T2E2.innerHTML=" - ";
            C3T2E2.innerHTML="30";
          }
          tourE+=1;
        }else{
          score2+=15;
          if(tourE==4){
            C2T1E2.innerHTML=" / ";
            C3T1E2.innerHTML="15";
          }else{
            if(tourE==8){
              C2T2E2.innerHTML=" / ";
              C3T2E2.innerHTML="15";
            }
          }
        }
        equipe=true;
        scene.remove(boule);
        scene.remove(CbeBoule);
        MaterialPhong1.color.set(menuGUI.coulE1);
        matCbeCourbe.color.set(menuGUI.coulE2);
        scene.add(boule);
        scene.add(CbeBoule);
        resetQuille();
      }else{
        if((tourE==3||tourE==7)){
          if(tourE==3){
            C1T1E2.innerHTML=" "+cpt+" ";
          }else{
            C1T2E2.innerHTML=" "+cpt+" ";
          }
        }else{
          score2+=cpt;
          if(tourE==4){
            let x=parseInt(C1T1E2.innerHTML);
            C2T1E2.innerHTML=" "+cpt-x+" ";
            C3T1E2.innerHTML=" "+cpt+" ";
          }else{
            if(tourE==8){
              let x=parseInt(C1T2E2.innerHTML);
              C2T2E2.innerHTML=" "+cpt-x+" ";
              C3T2E2.innerHTML=" "+cpt+" ";
            }
          }
          equipe=true;
          scene.remove(boule);
          scene.remove(CbeBoule);
          MaterialPhong1.color.set(menuGUI.coulE1);
          matCbeCourbe.color.set(menuGUI.coulE2);
          scene.add(boule);
          scene.add(CbeBoule);
          resetQuille();
        }
      }
    Total2.innerHTML=score2;
    }
    tourE+=1;
  }
  
 //********************************************************
 //
 //  F I N     P A R T I E
 //
 //********************************************************

 renduAnim();
 
 document.getElementById("webgl").appendChild(rendu.domElement);
   
  // affichage de la scene
 rendu.render(scene, camera);
  
 
 function reAffichage() {
  setTimeout(function () {

  }, 200);// fin setTimeout(function ()
    // rendu avec requestAnimationFrame
  rendu.render(scene, camera);
 }// fin fonction reAffichage()
 
 
  function renduAnim() {
    stats.update();
    controls.update();
    requestAnimationFrame(renduAnim);
    rendu.render(scene, camera);
  }
 



} // fin fonction init()