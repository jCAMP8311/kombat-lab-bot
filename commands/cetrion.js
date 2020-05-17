const Discord = require('discord.js');

module.exports = {
	name: 'cetrion',
	aliases: ['Cetrion', 'cetrion'],
	description: 'Cetrion practice moves',
	cooldown: 5,
	usage: '<combo> <special>',
	execute(message, args) {

		const embed = new Discord.MessageEmbed()

		var comboMove = [

		]
		var specialMove = [
			" [Hard] Bouncing Boulder & Boulder Bash (Mix) - Put each special in a different recording slot, then use Random Hidden Playback.",
			" [Medium] Bouncing Boulder is +3 on block and can be up to +24 on block (fullscreen). Try flawless blocking the boulder to close the distance quicker.",
			" [Hard] Earthquake & Earthquake (Cancel) + Boulder Slam/Heel Spike (Mix) - Put each special in a different recording slot, then use Random Hidden Playback. When Cetrion cancels Earthquake it gives her great mix up potential. Practice reading the mix."
		]

		message.react('🧝‍♀️');

		switch (true) {
			case (args[0] ==='combo'):
				var randomComboMove = comboMove[Math.floor(Math.random() * comboMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('AQUA');
				embed.setTitle('Cetrion');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/cetrion/mugshot.png');
				embed.addField('Combo', randomComboMove);
				embed.setFooter('Feedback? Tweet me @just_jebus')
				message.channel.send(`${message.author}`);
				message.channel.send(embed);
				break;

			case (args[0] === 'special'):
				var randomSpecialMove = specialMove[Math.floor(Math.random() * specialMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('AQUA');
				embed.setTitle('Cetrion');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/cetrion/mugshot.png');
				embed.addField('Special', randomSpecialMove);
				embed.setFooter('Feedback? Tweet me @just_jebus');
				message.channel.send(`${message.author}`);
				message.channel.send(embed);
				break;

			case (!args[0]):
				var anyMove = comboMove.concat(specialMove);
				var randomMove = anyMove[Math.floor(Math.random() * anyMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('AQUA');
				embed.setTitle('Cetrion');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/cetrion/mugshot.png');
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