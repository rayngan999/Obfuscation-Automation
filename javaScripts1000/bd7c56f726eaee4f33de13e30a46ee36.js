console.log("Carregamento do projetoComprar.js - AtualizaÃ§Ã£o 10/04/2018 21:06");

/* Exemplo de comentÃ¡rio para
  vÃ¡rias linhas.
  Basta escolher o inÃ­cio e fim. */

var clienteID = 1;


function botao_comprar_clique (produtoID, variantID){

			        var sessao = getCookie("sessaoID");
                    var idSessao = '0';
                    

	                var qtde = $(".amount-in-cart-" + produtoID).val();

                    vtexjs.checkout.getOrderForm().done(function(e){

                        createCookie('emailCliente','0');

                        console.log(e);


                        var teste = e.clientProfileData;
                        

                        if (teste !== null) {

                            createCookie('emailCliente',e.clientProfileData.email);                            

                        }

                        idSessao = e.orderFormId;

                        
                    });
			        
                    var item = { id: variantID, quantity: qtde, seller: 1 };
                    vtexjs.checkout.addToCart([item]).done(function(a){
                    
 
                        $(".show-action-" + produtoID).fadeOut(50);
                    
                        $(".show-action-success-" + produtoID).fadeIn(100);
                    
                        if(a.messages.length > 0){
                                                
                            $("p#erro-quantidade").css("display", "block");         
                   
                        }
                    });

                    vtexjs.checkout.getOrderForm().done(function(e){
        

                        if (sessao == ""){                        
                            createCookie('sessaoID',idSessao,10);
                            sessao = getCookie("sessaoID");
                        } 
                        
                    });

                    

                    

                      

                    

                                     
                    /*var dados = {
                        sessaoID: getCookie("sessaoID"),
                        produto: produtoID,
                        cliente: clienteID,
                        emailCliente: getCookie('emailCliente'),
                        fonte: 'BotÃ£o Comprar Simples'
                    }
                    

                    $.post("https://www.rsgtecnologia.com/app/insereSession.php", dados, function(){
                        console.log("salvei");                                             

                        console.log(sessao);
                    })*/
           
};    

function botao_comprar_clique_variacoes (produtoID, variantID){

                    vtexjs.checkout.getOrderForm().done(function(e){

                        createCookie('emailCliente','0');

                        console.log(e);


                        var teste = e.clientProfileData;
                        

                        if (teste !== null) {

                            createCookie('emailCliente',e.clientProfileData.email);

                        }
                    });

                
                    var datetime = new Date();

                    var month = datetime.getMonth();
                    var day = datetime.getDate();
                    var year = datetime.getFullYear();

                    var hour = datetime.getHours();
                    var min = datetime.getMinutes();
                    var sec = datetime.getSeconds();
                    var mseg = datetime.getMilliseconds()

                    var dateTimeString = day+""+month+""+year+""+hour+""+min+""+sec+""+mseg;
                    
                    
                    /*var dados = {
                        sessaoID: dateTimeString,
                        produto: produtoID,
                        cliente: clienteID,
                        emailCliente: getCookie('emailCliente'),
                        fonte: 'BotÃ£o Comprar VariaÃ§Ã£o'
                    }
                    

                    $.post("https://www.rsgtecnologia.com/app/insereSession.php", dados, function(){
                        console.log("Registro Salvo");
                        createCookie('sessaoID',dateTimeString,10);
                        createCookie('produtoAnterior',produtoID,10);

                        console.log(getCookie('sessaoID'));
                    })*/
           
};          


function createCookie (name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
    
}       
                

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}               
              
                
