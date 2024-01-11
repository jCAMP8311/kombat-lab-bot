const Discord = require('discord.js');

module.exports = {
	name: 'baraka',
	aliases: ['Baraka', 'baraka'],
	description: 'Baraka practice moves',
	cooldown: 5,
	usage: '<normal> <special>',
	execute(message, args) {

		const embed = new Discord.MessageEmbed()

		const normalMove = [
			" [Hard] Mangled [1,1,2] is +1 on block. Try blocking the first two hits and then flawless blocking the last hit to punish.",
			" [Hard] Splintered [2,1+3] is +1 on block. Try neutral ducking the first swing and then flawless blocking the second hit. Follow up with a flawless block attack!",
			" [Hard] Splintered [2,1+3] is +1 on block. The first swing is a high, and while very hard to read, can be punished with an uppercut for a crushing blow. Try it out!",
			" [Med] Bloody Mess [F2,1,2] is +1 on block. There is a gap in the last hit. Try to flawless block it!"
		]
		const specialMove = [
			" [Med] Chop Chop - Whiffs after the 5th hit then punishing with b+3",
			" [Easy] Blade Spark [Amplified] Try neutral ducking the first projectile and then flawless blocking the second projectile.",
			" [Easy] Blade Charge is -13 on block and should be punished every time. Try punishing with a throw or any move with a start up fast than 13 frames "
		]

		message.react('🦷');

		switch (true) {
			case (args[0] ==='normal'):
				const randomNormalMove = normalMove[Math.floor(Math.random() * normalMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('WHITE');
				embed.setTitle('Baraka');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/baraka/mugshot.png');
				embed.addField('Normal', randomNormalMove);
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
				const anyMove = normalMove.concat(specialMove);
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