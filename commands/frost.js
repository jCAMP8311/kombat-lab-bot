const Discord = require('discord.js');

module.exports = {
	name: 'frost',
	aliases: ['Frost', 'frost'],
	description: ' Frost practice moves',
	cooldown: 5,
	usage: '<combo> <special>',
	execute(message, args) {

		const embed = new Discord.MessageEmbed()

		const comboMove = [
			"[Random Playback Mix]\n Slot 1 - Blood Sweat And Circuits\n Slot 2 - Frozen In Time\n These moves have the same first two hits, but Blood Sweat And Circuits can be used to push you back on block, while Frozen In Time is an overhead.",
			"[Easy] Blood Sweat And Curcuits [1,3,2] is +3 on block. Try blocking the first two hits and then flawless blocking the last hit to punish.",
			"[Easy] Frozen In Time [1,3,4] Has a slightly smaller gap at the end than Blood Sweat And Curcuits. Try blocking the first two hits and then flawless blocking the last hit to punish.",
			"[Easy] Winter Winds [b2,2] One of Frost's main pokes. Try blocking the first hit and then flawless blocking the last hit to punish.",
			"[Medium] Freezing Point [3,4,4,2] This move hits high twice, low twice, and then ends in an overhead. However, following the two low hits, a simple [d1] can safely interrupt before the overhead connects "
		]
		const specialMove = [
			"[Hard] Cryogenic Crown + Kryo-Stance [Amplified] + Far Cyrogenic Crown - These moves are an example of how effectivly Frost can keep her opponents mid or full screen. Practice moving in close!",
			"[Easy] Arctic Barrage - Has an extremely telling start up animation. While unlikley to be thrown out without a previous hit confirm try flawless blocking, then follow up with a flawless block attack!",
			"[Medium] Icy Maul[b2] + Ice Auger - Frost can throw out Ice Auger from [b2] to stay safe instead of commiting to Winter Winds and risking flawless block. Try blocking the [b2] and neutral ducking Ice Auger OR try reading and jumping over [b2]."
		]

		message.react('❄️');

		switch (true) {
			case (args[0] ==='combo'):
				const randomComboMove = comboMove[Math.floor(Math.random() * comboMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('#00FFFF');
				embed.setTitle('Frost');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/frost/mugshot.png')
				embed.addField('Combo', randomComboMove);
				embed.setFooter('Feedback? Tweet me @just_jebus')
				message.channel.send(`${message.author}`);
				message.channel.send(embed);
				break;

			case (args[0] === 'special'):
				const randomSpecialMove = specialMove[Math.floor(Math.random() * specialMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('#00FFFF');
				embed.setTitle('Frost');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/frost/mugshot.png')
				embed.addField('Special', randomSpecialMove);
				embed.setFooter('Feedback? Tweet me @just_jebus');
				message.channel.send(`${message.author}`);
				message.channel.send(embed);
				break;

			case (!args[0]):
				const anyMove = comboMove.concat(specialMove);
				const randomMove = anyMove[Math.floor(Math.random() * anyMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('#00FFFF');
				embed.setTitle('Frost');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/frost/mugshot.png')
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