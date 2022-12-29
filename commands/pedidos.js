const Discord = require("discord.js")
const db = require("quick.db")
const config = require("../config.json")
const {
    JsonDatabase,
} = require("wio.db");

const db2 = new JsonDatabase({
  databasePath:"./databases/myJsonDatabase.json"
});
module.exports = {
    name: "stock", // Coloque o nome do comando do arquivo
    run: async(client, message, args) => {
        const embederro = new Discord.MessageEmbed()
        .setTitle(`Erro - Permissão`)
        .setDescription(`Você não tem permissão para isto!`)
        .setColor(config.cor)
        .setFooter(`Todos os direitos reservados.`)
                if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({ embeds: [embederro] })
const embed = new Discord.MessageEmbed()
.setDescription(`Total Recebido: \`R$${db2.get("gastostotal") || "0"},00\`\nPedidos Feitos: \`${db2.get("pedidostotal") || "0"}\``)
.setColor(config.cor)
.setImage(config.fotoembed)
                message.channel.send({embeds: [embed]})

    }
}