$(document).ready(function(){

  $("#cep").mask("99.999-999");

       $("#btBuscar").click(function(){

    	   var cepvalue = $("#cep").val();
         $("#cep").val("");
        cepvalue = cepvalue.replace(/\./g, "");
        cepvalue = cepvalue.replace(/\-/g, "");
    	   debugger;
    	   $.ajax({
    		    url: 'https://viacep.com.br/ws/' + cepvalue + '/json/',
    		    type: "GET",
    		    dataType: "json",
    		    success: function (data) {
 				   // alert(data) //para exibir que chegou o JSON;
    		    	
    		    	$("#logradouro").val(data.logradouro);
    		    	$("#complemento").val(data.complemento);
    		    	$("#bairro").val(data.bairro);
    		    	$("#uf").val(data.uf);
    		    	$("#cidade").val(data.localidade);


    		    },
    		    error: function(result) {
                    alert("CEP não encontrado");
                    debugger;
                }
    	   
    		});
       });

        $("#btLimpar").click(function(){ 
			$('input').val('');

        });

       
       $.exibirDadosFormatoJson = function (data){ 
    	   
      	jsonStr = JSON.stringify(data),
   	    regeStr = '',
   	    f = { brace: 0 }; // for tracking matches, in particular the curly braces

   	regeStr = jsonStr.replace(/({|}[,]*|[^{}:]+:[^{}:,]*[,{]*)/g, function (m, p1) {
   	    var rtnFn = function() {
   	            return '<div style="text-indent: ' + (f['brace'] * 20) + 'px;">' + p1 + '</div>';
   	        },
   	        rtnStr = 0;
   	    if (p1.lastIndexOf('{') === (p1.length - 1)) {
   	        rtnStr = rtnFn();
   	        f['brace'] += 1;
   	    } else if (p1.indexOf('}') === 0) {
   	        f['brace'] -= 1;
   	        rtnStr = rtnFn();
   	    } else {
   	        rtnStr = rtnFn();
   	    }
   	    return rtnStr;
   	});

   	document.getElementById('regeStr').innerHTML += regeStr;  
   }
      
}); //index.jsp



