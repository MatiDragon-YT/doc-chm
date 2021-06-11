window.onload = asignar();
function asignar(){
  titulo = document.title;
  $('body').addClass('black text-white');
  $('header').addClass('bg-dark h3 p-3 mt-0 mb-1 mb-md-3 text-white');
  $('header').text(titulo);
  $('table').addClass('highlight text-white');
  $('pre').addClass('bg-dark text-white p-2 m-1');
  $('code').addClass('text-white text-lighten-4 grey rounded darken-4 p-1');
  $('.pre').addClass('bg-dark text-white p-2 m-1');
  $('.inf').addClass('card-panel black text-info border border-info');
  $('.dan').addClass('card-panel black text-danger border border-danger');
  $('.sb3').prop('title', 'Codigo de SB3');
  $('.teme-light').removeClass('bg-dark text-white');
  $('.no-p-m').removeClass('p-2 m-1');
  $('input').addClass('white-text');
}

var pList_sb = document.getElementsByClassName("sb3");
var total_sb = pList_sb.length;
var i_sb;
for (i_sb = 0; i_sb < total_sb; i_sb++) { 
     sb = document.getElementsByClassName("sb3")[i_sb];
     text1 = sb.innerHTML;

     //Comentarios 
     comments1 = text1.replace(/(\/\/.+)/gm, "<i class=comentario>$1<\/i>");
     comments2 = comments1.replace(/(\/\*[\x09-.0-因*\*\/)/gmi, "<i class=comentario>$1<\/i>");
     comments3 = comments2.replace(/(\{[\x09-z\|~-因*\})/gmi, "<i class=comentario>$1<\/i>");
     //Cadenas de texto
     strings1 = comments3.replace(/\"([\x09-\!#-因*)\"/gmi, "<b class=cadena>\"$1\"<\/b>");
     strings2 = strings1.replace(/\'([!-&(-因+)\'/gmi, "<b class=cadena>\'$1\'<\/b>");
     //Palabras Reservadas
     keywords1 = strings2.replace(/\b(longstring|shortstring|integer|jump_if_false|true|false|timera|timerb|thread|create_thread|create_custom_thread|end_thread|name_thread|end_thread_named|if|then|else|hex|end|else_jump|jump|jf|print|const|while|not|wait|repeat|until|break|continue|for|gosub|goto|var|array|of|and|or|to|downto|step|call|return_true|return_false|return|ret|rf|tr|Inc|Dec|Mul|Div|Alloc|Sqr|Random|int|string|float|bool|fade|DEFINE|select_interior|set_weather|set_wb_check_to|nop)\b/gmi, "<b>$1<\/b>");
     //Etiquetas
     labels1 = keywords1.replace(/(\s+\@+\w+|\:+\w+)/gm, "<b class=etiqueta>$1<\/b>");
     labels2 = labels1.replace(/(\s[A-Za-z]+\(\))/gm, "<b class=miembro>$1<\/b>");
     //Arreglos
     arrays1 = labels2.replace(/(\[)([\d+]*)(\])/gmi, "$1<b class=numero>$2<\/b>$3");
     //Opcodes
     opcode1 = arrays1.replace(/([a-fA-F0-9]{4}\:)/gmi, "<span class='uppercase'>$1<\/span>");
     //Numeros
     numbers1 = opcode1.replace(/\b(\d+)(x|\.)(\w+)\b/gmi, "<b class=numero><u>$1$2$3<\/u><\/b>");
     numbers2 = numbers1.replace(/(\s|\-|\,)(?!\$)(\d+)(?!\:|\@)(i)?\b/gmi, "$1<b class=numero><u>$2$3<\/u><\/b>");
     //Modelos
     models1 = numbers2.replace(/(\#+\w+)/gm, "<b class='numero uppercase'>$1<\/b>");
     //Clases
     class1 = models1.replace(/(Actor|Animation|Audio|AudioStream|Blip|Boat|Camera|Car|CarGenerator|Clock|Credits|Component|Cutscene|Debugger|DynamicLibrary|File|Fx|Game|Garage|Gxt|Heli|Hid|IniFile|Input|Interior|List|Marker3D|Math|Memory|Model|Object|Pickup|Player|Path|Rc|Render|Restart|ScriptFire|Screen|Sequence|Sphere|Sprite|String|Texture|Train|Txd|WeaponInfo|Weather|Widget|World)(\.)(\w+)/gmi, "<b class=clase>$1<\/b>$2<b class=miembro>$3</b>");
     class2 = class1.replace(/(\$\w+|\d+\@)\.([0-9A-Z_a-z]+)/gm, "$1.<b class=miembro>$2</b>");
     //Directivas
     directive1 = class2.replace(/(\{\$)(CLEO|OPCODE|NOSOURCE)(\s\w+\}|\})/gmi, "<b class=variable>$1$2$3<\/b>");
     //Variables
     variables1 = directive1.replace(/(\d+)(\@s|\@v|\@)(\:|\s|\n|\]|\.|\,||\))/gm, "<b class=variable>$1$2<\/b>$3");
     variables2 = variables1.replace(/(\&amp;\d+)/gim, "<b class=variable>$1<\/b>");
     variables3 = variables2.replace(/(\x{00}|s|v)(\$[0-9A-Z_a-z]+)/gm, "<b class=variable>$1$2<\/b>");
     //Simbolos
     symbol1 = variables3.replace(/(\t)/gmi, "    ");
     symbol2 = symbol1.replace(/^(\w|\W)/gmi, "<c></c>$1");
     //symbol3 = symbol2.replace(/\s(\=|\+|\-|\*|\/|\%|\=\=|\+\=|\-\=|\*\=|\/\=|\%\=|\+\+|\-\-|\<|\>|\<\=|\>\=)\s/gmi," <font class=operador>$1<\/font> ");

     sb.innerHTML = symbol2;
}


var pList_scm = document.getElementsByClassName("scm");
var total_scm = pList_scm.length;
var i_scm;
for (i_scm = 0; i_scm < total_scm; i_scm++) { 
     csm = document.getElementsByClassName("scm")[i_scm];
     text = csm.innerHTML;

     //Comentarios 
     a = text.replace(/(\B\;|\s\/\/)(.*)(\n)/gm, "<i class=grey-text>$1$2$3<\/i>");
     //Palabras CLaves
     b = a.replace(/(PUBLISHER\=|DATE\=)/gmi, "<b>$1<\/b>");
     //Licks
     c = b.replace(/(http\:\/\/|https\:\/\/)(.*)/gmi, "(<a href='$1$2''>$1$2<\/a>)");
     //Opcodes
     d = c.replace(/(0[A-Ga-g0-9]{3})/gmi, "<a href='https://gtagmodding.com/opcode-database/opcode/$1/' title='Ver en gtagmodding'>$1<\/a>");
     //Parametros
     e = d.replace(/(\=\d+|\=\-\d+|\=n)(\,|\s)/gmi, "<span class='pink-text' title='Numero de parametros'>$1<\/span><span class='grey-text text-darken-2'>$2<\/span>");
     /*
     %~i% = N�mero Entero (Int)
     %~f% = N�mero Decimal (Float)
     %~s% = Cadena Literaria (String)
     %~p% = Salto a una Etiqueta (Label)
     %~d% = Cualquier tipo de valor
     %~o% = Cualquier tipo de modelo
     %~g% = Entrada de textos (GXT)
     %~x% = Guion Externo (Script)
     %~h% = Indefinido/Desconocido
     %~k% = 128-byte null-terminated string
     %~m% = Modelo Registrado en .ide

     =n   = Cantidad de parametros
     */

     //;%~d% = Cualquier Valor
     f = e.replace(/(\%)(\d+|\~)(d\%)/gmi, "<b class='blue-text' title='Cualquier tipo de valor'>$1$2$3<\/b>");
     //;%~p% = Salto a una Etiqueta
     g = f.replace(/(\%)(\d+|\~)(p\%)/gmi, "<b class='cyan-text' title='Salto a una etiqueta (Label)'>$1$2$3<\/b>");
     //;%~o% = Cualquier tipo de modelo
     h = g.replace(/(\%)(\d+|\~)(o\%)/gmi, "<b class='teal-text' title='Cualquier tipo de modelo'>$1$2$3<\/b>");
     //;%~m% = Modelo registrado en .ide 
     i = h.replace(/(\%)(\d+|\~)(m\%)/gmi, "<b class=''green-text'' title='Modelo registrado en .ide'>$1$2$3<\/b>");
     //;%~g% = Entrada de textos (GXT)
     j = i.replace(/(\%)(\d+|\~)(g\%)/gmi, "<b class='yellow-text' title='Entrada de textos (GXT)'>$1$2$3<\/b>");
     //;%~x% = Guion externo (Script)
     k = j.replace(/(\%)(\d+|\~)(x\%)/gmi, "<b class='amber-text' title='Guion externo (Script)'>$1$2$3<\/b>");
     //;%~s% = Cadena literaria (String)
     l = k.replace(/(\%)(\d+|\~)(s\%)/gmi, "<b class='orange-text' title='Cadena literaria (String)'>$1$2$3<\/b>");
     //;%~h% = Indefinido/Desconocido
     m = l.replace(/(\%)(\d+|\~)(h\%)/gmi, "<b class='red-text' title='Indefinido/Desconocido'>$1$2$3<\/b>");

     csm.innerHTML = m;
}

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}