const Discord = require('discord.js');

module.exports = {
	name: 'geras',
	aliases: ['Geras', 'geras'],
	description: ' practice moves',
	cooldown: 5,
	usage: '<combo> <special>',
	execute(message, args) {

		const embed = new Discord.MessageEmbed()

		const comboMove = [
            "[Medium] The Undying[2,4,1] The second hit is a low and has a large enough gap after the first hit to be flawless blocked. Follow up with a flawless block attack!",
		]
		const specialMove = [

		]

		message.react('⌛');

		switch (true) {
			case (args[0] ==='combo'):
				const randomComboMove = comboMove[Math.floor(Math.random() * comboMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('#EEE8AA');
				embed.setTitle('Geras');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/geras/mugshot.png')
				embed.addField('Combo', randomComboMove);
				embed.setFooter('Feedback? Tweet me @just_jebus')
				message.channel.send(`${message.author}`);
				message.channel.send(embed);
				break;

			case (args[0] === 'special'):
				const randomSpecialMove = specialMove[Math.floor(Math.random() * specialMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('#EEE8AA');
				embed.setTitle('Geras');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/geras/mugshot.png')
				embed.addField('Special', randomSpecialMove);
				embed.setFooter('Feedback? Tweet me @just_jebus');
				message.channel.send(`${message.author}`);
				message.channel.send(embed);
				break;

			case (!args[0]):
				const anyMove = comboMove.concat(specialMove);
				const randomMove = anyMove[Math.floor(Math.random() * anyMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('#EEE8AA');
				embed.setTitle('Geras');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/geras/mugshot.png')
				embed.addField('Random', randomMove);
				embed.setFooter('Feedback? Tweet me @just_jebus')
				message.channel.send(`${message.author}`);
				message.channel.send(embed);
				break;
		
			default:
				message.channel.send(`${message.author}` + ' That is not a valid argument, please use !args-info to see the list of available arguments');
				break;
		}
	}
};