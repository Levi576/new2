let handler = async m => m.reply(`
            .✵.GRUP VENZBOTZ.✵.

            https://chat.whatsapp.com/EvbHEi6YbSv7p97mJLB59B
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
