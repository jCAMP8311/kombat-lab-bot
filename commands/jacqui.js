const Discord = require('discord.js');

module.exports = {
	name: 'jacqui',
	aliases: ['Jacqui', 'jacqui'],
	description: ' practice moves',
	cooldown: 5,
	usage: '<normal> <special>',
	execute(message, args) {

		const embed = new Discord.MessageEmbed()

		const normalMove = [
            "[Random Playback Mix]\n Slot 1 - Ground Recon\n Slot 2 - Ground Recon(Cancel) + Lethal Clinch\n Slot 3 - Ground Recon(Cancel) + b4n In her 1st round KO variation Jacqui can cancel several moves to keep her unpredicatable and constantly pressure.",
            "[Random Playback Mix]\n Slot 1 - Snake Eater\n Slot 2 - True Hero(Cancel) + In The Trenches\n Slot 3 - True Hero(Cancel) + Throw\n In her 1st round KO variation Jacqui can cancel several moves to keep her unpredicatable and constantly pressure.",
            "[Random Playback Mix]\n Slot 1 - All For One\n Slot 2 - Going Ballistic(Cancel) + Hop Attack\n Slot 3 - Going Ballistic(Cancel) + Hawkeye + Bionic Dash\n In her 1st round KO variation Jacqui can cancel several moves to keep her\
             unpredicatable and constantly pressure.",
		]
		const specialMove = [
            "[Hard] Bionic Dash - This is an extremely fast dash that has a krushing blow if it hits from max range. With a little practice it can be flawless blocked. Test out your reflexes!",
            "[Random Playback Mix]\n Slot 1 - f2 + Bionic Bounce + (Air) Ground Pound[Amplified]\n Slot 2 - f2 + Bionic Bounce + (Air) Ground Pound + Bionic Dash"
		]

		message.react('🏋️‍♀️');

		switch (true) {
			case (args[0] ==='normal'):
				const randomNormalMove = normalMove[Math.floor(Math.random() * normalMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('#00FF7F');
				embed.setTitle('Jacqui');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/jacqui/mugshot.png')
				embed.addField('Normal', randomNormalMove);
				embed.setFooter('Feedback? Tweet me @just_jebus')
				message.channel.send(`${message.author}`);
				message.channel.send(embed);
				break;

			case (args[0] === 'special'):
				const randomSpecialMove = specialMove[Math.floor(Math.random() * specialMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('#00FF7F');
				embed.setTitle('Jacqui');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/jacqui/mugshot.png')
				embed.addField('Special', randomSpecialMove);
				embed.setFooter('Feedback? Tweet me @just_jebus');
				message.channel.send(`${message.author}`);
				message.channel.send(embed);
				break;

			case (!args[0]):
				const anyMove = normalMove.concat(specialMove);
				const randomMove = anyMove[Math.floor(Math.random() * anyMove.length)];

				embed.setAuthor('KombatLabBot', 'http://mortalkombatwarehouse.com/mk/cybersubzero/versus_full.png');
				embed.setColor('#00FF7F');
				embed.setTitle('Jacqui');
				embed.setThumbnail('https://www.mortalkombatwarehouse.com/mk11/jacqui/mugshot.png')
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