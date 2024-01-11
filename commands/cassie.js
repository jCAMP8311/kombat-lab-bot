const Discord = require('discord.js');

module.exports = {
	name: 'cassie',
	aliases: ['Cassie', 'cassie', 'Cassie Cage', 'cassie cage'],
	description: 'Cassie Cage practice moves',
	cooldown: 5,
	usage: '<normal> <special>',
	execute(message, args) {

		const embed = new Discord.MessageEmbed()

		const normalMove = [
			" [Hard] Shocker [f2,1+3] is +1 on block. Try flawless blocking the first hit. Follow up with a flawless block attack!",
			" [Very Hard] Heavy Hitter [f3,4,3] is +1 on block. Try hoping the first hit (low) and punishing with d+1/2,",
			" [Easy] Ball Buster can only be amplified on hit and is -22 on block. Practice blocking the first hit and getting a full punish!",
		]
		const specialMove = [
			" [Medium] Kneecappin' [Amplified] A single hop can avoid the first hit [Mid] and the follow up shots from being amplified. Try practicing your hops!",
			" [Easy] Shoulder Charge [Amplified] This move has a crushing blow if you block late. Try flawless blocking and following up with a flawless block attack! "
		]

		message.react('🕶️');

		switch (true) {
			case (args[0] ==='normal'):
				const randomNormalMove = normalMove[Math.floor(Math.random() * normalMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('LUMINOUS_VIVID_PINK');
				embed.setTitle('Cassie Cage');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/cassiecage/mugshot.png');
				embed.addField('Normal', randomNormalMove);
				embed.setFooter('Feedback? Tweet me @just_jebus')
				message.channel.send(`${message.author}`);
				message.channel.send(embed);
				break;

			case (args[0] === 'special'):
				const randomSpecialMove = specialMove[Math.floor(Math.random() * specialMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('LUMINOUS_VIVID_PINK');
				embed.setTitle('Cassie Cage');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/cassiecage/mugshot.png');
				embed.addField('Special', randomSpecialMove);
				embed.setFooter('Feedback? Tweet me @just_jebus');
				message.channel.send(`${message.author}`);
				message.channel.send(embed);
				break;

			case (!args[0]):
				const anyMove = normalMove.concat(specialMove);
				const randomMove = anyMove[Math.floor(Math.random() * anyMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('LUMINOUS_VIVID_PINK');
				embed.setTitle('Cassie Cage');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/cassiecage/mugshot.png');
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