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

	//Cadenas de texto
	strings1 = text1.replace(/(\")(.*)(\")/gmi,"<b class='orange-text text-accent-3'>$1$2$3<\/b>");
	strings2 = strings1.replace(/(\')(\w*)(\')/gmi,"<b class='orange-text text-accent-3'>$1$2$3<\/b>");
	//Palabras CLaves
	keywords1 = strings2.replace(/(thread|end_thread|if|then|else|hex|end|else_jump|jump|jf|print|const|while|not|wait|repeat|until|break|continue|for|gosub|goto|var)(\s|\n)/gmi, "<b>$1<\/b>$2");
	keywords2 = keywords1.replace(/(\s)(true|array|of|false|and|or|to|downto|step|call|ret|return_true|return_false|rf|tr)(\s|\n)/gmi, "$1<b>$2<\/b>$3");
	keywords3 = keywords2.replace(/(Inc|Dec|Mul|Div|Alloc|Sqr|Random)(\()/gmi, "<b title='Palabra Clave'>$1<\/b>$2");
	keywords4 = keywords3.replace(/(\s|\n)(int|string|float|bool)/gmi, "$1<b title='Palabra Clave'>$2<\/b>");
	//Etiquetas
	labels1 = keywords4.replace(/(\s+\@+\w+|\:+\w+)/gm, "<b class='green-text' title=Etiqueta>$1<\/b>");
	labels2 = labels1.replace(/(\n|\s)(\w+\(\))/gm, "$1<b class='teal-text text-lighten-1'>$2<\/b>");	
	//Hexadecimales
	hexs5 = labels2.replace(/(0x\w+)/gmi, "<b class=red-text><u>$1<\/u><\/b>");
	//Arreglos
	arrays1 = hexs5.replace(/(\[)([\d+]*)(\])/gmi, "$1<b class='red-text'>$2<\/b>$3");
	//Opcodes
	opcode1 = arrays1.replace(/([a-fA-F0-9][a-fA-F0-9][a-fA-F0-9][a-fA-F0-9]\:)/gmi, "<font class='uppercase'>$1<\/font>");
	//Numeros
	numbers1 = opcode1.replace(/(\(|\s|\-|\,)(\d+)(\.)(\d+|\d+\f)/gmi, "$1<b class='red-text'><u>$2$3$4<\/u><\/b>");
	numbers2 = numbers1.replace(/(\(|\s|\-|\,)(\d+|\d+\i)(\n|\s|\,|\))/gmi, "$1<b class='red-text'><u>$2<\/u><\/b>$3");
	//Modelos
	models1 = numbers2.replace(/(\#+\w+)/gm, "<b class='red-text uppercase' title=Modelo>$1<\/b>");
	//Clases
	class1 = models1.replace(/(BodyPart|Actor|Object|Car|Player|Camera|Model|Marker|Pickup|Garage|File|Wav|Audiostream|Component|Animation|Gxt|Game|Interior|SCMpath|Particle|iniFile|Panel|Sprite|Texture)(\.)(\w+)/gmi, "<b class='lime-text text-accent-2'>$1<\/b>$2<b class='teal-text text-lighten-1'>$3</b>");
	class2 = class1.replace(/\.([a-zA-Z]+)/gm, ".<b class='teal-text text-lighten-1'>$1</b>");
	//Comentarios 
	comments1 = class2.replace(/(\B\/\/)(.*)(\n)/gm, "<i class=grey-text title=Comentario>$1$2$3<\/i>");
	comments2 = comments1.replace(/(\B\/+\*)(.+)(\*+\/)/gm, "<i class=grey-text title=Comentario>$1$2$3<\/i>");
	comments3 = comments2.replace(/(\B\{)(.+)(\})/gm, "<i class=grey-text title=Comentario>$1$2$3<\/i>");
	//Directivas
	directive1 = comments3.replace(/(\{\$)(CLEO|OPCODE|NOSOURCE)(\s\w+\}|\})/gmi, "<b class='blue-text'>$1$2$3<\/b>");
	//Variables
	variables1 = directive1.replace(/(\d+)(\@s|\@v|\@)(\:|\s|\]|\.|\))/gm, "<b class='blue-text'>$1$2<\/b>$3");
	variables2 = variables1.replace(/(\&amp\;)(\d+)(\:|\s)/gm, "<b class='blue-text'>$1$2<\/b>$3");
	variables3 = variables2.replace(/(\B)(\$\w+)/gm, "<b class='blue-text'>$1$2<\/b>");
	//Simbolos
	symbol1 = variables3.replace(/(\t)/gmi,"    ");
	//symbol2 = symbol1.replace(/(\s)(\=|\+|\-|\*|\/|\%|\=\=|\+\=|-=|\*\=|\/\=|\%\=|\+\+|\-\-|\<|\>|\<\=|\>\=)(\s)/gmi,"$1<font class=\"cyan-text text-lighten-2\">$2<\/font>$3");

	sb.innerHTML = symbol1;
}


var pList_scm = document.getElementsByClassName("scm");
var total_scm = pList_scm.length;
var i_scm;
for (i_scm = 0; i_scm < total_scm; i_scm++) { 
	csm = document.getElementsByClassName("scm")[i_scm];
	text = csm.innerHTML;

	//Comentarios 
	a = text.replace(/(\B\;|\s\/\/)(.*)(\n)/gm, "<i class=grey-text title=Comentario>$1$2$3<\/i>");
	//Palabras CLaves
	b = a.replace(/(PUBLISHER\=|DATE\=)/gmi, "<b title='Palabra Clave'>$1<\/b>");
	//Licks
	c = b.replace(/\((http|https)\:\/\/(.*)\)/gmi, "(<a href=$1://$2 title='Visitar Pagina'>$1://$2<\/a>)");
	//Opcodes
	d = c.replace(/(\n[a-fA-F0-9][a-fA-F0-9][a-fA-F0-9][a-fA-F0-9])/gmi, "<font class='uppercase' title=Opcode>$1<\/font>");
	//Parametros
	e = d.replace(/(\=\d+|\=n)(\,|\s)/gmi, "<\/font><font class='pink-text' title=Parametros>$1<\/font><font class='grey-text text-darken-2' title=Parametros>$2<\/font>");
	
//;%~d% = Cualquier Valor
	f = e.replace(/(\%\dd\%|\%\~d\%)/gmi, "<b class='blue-text' title=\"Cualquier valor\">$1<\/b>");
//;%~p% = Salto a una Etiqueta
	g = f.replace(/(\%\dp\%|\%\~p\%)/gmi, "<b class='cyan-text' title=\"Salto a una etiqueta\">$1<\/b>");
//;%~o% = Modelos de todo tipo
	h = g.replace(/(\%\do\%|\%\~o\%)/gmi, "<b class='teal-text' title=\"Modelos de todo tipo\">$1<\/b>");
//;%~m% = ID de Modelo de los .ide 
	i = h.replace(/(\%\dm\%|\%\~m\%)/gmi, "<b class='green-text' title=\"ID de Modelo de los .ide\">$1<\/b>");
//;%~g% = Texto de una entrada GXT
	j = i.replace(/(\%\dg\%|\%\~g\%)/gmi, "<b class='yellow-text' title=\"Texto de una entrada GXT\">$1<\/b>");
//;%~x% = Script Externo
	k = j.replace(/(\%\dx\%|\%\~x\%)/gmi, "<b class='amber-text' title=\"Script Externo\">$1<\/b>");
//;%~s% = Directorio de archivo/carpeta
	l = k.replace(/(\%\ds\%|\%\~s\%)/gmi, "<b class='orange-text' title=\"Directorio de archivo/carpeta\">$1<\/b>");
//;%~h% = Indefinido
	m = l.replace(/(\%\dh\%|\%\~h\%)/gmi, "<b class='red-text' title=\"Indefinido/Desconosido\">$1<\/b>");	

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