const Discord = require('discord.js');

module.exports = {
	name: 'baraka',
	aliases: ['Baraka', 'baraka'],
	description: 'Baraka practice moves',
	cooldown: 5,
	usage: '<combo> <special>',
	execute(message, args) {

		const embed = new Discord.MessageEmbed()

		const comboMove = [
			" [Hard] Mangled [1,1,2] is +1 on block. Try blocking the first two hits and then flawless blocking the last hit to punish.",
			" [Hard] Splintered [2,1+3] is +1 on block. Try neutral ducking the first swing and then flawless blocking the second hit. Follow up with a flawless block attack!",
			" [Hard] Splintered [2,1+3] is +1 on block. The first swing is a high, and while very hard to read, can be punished with an uppercut for a crushing blow. Try it out!",
			" [Med] Bloody Mess [F2,1,2] is +1 on block. There is a gap in the last hit. Try to flawless block it!"
		]
		const specialMove = [
			" [Med] Chop Chop - Try blocking 3 hits and then punishing with b+3",
			" [Easy] Blade Spark [Amplified] Try neutral ducking the first projectile and then flawless blocking the second projectile."
		]

		message.react('🦷');

		switch (true) {
			case (args[0] ==='combo'):
				const randomComboMove = comboMove[Math.floor(Math.random() * comboMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('WHITE');
				embed.setTitle('Baraka');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/baraka/mugshot.png');
				embed.addField('Combo', randomComboMove);
				embed.setFooter('Feedback? Tweet me @just_jebus')
				message.channel.send(`${message.author}`);
				message.channel.send(embed);
				break;

			case (args[0] === 'special'):
				const randomSpecialMove = specialMove[Math.floor(Math.random() * specialMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('WHITE');
				embed.setTitle('Baraka');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/baraka/mugshot.png');
				embed.addField('Special', randomSpecialMove);
				embed.setFooter('Feedback? Tweet me @just_jebus');
				message.channel.send(`${message.author}`);
				message.channel.send(embed);
				break;

			case (!args[0]):
				const anyMove = comboMove.concat(specialMove);
				const randomMove = anyMove[Math.floor(Math.random() * anyMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('WHITE');
				embed.setTitle('Baraka');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/baraka/mugshot.png');
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