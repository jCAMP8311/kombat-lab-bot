const Discord = require('discord.js');

module.exports = {
	name: 'jade',
	aliases: ['Jade', 'jade'],
	description: ' practice moves',
	cooldown: 5,
	usage: '<normal> <special>',
	execute(message, args) {

		const embed = new Discord.MessageEmbed()

		const normalMove = [
			"[Medium] Baited [1,2,4] This attack leads to a krushing blow if the second hit(low) is the first to connect. Try flawless blocking and following up with a [u3] flawless block. Observe how an using an [u2] instead will punish you!",
			"[Easy] IP Girl [f2,1] This attack has a long startup so it's fairly easy to flawless block. Plus, this attack is flawless block modified, giving you the opportunity to punish. Observe how when normally blocked the second pole slam comes out.",
			"[Hard] Teaser [b1,3] The start up of this attack is long enough and there is a large enough gap before the second that both hits of this kombo can be flawless blocked. Try flawless blocking both!",
			"[Medium] Royal Guard [f3,4] Both of these hits can be flawless blocked. Try flawless blocking the first hit(low) and executing a [u2] flawless block attack quick enough to get a punish!",
		]
		const specialMove = [
			"[Easy] Blazing Nitro Kick - Jade has one of the best armor breakers in the game. If she were to hit you with a krushing [d2] and you break away, it's extremely easy for her to follow up and \
			Blazing Nitro Kick to armor break and do a devastating amount of damage. For example, [d2] krush + Blazing Nitro Kick does just under 40%. If she amps Blazing Nitro Kick it hits for just under 45%. Ouch.",
			"[Random Playback Mix]\n Slot 1 - Pole Vault(Cancel) + Baited\n Slot 2 - Pole Vault(Blazing Nitro Kick)\n Slot 3 - Pole Vault(Amplified) + Baited\n Slot 4 - Pole Vault(Edenian Knight)\n Jade can close gaps and mix you up incredibly\
			quicky by modifying Pole Vault in the following ways. Practice being prepared for anything. "
		]

		message.react('💚');

		switch (true) {
			case (args[0] ==='normal'):
				const randomNormalMove = normalMove[Math.floor(Math.random() * normalMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('#00FF00');
				embed.setTitle('Jade');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/jade/mugshot.png')
				embed.addField('Normal', randomNormalMove);
				embed.setFooter('Feedback? Tweet me @just_jebus')
				message.channel.send(`${message.author}`);
				message.channel.send(embed);
				break;

			case (args[0] === 'special'):
				const randomSpecialMove = specialMove[Math.floor(Math.random() * specialMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('#00FF00');
				embed.setTitle('Jade');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/jade/mugshot.png')
				embed.addField('Special', randomSpecialMove);
				embed.setFooter('Feedback? Tweet me @just_jebus');
				message.channel.send(`${message.author}`);
				message.channel.send(embed);
				break;

			case (!args[0]):
				const anyMove = normalMove.concat(specialMove);
				const randomMove = anyMove[Math.floor(Math.random() * anyMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('#00FF00');
				embed.setTitle('Jade');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/jade/mugshot.png')
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