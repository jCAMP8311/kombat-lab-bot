const Discord = require('discord.js');

module.exports = {
	name: 'cetrion',
	aliases: ['Cetrion', 'cetrion'],
	description: 'Cetrion practice moves',
	cooldown: 5,
	usage: '<combo> <special>',
	execute(message, args) {

		const embed = new Discord.MessageEmbed()

		const comboMove = [
			" [Random Playback Mix]\n Slot 1 - Natural Ending + [d4]\n Slot 2 - Unlimited Potential",
			" [Hard] Imminent Eruption [1,1,4] The last hit is a low and has a long enough start up that it can be flawless blocked. Try it out!",
			" [Random Playback Mix]\n Slot 1 - Wind Storm\n Slot 2 - Imminent Eruption\n The last hit in Imminent Erruption is a low and has a long enough start up that it can be flawless blocked. Test your reflexes! "
		]
		const specialMove = [
			" [Random Playback Mix]\n Slot 1 - Bouncing Boulder\n Slot 2 - Boulder Bash.",
			" [Medium] Bouncing Boulder is +3 on block and can be up to +24 on block [fullscreen]. Try flawless blocking the boulder to close the distance quicker.",
			" [Random Playback Mix]\n Slot 1 - Earthquake + Earthquake(Cancel).\n Slot 2 - Boulder Slam/Heel Spike.\n When Cetrion cancels Earthquake it gives her great mix up potential. Practice reading the mix."
		]

		message.react('🧝‍♀️');

		switch (true) {
			case (args[0] ==='combo'):
				const randomComboMove = comboMove[Math.floor(Math.random() * comboMove.length)];

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
				const randomSpecialMove = specialMove[Math.floor(Math.random() * specialMove.length)];

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
				const anyMove = comboMove.concat(specialMove);
				const randomMove = anyMove[Math.floor(Math.random() * anyMove.length)];

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