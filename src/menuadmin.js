const menuadmin = (prefix, pushname) => {
    return `
「 _*Comandos de administración*_ 」

 ◪ *Comandos*
 │
 ├─❏ ${prefix}closegc: Bloquear grupo
 ├─❏ ${prefix}opengc: Abrir grupo
 ├─❏ ${prefix}promote (mención): Designar un miembro como administrador
 ├─❏ ${prefix}demote (mención): Degradar a un administrador
 ├─❏ ${prefix}tagall: Mencionar a todos los integrantes del grupo
 ├─❏ ${prefix}kick: Expulsar a un integrante
 ├─❏ ${prefix}listadmins: Mencionar a todos los admins del grupo
 ├─❏ ${prefix}linkgroup: Obtener link del grupo
 ├─❏ ${prefix}leave: Me voy :,C
 ├─❏ ${prefix}welcome [1 o 0]: Habilitar o deshabilitar mensaje de bienvenida
 ├─❏ ${prefix}nsfw [1 o 0]: Habilitar o deshabilitar NSFW
 ├─❏ ${prefix}antimenu: Configurar enlaces permitidos y prohibidos
 ├─❏ ${prefix}leveling [1 o 0]: Habilitar niveles de experiencia
 └─❏ ${prefix}delete [responder un mensaje del bot]: Eliminar un mensaje del bot
 `}

exports.menuadmin = menuadmin