const Discord = require('discord.js');

module.exports = {
	name: '',
	aliases: [''],
	description: ' practice moves',
	cooldown: 5,
	usage: '<combo> <special>',
	execute(message, args) {

		const embed = new Discord.MessageEmbed()

		var comboMove = [

		]
		var specialMove = [

		]

		message.react('');

		switch (true) {
			case (args[0] ==='combo'):
				var randomComboMove = comboMove[Math.floor(Math.random() * comboMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('');
				embed.setTitle('');
				embed.setThumbnail('')
				embed.addField('Combo', randomComboMove);
				embed.setFooter('Feedback? Tweet me @just_jebus')
				message.channel.send(`${message.author}`);
				message.channel.send(embed);
				break;

			case (args[0] === 'special'):
				var randomSpecialMove = specialMove[Math.floor(Math.random() * specialMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('');
				embed.setTitle('');
				embed.setThumbnail('')
				embed.addField('Special', randomSpecialMove);
				embed.setFooter('Feedback? Tweet me @just_jebus');
				message.channel.send(`${message.author}`);
				message.channel.send(embed);
				break;

			case (!args[0]):
				var anyMove = comboMove.concat(specialMove);
				var randomMove = anyMove[Math.floor(Math.random() * anyMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('');
				embed.setTitle('');
				embed.setThumbnail('')
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