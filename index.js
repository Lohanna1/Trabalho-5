function alterarlargura(){
    const lbl = document.querySelector("#lblLargura");
    const ipt = document.querySelector("#iptLargura");
    lbl.innerHTML = ipt.value;
   
    const box = document.querySelector("#box");
    box.style.width = ipt.value+"px"
  }
    
  function alterarAltura(){
    const lbl = document.querySelector("#lblAltura");
    const ipt = document.querySelector("#iptAltura");
    lbl.innerHTML = ipt.value;
  
     const box = document.querySelector("#box");
    box.style.height = ipt.value+"px"
  }
  
  function alterarTopo(){
    const lbl = document.querySelector("#lblTopo");
    const ipt = document.querySelector("#iptTopo");
    lbl.innerHTML = ipt.value;
  
     const box = document.querySelector("#box");
    box.style.marginTop = ipt.value+"px"
  }
  
  function alterarEsquerda(){
    const lbl = document.querySelector("#lblEsquerda");
    const ipt = document.querySelector("#iptEsquerda");
    lbl.innerHTML = ipt.value;
  
     const box = document.querySelector("#box");
    box.style.marginLeft = ipt.value+"px"
  }
  function alterarCor(){
    const lblr = document.querySelector("#lblVermelho");
    const iptr = document.querySelector("#iptVermelho");
    lblr.innerHTML = iptr.value;
  
    const lblg = document.querySelector("#lblVerde");
    const iptg = document.querySelector("#iptVerde");
    lblg.innerHTML = iptg.value;
    
    const lblb = document.querySelector("#lblAzul");
    const iptb = document.querySelector("#iptAzul");
    lblb.innerHTML = iptb.value;
  
     const box = document.querySelector("#box");
    box.style.backgroundColor = "rgb ("+iptr.value+","+iptg.value+","+iptb.value+")"
  }
  
  function Criarbox(){
    const bloco = document.createElement("div");
    bloco.classList.add('box');
    box.style.width = alterarlargura();
     box.style.heigth = alterarAltura();
    box.style.marginTop = alterarTopo();
     box.style.marginLeft = alterarEsquerda();
     box.style.backgroundColor = alterarCor();
    const body = document.querySelector("body");
    body.appendChild(bloco);
  }