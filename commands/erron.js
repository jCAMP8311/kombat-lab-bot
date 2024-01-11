const Discord = require('discord.js');

module.exports = {
	name: 'erron black',
	aliases: ['Erron', 'Erron Black', 'erron', 'erron black',],
	description: ' Erron Black practice moves',
	cooldown: 5,
	usage: '<normal> <special>',
	execute(message, args) {

		const embed = new Discord.MessageEmbed()

		const normalMove = [
            [" [Easy] Keep'em Honest [f3,2] there is a gap after the first hit that you can flawless block the last hit. Try it out!"],
            [" [Random Playback Mix]\n Slot 1 - Keep'em Honest\n Slot 2 - Keep'em Honest & Rattle Snake Slide\n Rattle Snake Slide can only be amplified after successfully hitting."],
			[" [Random Playback Mix]\n Slot 1 - High Noon + Zaterrean Spit(close)\n Slot 2 - High Noon & Rattle Snake Slide\n Erron can mix up cancelling into his spit and to go for a throw or cancel into a Slide to enchance and also go for a throw. Errons throw while you are in acid can melt your health bar."],
		]
		const specialMove = [
            [" [Random Playback Mix]\n Slot 1 - Locked And Loaded (Straight Shot)\n Slot 2 - Locked And Loaded (Low Shot)\n Slot 3 - Locked And Loaded (Drop Shot)\n Slot 4 - Locked And Loaded (Drop Shot - Delayed)\n Erron can mix up his projectiles very effectively."],
            [" [Easy] Scud Shot - Can absorb almost every projectile in the game, even Skarlets Blood Trail. He can then spend one bar of meter to do a mid shot. See how it effects your projectiles!"],
            [" [Hard] Boot Drop - If boot drop hits twice in a row it's a devastating krushing blow. Erron can also spend a bar of meter to enchance it if blocked to mix you up and do a low shot. While difficult it can be flawless blocked and punished with u+2. Try it out!"],
		]

		message.react('🤠');

		switch (true) {
			case (args[0] ==='normal'):
				const randomNormalMove = normalMove[Math.floor(Math.random() * normalMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('#808000');
				embed.setTitle('Erron Black');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/erronblack/mugshot.png')
				embed.addField('Normal', randomNormalMove);
				embed.setFooter('Feedback? Tweet me @just_jebus')
				message.channel.send(`${message.author}`);
				message.channel.send(embed);
				break;

			case (args[0] === 'special'):
				const randomSpecialMove = specialMove[Math.floor(Math.random() * specialMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('#808000');
				embed.setTitle('Erron Black');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/erronblack/mugshot.png')
				embed.addField('Special', randomSpecialMove);
				embed.setFooter('Feedback? Tweet me @just_jebus');
				message.channel.send(`${message.author}`);
				message.channel.send(embed);
				break;

			case (!args[0]):
				const anyMove = normalMove.concat(specialMove);
				const randomMove = anyMove[Math.floor(Math.random() * anyMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('#808000');
				embed.setTitle('Erron Black');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/erronblack/mugshot.png')
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