var list = document.getElementsByTagName("LI");
		var i;
		for (var i = 0; i < list.length; i++) {
			var span1 = document.createElement("SPAN");
			var span2 = document.createElement("SPAN");
			var txt = document.createTextNode("\u00D7");//x harfinin tam kapat işareti olanı
			span1.className = "close";//hepsini akraba yaptık ki kolay ulaşalım
			span1.appendChild(txt);
			list[i].appendChild(span1);
			/*span2.className = "checked";
			span2.appendChild(txt);
			list[i].appendChild(span2);*/
		}//Listedeki her elemanı kapatmak ve işaretlemek için gerekli tuş ataması 

		var close = document.getElementsByClassName("close");
		var i;
		for (var i = 0; i < close.length; i++) {
			close[i].onclick = function () {
				var div=this.parentElement;//close spanının bulunduğu satırı al
				div.style.display = "none";//listeden sil
			}//close a basınca notu silme
		}

		var listes = document.getElementById("List");
		listes.addEventListener('click', function(ev) {
		if (ev.target.tagName === 'LI') {
			ev.target.classList.toggle('checked');
			}
		}, false);
		/*listes.onclick=function(ev){
			if (ev.target.tagName === 'LI') {
			ev.target.classList.toggle('checked');
			}
		}*/


		function yeniekle() {//Ekle butonuna basınca listeye eleman ekleme
			var li = document.createElement("LI");
			var girisDegeri = document.getElementById("ip").value;
			var j=document.createTextNode(girisDegeri);
			li.appendChild(j);
			if(girisDegeri ===""){//bir şey yazmadan butona basılırsa
				alert("Hiç Bir Şey Yazmadın");
			}
			else{
				document.getElementById("List").appendChild(li);
			}
			document.getElementById("ip").value = "";

			var span = document.createElement("SPAN");
			var txt = document.createTextNode("\u00D7");
			span.className = "close";
			li.appendChild(span);
			span.appendChild(txt);
			for (i = 0; i < close.length; i++) {
			 	close[i].onclick = function() {
					var div = this.parentElement;
					div.style.display = "none";
				}
			} 
		}		