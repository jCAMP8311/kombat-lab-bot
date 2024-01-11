const Discord = require('discord.js');

module.exports = {
	name: 'dvorah',
	aliases: ['Dvorah', 'dvorah'],
	description: ' Dvorah practice moves',
	cooldown: 5,
	usage: '<normal> <special>',
	execute(message, args) {

		const embed = new Discord.MessageEmbed()

		const normalMove = [
			[" [Medium] Black Widow [1,2,1] is +1 on block. There is a small gap where you can flawless block the final hit. Try it out!"],
			[" [Hard] Bugging Out [f2,2,4] is +4 on block. There is a gap before the last hit, which is also a high, try countering it with a krushing blow (hint: wait until dvorah's butt is right above your head)."],
			[" [Medium] Bugging Out [f2,2,4] is +4 on block. There is a small gap where you can flawless block the final hit. Try it out!"],
			[" [Medium] Bugging Out [f2,2,4] has a 24 frame start-up making it easy to read. Try flawless blocking the first hit. Be carefull the second hit comes to fast to punish without the I-frames of u+3."],
			[" [Medium] Tsetse (Tournament Variation - Buzzed) [f2,2,d1+3] has a gap before the last hit that can be fairly easily flawless blocked. However, if you block LATE it will trigger a krushing blow!"],
		]
		const specialMove = [
			[" [Random Playback Mix]\n Slot 1 - Widows Kiss [Delayed]\n Slot 2 - Widows Kiss [Amplified] Widows Kiss can be delayed to catch you off guard."]
		]

		message.react('🐝');

		switch (true) {
			case (args[0] ==='normal'):
				const randomNormalMove = normalMove[Math.floor(Math.random() * normalMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('YELLOW');
				embed.setTitle('Dvorah');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/dvorah/mugshot.png')
				embed.addField('Normal', randomNormalMove);
				embed.setFooter('Feedback? Tweet me @just_jebus')
				message.channel.send(`${message.author}`);
				message.channel.send(embed);
				break;

			case (args[0] === 'special'):
				const randomSpecialMove = specialMove[Math.floor(Math.random() * specialMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('YELLOW');
				embed.setTitle('Dvorah');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/dvorah/mugshot.png')
				embed.addField('Special', randomSpecialMove);
				embed.setFooter('Feedback? Tweet me @just_jebus');
				message.channel.send(`${message.author}`);
				message.channel.send(embed);
				break;

			case (!args[0]):
				const anyMove = normalMove.concat(specialMove);
				const randomMove = anyMove[Math.floor(Math.random() * anyMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('YELLOW');
				embed.setTitle('Dvorah');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/dvorah/mugshot.png')
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