'use strict'

exports.post = (req, res, next) => {

    const valor = req.body.Valor;
    const adquirente = req.body.Adquirente;
    const bandeira = req.body.Bandeira;
    const tipo = req.body.Tipo;
    
    const verificador = verificar(valor, adquirente, bandeira, tipo);

    if (verificador){

        const ValorLiquido = calcValorLiquido(valor, adquirente, bandeira, tipo);

        res.status(201).send({ValorLiquido});

    }

    else{

        res.status(406).send("Por favor, preencha os dados corretamente.");

    }
};

function calcValorLiquido(valor, adquirente, bandeira, tipo){
    
    var taxa = pegarTaxa(adquirente, bandeira, tipo);
    
    var desconto = valor * taxa;

    var valorFinal = valor - desconto;

    return valorFinal;
}

function pegarTaxa(adquirente, bandeira, tipo){

    var taxa = 0;

    if (adquirente == "A" || adquirente == "a"){

        if(bandeira == "visa" || bandeira == "Visa"){

            if(tipo == "credito" || tipo == "Credito" || tipo == "crédito" || tipo == "Crédito"){
                taxa = 0.0225; 
                return taxa;
            }
            if(tipo == "debito" || tipo == "Debito" || tipo == "débito" || tipo == "Débito"){
                taxa = 0.02;  
                return taxa;
            }
        }
        if(bandeira == "master" || bandeira == "Master"){

            if(tipo == "credito" || tipo == "Credito" || tipo == "crédito" || tipo == "Crédito"){
                taxa = 0.0235;  
                return taxa;
            }
            if(tipo == "debito" || tipo == "Debito" || tipo == "débito" || tipo == "Débito"){
                taxa = 0.0198;  
                return taxa;
            }
        }
    }

    if (adquirente == "B" || adquirente == "b"){
        
        if(bandeira == "visa" || bandeira == "Visa"){

            if(tipo == "credito" || tipo == "Credito" || tipo == "crédito" || tipo == "Crédito"){
                taxa = 0.025;  
                return taxa;
            }
            if(tipo == "debito" || tipo == "Debito" || tipo == "débito" || tipo == "Débito"){
                taxa = 0.0208;  
                return taxa;
            }
        }
        if(bandeira == "master" || bandeira == "Master"){

            if(tipo == "credito" || tipo == "Credito" || tipo == "crédito" || tipo == "Crédito"){
                taxa = 0.0265;  
                return taxa;
            }
            if(tipo == "debito" || tipo == "Debito" || tipo == "débito" || tipo == "Débito"){
                taxa = 0.0175;  
                return taxa;
            }
        }
    }

    if (adquirente == "C" || adquirente == "c"){
        
        if(bandeira == "visa" || bandeira == "Visa"){

            if(tipo == "credito" || tipo == "Credito" || tipo == "crédito" || tipo == "Crédito"){
                taxa = 0.0275;  
                return taxa;
            }
            if(tipo == "debito" || tipo == "Debito" || tipo == "débito" || tipo == "Débito"){
                taxa = 0.0216;  
                return taxa;
            }
        }
        if(bandeira == "master" || bandeira == "Master"){

            if(tipo == "credito" || tipo == "Credito" || tipo == "crédito" || tipo == "Crédito"){
                taxa = 0.0310;  
                return taxa;
            }
            if(tipo == "debito" || tipo == "Debito" || tipo == "débito" || tipo == "Débito"){
                taxa = 0.0158;  
                return taxa;
            }
        }
    }
}

function verificar(valor, adquirente, bandeira, tipo){
    if (typeof valor == "number"){
        if (adquirente == "A" || adquirente == "B" || adquirente == "C" || adquirente == "a" || adquirente == "b" || adquirente == "c"){
            if (bandeira == "visa" || bandeira == "master" || bandeira == "Visa" || bandeira == "Master"){
                if (tipo == "credito" || tipo == "Credito" || tipo == "crédito" || tipo == "Crédito" || tipo == "debito" || tipo == "Debito" || tipo == "débito" || tipo == "Débito"){
                return true;
                }
            }
        }
    }
    else {
        return false;
    }
}