const Discord = require('discord.js');

module.exports = {
	name: 'geras',
	aliases: ['Geras', 'geras'],
	description: ' practice moves',
	cooldown: 5,
	usage: '<normal> <special>',
	execute(message, args) {

		const embed = new Discord.MessageEmbed()

		const normalMove = [
			"[Medium] The Undying[2,4,1] The second hit is a low and has a large enough gap after the first hit to be flawless blocked. Follow up with a flawless block attack!",
			"[Medium] Matter Of Time[f2,1,2] The final hit can be flawless blocked. Follow up with a flawless block attack!",
			"[Random Playback Mix]\n Slot 1 - Matter Of Time\n Slot 2 - The Deathless Giant + Close Quick Sand\n Slot 3 - The Deathless Giant + Bed Of Spikes/n Slot 4 - The Deathless Giant + Temportal Advantage(Amp)\n Geras can keep himself safe\
			 from being flawless blocked on Matter of Time and instead use [f2+1] and cancel into a special.",
		]
		const specialMove = [
			"[Hard] Reverse Time - Geras can use two bars of his defensive gauage to revert his health and position 3 seconds in the past. Try setting up an AI to [d2-krushing blow] him and see how he turns the tables!",
			"[Easy] Titan Tackle - Titan Tackle is a command grab and while it's easier to read if Geras throws it out raw it can still deal an insane amount of damage to its krushing blow. See how far (when extended) it can carry you!"
		]

		message.react('⌛');

		switch (true) {
			case (args[0] ==='normal'):
				const randomNormalMove = normalMove[Math.floor(Math.random() * normalMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('#EEE8AA');
				embed.setTitle('Geras');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/geras/mugshot.png')
				embed.addField('Normal', randomNormalMove);
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
				const anyMove = normalMove.concat(specialMove);
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