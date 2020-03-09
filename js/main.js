function mostraSigno(){
    var dia = document.getElementById("inputNas").value;
    var mes = document.getElementById("inputMes").value;
    var img = new Image();
    var parametro = document.getElementById("secao");
    dia = parseInt(dia);
    mes = parseInt(mes);

    if(dia<1 || dia>31){
        alert("Dado incorreto!!");
        parametro.innerText("Parametro Incorreto");
    }else if(mes<1 || mes>12){
        alert("Dado incorreto!!");
    }
    if(document.getElementById("inputNas").value == "" || document.getElementById("inputMes").value == ""){
        alert('Por favor, preencha o campo');  
    }

    if(dia >=1 && dia<=31 && mes >= 1 && mes<=12){
        
        if(mes==4){
            if(dia>=1 && dia<=20){
                img.src = 'img/aries.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Aries');
                parametro.appendChild(img);
            }
        else
        
            if(dia>=21 && dia<=30){
                img.src = 'img/touro.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Touro');
                parametro.appendChild(img);
            }
            else{
                img.src = 'img/nenhum.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Parametro incorreto');
                parametro.appendChild(img);
            }
            
        }
        if(mes==5){
            if(dia>=1 && dia<=20){
                img.src = 'img/touro.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Touro');
                parametro.appendChild(img);
            }
        
        else
            if(dia>=21 && dia<=31){
                img.src = 'img/gemeos.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Gêmeos');
                parametro.appendChild(img);
            }
            
        }
        if(mes==6){
            if(dia>=1 && dia<=20){
                img.src = 'img/gemeos.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Gêmeos');
                parametro.appendChild(img);
            }
        
        else
            if(dia>=21 && dia<=30){
                img.src = 'img/cancer.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Câncer');
                parametro.appendChild(img);
            }
            else{
                img.src = 'img/nenhum.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Parametro incorreto');
                parametro.appendChild(img);
            }
            
        }
        if(mes==7){
            if(dia>=1 && dia<=20){
                img.src = 'img/cancer.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Câncer');
                parametro.appendChild(img);
            }
        
        else
            if(dia>=22 && dia<=31){
                img.src = 'img/leao.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Leão');
                parametro.appendChild(img);
            }
           
        }
        if(mes==8){
            if(dia>=1 && dia<=22){
                img.src = 'img/leao.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Leão');
                parametro.appendChild(img);
            }
        else
            if(dia>=23 && dia<=31){
                img.src = 'img/virgem.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Virgem');
                parametro.appendChild(img);
            }
            
        }
        if(mes==9){
            if(dia>=1 && dia<=22){
                img.src = 'img/virgem.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Virgem');
                parametro.appendChild(img);
            }
        else
            if(dia>=23 && dia<=30){
                img.src = 'img/libra.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Libra');
                parametro.appendChild(img);
            }
            else{
                img.src = 'img/nenhum.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Parametro incorreto');
                parametro.appendChild(img);
            }
            
        }
        if(mes==10){
            if(dia>=1 && dia<=22){
                img.src = 'img/libra.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Libra');
                parametro.appendChild(img);
            }
       else
            if(dia>=23 && dia<=31){
                img.src = 'img/escorpiao.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Escorpião');
                parametro.appendChild(img);
            }
            
        }
        if(mes==11){
            if(dia>=1 && dia<=21){
                img.src = 'img/escorpiao.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Escorpião');
                parametro.appendChild(img);
            }
        else
            if(dia>=22 && dia<=30){
                img.src = 'img/sagitario.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Sagitário');
                parametro.appendChild(img);
            }
            else{
                img.src = 'img/nenhum.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Parametro incorreto');
                parametro.appendChild(img);
            }
            
        }
        if(mes==12){
            if(dia>=1 && dia<=21){
                img.src = 'img/sagitario.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Sagitário');
                parametro.appendChild(img);
            }
        else
            if(dia>=22 && dia<=31){
                img.src = 'img/capricornio.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Capricórnio');
                parametro.appendChild(img);
            }

            
        }
        if(mes==1){
            if(dia>=1 && dia<=20){
                img.src = 'img/capricornio.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Capricórnio');
                parametro.appendChild(img);
            }
        else
            if(dia>=21 || dia<=31){
                img.src = 'img/aquario.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Aquário');
                parametro.appendChild(img);
            }
           
            
        }
        if(mes==2){
            if(dia>=1 && dia<=19){
                img.src = 'img/aquario.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Aquário');
                parametro.appendChild(img);
            }
        
        else
            if(dia>=20 && dia<=28){
                img.src = 'img/peixes.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Peixes');
                parametro.appendChild(img);
            }else{
                img.src = 'img/nenhum.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Parametro incorreto');
                parametro.appendChild(img);
            }
            
        }
        if(mes==3){
            if(dia>=1 && dia<=20){
                img.src = 'img/peixes.png';
                parametro.style.display = "block";
                parametro.innerHTML = ('Peixes');
                parametro.appendChild(img);
            }
            else
                if(dia>=21 && dia<=31){
                    img.src = 'img/aries.png';
                    parametro.style.display = "block";
                    parametro.innerHTML = ('Aries');
                    parametro.appendChild(img);
                }
                
            }
        }
        
    }
    

   

    
    
