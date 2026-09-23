6 MESES DE NOSOTROS — Steven ♡ Paula
======================================

Esta carpeta contiene una página web completa y lista para funcionar.
Ahora mismo ya se puede abrir en el navegador: todo lo que aún no
tenga foto, video o canción real muestra un marcador elegante en su
lugar (por ejemplo "[FOTO DEL PICNIC]"), así que puedes probarla desde
ya y ir completándola poco a poco.

1. CÓMO ABRIRLA
----------------
Haz doble clic en "index.html" y se abrirá en tu navegador. También
puedes arrastrar el archivo a una ventana de Chrome/Safari.
(Algunos navegadores restringen un poco la carga de videos/audio
cuando abres el archivo directamente desde el disco — si ves algún
problema, prueba con "Live Server" en VS Code o sube la carpeta a un
hosting como se explica en el punto 7).

2. CÓMO AGREGAR TUS FOTOS
--------------------------
Copia tus fotos dentro de la carpeta "images/" con los nombres
EXACTOS que aparecen en "images/LEEME.txt" (por ejemplo:
picnic-1.jpg, ojos-paula.jpg, momento-1.jpg, etc). En cuanto el
archivo tenga ese nombre, la foto reemplaza automáticamente al
marcador — no necesitas tocar el código HTML.

3. CÓMO AGREGAR TUS VIDEOS
----------------------------
Copia tus videos en formato .mp4 dentro de la carpeta "videos/" con
los nombres exactos que aparecen en "videos/LEEME.txt"
(picnic.mp4, salitre.mp4, nosotros.mp4).

4. CÓMO AGREGAR TUS CANCIONES
--------------------------------
Copia tus fragmentos de audio (en formato .mp3, de unos 20 a 45
segundos, y que tengas derecho a usar) dentro de la carpeta "audio/"
con los nombres exactos que aparecen en "audio/LEEME.txt":
01-sin-tx.mp3, 02-hecha-pa-mi.mp3, 03-ebrio-de-amor.mp3,
04-te-quiero-amor.mp3, 05-wonderwall.mp3, 06-olimpo.mp3,
07-lugar-seguro.mp3

4.1 NAVEGACIÓN POR PÁGINAS Y REPRODUCCIÓN AUTOMÁTICA
--------------------------------------------------------
La página ya no se desplaza libremente: cada sección ocupa la
pantalla completa y se avanza "por páginas" (con el dedo, la rueda
del mouse, las flechitas ‹ › que aparecen en pantalla, o las flechas
del teclado). Al entrar a una página con canción, el fragmento
correspondiente empieza a sonar solo, y se detiene si sales de esa
página antes de que termine (nunca suenan dos canciones a la vez).
Cada reproductor tiene diseño tipo Spotify: portada grande, título,
artista, barra de progreso y letra sincronizada apareciendo debajo
de la portada.

5. CÓMO CONFIGURAR EL INICIO/FIN DE CADA FRAGMENTO
-----------------------------------------------------
Abre "script.js" con cualquier editor de texto (Bloc de notas sirve,
pero VS Code es más cómodo). Al principio del archivo verás un bloque
llamado "const songs = [ ... ]" con un objeto por cada canción, así:

  {
    title: "Sin Tx",
    artist: "Kuervo Negro",
    file: "audio/01-sin-tx.mp3",
    cover: "images/cover-sintx.jpg",  <- foto que se ve como portada
    start: 0,     <- segundo del ARCHIVO donde empieza el fragmento
    end: 30,      <- segundo del ARCHIVO donde termina el fragmento
    lyrics: [ ... ]
  }

Cambia "start" y "end" por los segundos exactos donde quieres que
comience y termine ese fragmento dentro de tu archivo de audio
completo. La página se encarga de reproducir solo esa parte, bajar el
volumen suavemente al llegar al final y no dejar que suene más de una
canción a la vez.

6. CÓMO AGREGAR LOS FRAGMENTOS DE LETRA AUTORIZADOS
-------------------------------------------------------
Dentro de cada canción, en la lista "lyrics", cada línea tiene esta
forma:

  { start: 0, end: 6, text: "[línea autorizada 1]" }

- "start" y "end" son segundos DENTRO DEL FRAGMENTO (no del archivo
  completo), es decir, 0 es el primer segundo del fragmento.
- "text" es el texto que se mostrará resaltado durante esos segundos.

Reemplaza "[línea autorizada 1]" por el fragmento de letra que tengas
autorización para usar (por ejemplo, una línea corta que hayas escrito
tú, o un fragmento breve permitido). Puedes agregar tantas líneas como
quieras, o dejar la sección de letra vacía si prefieres no usarla —
simplemente borra los objetos dentro de "lyrics: [ ]".

IMPORTANTE: para respetar los derechos de autor, esta página nunca
incluyó letras reales de las canciones — todo lo que ves son
marcadores para que TÚ decidas qué fragmento tienes derecho a usar.

7. CÓMO SUBIRLA A INTERNET
------------------------------
Cuando tengas todo listo, la forma más simple y gratuita de compartir
un link es:

  a) Netlify Drop (https://app.netlify.com/drop): arrastra la carpeta
     completa "6_meses_de_nosotros_Steven_Paula" a la página y en
     segundos obtienes un link para compartir.

  b) GitHub Pages: sube la carpeta a un repositorio de GitHub y activa
     "Pages" en la configuración del repositorio.

  c) Vercel (https://vercel.com): similar a Netlify, arrastras la
     carpeta o conectas un repositorio.

Cualquiera de las tres opciones funciona perfecto para este proyecto,
ya que es 100% HTML, CSS y JavaScript (sin backend ni base de datos).

ESTRUCTURA DE ARCHIVOS
-------------------------
6_meses_de_nosotros_Steven_Paula/
├── index.html      (toda la estructura y el texto de la página)
├── style.css       (todos los estilos, colores y animaciones)
├── script.js       (reproductores de audio, letras, contador, etc.)
├── README.txt       (este archivo)
├── images/          (aquí van tus fotos)
├── videos/          (aquí van tus videos)
└── audio/           (aquí van tus fragmentos de canciones)

Hecha con cariño para Paula. ♡
