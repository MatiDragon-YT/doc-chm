window.onload = asignar();
function asignar(){
  titulo = document.title;
  $('header').addClass('bg-dark h3 p-3 mt-0 mb-1 mb-md-3 text-white')
  $('header').text(titulo);
  $('table').addClass('highlight');
  $('pre').addClass('bg-dark text-white p-2 m-1');
  $('code').addClass('rounded grey lighten-4 p-1');
  $('.pre').addClass('bg-dark text-white p-2 m-1');
  $('.inf').addClass('card-panel blue lighten-5 blue-text text-darken-4 light');
  $('.dan').addClass('card-panel orange lighten-5 orange-text text-darken-4 light');
  $('.sb3').prop('title', 'Codigo de SB3');
  $('.teme-light').removeClass('bg-dark text-white')
  $('.no-p-m').removeClass('p-2 m-1')
}

var preList = document.getElementsByClassName("sb3");
var total = preList.length;

var i;
for (i = 0; i < total; i++) { 

sb3 = document.getElementsByClassName("sb3")[i];

text1 = sb3.innerHTML;

keywords1 = text1.replace(/(thread|end_thread|if|then|else|hex|end|else_jump|jump|jf|print|const|while|not|wait|repeat|until|break|continue|for|gosub|goto|var)(\s|\n)/gmi, "<b title='Palabra Clave'>$1<\/b>$2");
keywords2 = keywords1.replace(/(\s)(true|false|and|or|to|downto|step|call|ret|return_true|return_false|rf|tr)(\s|\n)/gmi, "$1<b title='Palabra Clave'>$2<\/b>$3");
keywords3 = keywords2.replace(/(Inc|Dec|Mul|Div|Alloc|Sqr|Random)(\()/gmi, "<b title='Palabra Clave'>$1<\/b>$2");
//Variables Locales
variables1 = keywords3.replace(/(\d+)(\@)(s|v)/gm, "<b class=blue-text title='Manipulador Local'>$1$2$3<\/b>");
variables2 = variables1.replace(/(\d+)(\@)/gm, "<b class=blue-text title='Manipulador Local'>$1$2<\/b>");
//Variables Publicas
variables3 = variables2.replace(/(|\s)(\$+\w+)/gm, "$1<b class=blue-text title='Manipulador Global'>$2<\/b>");
variables4 = variables3.replace(/(s|v)(\$)(\w+)/gm, "<b class=blue-text> title='Manipulador Global'>$1$2$3<\/b>");
//Etiquetas
labels1 = variables4.replace(/(\s+\@+\w+|\:+\w+)/gm, "<b class='green-text' title=Etiqueta>$1<\/b>");
//Comentarios 
comments1 = labels1.replace(/(\B\/\/)(.*)(\n)/gm, "<i class=grey-text title=Comentario>$1$2$3<\/i>");
comments2 = comments1.replace(/(\B\/+\*)(.+)(\*+\/)/gm, "<i class=grey-text title=Comentario>$1$2$3<\/i>");
comments3 = comments2.replace(/(\B\{)(.+)(\})/gm, "<i class=grey-text title=Comentario>$1$2$3<\/i>");
//Hexadecimales
hexs1 = comments3.replace(/(\d)(x)(\d|\w)(\d|\w)(\d|\w)(\d|\w)(\d|\w)(\d|\w)(\d|\w)(\d|\w)/gmi, "<b class=red-text title=Hexadecimal>$1$2$3$4$5$6$7$8$9$10<\/b>");
hexs2 = hexs1.replace(/(\d)(x)(\d|\w)(\d|\w)(\d|\w)(\d|\w)(\d|\w)(\d|\w)/gmi, "<b class=red-text title=Hexadecimal>$1$2$3$4$5$6$7$8<\/b>");
hexs3 = hexs2.replace(/(\d)(x)(\d|\w)(\d|\w)(\d|\w)(\d|\w)/gmi, "<b class=red-text title=Hexadecimal>$1$2$3$4$5$6<\/b>");
hexs4 = hexs3.replace(/(\d)(x)(\d|\w)(\d|\w)/gmi, "<b class=red-text title=Hexadecimal>$1$2$3$4<\/b>");
hexs5 = hexs4.replace(/(0)(x)(0)/gmi, "<b class=red-text title=Hexadecimal>$1$2$3<\/b>");
//Numeros
numbers1 = hexs5.replace(/(\d+)(\.)(\d+)/gmi, "<b class=red-text title=Flotante>$1$2$3<\/b>");
//Arreglos
arrays1 = numbers1.replace(/(\[)([\d+]*)(\])/gmi, "<font title=Arreglo>$1<b class=red-text>$2<\/b>$3<\/font>");
//Opcode
opcode1 = arrays1.replace(/(\w+)(\:)/gmi, "<font class='white-text uppercase' title=Opcode>$1$2<\/font>");
numbers3 = opcode1.replace(/(\(|\s)(\d+)/gmi, "$1<b class=red-text title=Entero>$2<\/b>");
//Strings
strings1 = numbers3.replace(/(\")(.*)(\")/gmi,"<b class=orange-text title='Cadena Larga'>$1$2$3<\/b>");
strings2 = strings1.replace(/(\')(\w*)(\')/gmi,"<b class=orange-text title='Cadena Corta'>$1$2$3<\/b>");
//Models
models1 = strings2.replace(/(\#+\w+)/gm, "<b class='red-text uppercase' title=Modelo>$1<\/b>");
//clase
class1 = models1.replace(/(\w+)(\.)(\w+)(\()/gm, "<b class=yellow-text title='Nombre de la Clase'>$1</b>$2<b class=teal-text title='Miembro de la Clase'>$3</b>$4");
/*
//Numeros
numbers2 = comments1.replace(/(\d+\.|\d+\s|\d+x|\d+\.|\xhh)/gm, "<b class='text-red'>$1<\/b>");
numbers3 = numbers2.replace(/(\[)([\d+]*)(\])/gm, "$1<b class='text-red'>$2<\/b>$3");
numbers4 = numbers3.replace(/(\d+)(\,)/gm, "<b class='text-red'>$1<\/b>$2");
//Modelos
models1 = numbers3.replace(/(\#+[A-z.]+|\#+[A-z.]+[0-9.]+)/gm, "<b class='text-red uppercase'>$1<\/b>");
//clase y comando
coc1 = variables4.replace(/(\w+)(\.)(\w+)(\()/gm, "<b class='text-yellow'>$1</b>$2<b class='text-teal'>$3</b>$4");
*/
sb3.innerHTML = class1;
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