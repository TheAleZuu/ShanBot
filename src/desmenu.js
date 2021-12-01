const desmenu = (prefix, pushname) => {
    return `
「 _*Descarga de archivos*_ 」

*Esta función se encarga de convertir videos de YouTube a mp3 o mp4, colocando el nombre o el enlace del video (siempre de la plataforma YouTube)*

◪ *Comandos*
│
└─◪ *MP3*
  ├─❏ ${prefix}
  └─❏ ${prefix}


*${prefix}play y ${prefix}play2 tiene un limite de 2000 canciones en el server, si llega a su limite se restablecera dentro de 24 horas*

*${prefix}ytmp4 y ${prefix}ytmp3 se encuentran en mantenimiento. Paciencia :)*
`}

exports.desmenu = desmenu
