function operaciones(op)
{

    var ops = {
        +: function sumarNumeros(n1, n2) {
            return (parseInt(n1) + parseInt(n2));
        },

        -: function restarNumeros(n1, n2) {
            return (parseInt(n1) - parseInt(n2));
        },
        
        x: function multiplicarNumeros(n1, n2) {
            return (parseInt(n1) * parseInt(n2));
        },

        x: function dividirNumeros(n1, n2) {
            return (parseInt(n1) / parseInt(n2));
        }


    }
}	
